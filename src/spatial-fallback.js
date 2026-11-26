// A painter's projection of the same photographic studies for Canvas 2D.
const FLY = [
  { crop: [0, 280, 225, 270], loose: [-1.38, 1.27, 0.10], block: [0, 324, 87, 104], step: [0.14, 1.46, -0.90], colors: ['#b8b9b4','#e0e1d8','#92958d'] },
  { crop: [214, 409, 320, 318], loose: [-0.43, 0.68, 0.74], block: [128, 427, 164, 165], step: [1.04, 0.98, -0.42], colors: ['#c21302','#f46a43','#912209'] },
  { crop: [368, 622, 296, 368], loose: [0.59, 0.02, 1.28], block: [333, 557, 255, 256], step: [2.08, 0.33, 0.05], colors: ['#a1a707','#d2d632','#78800c'] },
  { crop: [522, 844, 454, 393], loose: [1.85, -0.74, 1.75], block: [640, 768, 384, 384], step: [3.25, -0.58, 0.43], colors: ['#0a80da','#6ec6f1','#075b9b'] },
];
// The camera crosses the edge of the published sculpture image in its close pass.
const BOUNDS = [
  [109,29,396,347],[99,17,398,346],[110,20,415,352],[86,6,403,350],
  [75,0,408,350],[56,0,405,370],[69,0,424,368],[100,0,436,356],
  [127,0,447,352],[131,0,447,337],[149,0,447,333],[189,0,447,403],
  [187,25,447,447],[169,40,447,437],[168,42,447,426],[169,41,447,423],
  [142,39,447,426],[141,42,447,421],[161,30,447,397],[182,48,447,406],
  [170,72,447,422],[131,68,383,409],[125,49,373,384],[128,36,375,369],
];
const FLY_FILES = ['fly-water.webp','fly-cut-paper.webp','fly-blocks.webp', ...FLY.map((_, i) => `pose-${i + 1}.webp`)];
const LIQUID_FILES = ['liquid-arc.webp','liquid-relief-arc.webp','liquid-detail.webp','liquid-rim.webp'];
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
const mix = (a, b, t) => a + (b - a) * t;
function ease(a,b,p) {
  const t = clamp((p - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

function projection(w,h,spanH,spanW,yaw,pitch,centerX,centerY,perspective) {
  const unit = Math.min(h / spanH, w / spanW);
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  return (x,y,z) => {
    x -= centerX;
    y -= centerY;
    const row = x * sy + z * cy;
    const depth = y * sp + row * cp;
    const s = unit / Math.max(.6, 1 - depth * perspective);
    return { x: w/2 + (x * cy - z * sy) * s, y: h/2 - (y * cp - row * sp) * s, depth, scale: s };
  };
}

function path(ctx, points, close = true) {
  ctx.beginPath();
  ctx.moveTo(points[0].x,points[0].y);
  for (let i=1;i<points.length;i++) ctx.lineTo(points[i].x,points[i].y);
  if (close) ctx.closePath();
}

function polygon(ctx, points, color, alpha = 1) {
  if (alpha <= 0.0001) return;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  path(ctx,points);
  ctx.fill();
  ctx.restore();
}

function imageRect(image) {
  return [0,0,image.naturalWidth || image.width,image.naturalHeight || image.height];
}

// The local paper axes project into an affine parallelogram; hinged leaves have
// independent axes and meet on the same spine. Atlas frames use source rectangles.
function imagePlane(ctx, image, corners, alpha = 1, from = imageRect(image)) {
  if (alpha <= 0.001) return;
  const [tl,tr,,bl] = corners;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.transform(tr.x-tl.x,tr.y-tl.y,bl.x-tl.x,bl.y-tl.y,tl.x,tl.y);
  ctx.drawImage(image,...from,0,0,1,1);
  ctx.restore();
}

function plate(view, x,y,z,width,height,angle=0,roll=0) {
  const dx = Math.cos(angle), dz = -Math.sin(angle), cr = Math.cos(roll), sr = Math.sin(roll);
  const corner = (u,v) => {
    const along = u*cr-v*sr;
    return view(x + along*dx,y + u*sr+v*cr,z + along*dz);
  };
  return [corner(-width/2,height/2),corner(width/2,height/2),corner(width/2,-height/2),corner(-width/2,-height/2)];
}

function graduatedField(ctx,w,h,colors) {
  const gradient = ctx.createLinearGradient(w*.07,0,w*.84,h);
  for (const [i,color] of colors.entries()) gradient.addColorStop(i/(colors.length-1),color);
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,w,h);
}

function shadow(ctx,point,rx,ry,opacity,color='52,75,88') {
  if (opacity <= 0.001) return;
  ctx.save();
  ctx.translate(point.x,point.y);
  ctx.scale(Math.max(1,rx*point.scale),Math.max(1,ry*point.scale));
  const grad = ctx.createRadialGradient(0,0,0,0,0,1);
  grad.addColorStop(0,`rgba(${color},${opacity})`);
  grad.addColorStop(.5,`rgba(${color},${opacity*.53})`);
  grad.addColorStop(1,`rgba(${color},0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(-1,-1,2,2);
  ctx.restore();
}

function cropPlacement([x,y,w,h]) {
  const scale = 5.18/1280;
  return { x:(x+w/2-640)*scale,y:(640-y-h/2)*scale,w:w*scale,h:h*scale };
}

function folded(ctx,view,imgs,p,narrow) {
  const leave = ease(.005,.50,p), fade = 1-ease(.53,.84,p);
  if (fade < .001) return;
  const side = 5.18*mix(1,.73,leave);
  const spineX = -2.42*narrow*leave, spineY=.18*leave, spineZ=-1.46*leave;
  const old = 1-ease(.009,.13,p);
  for (const half of [0,1]) {
    const angle = (half===0 ? -.34:.13)*leave;
    const edge = (half===0 ? -1:1)*side/2;
    const roll = .037*leave;
    const page = (u,v) => view(spineX+Math.cos(angle)*u,spineY+v+u*roll,spineZ-Math.sin(angle)*u-.04*leave*v);
    const a = half===0 ? edge:0, b = half===0 ? 0:edge, hh=side/2;
    const pts=[page(a,hh),page(b,hh),page(b,-hh),page(a,-hh)];
    const edgePts=pts.map(v=>({...v,y:v.y+Math.min(3,leave*v.scale*.031)}));
    polygon(ctx,edgePts,'#a2a7a3',fade);
    polygon(ctx,pts,half===0?'#fbfbf1':'#eeeede',fade);
    for (const [file,alpha] of [['fly-cut-paper.webp',1],['fly-water.webp',old]]) {
      const img=imgs[file], [,,iw,ih]=imageRect(img);
      imagePlane(ctx,img,pts,alpha*fade,[half*iw/2,0,iw/2,ih]);
    }
    if (half===1) polygon(ctx,pts,'#384b58',fade*leave*.063);
  }
}

function block(ctx,view,x,y,z,w,h,d,angle,tilt,colors,opacity) {
  if (opacity < .002) return;
  const cs=Math.cos(angle), sn=Math.sin(angle), ct=Math.cos(tilt), st=Math.sin(tilt);
  const point=(a,b,c)=>{
    const q=b*ct-c*st, t=b*st+c*ct;
    return view(x+a*cs+t*sn,y+q,z-a*sn+t*cs);
  };
  const pts=[[-1,1,1],[1,1,1],[1,-1,1],[-1,-1,1],[-1,1,-1],[1,1,-1],[1,-1,-1],[-1,-1,-1]]
    .map(([a,b,c])=>point(a*w/2,b*h/2,c*d/2));
  const faces=[
    [[0,1,2,3],colors[0]],[[5,4,7,6],colors[2]],[[4,0,3,7],colors[2]],
    [[1,5,6,2],colors[2]],[[4,5,1,0],colors[1]],[[3,2,6,7],colors[2]],
  ];
  for (const [indices,color] of faces) {
    const f=indices.map(i=>pts[i]);
    const sign=(f[1].x-f[0].x)*(f[2].y-f[0].y)-(f[1].y-f[0].y)*(f[2].x-f[0].x);
    if (sign>0) polygon(ctx,f,color,opacity);
  }
}

function drawGesture(ctx,w,h,p,imgs) {
  const open=ease(.015,.41,p)*(1-ease(.63,.985,p));
  const narrow=clamp(w/h/1.48,.73,1);
  const yaw=.235*open, pitch=.225*open;
  const project=projection(w,h,mix(5.64,6.10,open),mix(5.68,8.78*narrow,open),yaw,pitch,-.05*open,-.20*open,.017*open);
  graduatedField(ctx,w,h,['#d3e4ec','#e4edec','#eceddf']);
  const ground=-2.68;
  if (open>.01) {
    ctx.save();
    ctx.lineWidth=.7;
    ctx.strokeStyle=`rgba(91,121,131,${.14*open})`;
    for (let i=-8;i<=8;i++) {
      const at=i*1.22;
      for (const endpoints of [[[at,ground,-9],[at,ground,7]],[[-12,ground,at],[12,ground,at]]]) {
        path(ctx,endpoints.map(v=>project(...v)),false);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
  shadow(ctx,project(-1.20,ground,-.35),2.95,.22,.15*open);
  const resolve=ease(.62,.985,p);
  const layers=[{depth:-2,draw:()=>folded(ctx,project,imgs,p,narrow)}];
  if (p>.66) {
    const sheet=plate(project,0,0,-.12,5.18,5.18);
    layers.push({depth:-.18,draw:()=>polygon(ctx,sheet,'#fff',ease(.67,.95,p))});
  }
  FLY.forEach((entry,i)=>{
    const src=cropPlacement(entry.crop), dst=cropPlacement(entry.block);
    const travel=ease(.018+i*.012,.45+i*.025,p), end=ease(.57+i*.020,.87+i*.014,p);
    const [dx,dy,dz]=entry.loose;
    const x=mix(mix(src.x,dx*narrow,travel),dst.x,end), y=mix(mix(src.y,dy,travel),dst.y,end);
    const z=mix(mix(.018+i*.002,dz,travel),.09,end);
    const center=project(x,y,z);
    const size=mix(1,1.46+i*.06,travel)*mix(1,.68,end)*center.scale;
    const alpha=ease(.006,.115,p)*(1-ease(.63+i*.023,.82+i*.020,p));
    shadow(ctx,project(x+.12,ground,z-.08),src.w*.95,src.w*.2,.19*alpha*open);
    if (alpha>.001) layers.push({depth:center.depth,draw:()=>{
      ctx.save();
      ctx.globalAlpha=alpha;
      ctx.drawImage(imgs[`pose-${i+1}.webp`],center.x-src.w*size/2,center.y-src.h*size/2,src.w*size,src.h*size);
      ctx.restore();
    }});
    const rise=ease(.24+i*.031,.57+i*.028,p);
    const [bx,by,bz]=entry.step;
    const xx=mix(bx*narrow,dst.x,resolve), yy=mix(by-.38*(1-rise),dst.y,resolve), zz=mix(bz,-.005,resolve);
    const s=mix(.36,1.02,rise);
    const cubeAlpha=rise*(1-ease(.95,.995,p));
    shadow(ctx,project(xx+.07,ground,zz-.09),dst.w*1.12,dst.w*.21,.18*cubeAlpha*open);
    layers.push({depth:project(xx,yy,zz).depth,draw:()=>block(ctx,project,xx,yy,zz,
      dst.w*s,dst.h*s,dst.w*.79*s*mix(1,.018,resolve),-.57*(1-resolve),.18*(1-resolve),entry.colors,cubeAlpha)});
  });
  layers.sort((a,b)=>a.depth-b.depth).forEach(layer=>layer.draw());
  imagePlane(ctx,imgs['fly-blocks.webp'],plate(project,0,0,.06,5.18,5.18),ease(.925,.995,p));
}

const TAU=Math.PI*2;
function circle(view,x,y,z,r) {
  return Array.from({length:72},(_,i)=>{
    const a=i/72*TAU;
    return view(x+Math.cos(a)*r,y,z+Math.sin(a)*r);
  });
}

function cylinder(ctx,view,x,z,r,base,top,colors) {
  const lower=circle(view,x,base,z,r),upper=circle(view,x,top,z,r);
  const minX=Math.min(...upper.map(a=>a.x)), maxX=Math.max(...upper.map(a=>a.x));
  const face=ctx.createLinearGradient(minX,0,maxX,0);
  face.addColorStop(0,colors[1]);face.addColorStop(.40,colors[2]);face.addColorStop(1,colors[3]);
  const visible=[];
  for(let i=0;i<upper.length;i++) {
    const j=(i+1)%upper.length;
    const f=[upper[i],upper[j],lower[j],lower[i]];
    const area=(f[1].x-f[0].x)*(f[2].y-f[0].y)-(f[1].y-f[0].y)*(f[2].x-f[0].x);
    if (area<0) visible.push({i,j});
  }
  // Draw the complete continuous side as one path to avoid seams between facets.
  const sorted=visible.map(({i})=>i).sort((a,b)=>upper[a].x-upper[b].x);
  if (sorted.length) {
    const left=upper.indexOf(upper.reduce((a,b)=>a.x<b.x?a:b)),right=upper.indexOf(upper.reduce((a,b)=>a.x>b.x?a:b));
    const rim=[...new Set([left,...sorted,right])].sort((a,b)=>upper[a].x-upper[b].x);
    polygon(ctx,[...rim.map(i=>upper[i]),...rim.slice().reverse().map(i=>lower[i])],face);
  }
  polygon(ctx,upper,colors[0]);
}

function materialPrint(ctx,view,img,x,y,z,angle,roll,size) {
  const board=plate(view,x,y,z,size,size,angle,roll);
  polygon(ctx,board.map(p=>({...p,x:p.x+1.7,y:p.y+2.2})),'#997557');
  polygon(ctx,board,'#efe6d7');
  imagePlane(ctx,img,plate(view,x,y,z+.018,size*.923,size*.923,angle,roll));
}

function frameRect(i) { return [(i%6)*448,Math.floor(i/6)*448,448,448]; }

function drawObject(ctx,w,h,p,imgs) {
  const narrow=clamp(w/h/1.44,.73,1),yaw=mix(-.145,.185,p);
  const project=projection(w,h,5.65,6.68*narrow+.40,yaw,.20+.03*p,-.12,-.035,.009);
  graduatedField(ctx,w,h,['#ead8c5','#eedecd','#d6b298']);
  const base=-2.25, top=-1.395, supportX=mix(-.68,-.53,p)*narrow+(1-narrow)*.4;
  shadow(ctx,project(supportX,base+.01,.04),3.12,.40,.36,'100,61,46');
  // The two material cards sit behind the specimen and have their own footing.
  const cardX=2.15*narrow;
  cylinder(ctx,project,cardX,-1.08,.35,base,base+.10,['#cab799','#967b5b','#aa9473','#8b7052']);
  const stemTop=project(cardX,-.62,-1.08),stemBase=project(cardX,base+.11,-1.08);
  ctx.save();ctx.lineWidth=Math.max(1.2,stemTop.scale*.047);ctx.strokeStyle='#9e8460';path(ctx,[stemTop,stemBase],false);ctx.stroke();ctx.restore();
  materialPrint(ctx,project,imgs['liquid-rim.webp'],cardX+.11,-.60,-1.22,-.40+yaw*.35,-.07,1.49);
  materialPrint(ctx,project,imgs['liquid-detail.webp'],cardX,-.70,-1.04,-.40+yaw*.35,.04,1.49);
  cylinder(ctx,project,supportX,0,1.84,base,top-.09,['#cd9778','#ad7056','#c08465','#9c604a']);
  cylinder(ctx,project,supportX,0,1.90,top-.095,top,['#deb294','#b98165','#d29a78','#a87458']);
  ctx.save();ctx.strokeStyle='#ac886b';ctx.lineWidth=Math.max(.65,project(0,0,0).scale*.012);
  path(ctx,circle(project,supportX,top+.005,0,1.72));ctx.stroke();ctx.restore();
  shadow(ctx,project(supportX,top+.015,0),1.57,.13,.32,'99,48,32');

  const position=p*(BOUNDS.length-1), frame=Math.floor(position), next=Math.min(frame+1,BOUNDS.length-1);
  const fraction=position-frame;
  const [left,upper,right,bottom]=BOUNDS[frame].map((n,i)=>mix(n,BOUNDS[next][i],fraction));
  const size=4.55;
  const centerX=supportX+(.5-(left+right)/(2*448))*size*.83;
  const centerY=top+(bottom/448-.5)*size+.035;
  const window=plate(project,centerX,centerY,.014,size,size,yaw*.82);
  const cropped=1-ease(1,27,Math.min(left,upper,447-right));
  const arc=imgs['liquid-arc.webp'], relief=imgs['liquid-relief-arc.webp'];
  if(cropped>.001) {
    polygon(ctx,window.map(v=>({...v,x:v.x+1.2,y:v.y+2})),'#bc9983',cropped*.86);
    polygon(ctx,window,'#f0e8d9',cropped*.91);
    imagePlane(ctx,arc,window,cropped*.6,frameRect(frame));
    if(fraction>0) imagePlane(ctx,arc,window,cropped*.6*fraction,frameRect(next));
  }
  const front=plate(project,centerX,centerY,.079,size,size,yaw*.82);
  // Cross-dissolve consecutive photographed angles; registration and camera yaw
  // continue smoothly even between the 24 source frames.
  if(fraction<.5) {
    imagePlane(ctx,relief,front,1,frameRect(frame));
    if(fraction>.001) imagePlane(ctx,relief,front,fraction,frameRect(next));
  } else {
    imagePlane(ctx,relief,front,1,frameRect(next));
    imagePlane(ctx,relief,front,1-fraction,frameRect(frame));
  }
}

export function createFallback(canvas,kind,{assetUrl,onReady,onError}) {
  let disposed=false,failed=false,ready=false,painted=false,raf=0,progress=.45;
  let width=0,height=0,ratio=1;
  const ctx=canvas.getContext('2d',{alpha:false});
  const images={};
  function fail(error) {
    if(failed||disposed)return;
    failed=true;
    if(raf) cancelAnimationFrame(raf);
    raf=0;
    onError?.(error);
  }
  function paint() {
    raf=0;
    if(disposed||failed||!ready||!width||!height)return;
    try {
      ctx.setTransform(ratio,0,0,ratio,0,0);
      ctx.imageSmoothingEnabled=true;
      ctx.imageSmoothingQuality='high';
      if(kind==='object') drawObject(ctx,width,height,progress,images);
      else drawGesture(ctx,width,height,progress,images);
      if(!painted){painted=true;onReady?.();}
    } catch(error){fail(error);}
  }
  function schedule() {
    if(ready&&!failed&&!disposed&&!raf)raf=requestAnimationFrame(paint);
  }
  function resize() {
    if(disposed||failed)return;
    const w=Math.max(1,Math.round(canvas.clientWidth));
    const h=Math.max(1,Math.round(canvas.clientHeight));
    const nextRatio=Math.min(1.75,window.devicePixelRatio||1);
    if(w!==width||h!==height||ratio!==nextRatio) {
      width=w;height=h;ratio=nextRatio;
      canvas.width=Math.max(1,Math.round(w*ratio));canvas.height=Math.max(1,Math.round(h*ratio));
    }
    schedule();
  }
  const observer=ctx&&typeof ResizeObserver==='function'?new ResizeObserver(resize):null;
  observer?.observe(canvas);
  if(!ctx)queueMicrotask(()=>fail(new Error('The 2D scene could not initialize.')));
  else {
    const files=kind==='object'?LIQUID_FILES:FLY_FILES;
    Promise.all(files.map(name=>new Promise((resolve,reject)=>{
      const img=new Image();
      images[name]=img;
      img.onload=resolve;
      img.onerror=()=>reject(new Error(`Could not load the artwork ${name}.`));
      img.src=assetUrl(name);
    }))).then(()=>{
      if(disposed)return;
      ready=true;resize();
    }).catch(fail);
    resize();
  }
  return {
    setProgress(value){if(Number.isFinite(value)){progress=clamp(value,0,1);schedule();}},
    resize,
    dispose(){
      if(disposed)return;
      disposed=true;
      observer?.disconnect();
      if(raf)cancelAnimationFrame(raf);
      for(const image of Object.values(images)){image.onload=null;image.onerror=null;}
    },
  };
}
