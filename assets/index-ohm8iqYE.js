(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Cd="modulepreload",Dd=function(i,e){return new URL(i,e).href},Ko={},Ls=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let l=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");r=l(t.map(d=>{if(d=Dd(d,n),d in Ko)return;Ko[d]=!0;const m=d.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(n)for(let _=a.length-1;_>=0;_--){const v=a[_];if(v.href===d&&(!m||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${h}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":Cd,m||(u.as="script"),u.crossOrigin="",u.href=d,c&&u.setAttribute("nonce",c),document.head.appendChild(u),m)return new Promise((_,v)=>{u.addEventListener("load",_),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},ur={gesture:"The fall",room:"The room",object:"The orbit"},oc=Object.keys(ur),Id=1800;function bs(i){if(!i||typeof i!="object"||i.version!==1||typeof i.note!="string")throw new Error("This response format is unavailable.");const e={};for(const t of oc){const n=i.views?.[t];Number.isInteger(n)&&n>=0&&n<=100&&(e[t]=n)}return{version:1,note:Array.from(i.note).slice(0,Id).join(""),views:e}}function Ld(i){const e=new TextEncoder().encode(JSON.stringify(bs(i)));return btoa(Array.from(e,t=>String.fromCharCode(t)).join("")).replaceAll("+","-").replaceAll("/","_").replace(/=+$/,"")}function Ud(i){if(!i||i.length>19e3||!/^[\w-]+$/.test(i))throw new Error("This response link is incomplete.");const e=atob(i.replaceAll("-","+").replaceAll("_","/")),t=Uint8Array.from(e,n=>n.charCodeAt(0));return bs(JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(t)))}const dn="https://github.com/bobshenruililin/Carryistic",lc="https://carryistic.vercel.app/",Nd=[{key:"dusk",title:"Dusk til Dawn",medium:"Oil on canvas",image:"dusk-portrait.webp",note:"A glance survives three translations. Carry keeps the turn of the head through an observational photograph and a pencil outline, then lets orange, blue and black carry the expression in oil.",credit:"Carry · Oil on canvas, 1.1 × 1.6 m, as described in the artist’s caption.",pictures:[["dusk-source.webp","P01-09 · Photograph"],["dusk-line.webp","P01-08 · Outline"],["dusk-portrait.webp","P01-02 · Oil painting"]],url:"https://www.instagram.com/carryistic/p/DgLzM60E9bh/"},{key:"fly",title:"Fly",medium:"Photographic collage",image:"fly-water.webp",note:"One waterfront, four positions. The next composition removes the waterfront. Four growing colored squares take the place of the bodies in the third. The interactive study borrows the order and weight of that descent.",credit:"Artwork and compositions posted by Carry. The spatial reconstruction is an interpretation made for this portfolio study.",pictures:[["fly-water.webp","P05-01 · Waterfront"],["fly-figures.webp","P05-02 · Cutouts"],["fly-blocks.webp","P05-03 · Blocks"]],url:"https://www.instagram.com/carryistic/p/DeN7bsakfqJ/"},{key:"gold",title:"To Bleed in Liquid Gold",medium:"Sculpture",image:"liquid-rim.webp",note:"Under the gold rim, a strand of beads hangs into a pool of red. The object study lets you retrace the real camera arc from the post and uses the footage to show which details come into view.",credit:"Source post by @20.09.07.29 on Carry’s grid. The studio display and plinth are digital interpretations.",pictures:[["liquid-front.webp","P08-02 · Camera arc"],["liquid-detail.webp","P08-03 · Beads"],["liquid-hand.webp","P08-07 · Gold hand"]],url:"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/"},{key:"basketball",title:"Proud Daddy",medium:"Oil on canvas",image:"basketball-oil.webp",note:"The source and painting share a child’s grip on a basketball. In the studio sequence, the canvas hangs beside the person wearing number 30. The film returns to that room for its final beat.",credit:"Carry · Oil on canvas, 53 × 76 cm, as described in the artist’s caption.",pictures:[["basketball-source.webp","P07-04 · Source photo"],["basketball-oil.webp","P07-01 · Oil painting"],["number-thirty.webp","P07-10 · Studio"]],url:"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/"}],Ci=JSON.parse('[{"id":"P01-01","postId":"P01","slide":1,"title":"Dusk til Dawn","kind":"image","observation":"A side-glancing eye, orange nose and blue lips fill the crop. A thin circle overlaps the black corner.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en","originalUrl":"https://drive.google.com/file/d/14BxfKWE1S4qdtUmvbp9GnN2z-Kt8LkUw/view?usp=drivesdk","filename":"P01-01.jpg","width":788,"height":960},{"id":"P01-02","postId":"P01","slide":2,"title":"Dusk til Dawn","kind":"image","observation":"The full oil portrait sets a turned blue-and-orange head against deep black.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1HkmADw72mzClh_RoRjr3SulZoH2JJ-BZ/view?usp=drivesdk","filename":"P01-02.jpg","width":788,"height":960},{"id":"P01-03","postId":"P01","slide":3,"title":"Dusk til Dawn","kind":"image","observation":"An orange-rimmed ear and a black curl become interlocking shapes in close-up.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1wxkHdwmD0khMGnNG6Ii0t_xf3IOnjsPs/view?usp=drivesdk","filename":"P01-03.jpg","width":788,"height":960},{"id":"P01-04","postId":"P01","slide":4,"title":"Dusk til Dawn","kind":"image","observation":"A pale forehead cuts into blue hair. A small white spatter stands out at upper right.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/16GhmNkXnCmK79VXPaEmcoyN_CTPmlOVD/view?usp=drivesdk","filename":"P01-04.jpg","width":788,"height":960},{"id":"P01-05","postId":"P01","slide":5,"title":"Dusk til Dawn","kind":"image","observation":"Blue lips hover beside the fine circular outline on the black shoulder.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1G0rAv6FLQC1lcpKVAy9QYtbONYLHE0AU/view?usp=drivesdk","filename":"P01-05.jpg","width":788,"height":960},{"id":"P01-06","postId":"P01","slide":6,"title":"Dusk til Dawn","kind":"image","observation":"A dark figure reaches across a large projected contour drawing.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1YaNYERuO5wXWwgqSXjccz0yYI7D76Dsa/view?usp=drivesdk","filename":"P01-06.webp","width":789,"height":960},{"id":"P01-07","postId":"P01","slide":7,"title":"Dusk til Dawn","kind":"image","observation":"The painted portrait is shown edge to edge with the physical canvas margin visible.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1mlKeUX5GrzysYSiRJ-W7tEJgNEd_dTfE/view?usp=drivesdk","filename":"P01-07.jpg","width":788,"height":960},{"id":"P01-08","postId":"P01","slide":8,"title":"Dusk til Dawn","kind":"image","observation":"A light pencil outline fixes the sideward gaze, curl and shoulder before color enters.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1C-dPoW4NA2nFNCVhXAbIi9Rw8OSES_LF/view?usp=drivesdk","filename":"P01-08.webp","width":788,"height":960},{"id":"P01-09","postId":"P01","slide":9,"title":"Dusk til Dawn","kind":"image","observation":"The photographic reference catches a turned head, loose hair and a sideways glance.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 1.1 × 1.6 m.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1lI6H_oGDl0mrHyHiu4soLdYIfnL72GDU/view?usp=drivesdk","filename":"P01-09.webp","width":789,"height":960},{"id":"P02-01","postId":"P02","slide":1,"title":"Blackout photographs","kind":"image","observation":"Three black-and-white panels repeat the mirrored hat under glowing BLACKOUT lettering.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en","originalUrl":"https://drive.google.com/file/d/11bIVgOtDJMYCTfFlKy85wxUigVPbYUcC/view?usp=drivesdk","filename":"P02-01.webp","width":960,"height":960},{"id":"P02-02","postId":"P02","slide":2,"title":"Blackout photographs","kind":"image","observation":"Two hat photographs step down a white field beneath stacked black lettering.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/17ptk93JIenZWLFXLF_mHOExzjlADYrxo/view?usp=drivesdk","filename":"P02-02.webp","width":960,"height":960},{"id":"P02-03","postId":"P02","slide":3,"title":"Blackout photographs","kind":"image","observation":"A small horizontal flash photograph floats on a wide white ground.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1Arm09w5XpWDCMU5mfJl_vHL25JYCECdV/view?usp=drivesdk","filename":"P02-03.webp","width":960,"height":960},{"id":"P02-04","postId":"P02","slide":4,"title":"Blackout photographs","kind":"image","observation":"A kneeling figure with flowers faces an isolated dark, bent shape across white space.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1EKeJlo6s-rSDf9CrLPnqjytiRzpwHDvM/view?usp=drivesdk","filename":"P02-04.webp","width":960,"height":960},{"id":"P02-05","postId":"P02","slide":5,"title":"Blackout photographs","kind":"image","observation":"The uncropped studio view places the kneeling people and their reflection back in the room.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1X6kE-35Cl31QJ9eZEWYFMt9D2sp80fpB/view?usp=drivesdk","filename":"P02-05.webp","width":960,"height":960},{"id":"P02-06","postId":"P02","slide":6,"title":"Blackout photographs","kind":"image","observation":"A tiled mask and hat interrupt stacked type. One eye looks out under the brim.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1eGyLasS788eJUZ03eVqOsH_M5jx5YMEm/view?usp=drivesdk","filename":"P02-06.webp","width":960,"height":960},{"id":"P02-07","postId":"P02","slide":7,"title":"Blackout photographs","kind":"image","observation":"A horizontal snapshot pairs the reflective mask with a softly focused face.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1DfdD4Xp5xJnCES-UHX9bsLOQAzevz5wt/view?usp=drivesdk","filename":"P02-07.webp","width":960,"height":960},{"id":"P02-08","postId":"P02","slide":8,"title":"Blackout photographs","kind":"image","observation":"Small costume portraits form a cross with the brightest faces near the middle.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1SsOYsie9YrrBI1BbjoyRJGmPhIPQBhhU/view?usp=drivesdk","filename":"P02-08.webp","width":960,"height":960},{"id":"P02-09","postId":"P02","slide":9,"title":"Blackout photographs","kind":"image","observation":"A second cross-shaped arrangement switches costumes and flash-lit poses.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1qxova_Natn7iIN9_wlcW9U6-E783juEA/view?usp=drivesdk","filename":"P02-09.webp","width":960,"height":960},{"id":"P02-10","postId":"P02","slide":10,"title":"Blackout photographs","kind":"image","observation":"Rows of friends and venue details break across a wide horizontal strip set in black.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=10","originalUrl":"https://drive.google.com/file/d/1pDJiQ_SrmA9FRDZuyVlrst7OZK9sGqjj/view?usp=drivesdk","filename":"P02-10.webp","width":960,"height":960},{"id":"P02-11","postId":"P02","slide":11,"title":"Blackout photographs","kind":"image","observation":"A grid of candid groups puts glass, signs and faces on the same horizontal beat.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=11","originalUrl":"https://drive.google.com/file/d/1zgb2FQIpX-LmipAARQY6-NyFXnQIbPhU/view?usp=drivesdk","filename":"P02-11.webp","width":960,"height":960},{"id":"P02-12","postId":"P02","slide":12,"title":"Blackout photographs","kind":"image","observation":"Two images put a dark-clothed figure against crinkled, iridescent material.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=12","originalUrl":"https://drive.google.com/file/d/1VxXE9mCdCXPC0fzEgrR3ccEUkOvffq_q/view?usp=drivesdk","filename":"P02-12.webp","width":960,"height":960},{"id":"P02-13","postId":"P02","slide":13,"title":"Blackout photographs","kind":"image","observation":"Luminous windows edge an almost empty dark hall. Floor reflections carry the eye inward.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en&img_index=13","originalUrl":"https://drive.google.com/file/d/12uKcwHvx9vqCulvuWbxdmSFQ-07g-7zQ/view?usp=drivesdk","filename":"P02-13.webp","width":960,"height":960},{"id":"P03-01","postId":"P03","slide":1,"title":"The Blackout Awaits","kind":"video","observation":"The reel cover places two silhouettes on either side of a bright doorway. Red BLACK OUT type crosses the gap.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/reel/DfMdUS6BebC/?hl=en","originalUrl":"https://drive.google.com/file/d/1_9_fW2AjEPFGm5NRlqEgUC_u9FRSVWl4/view?usp=drivesdk","filename":"P03-01.webp","width":640,"height":360,"movie":"P03-01.mp4","duration":75.211},{"id":"P04-01","postId":"P04","slide":1,"title":"Streets of New York","kind":"image","observation":"A side profile and its pale inverse cross a rust-orange relief on deep green.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en","originalUrl":"https://drive.google.com/file/d/12CmF5lrlzBNTDcwA_3JRgQ36BisDK238/view?usp=drivesdk","filename":"P04-01.webp","width":960,"height":960},{"id":"P04-02","postId":"P04","slide":2,"title":"Streets of New York","kind":"image","observation":"A raised arm and bent back leg echo between a pale inset photograph and an enlarged blue cutout.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1L-GFdN14Hak7juHqCmcMQI1UQOk3_rch/view?usp=drivesdk","filename":"P04-02.webp","width":960,"height":960},{"id":"P04-03","postId":"P04","slide":3,"title":"Streets of New York","kind":"image","observation":"A red band of sculptural details interrupts an all-over black-and-white tangle of marks.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1WQNjZL1C8LcgRrfXVnIpDzSIDnc9STpT/view?usp=drivesdk","filename":"P04-03.webp","width":960,"height":960},{"id":"P04-04","postId":"P04","slide":4,"title":"Streets of New York","kind":"image","observation":"A black-and-white gallery view holds a second framed view of the same figure.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1tL7AW2kuPhqM3P_kqxq8UXJJuh1076JV/view?usp=drivesdk","filename":"P04-04.webp","width":960,"height":960},{"id":"P04-05","postId":"P04","slide":5,"title":"Streets of New York","kind":"image","observation":"Two small blue-toned faces sit in opposite corners of a magenta field.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1wGYW6GRQxr0M4PPGpGc_5nVvuNkePO0M/view?usp=drivesdk","filename":"P04-05.webp","width":960,"height":960},{"id":"P04-06","postId":"P04","slide":6,"title":"Streets of New York","kind":"image","observation":"A narrow strip of gallery visitors and objects runs across a large white field.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/13xMJDQemCx4ePqwSvKpuEsNENNDTG2_g/view?usp=drivesdk","filename":"P04-06.webp","width":960,"height":960},{"id":"P04-07","postId":"P04","slide":7,"title":"Streets of New York","kind":"image","observation":"Red shelving makes a grid for dark objects, with empty red space above.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1PgW_kON48frezwVupThH4_rkDhNeAqyI/view?usp=drivesdk","filename":"P04-07.webp","width":960,"height":960},{"id":"P04-08","postId":"P04","slide":8,"title":"Streets of New York","kind":"image","observation":"Traffic barrels and their white stripes repeat the color of a large red border.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1HSxPwDgnixU8Mk3J29sxxkmgijSPYUew/view?usp=drivesdk","filename":"P04-08.webp","width":960,"height":960},{"id":"P04-09","postId":"P04","slide":9,"title":"Streets of New York","kind":"image","observation":"Three small photographs form a rising column of people and city settings on white.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1vbm-SsbzVYNp-9PSaHg1yekmwelrw8HS/view?usp=drivesdk","filename":"P04-09.webp","width":960,"height":960},{"id":"P04-10","postId":"P04","slide":10,"title":"Streets of New York","kind":"image","observation":"A small red interior is isolated in the middle of a salmon-colored field.","credit":"Posted by @carryistic. Includes photographs of museum exhibits and city objects.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en&img_index=10","originalUrl":"https://drive.google.com/file/d/1vb5x90mRZAQxzhQTBfSDmTLGkH0mvrAK/view?usp=drivesdk","filename":"P04-10.webp","width":960,"height":960},{"id":"P05-01","postId":"P05","slide":1,"title":"Fly","kind":"image","observation":"Four red-hooded poses descend diagonally from sky to water to the yellow waterfront edge.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN7bsakfqJ/?hl=en","originalUrl":"https://drive.google.com/file/d/1wp2VFwDsD8UG5DhtBlPqF6HDyUj0m1sC/view?usp=drivesdk","filename":"P05-01.webp","width":960,"height":960},{"id":"P05-02","postId":"P05","slide":2,"title":"Fly","kind":"image","observation":"The same four cutout figures descend across white. The bent knees make the action readable.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN7bsakfqJ/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/16AdpWEhbLbXWSAALcZGeTG3mNH6LNzQ_/view?usp=drivesdk","filename":"P05-02.webp","width":960,"height":960},{"id":"P05-03","postId":"P05","slide":3,"title":"Fly","kind":"image","observation":"A small gray square leads into red, olive and blue squares of increasing size on the same diagonal.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN7bsakfqJ/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1IutMGiEvXfEh0Wew_AJav-0sm9TXU3MC/view?usp=drivesdk","filename":"P05-03.webp","width":960,"height":960},{"id":"P05-04","postId":"P05","slide":4,"title":"Fly","kind":"image","observation":"The red hood frames a smile inside a wider red border. Blue water runs horizontally behind it.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN7bsakfqJ/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1iF5gieRroa-JlLA5iyaYdfXWV0hJlsZj/view?usp=drivesdk","filename":"P05-04.webp","width":960,"height":960},{"id":"P05-05","postId":"P05","slide":5,"title":"Fly","kind":"image","observation":"A cross-legged figure sits low in a blue frame with a broad expanse of sky and water above.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN7bsakfqJ/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1Xp0f5W8Bm--DhhLj9IepfpuRgb6XY2T_/view?usp=drivesdk","filename":"P05-05.webp","width":960,"height":960},{"id":"P05-06","postId":"P05","slide":6,"title":"Fly","kind":"image","observation":"Three views of the same outfit alternate scale and pose across an olive field.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN7bsakfqJ/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1ZjK5aFhoDECQoh1bcbPUY-MdjmFA6xem/view?usp=drivesdk","filename":"P05-06.webp","width":960,"height":960},{"id":"P06-01","postId":"P06","slide":1,"title":"DC Chronicles","kind":"image","observation":"Three tinted frames descend across a dark red field, accompanied by tiny isolated figures.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en","originalUrl":"https://drive.google.com/file/d/1KSp16GyQIIpUDQrdFnkhaaGjUsJw-QxO/view?usp=drivesdk","filename":"P06-01.webp","width":960,"height":960},{"id":"P06-02","postId":"P06","slide":2,"title":"DC Chronicles","kind":"image","observation":"A small blue-and-orange standing pair occupies the upper left of a pale blue field.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1TN3gQtFzw89Q2HJuUO4RQnFKK5Xr9MU-/view?usp=drivesdk","filename":"P06-02.webp","width":960,"height":960},{"id":"P06-03","postId":"P06","slide":3,"title":"DC Chronicles","kind":"image","observation":"A green-and-red portrait surrounds a sharp rectangular view of a shop mirror and prints.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1BiyOXLuRAb04Q13QM17qrm4KNdEoc1nl/view?usp=drivesdk","filename":"P06-03.webp","width":960,"height":960},{"id":"P06-04","postId":"P06","slide":4,"title":"DC Chronicles","kind":"image","observation":"A reclining painted figure appears twice at different scales in a museum-image collage.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1dsgae-lKwbdzPiO7WWuO4D9qh7eufeeD/view?usp=drivesdk","filename":"P06-04.webp","width":960,"height":960},{"id":"P06-05","postId":"P06","slide":5,"title":"DC Chronicles","kind":"image","observation":"A painted portrait and a close crop of its grin sit in a violet field.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1BSzJ03MVZzAAKLikhI6fxc04cFWA1_zK/view?usp=drivesdk","filename":"P06-05.webp","width":960,"height":960},{"id":"P06-06","postId":"P06","slide":6,"title":"DC Chronicles","kind":"image","observation":"Pale twisting branches arc toward a small human profile in a black-and-white photograph.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1axbI2y9XDcx2GdwCZKzBLOB8Zymh8DVc/view?usp=drivesdk","filename":"P06-06.webp","width":960,"height":960},{"id":"P06-07","postId":"P06","slide":7,"title":"DC Chronicles","kind":"image","observation":"A cropped loop of wire or mesh hangs above a bare gallery floor with white space below.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1ZH3LKc2dpPxgjqCi48qb_tUD0XFcePnG/view?usp=drivesdk","filename":"P06-07.webp","width":960,"height":960},{"id":"P06-08","postId":"P06","slide":8,"title":"DC Chronicles","kind":"image","observation":"Four yellow-tinted gallery views flip a standing figure around the line of a bench.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1dB1jNK7JtHaHglkbSjOgsayfy4JXFeu6/view?usp=drivesdk","filename":"P06-08.webp","width":960,"height":960},{"id":"P06-09","postId":"P06","slide":9,"title":"DC Chronicles","kind":"image","observation":"Four reproductions of portraits climb a white field like steps.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1H_udQH02iDb77TvkKmJZ7_jUXy5cdmux/view?usp=drivesdk","filename":"P06-09.webp","width":960,"height":960},{"id":"P06-10","postId":"P06","slide":10,"title":"DC Chronicles","kind":"image","observation":"A dark-haired figure in profile crosses a narrow band of mustard yellow.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=10","originalUrl":"https://drive.google.com/file/d/1S5OjTLcm26OvZ60RnTfG_uKuD6wO3-Es/view?usp=drivesdk","filename":"P06-10.webp","width":960,"height":960},{"id":"P06-11","postId":"P06","slide":11,"title":"DC Chronicles","kind":"image","observation":"Six reproductions form a compact two-column survey of gallery works.","credit":"Posted by @carryistic. Includes reproductions or views of gallery works.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en&img_index=11","originalUrl":"https://drive.google.com/file/d/1dvtAFWlLgxgQRxg2JjmJ52SY1jM8VowP/view?usp=drivesdk","filename":"P06-11.webp","width":960,"height":960},{"id":"P07-01","postId":"P07","slide":1,"title":"Proud Daddy","kind":"image","observation":"The painted child faces the viewer with both hands on an orange basketball and an armchair behind.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en","originalUrl":"https://drive.google.com/file/d/1VkUIPAGckBFs1vlvHkvLQTH_M1E-gn6q/view?usp=drivesdk","filename":"P07-01.jpg","width":720,"height":960},{"id":"P07-02","postId":"P07","slide":2,"title":"Proud Daddy","kind":"image","observation":"A standing figure holds the painting, establishing the scale of the canvas against the body.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1lwPZTkXnrpBDhuk4hJ030nkl6xnJxyPX/view?usp=drivesdk","filename":"P07-02.webp","width":720,"height":960},{"id":"P07-03","postId":"P07","slide":3,"title":"Proud Daddy","kind":"image","observation":"The complete taped painting shows its uneven edges against a pale wall.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1S1tu5Z4xidhS14TK48sdvF-i-q6wA5sH/view?usp=drivesdk","filename":"P07-03.jpg","width":720,"height":960},{"id":"P07-04","postId":"P07","slide":4,"title":"Proud Daddy","kind":"image","observation":"The source photograph repeats the seated pose, ball, armchair and side table.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1uuStNGpGtGbRT42tLOFLPSa9egTbPZ_5/view?usp=drivesdk","filename":"P07-04.webp","width":720,"height":960},{"id":"P07-05","postId":"P07","slide":5,"title":"Proud Daddy","kind":"image","observation":"A partly drawn canvas hangs above the workbench. The seated observer’s knees enter the frame.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1hf7Wf98k1UyASRjp7GB0WND7pqLtI5wa/view?usp=drivesdk","filename":"P07-05.jpg","width":720,"height":960},{"id":"P07-06","postId":"P07","slide":6,"title":"Proud Daddy","kind":"image","observation":"The right-hand portion of the painted figure appears beside an area of underdrawing.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1yzUFuvzuGgSALCXjGtKyjcsKc2HJs7GJ/view?usp=drivesdk","filename":"P07-06.jpg","width":720,"height":960},{"id":"P07-07","postId":"P07","slide":7,"title":"Proud Daddy","kind":"image","observation":"A wall and a paint-covered table place the nearly finished portrait in the studio.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1cQ1gCjCg7lmY0P8KY5JVPUj-gWH7lxI-/view?usp=drivesdk","filename":"P07-07.webp","width":720,"height":960},{"id":"P07-08","postId":"P07","slide":8,"title":"Proud Daddy","kind":"image","observation":"The small glowing portrait is surrounded by gray wall, brushes and jars.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1NM3D60Osrfn2n6GimdjQ8Lt85u7_t6Q1/view?usp=drivesdk","filename":"P07-08.jpg","width":720,"height":960},{"id":"P07-09","postId":"P07","slide":9,"title":"Proud Daddy","kind":"image","observation":"An aerosol can, brushes and a fan sit in front of the portrait.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1-d077uDGNfhqO96O0istjH3u8PWqSlWp/view?usp=drivesdk","filename":"P07-09.jpg","width":720,"height":960},{"id":"P07-10","postId":"P07","slide":10,"title":"Proud Daddy","kind":"image","observation":"A person in a number 30 jersey stands beside the completed painting and two fans.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=10","originalUrl":"https://drive.google.com/file/d/1q2jBNTUtDjd3RNnEAeo4s5DqW1g4wtw8/view?usp=drivesdk","filename":"P07-10.webp","width":720,"height":960},{"id":"P07-11","postId":"P07","slide":11,"title":"Proud Daddy","kind":"image","observation":"A faint transfer-like image and the painted result sit side by side.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=11","originalUrl":"https://drive.google.com/file/d/1jMTIa4kWb65pBsMleWaBbBxAmUUANf0k/view?usp=drivesdk","filename":"P07-11.jpg","width":720,"height":960},{"id":"P07-12","postId":"P07","slide":12,"title":"Proud Daddy","kind":"image","observation":"A close photograph of an inscribed, signed page closes the sequence.","credit":"Posted by @carryistic. The caption describes an oil on canvas, 53 × 76 cm.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en&img_index=12","originalUrl":"https://drive.google.com/file/d/1nOkHOVpe5FE1OCpEZ1K7Ow5dGgBIIOYD/view?usp=drivesdk","filename":"P07-12.webp","width":720,"height":960},{"id":"P08-01","postId":"P08","slide":1,"title":"To Bleed in Liquid Gold","kind":"image","observation":"A red-and-gold heart form sits above a pool of dark red beads on striped cloth.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?hl=en","originalUrl":"https://drive.google.com/file/d/1bkbNw2x9Rdwr4pb1-V4hp_NcOPeNKaEX/view?usp=drivesdk","filename":"P08-01.webp","width":960,"height":960},{"id":"P08-02","postId":"P08","slide":2,"title":"To Bleed in Liquid Gold","kind":"video","observation":"The video poster shows the whole sculpture on its pedestal with beaded strands suspended beneath.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/13-DeUhXYAUrHozaD9paJTDWBr9t1NCXn/view?usp=drivesdk","filename":"P08-02.webp","width":640,"height":640,"movie":"P08-02.mp4","duration":5.933},{"id":"P08-03","postId":"P08","slide":3,"title":"To Bleed in Liquid Gold","kind":"image","observation":"The low close-up follows a strand of translucent beads into a dense red pile.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/15rFkuQTQdiGKoBkTz2f93kOKlBo7WUZc/view?usp=drivesdk","filename":"P08-03.jpg","width":960,"height":960},{"id":"P08-04","postId":"P08","slide":4,"title":"To Bleed in Liquid Gold","kind":"image","observation":"A high angle frames gold-edged openings in the red form above the beaded base.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1z2EzARp_2717IRGHn2urMzlvNMAFktdQ/view?usp=drivesdk","filename":"P08-04.jpg","width":960,"height":960},{"id":"P08-05","postId":"P08","slide":5,"title":"To Bleed in Liquid Gold","kind":"image","observation":"A side view exposes a gold-rimmed opening, the upright support and a strand of beads.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1AYGm0Tqgi_9tq7GVG9XXry1XKX4ZoY0c/view?usp=drivesdk","filename":"P08-05.jpg","width":960,"height":960},{"id":"P08-06","postId":"P08","slide":6,"title":"To Bleed in Liquid Gold","kind":"image","observation":"A lower crop aligns the gold underside, warm support and beads against blue stripes.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1UJ7abWVP3U_2V02KtEs3Xlmp3iYBsfwq/view?usp=drivesdk","filename":"P08-06.jpg","width":960,"height":960},{"id":"P08-07","postId":"P08","slide":7,"title":"To Bleed in Liquid Gold","kind":"video","observation":"The video poster looks down on a gold hand resting over red beads and an orange base.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1HOMqQ8YsjLGYTjt5lPui4yQ2Ou5J-it8/view?usp=drivesdk","filename":"P08-07.webp","width":640,"height":640,"movie":"P08-07.mp4","duration":1.823},{"id":"P09-01","postId":"P09","slide":1,"title":"Graphic pose studies","kind":"image","observation":"A sharp violet starburst cuts into a yellow field and a strip of seated poses.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en","originalUrl":"https://drive.google.com/file/d/1ZxTwqojTUfPbo_SFirUXzavQrfPSJZDI/view?usp=drivesdk","filename":"P09-01.webp","width":960,"height":960},{"id":"P09-02","postId":"P09","slide":2,"title":"Graphic pose studies","kind":"image","observation":"A low-angle leaning pose interrupts the yellow field. Smaller seated poses trail behind.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1ry-lETME-l-6g4fBCjmZSDZnH4JB7cYA/view?usp=drivesdk","filename":"P09-02.webp","width":960,"height":960},{"id":"P09-03","postId":"P09","slide":3,"title":"Graphic pose studies","kind":"image","observation":"A profile in a patterned shirt is repeated as yellow silhouettes beside a row of stars.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/17A2uH4M-wY3ZwPvd3rq4RNm_FAaYVtwD/view?usp=drivesdk","filename":"P09-03.webp","width":960,"height":960},{"id":"P09-04","postId":"P09","slide":4,"title":"Graphic pose studies","kind":"image","observation":"A black-and-white low-angle photograph is framed inside a vintage television on black.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1zElB5Ll4psuZi5kqL8vM1e43xysfte8M/view?usp=drivesdk","filename":"P09-04.webp","width":960,"height":960},{"id":"P09-05","postId":"P09","slide":5,"title":"Graphic pose studies","kind":"image","observation":"Positive and inverted portraits interlock around an almost solid black center.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1gfXCvsE5vkaZ7fP-oZnjVtNMi8F1NUAx/view?usp=drivesdk","filename":"P09-05.webp","width":960,"height":960},{"id":"P09-06","postId":"P09","slide":6,"title":"Graphic pose studies","kind":"image","observation":"A wood-cased television on white contains a tilted black-and-white figure.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1ROG-lP6VqLc3hAf9t1X-fDfZwynsAXXN/view?usp=drivesdk","filename":"P09-06.webp","width":960,"height":960},{"id":"P09-07","postId":"P09","slide":7,"title":"Graphic pose studies","kind":"image","observation":"A yellow-and-purple aisle photograph sits under prominent hand-drawn lettering.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1_Q5MWFiPywB4RFBHWtL5UMyWSAtwSUpz/view?usp=drivesdk","filename":"P09-07.webp","width":960,"height":960},{"id":"P09-08","postId":"P09","slide":8,"title":"Graphic pose studies","kind":"image","observation":"A horizontal strip of photographs crosses a yellow silhouette with an outstretched arm.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/14_O9FJFJojFzVWRD48C5du7WUCXQLc3q/view?usp=drivesdk","filename":"P09-08.webp","width":960,"height":960},{"id":"P09-09","postId":"P09","slide":9,"title":"Graphic pose studies","kind":"image","observation":"A violet outstretched pose crosses another photo strip and lands on a yellow starburst.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1tV-BZMhIlkUJBO-Add9655RZbgKz1-lT/view?usp=drivesdk","filename":"P09-09.webp","width":960,"height":960},{"id":"P09-10","postId":"P09","slide":10,"title":"Graphic pose studies","kind":"image","observation":"An image and its light-toned inversion meet at a horizontal seam marked by opposite arrows.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=10","originalUrl":"https://drive.google.com/file/d/123Afmybq-FeG_pBkdH0Z6n7ZBPsXHsKS/view?usp=drivesdk","filename":"P09-10.webp","width":960,"height":960},{"id":"P09-11","postId":"P09","slide":11,"title":"Graphic pose studies","kind":"image","observation":"A violet profile looks toward a small inset black-and-white view in the bottom corner.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=11","originalUrl":"https://drive.google.com/file/d/1ceugDqyYbIwBJtv0QWTu0fq3B8hKYOD9/view?usp=drivesdk","filename":"P09-11.webp","width":960,"height":960},{"id":"P09-12","postId":"P09","slide":12,"title":"Graphic pose studies","kind":"image","observation":"A large seated silhouette in violet is backed by yellow and a strip of smaller photographs.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=12","originalUrl":"https://drive.google.com/file/d/19EwH-qllgBFGO7jihUTu4dSx0NPJ2ogn/view?usp=drivesdk","filename":"P09-12.webp","width":960,"height":960},{"id":"P09-13","postId":"P09","slide":13,"title":"Graphic pose studies","kind":"image","observation":"A single narrow purple aisle view sits low inside a wide yellow border.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=13","originalUrl":"https://drive.google.com/file/d/1Sn6GYWxK6yBXHdSmttho70a5FMVcbJdp/view?usp=drivesdk","filename":"P09-13.webp","width":960,"height":960},{"id":"P09-14","postId":"P09","slide":14,"title":"Graphic pose studies","kind":"image","observation":"Nine panels assemble the starbursts, figure studies and televisions into a single layout.","credit":"Posted by @carryistic. The caption credits @bigartparty as model.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en&img_index=14","originalUrl":"https://drive.google.com/file/d/1had1cp7Vw11v3XysY9qpwJo5U7wUXrIN/view?usp=drivesdk","filename":"P09-14.webp","width":960,"height":960},{"id":"P10-01","postId":"P10","slide":1,"title":"Record-store portraits","kind":"image","observation":"A figure pulling down a red cap repeats across cobalt as progressively fainter silhouettes.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en","originalUrl":"https://drive.google.com/file/d/15MPVlafPt57Z879mu6oRs1CFaq1yedJq/view?usp=drivesdk","filename":"P10-01.webp","width":960,"height":960},{"id":"P10-02","postId":"P10","slide":2,"title":"Record-store portraits","kind":"image","observation":"Three horizontal cutouts repeat the red cap and jersey inside an electric blue field.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1B03ZRSiZJHnwLwqPoMDNwX9QHi9L0RUu/view?usp=drivesdk","filename":"P10-02.webp","width":960,"height":960},{"id":"P10-03","postId":"P10","slide":3,"title":"Record-store portraits","kind":"image","observation":"The jersey, shelving and a column of red stars accumulate under a blue wash.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1qFbAhG_mqLE0nrXxwIrSZr11yJYj-gWg/view?usp=drivesdk","filename":"P10-03.webp","width":960,"height":960},{"id":"P10-04","postId":"P10","slide":4,"title":"Record-store portraits","kind":"image","observation":"A white focusing rectangle encloses the seated red-capped figure among bicycle frames.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1wWfqOiqYF68POO2D5ALSBWYLpquXzXVe/view?usp=drivesdk","filename":"P10-04.webp","width":960,"height":960},{"id":"P10-05","postId":"P10","slide":5,"title":"Record-store portraits","kind":"image","observation":"Two records cover a face inside a camera interface with a circular shutter button below.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1oJ97p6pDnPRL29MOkBpIfV2PLUavJgtJ/view?usp=drivesdk","filename":"P10-05.webp","width":960,"height":960},{"id":"P10-06","postId":"P10","slide":6,"title":"Record-store portraits","kind":"image","observation":"A camera interface showing a record aisle is nested inside another photograph of it.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/16kS_pSp4P03qaVfcShTL_ou3cBjghQeE/view?usp=drivesdk","filename":"P10-06.webp","width":960,"height":960},{"id":"P10-07","postId":"P10","slide":7,"title":"Record-store portraits","kind":"image","observation":"A large cap close-up is sliced by a narrow blue band of smaller images.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1svwxtnpv1oSmizBdK92fmTNhkA--p5kT/view?usp=drivesdk","filename":"P10-07.webp","width":960,"height":960},{"id":"P10-08","postId":"P10","slide":8,"title":"Record-store portraits","kind":"image","observation":"A red starburst hangs above a narrow multicolored photo strip on cobalt.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1imzeJqTbvGOpGwNBtc-CK-1hYmUxwjIo/view?usp=drivesdk","filename":"P10-08.webp","width":960,"height":960},{"id":"P10-09","postId":"P10","slide":9,"title":"Record-store portraits","kind":"image","observation":"A hand reaches toward the camera, doubled in red beside the blue-jersey figure.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1_ruvsUJF8s2pKmqmtRK7jOUdTK-ewkZ8/view?usp=drivesdk","filename":"P10-09.webp","width":960,"height":960},{"id":"P10-10","postId":"P10","slide":10,"title":"Record-store portraits","kind":"image","observation":"A solitary red-and-blue figure in an aisle is isolated inside a broad white margin.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=10","originalUrl":"https://drive.google.com/file/d/121W_dv53uxsY_t4qoNSUhG7tWxnRBM59/view?usp=drivesdk","filename":"P10-10.webp","width":960,"height":960},{"id":"P10-11","postId":"P10","slide":11,"title":"Record-store portraits","kind":"image","observation":"Opposing red and blue versions of the figure appear mirrored around a central structure.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=11","originalUrl":"https://drive.google.com/file/d/1pjNiU1r26IOkU9DTHlVKdrCkUHq3JUk6/view?usp=drivesdk","filename":"P10-11.webp","width":960,"height":960},{"id":"P10-12","postId":"P10","slide":12,"title":"Record-store portraits","kind":"image","observation":"A narrow overhead aisle fragment in red and blue is centered on white.","credit":"Posted by @carryistic. The caption credits photography to @bigartparty.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en&img_index=12","originalUrl":"https://drive.google.com/file/d/1iyaGpzjRS_ECX0TW5EDUzZG_I8cbYMd0/view?usp=drivesdk","filename":"P10-12.webp","width":960,"height":960},{"id":"P11-01","postId":"P11","slide":1,"title":"Record-store shoot","kind":"image","observation":"Two records cover the face above a blue number 3 jersey. The hands frame their center labels.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en","originalUrl":"https://drive.google.com/file/d/1QRt2sGY41FluuodaLPH7-rNFY39TySU2/view?usp=drivesdk","filename":"P11-01.webp","width":960,"height":960},{"id":"P11-02","postId":"P11","slide":2,"title":"Record-store shoot","kind":"image","observation":"A standing figure is silhouetted in a narrow aisle under yellow ceiling light.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1Zs02gt_R8B7fanNUmiQcQCZ91EtY79oS/view?usp=drivesdk","filename":"P11-02.webp","width":960,"height":960},{"id":"P11-03","postId":"P11","slide":3,"title":"Record-store shoot","kind":"image","observation":"A tilted wide-angle view stretches bent legs and green rails diagonally across the frame.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1Rn9QWvkB5iqLU8AFli9OL5jP7V89WR0Y/view?usp=drivesdk","filename":"P11-03.webp","width":960,"height":960},{"id":"P11-04","postId":"P11","slide":4,"title":"Record-store shoot","kind":"image","observation":"Both hands grip a red cap above the blue jersey in front of dark speakers.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1Pqt3w1RDthUdaO8Mhtd6rfniLfuPi2FR/view?usp=drivesdk","filename":"P11-04.webp","width":960,"height":960},{"id":"P11-05","postId":"P11","slide":5,"title":"Record-store shoot","kind":"image","observation":"A seated figure appears small between tall shelves, with cool light near the aisle.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1hLA3iSjAtIPrI7RZYgB35tishYlRsz4y/view?usp=drivesdk","filename":"P11-05.webp","width":960,"height":960},{"id":"P11-06","postId":"P11","slide":6,"title":"Record-store shoot","kind":"image","observation":"A black-and-white portrait pairs glasses with a second figure whose face is covered by a mirror ball.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1KHU1HEdaV3kKL9SV1696d89w7ku1jgpC/view?usp=drivesdk","filename":"P11-06.webp","width":960,"height":960},{"id":"P11-07","postId":"P11","slide":7,"title":"Record-store shoot","kind":"image","observation":"A seated figure extends both arms into the tangle of bicycle frames.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1CHL5LqI9Jz09A6hj-e4H4dD78rleKkbR/view?usp=drivesdk","filename":"P11-07.webp","width":960,"height":960},{"id":"P11-08","postId":"P11","slide":8,"title":"Record-store shoot","kind":"image","observation":"A close crop holds the jersey number and relaxed hands against horizontal record bins.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/12wlyBZ6tdK_y6pdhOjm_SL2cqN_T2pNq/view?usp=drivesdk","filename":"P11-08.webp","width":960,"height":960},{"id":"P11-09","postId":"P11","slide":9,"title":"Record-store shoot","kind":"image","observation":"A hand frames a smaller view of the blue-jersey figure through a reflective circular surface.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1Kr0AOlixoJcrYtfq2DyDnLJv5-_6xrtN/view?usp=drivesdk","filename":"P11-09.webp","width":960,"height":960},{"id":"P11-10","postId":"P11","slide":10,"title":"Record-store shoot","kind":"image","observation":"A pixelated jersey fills a shop scene with a game-like selection menu below.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=10","originalUrl":"https://drive.google.com/file/d/1dm17xie5SKbXbhRegEJa6maLrKN5kKVu/view?usp=drivesdk","filename":"P11-10.webp","width":960,"height":960},{"id":"P11-11","postId":"P11","slide":11,"title":"Record-store shoot","kind":"image","observation":"A distant silhouette breaks the light at the end of a dark aisle.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=11","originalUrl":"https://drive.google.com/file/d/1xZOx2PBkOR8zyTS32guixggNF8j4Lyp8/view?usp=drivesdk","filename":"P11-11.webp","width":960,"height":960},{"id":"P11-12","postId":"P11","slide":12,"title":"Record-store shoot","kind":"image","observation":"A bent head and red cap stand out among closely packed bicycles.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=12","originalUrl":"https://drive.google.com/file/d/1xhZZ50N5T6xD_bG1MVVLs-t80e6hfAOq/view?usp=drivesdk","filename":"P11-12.jpg","width":960,"height":960},{"id":"P11-13","postId":"P11","slide":13,"title":"Record-store shoot","kind":"image","observation":"A curved security mirror contains the people, shelving and a patch of glare.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=13","originalUrl":"https://drive.google.com/file/d/1r_9QXbBCRg1-7jOHA3HMqaoOHB4TF-hs/view?usp=drivesdk","filename":"P11-13.webp","width":960,"height":960},{"id":"P11-14","postId":"P11","slide":14,"title":"Record-store shoot","kind":"image","observation":"A blurred reflective surface stretches a standing figure into faint vertical forms.","credit":"Posted by @bigartparty and displayed on @carryistic’s grid. The caption credits @ca.m.z with help taking photographs.","sourceAccount":"@bigartparty","instagramUrl":"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en&img_index=14","originalUrl":"https://drive.google.com/file/d/19pokadlDp70npjr4PaWQBcRznlI9Q1oC/view?usp=drivesdk","filename":"P11-14.webp","width":960,"height":960},{"id":"P12-01","postId":"P12","slide":1,"title":"First Weeks at RISD","kind":"image","observation":"Nine graphite studies range from an armchair and a tree to objects and draped forms.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en","originalUrl":"https://drive.google.com/file/d/17CpkK1T9o_7YxJYiwOs5a_129ZTCJd1p/view?usp=drivesdk","filename":"P12-01.webp","width":960,"height":960},{"id":"P12-02","postId":"P12","slide":2,"title":"First Weeks at RISD","kind":"image","observation":"Five small tonal and contour studies are widely spaced on white.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1XzZEk1wBDQ7tOJH_dKoSSX4XvFL1cFZi/view?usp=drivesdk","filename":"P12-02.webp","width":960,"height":960},{"id":"P12-03","postId":"P12","slide":3,"title":"First Weeks at RISD","kind":"image","observation":"Two shaded stylized heads face across white space at staggered heights.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1uA23dXyfPNjSRNRyz8ADiOA2HXAfr3zI/view?usp=drivesdk","filename":"P12-03.webp","width":960,"height":960},{"id":"P12-04","postId":"P12","slide":4,"title":"First Weeks at RISD","kind":"image","observation":"A branching gold structure crosses black, with two narrow detail crops below.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1t-K389EOmp76B96QQQ_inxgam9XijHUV/view?usp=drivesdk","filename":"P12-04.webp","width":960,"height":960},{"id":"P12-05","postId":"P12","slide":5,"title":"First Weeks at RISD","kind":"image","observation":"Thin lines and gold branches cross the border between pale wall and black ground.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1k__ShPN-ED9uuBJ0BNlfQJm3X04aWVTA/view?usp=drivesdk","filename":"P12-05.webp","width":960,"height":960},{"id":"P12-06","postId":"P12","slide":6,"title":"First Weeks at RISD","kind":"image","observation":"Three small horizontal views repeat the same branching structure from different positions.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1Ym4Ox6r6SW0mLZjs6vETnn-BrPUbdWcU/view?usp=drivesdk","filename":"P12-06.webp","width":960,"height":960},{"id":"P12-07","postId":"P12","slide":7,"title":"First Weeks at RISD","kind":"image","observation":"Small rectangular materials and blue tape lie on an illuminated work surface.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1AaBg7MLpjW6zUghp7dVHdX0D4dLYMaSS/view?usp=drivesdk","filename":"P12-07.webp","width":960,"height":960},{"id":"P12-08","postId":"P12","slide":8,"title":"First Weeks at RISD","kind":"image","observation":"A drawing board and red cups occupy an outdoor table beneath trees.","credit":"Posted by @20.09.07.29 and displayed on @carryistic’s grid.","sourceAccount":"@20.09.07.29","instagramUrl":"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1lBI7ABC44-hPFIfsYUPqd8vgycYwJSf0/view?usp=drivesdk","filename":"P12-08.jpg","width":960,"height":960},{"id":"P13-01","postId":"P13","slide":1,"title":"Artful and Grateful","kind":"image","observation":"Three stacked flash photographs sit between large fragments of faces at the edges.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en","originalUrl":"https://drive.google.com/file/d/1uCPhYh7r7iGsR4jgKcdcZ8Ox2fTusSJO/view?usp=drivesdk","filename":"P13-01.webp","width":960,"height":960},{"id":"P13-02","postId":"P13","slide":2,"title":"Artful and Grateful","kind":"image","observation":"A blue top and pink skirt register faintly in an almost black outdoor scene.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1M2fy6-GBd1JA8W4_PWbT8d3E-FBRExj4/view?usp=drivesdk","filename":"P13-02.webp","width":960,"height":960},{"id":"P13-03","postId":"P13","slide":3,"title":"Artful and Grateful","kind":"image","observation":"Small color snapshots cut into a much larger monochrome photograph of legs on steps.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1eAV5xjS1XQK4hZD7AxPtT1dGRslJCyz8/view?usp=drivesdk","filename":"P13-03.webp","width":960,"height":960},{"id":"P13-04","postId":"P13","slide":4,"title":"Artful and Grateful","kind":"image","observation":"A vertical stack of red portraits sits beside flame and its reflection on black.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1GGSNuKdVahng56PwnhLU5yYusBTRV5lC/view?usp=drivesdk","filename":"P13-04.webp","width":960,"height":960},{"id":"P13-05","postId":"P13","slide":5,"title":"Artful and Grateful","kind":"image","observation":"Firelight breaks across water below a bridge lined with onlookers.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1Ydkt38iw25x-XHkEh1QUyKqjU9_yMgNc/view?usp=drivesdk","filename":"P13-05.webp","width":960,"height":960},{"id":"P13-06","postId":"P13","slide":6,"title":"Artful and Grateful","kind":"image","observation":"A single flame and its blurred reflection float against near-black.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1Xt-gVANzunJq6cYwc554_iFikUqX4BAj/view?usp=drivesdk","filename":"P13-06.webp","width":960,"height":960},{"id":"P13-07","postId":"P13","slide":7,"title":"Artful and Grateful","kind":"image","observation":"Flash catches hands and clothing in close-up. Two smaller portraits interrupt the frame.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1FfQEcl7PiL_1bJQHI3rnjgReW-F_7e2c/view?usp=drivesdk","filename":"P13-07.webp","width":960,"height":960},{"id":"P13-08","postId":"P13","slide":8,"title":"Artful and Grateful","kind":"image","observation":"A low-angle portrait against clouds anchors smaller photographs on white.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1RXofE_X-okBgoyv_Rn6Tpu4tW4eTiA1W/view?usp=drivesdk","filename":"P13-08.webp","width":960,"height":960},{"id":"P13-09","postId":"P13","slide":9,"title":"Artful and Grateful","kind":"image","observation":"A dense contact sheet gathers outdoor groups, a studio table, faces and street details.","credit":"Posted by @carryistic.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1sSp2nLnEd7DX1exA6ZmxfbUAAmUr4xCX/view?usp=drivesdk","filename":"P13-09.webp","width":960,"height":960},{"id":"P14-01","postId":"P14","slide":1,"title":"Italy in motion","kind":"image","observation":"A laughing figure in red trousers appears beside horizontal inset images on a pale ground.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en","originalUrl":"https://drive.google.com/file/d/1ArettTNgiNtVuNEZj2AaxiYvQNDI8-OZ/view?usp=drivesdk","filename":"P14-01.webp","width":960,"height":960},{"id":"P14-02","postId":"P14","slide":2,"title":"Italy in motion","kind":"image","observation":"Saturated red and green exhibition rooms sit beside shadowed architectural details in a grid.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1bQsvHSZkGgI3ued1h-ngYqBf4oZXbGPz/view?usp=drivesdk","filename":"P14-02.webp","width":960,"height":960},{"id":"P14-03","postId":"P14","slide":3,"title":"Italy in motion","kind":"image","observation":"A large tiled dome fills most of the image, with narrow street views at right.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1NigtgbEtBkoX3wMiWCkXVZiegPGBc9Ea/view?usp=drivesdk","filename":"P14-03.webp","width":960,"height":960},{"id":"P14-04","postId":"P14","slide":4,"title":"Italy in motion","kind":"image","observation":"A red street fixture, a stenciled face, a clock and a yellow building form four quadrants.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/1O8qF25mvGmIJNH9K1N5CCi4iI-jTtIh6/view?usp=drivesdk","filename":"P14-04.webp","width":960,"height":960},{"id":"P14-05","postId":"P14","slide":5,"title":"Italy in motion","kind":"image","observation":"A small vertical photograph centers people in green transit seats within a wide white frame.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1EnrTiBjNj7VVUIKk47dQNXQEisz9HlB8/view?usp=drivesdk","filename":"P14-05.webp","width":960,"height":960},{"id":"P14-06","postId":"P14","slide":6,"title":"Italy in motion","kind":"image","observation":"A cypress and yellow buildings sit under a blue sky edged with small roofline cutouts.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1MLT-svfcLHfjRdgb_uWPxrkmq4IhHxJn/view?usp=drivesdk","filename":"P14-06.webp","width":960,"height":960},{"id":"P14-07","postId":"P14","slide":7,"title":"Italy in motion","kind":"image","observation":"A tiled group of street signs, posters and figures breaks around an ochre panel.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/18NafKT70jJMI39Uo9Qp6dh5AgFJ9eoWL/view?usp=drivesdk","filename":"P14-07.webp","width":960,"height":960},{"id":"P14-08","postId":"P14","slide":8,"title":"Italy in motion","kind":"image","observation":"A walking figure crosses a sunlit street beside three narrow, warm-toned inset views.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/1_E7IvJdcKqo-VdiEwLOZ19ZtY62APYfX/view?usp=drivesdk","filename":"P14-08.webp","width":960,"height":960},{"id":"P14-09","postId":"P14","slide":9,"title":"Italy in motion","kind":"image","observation":"Two large shadows on a pale field sit above six miniature candid photographs.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/1SB_ZSmeCzM3QqBE1YBEB4Bqn8FAAjjYu/view?usp=drivesdk","filename":"P14-09.webp","width":960,"height":960},{"id":"P14-10","postId":"P14","slide":10,"title":"Italy in motion","kind":"image","observation":"A street pole splits a seated figure, with two smaller views overlaid at left.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=10","originalUrl":"https://drive.google.com/file/d/1TBIYqawFbt5iJwGO7dK1zyaAVM4l1LJF/view?usp=drivesdk","filename":"P14-10.webp","width":960,"height":960},{"id":"P14-11","postId":"P14","slide":11,"title":"Italy in motion","kind":"image","observation":"A smaller reproduction of near-touching hands overlays a cool-toned figurative wall painting.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=11","originalUrl":"https://drive.google.com/file/d/1TZ03LhvTUW7SgTCGHVodn3KC91SAUYM_/view?usp=drivesdk","filename":"P14-11.webp","width":960,"height":960},{"id":"P14-12","postId":"P14","slide":12,"title":"Italy in motion","kind":"image","observation":"Three bands of monochrome gallery views move between people, wall art and small details.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=12","originalUrl":"https://drive.google.com/file/d/1hVYM9NKcU4-O5WvVMU1ASoQYHunIGM8X/view?usp=drivesdk","filename":"P14-12.webp","width":960,"height":960},{"id":"P14-13","postId":"P14","slide":13,"title":"Italy in motion","kind":"image","observation":"A distant dome is framed by dark trees, blue sky and three inset roofline views.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=13","originalUrl":"https://drive.google.com/file/d/1WSU9dqXG7w9yPNNM_d7c_UzOJAkAHO4y/view?usp=drivesdk","filename":"P14-13.webp","width":960,"height":960},{"id":"P14-14","postId":"P14","slide":14,"title":"Italy in motion","kind":"image","observation":"Multiple stone figures and close-ups fill the upper and lower halves of a dark collage.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=14","originalUrl":"https://drive.google.com/file/d/1PMs8VH-muQDmS9w528CKTCb91EEFh_P2/view?usp=drivesdk","filename":"P14-14.webp","width":960,"height":960},{"id":"P14-15","postId":"P14","slide":15,"title":"Italy in motion","kind":"image","observation":"A photographed sticker-covered pole divides blocks of graffiti, lettering and orange architecture.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=15","originalUrl":"https://drive.google.com/file/d/1s_DnNRgDs_iIsY0WRq3LiVVWsPy4kEJL/view?usp=drivesdk","filename":"P14-15.webp","width":960,"height":960},{"id":"P14-16","postId":"P14","slide":16,"title":"Italy in motion","kind":"image","observation":"A figure leans on one foot with one arm raised, echoed by a vertical strip of poses.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=16","originalUrl":"https://drive.google.com/file/d/1Nozu0uHZygTRqQlFAsOPyI0oA56mO7tu/view?usp=drivesdk","filename":"P14-16.webp","width":960,"height":960},{"id":"P14-17","postId":"P14","slide":17,"title":"Italy in motion","kind":"image","observation":"Blue sky and a city panorama are overlaid by cropped rooflines and a round blue inset.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=17","originalUrl":"https://drive.google.com/file/d/1417M8_PJZG14ygUS6FX1ABIRojZ7A6xh/view?usp=drivesdk","filename":"P14-17.webp","width":960,"height":960},{"id":"P14-18","postId":"P14","slide":18,"title":"Italy in motion","kind":"image","observation":"Graffiti on a train is layered with stickers and smaller blocks of color and type.","credit":"Posted by @carryistic. Includes museum artwork, sculpture and architecture.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en&img_index=18","originalUrl":"https://drive.google.com/file/d/1ZB9TudiigRoTu3JEL9MZo4OasNHeVG73/view?usp=drivesdk","filename":"P14-18.webp","width":960,"height":960},{"id":"P15-01","postId":"P15","slide":1,"title":"Domus Dei","kind":"image","observation":"Gold mosaics, high windows and a hanging cross appear in overlapping interior views.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en","originalUrl":"https://drive.google.com/file/d/1PRK7twK2ghCBfwHAs79t_OrA7HcaD7Db/view?usp=drivesdk","filename":"P15-01.webp","width":960,"height":960},{"id":"P15-02","postId":"P15","slide":2,"title":"Domus Dei","kind":"image","observation":"Downward shoe views repeat over several different geometries of patterned stone flooring.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en&img_index=2","originalUrl":"https://drive.google.com/file/d/1qvOiIF2X2WB_3L874nPhZ2N6HSwaLrDb/view?usp=drivesdk","filename":"P15-02.webp","width":960,"height":960},{"id":"P15-03","postId":"P15","slide":3,"title":"Domus Dei","kind":"image","observation":"A small vertical architectural photograph places a figure beside columns and a bright passage.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en&img_index=3","originalUrl":"https://drive.google.com/file/d/1Fit9uwXcJzViyhfn4MmWqGagR0Fkf6N0/view?usp=drivesdk","filename":"P15-03.webp","width":960,"height":960},{"id":"P15-04","postId":"P15","slide":4,"title":"Domus Dei","kind":"image","observation":"A gridded arched window reflects blue light into warm gold masonry and inset details.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en&img_index=4","originalUrl":"https://drive.google.com/file/d/10rHQTxCJsnsbfDc0RU-aDAkq0Vr_6BqU/view?usp=drivesdk","filename":"P15-04.webp","width":960,"height":960},{"id":"P15-05","postId":"P15","slide":5,"title":"Domus Dei","kind":"image","observation":"A circular ceiling painting gathers bright figures inside a heavy gold ring.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en&img_index=5","originalUrl":"https://drive.google.com/file/d/1LFGVEOSLIMHDwFyz55Mjp0qZaNgUYEKj/view?usp=drivesdk","filename":"P15-05.webp","width":960,"height":960},{"id":"P15-06","postId":"P15","slide":6,"title":"Domus Dei","kind":"image","observation":"A dark bell tower and a sliver of moon sit in overlapping blocks of dusk blue.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en&img_index=6","originalUrl":"https://drive.google.com/file/d/1jR7v8-wlxExw9gRJpYRVeRi2aEfsHvjr/view?usp=drivesdk","filename":"P15-06.webp","width":960,"height":960},{"id":"P15-07","postId":"P15","slide":7,"title":"Domus Dei","kind":"image","observation":"A gold-rimmed medallion floats above a decorated pointed arch and a field of stars.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en&img_index=7","originalUrl":"https://drive.google.com/file/d/1k2OMz0m_pehgqmAMFbQwvXf_i-qH81FG/view?usp=drivesdk","filename":"P15-07.webp","width":960,"height":960},{"id":"P15-08","postId":"P15","slide":8,"title":"Domus Dei","kind":"image","observation":"Gold portrait medallions and stars repeat around an inset arched window on blue.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en&img_index=8","originalUrl":"https://drive.google.com/file/d/14SXSMVWcs1n5W4JC2cDXKbGSpNE7U19F/view?usp=drivesdk","filename":"P15-08.webp","width":960,"height":960},{"id":"P15-09","postId":"P15","slide":9,"title":"Domus Dei","kind":"image","observation":"A wide dome anchors smaller vertical crops of patterned vaults, arches and ornament.","credit":"Posted by @carryistic. Includes photographs of architectural ornament and religious artwork.","sourceAccount":"@carryistic","instagramUrl":"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en&img_index=9","originalUrl":"https://drive.google.com/file/d/193EL0hb31CaaX_YvTjzooZUHYhrZJl4i/view?usp=drivesdk","filename":"P15-09.webp","width":960,"height":960}]'),cc=new Map(Ci.map((i,e)=>[i.id,e])),Un=new Map;for(const[i,e]of Ci.entries())Un.has(e.postId)||Un.set(e.postId,{first:i,slides:[]}),Un.get(e.postId).slides.push(e);function Us(i){return"#work-"+i}function Rr(){const i=window.location.hash.match(/^#work-(P\d{2}-\d{2})$/)?.[1];return cc.get(i)}function Fd(i,{asset:e,onlineBase:t}){if(!i||!Ci.length)return;i.innerHTML=`
    <div class="collection-layout">
      <nav class="collection-index" aria-label="Choose an artwork">
        <button class="collection-skip" type="button">Go to the current artwork</button>
        <div class="collection-index-head" aria-hidden="true"><span>Work</span><span>Slides</span></div>
        <ol class="collection-works"></ol>
        <label class="collection-mobile-picker"><span>Work</span><select aria-label="Choose an artwork"></select></label>
      </nav>
      <figure class="collection-view" aria-labelledby="collection-title">
        <div class="collection-stage" role="group" tabindex="0" aria-label="Artwork viewer. Use the left and right arrow keys to change slides." aria-keyshortcuts="ArrowLeft ArrowRight"></div>
        <figcaption class="collection-caption">
          <div class="collection-tools">
            <div class="collection-position">
              <a class="collection-id" aria-label="Link to this slide"></a>
              <select class="collection-slide-picker" aria-label="Choose a slide"></select>
            </div>
            <div class="collection-step">
              <button type="button" data-step="-1" aria-label="Previous slide"><span aria-hidden="true">←</span> Prev</button>
              <button type="button" data-step="1" aria-label="Next slide">Next <span aria-hidden="true">→</span></button>
            </div>
          </div>
          <h3 class="collection-title" id="collection-title"></h3>
          <p class="collection-observation" id="collection-observation"></p>
          <details class="collection-sources">
            <summary>Credits &amp; source</summary>
            <p class="collection-credit"></p>
            <div class="collection-links">
              <a data-source="instagram" target="_blank" rel="noreferrer">Instagram post <span class="arrow" aria-hidden="true"></span></a>
              <a data-source="original" target="_blank" rel="noreferrer">Original file <span class="arrow" aria-hidden="true"></span></a>
            </div>
          </details>
        </figcaption>
      </figure>
      <span class="collection-announcement" role="status" aria-atomic="true"></span>
    </div>`;const n=R=>i.querySelector(R),r=n(".collection-view"),s=n(".collection-stage"),a=n(".collection-title"),o=n(".collection-observation"),c=n(".collection-credit"),l=n(".collection-announcement"),d=n(".collection-id"),m=n('[data-source="instagram"]'),h=n('[data-source="original"]'),u=n('[data-step="-1"]'),_=n('[data-step="1"]'),v=n(".collection-works"),p=n(".collection-mobile-picker select"),f=n(".collection-slide-picker"),S=new Map;let P=-1;function y(R){const E="plates/"+R;return window.__carryFiles&&!window.__carryFiles[E]&&t?new URL(E,t.replace(/\/?$/,"/")).href:e(E)}for(const[R,{first:E,slides:L}]of Un){const D=L.length,G=L[0].title,C=document.createElement("li"),z=document.createElement("a"),X=document.createElement("span"),F=document.createElement("span"),j=document.createElement("span");X.className="collection-work-number",j.className="collection-work-count",X.textContent=R.slice(1),F.textContent=G,j.textContent=D,z.href=Us(L[0].id),z.setAttribute("aria-label",G+", "+D+(D===1?" slide":" slides")),z.append(X,F,j),C.append(z),v.append(C),p.add(new Option(G+" ("+D+")",R)),S.set(R,z),z.addEventListener("click",V=>{V.button||V.metaKey||V.ctrlKey||V.shiftKey||V.altKey||(V.preventDefault(),g(E,!0))})}function T(R,E){R.hidden=!E,E?R.href=E:R.removeAttribute("href")}function M(R,E){if(R===P||!Ci[R])return;const L=Ci[P]?.postId;P=R;const D=Ci[R],G=Un.get(D.postId),C=G.slides.length;L!==D.postId&&(L&&S.get(L).removeAttribute("aria-current"),S.get(D.postId).setAttribute("aria-current","true"),p.value=D.postId,f.replaceChildren(...G.slides.map(V=>{const $="Slide "+V.slide+" of "+C+(V.movie?" · video":"");return new Option($,V.id)}))),f.value=D.id,d.href=Us(D.id),d.textContent=D.id,d.setAttribute("aria-label","Link to slide "+D.id),a.textContent=D.title,o.textContent=D.observation,c.textContent=D.credit||D.sourceAccount,T(m,D.instagramUrl),T(h,D.originalUrl);const z=document.activeElement;u.disabled=R===0,_.disabled=R===Ci.length-1,z===_&&_.disabled&&u.focus({preventScroll:!0}),z===u&&u.disabled&&_.focus({preventScroll:!0});const X=s.querySelector("video");X&&(X.pause(),X.removeAttribute("src"),X.load());const F=document.createElement(D.movie?"video":"img"),j=D.title+", slide "+D.slide+" of "+C;D.movie?(F.controls=!0,F.playsInline=!0,F.preload="none",F.poster=y(D.filename),F.src=y(D.movie),F.setAttribute("aria-label",j+", "+Math.round(D.duration)+"-second video")):(F.alt=j,F.loading=E?"eager":"lazy",F.decoding="async",F.src=y(D.filename)),F.width=D.width,F.height=D.height,F.style.setProperty("--collection-aspect",D.width/D.height),F.setAttribute("aria-describedby",o.id),s.replaceChildren(F),r.id="work-"+D.id,E&&(l.textContent=j)}function g(R,E=!1){if(!Ci[R])return;const L=Us(Ci[R].id);if(window.location.hash!==L){const D=E||Rr()===void 0?"pushState":"replaceState";try{window.history[D](window.history.state,"",L)}catch{window.location.hash=L}}M(R,!0)}n(".collection-skip").addEventListener("click",()=>s.focus()),p.addEventListener("change",()=>g(Un.get(p.value).first,!0)),f.addEventListener("change",()=>g(cc.get(f.value)));for(const R of[u,_])R.addEventListener("click",()=>g(P+Number(R.dataset.step)));r.addEventListener("keydown",R=>{R.defaultPrevented||R.isComposing||R.metaKey||R.altKey||R.ctrlKey||R.shiftKey||R.target.closest("a, select, input, textarea, video, summary")||R.key!=="ArrowLeft"&&R.key!=="ArrowRight"||(R.preventDefault(),g(P+(R.key==="ArrowLeft"?-1:1)))});function b(R){const E=Rr();E!==void 0&&(M(E,R),requestAnimationFrame(()=>{Rr()===E&&i.scrollIntoView({block:"start",behavior:"instant"})}))}Rr()===void 0?M(0,!1):b(!1),window.addEventListener("hashchange",()=>b(!0))}const Ns=[{id:"P01",title:"Dusk til Dawn",count:9,credit:"@carryistic",note:"P01-06 shows a body reaching across a projected outline. The finished portrait and photograph keep the ear, jaw and sideward glance.",url:"https://www.instagram.com/carryistic/p/DgLzM60E9bh/?hl=en",folder:"P01 - Dusk til Dawn",image:"archive-p01.webp"},{id:"P02",title:"Blackout photographs",count:13,credit:"@carryistic",note:"The kneeling figure and bouquet can be matched between the isolated cutout and the room photograph. The empty hall on P02-13 supplies a counterweight to the mirrored hat.",url:"https://www.instagram.com/carryistic/p/DfZ2qJ3GdZZ/?hl=en",folder:"P02 - Blackout photographs",image:"archive-p02.webp"},{id:"P03",title:"The Blackout Awaits",count:1,credit:"@carryistic",note:"The physical BLACK OUT flyer above a doorway around 15 seconds reappears in a cluster of flyers around 59 seconds. It creates continuity across spaces.",url:"https://www.instagram.com/carryistic/reel/DfMdUS6BebC/?hl=en",folder:"P03 - The Blackout Awaits",image:"archive-p03.webp"},{id:"P04",title:"Streets of New York",count:10,credit:"@carryistic",note:"The lifted arm and bent leg appear in a source rectangle and again as an enlarged figure. P04-05 moves two faces to opposite corners of a pink field.",url:"https://www.instagram.com/carryistic/p/DeZNIknk4xv/?hl=en",folder:"P04 - Streets of New York",image:"archive-p04.webp"},{id:"P05",title:"Fly",count:6,credit:"@carryistic",note:"Four red hoods descend across the waterfront in P05-01. Their isolated positions in P05-02 become the progressively larger blocks in P05-03.",url:"https://www.instagram.com/carryistic/p/DeN7bsakfqJ/?hl=en",folder:"P05 - Fly",image:"archive-p05.webp"},{id:"P06",title:"DC Chronicles",count:11,credit:"@carryistic",note:"Small figures sit beside tinted photos on dark red. Four versions of the gallery bench in P06-08 flip the orientation of the room.",url:"https://www.instagram.com/carryistic/p/DeN6vX7kcTJ/?hl=en",folder:"P06 - DC Chronicles",image:"archive-p06.webp"},{id:"P07",title:"Proud Daddy",count:12,credit:"@carryistic",note:"The ball, hands and armchair align between reference and painting. P07-02 establishes physical scale. P07-10 places a number 30 jersey beside the canvas.",url:"https://www.instagram.com/carryistic/p/DdtIVSOk4ew/?hl=en",folder:"P07 - Proud Daddy",image:"archive-p07.webp"},{id:"P08",title:"To Bleed in Liquid Gold",count:7,credit:"@20.09.07.29",note:"The camera travels around the heart and support in P08-02. P08-03 reveals the weight of the bead pile. P08-07 looks down on a hand over the same materials.",url:"https://www.instagram.com/20.09.07.29/p/DbwiQZjjIL4/?hl=en",folder:"P08 - To Bleed in Liquid Gold",image:"archive-p08.webp"},{id:"P09",title:"Graphic pose studies",count:14,credit:"@carryistic",note:"The profile with glasses repeats in flat yellow behind the photographic figure. P09-13 places one aisle image in a much larger yellow field.",url:"https://www.instagram.com/carryistic/p/DbqiI-gk2G0/?hl=en",folder:"P09 - Graphic pose studies",image:"archive-p09.webp"},{id:"P10",title:"Record-store portraits",count:12,credit:"@carryistic",note:"Both hands on the red cap survive tinting and repetition. A close photographic match appears across posts in P11-04.",url:"https://www.instagram.com/carryistic/p/DbjsE4DjMr6/?hl=en",folder:"P10 - Record-store portraits",image:"archive-p10.webp"},{id:"P11",title:"Record-store shoot",count:14,credit:"@bigartparty",note:"Hands on the cap in P11-04 and records in front of a face in P11-01 furnish landmarks for the finished layouts in P10-01 and P10-05.",url:"https://www.instagram.com/bigartparty/p/Dbi5gwkoDHN/?hl=en",folder:"P11 - Record-store shoot",image:"archive-p11.webp"},{id:"P12",title:"First Weeks at RISD",count:8,credit:"@20.09.07.29",note:"A three-panel branch study sits on white. The light table, blue tape and outdoor drawing board give a view of how the work is made.",url:"https://www.instagram.com/20.09.07.29/p/Dao-_1IgL5u/?hl=en",folder:"P12 - First Weeks at RISD",image:"archive-p12.webp"},{id:"P13",title:"Artful and Grateful",count:9,credit:"@carryistic",note:"A portrait against clouds gathers smaller photographs on a white ground. P13-06 keeps a single sharp flame over its soft reflection.",url:"https://www.instagram.com/carryistic/p/Dao-YatDakE/?hl=en",folder:"P13 - Artful and Grateful",image:"archive-p13.webp"},{id:"P14",title:"Italy in motion",count:18,credit:"@carryistic",note:"P14-16 brackets a balancing gallery pose with smaller views. P14-05 gives the transit photograph a broad white surround.",url:"https://www.instagram.com/carryistic/p/DaWhProkRja/?hl=en",folder:"P14 - Italy in motion",image:"archive-p14.webp"},{id:"P15",title:"Domus Dei",count:9,credit:"@carryistic",note:"P15-02 places shoe views over patterned floors. P15-07 aligns a round gold medallion above a pointed arch. The white mat on P15-03 isolates one interior.",url:"https://www.instagram.com/carryistic/p/DaUPdTrEdoy/?hl=en",folder:"P15 - Domus Dei",image:"archive-p15.webp"}],Od=5,kd=4,Bd=20,zd=640,Gd=360,Hd=30,Vd=[1375,1379,1382,1386,1389,1393,1396,1400,1404,1407,1411,1414,1418,1422,1425,1429,1432,1436,1439,1443],Ot={columns:Od,rows:kd,count:Bd,frameWidth:zd,frameHeight:Gd,sourceFps:Hd,sourceFrames:Vd},Ue=(i,e=document)=>e.querySelector(i),gn=(i,e=document)=>[...e.querySelectorAll(i)],fr=i=>window.__carryFiles?.[i]??new URL(i,document.baseURI).href,Qi=i=>fr("art/"+i);for(const i of gn("img[data-art]"))i.src=Qi(i.dataset.art);for(const i of gn("[data-ink]"))i.style.setProperty("--type-source",`url("${Qi(i.dataset.ink)}")`);for(const i of gn("[data-repo]"))i.href=dn+"/tree/main/"+i.dataset.repo;function ke(i,e,t){const n=document.createElement(i);return e!==void 0&&(n.textContent=e),t&&(n.className=t),n}function Zi(i,e){const t=ke("a",i.replace(/\s*↗$/,"")),n=ke("span",void 0,"arrow");return n.setAttribute("aria-hidden","true"),t.append(" ",n),t.href=e,t.target="_blank",t.rel="noreferrer",t}function dc(i,e){const t=ke("img");return t.src=Qi(i),t.alt=e,t.loading="lazy",t}const $t=Ue("#detail-dialog"),pa=Ue("#dialog-content");let ns=null;function yr(i,e,t,n){ys(),et&&li(et),ns=n||document.activeElement,pa.replaceChildren(ke("p",e,"kicker"));const r=ke("h2",i);r.id="dialog-title",pa.append(r,...t),$t.open||$t.showModal(),$t.scrollTop=0}Ue(".dialog-close",$t).addEventListener("click",()=>$t.close());$t.addEventListener("click",i=>{i.target===$t&&$t.close()});$t.addEventListener("close",()=>{pa.querySelectorAll("video").forEach(i=>i.pause()),ns instanceof HTMLElement&&ns.isConnected&&ns.focus({preventScroll:!0})});function Wd(i){const e=ke("div",void 0,"detail-pictures");for(const[t,n]of i){const r=ke("figure");r.append(dc(t,n),ke("figcaption",n)),e.append(r)}return e}function Xd(i,e){const t=ke("p",void 0,"dialog-links");t.append(Zi("Source post ↗",i.url),Zi("Slide index ↗",dn+"/blob/main/archive/Image%20index.csv")),yr(i.title,i.medium,[ke("p",i.note),Wd(i.pictures),ke("p",i.credit),t],e)}for(const i of Nd){const e=ke("button",void 0,"work-card");e.type="button";const t=ke("span",void 0,"work-thumb");t.append(dc(i.image,"")),e.append(t,ke("strong",i.title),ke("small",i.medium)),e.addEventListener("click",()=>Xd(i,e)),Ue("#works").append(e)}Ue("#browse-archive").addEventListener("click",i=>{const e=ke("div",void 0,"archive-controls"),t=ke("button","←");t.setAttribute("aria-label","Previous post");const n=ke("select");n.setAttribute("aria-label","Choose an archive post"),Ns.forEach((d,m)=>n.add(new Option(`${d.id} · ${d.title}`,String(m))));const r=ke("button","→");r.setAttribute("aria-label","Next post"),e.append(t,n,r);const s=ke("img",void 0,"archive-sheet"),a=ke("p",void 0,"archive-credit"),o=ke("p"),c=ke("p",void 0,"dialog-links"),l=d=>{const m=Ns[d];n.value=String(d),t.disabled=d===0,r.disabled=d===Ns.length-1,s.src=Qi(m.image),s.alt=`${m.title}, ${m.count} published ${m.count===1?"position":"positions"} in reading order.`,a.textContent=`${m.id} · Posted by ${m.credit}`,o.textContent=m.note,c.replaceChildren(Zi("Original post ↗",m.url),Zi("Full-resolution files ↗",dn+"/tree/main/archive/artworks/"+encodeURIComponent(m.folder)))};n.addEventListener("change",()=>l(Number(n.value))),t.addEventListener("click",()=>l(Number(n.value)-1)),r.addEventListener("click",()=>l(Number(n.value)+1)),l(0),yr("All 15 posts","Source archive",[e,s,a,o,c],i.currentTarget)});const ni=Ue("#afterimage"),hn=Ue("#film-stage"),mt=Ue("#enter-film");let ln=!1;const hc=Ue(".film-player"),lo=matchMedia("(prefers-reduced-motion: reduce)"),qd=Ue(".film-title",mt),Yd=Ue(".cover-image",mt);mt.addEventListener("pointermove",i=>{if(i.pointerType==="touch"||lo.matches)return;const e=qd.getBoundingClientRect(),t=Math.max(0,Math.min(1,(i.clientX-e.left)/e.width));mt.style.setProperty("--revealed",(t*100).toFixed(1)+"%");const n=Yd.getBoundingClientRect(),r=(i.clientX-n.left)/n.width;mt.style.setProperty("--window-x",(r*100).toFixed(1)+"%"),mt.classList.toggle("has-window",r>.08&&r<.98&&i.clientY<e.top)});mt.addEventListener("pointerleave",()=>{mt.style.removeProperty("--revealed"),mt.classList.remove("has-window")});mt.addEventListener("focus",()=>{mt.matches(":focus-visible")&&mt.style.setProperty("--revealed","70%")});mt.addEventListener("blur",()=>mt.style.removeProperty("--revealed"));let uc;function un(){clearTimeout(uc),hn.classList.remove("is-opening","is-revealing"),mt.hidden=ln}function ys(){for(const i of gn("video"))i.paused||i.pause();ln&&hn.classList.contains("is-opening")&&un()}function co(){ln=!1,ni.pause(),un(),hc.hidden=!0,mt.disabled=!1,hn.classList.remove("is-playing"),mt.focus({preventScroll:!0})}function Zd(){if(!ln){if(et&&li(et),!ni.getAttribute("src")){const i=document.createElement("track");i.kind="captions",i.label="English · sound cues",i.srclang="en",i.src=fr("film/afterimage.en.vtt"),ni.append(i),ni.src=fr("film/afterimage.mp4")}ln=!0,mt.disabled=!0,hc.hidden=!1,hn.classList.add("is-playing","is-opening"),ni.ended&&(ni.currentTime=0),lo.matches&&un(),ni.play().catch(()=>{ln&&un()}),ni.focus({preventScroll:!0})}}document.addEventListener("play",i=>{if(i.target instanceof HTMLMediaElement){for(const e of gn("video"))e!==i.target&&!e.paused&&e.pause();et&&li(et)}},!0);ni.addEventListener("playing",()=>{if(hn.classList.contains("is-opening")){if(lo.matches)return un();hn.classList.add("is-revealing"),uc=setTimeout(un,560)}});ni.addEventListener("error",un);mt.addEventListener("click",Zd);Ue("#close-film").addEventListener("click",co);document.addEventListener("keydown",i=>{i.key==="Escape"&&ln&&!$t.open&&!document.fullscreenElement&&co()});ni.addEventListener("ended",()=>{const i=hn.getBoundingClientRect();$t.open||et||i.bottom<innerHeight*.18||i.top>=innerHeight||(co(),Ue("#spatial-studies").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}))});function Kd(i){const e=ke("ul");for(const n of["Carry posted the paintings, Fly photo compositions and graphic edits under @carryistic.","The sculpture and drawing posts were published by @20.09.07.29 and appear on Carry’s grid.","The record-store series credits @bigartparty for photography. The companion shoot credits @ca.m.z for help taking photographs.","The film edit, wordless stereo score and spatial staging were made for this portfolio from the credited works."])e.append(ke("li",n));const t=ke("p",void 0,"dialog-links");t.append(Zi("Film ledger ↗",dn+"/blob/main/film/shots.csv"),Zi("Source archive ↗",dn+"/tree/main/archive")),yr("Credits","Source and interpretation",[e,t],i)}for(const i of gn("[data-open]"))i.addEventListener("click",()=>{if(i.dataset.open==="credits")return Kd(i);const e=ke("ol");for(const s of["00:00 · The eye moves from photograph to pencil to paint.","00:04 · Four figures fall out of the waterfront and into blocks.","00:09 · The blue block opens on a red cap. Its printed echoes lift to reveal the camera frame.","00:12 · Two hands hold the records. The picture turns around the red label and opens on a gold rim.","00:17 · A basketball returns the dream to the painting and its maker."])e.append(ke("li",s));const t=ke("details",void 0,"material-test");t.append(ke("summary","See the four-second Higgsfield material test"));const n=ke("video");n.controls=!0,n.playsInline=!0,n.preload="none",n.poster=Qi("liquid-detail.webp"),n.setAttribute("aria-label","Silent generated camera study of the sculpture’s red beads"),t.addEventListener("toggle",()=>{t.open&&!n.hasAttribute("src")&&(n.src=fr("film/bead-study.mp4")),t.open||n.pause()}),t.append(n,ke("p","Seedance follows the hanging beads to the right. In the finished film, the camera tracks down Carry’s photograph into the bead pile just before the ball drops."));const r=ke("p",void 0,"dialog-links");r.append(Zi("Shot ledger ↗",dn+"/blob/main/film/shots.csv"),Zi("Higgsfield bead test ↗",dn+"/tree/main/film/experiments")),yr("Afterimage","Opening film · 22 seconds",[ke("p","The same eye holds through a photograph, a pencil line and layers of oil. Later, a record label leads to a gold rim and the basketball. Listen for the bead taps just before the bounce."),e,t,r],i)});const fc="carryistic.dream-note.v1";let Qt={version:1,note:"",views:{}};try{const i=localStorage.getItem(fc);i&&(Qt=bs(JSON.parse(i)))}catch{}function ho(){try{localStorage.setItem(fc,JSON.stringify(Qt))}catch{}}let Jo;function pr(i){const e=Ue("#toast");e.textContent=i,e.classList.add("visible"),clearTimeout(Jo),Jo=setTimeout(()=>e.classList.remove("visible"),2400)}const Ms=new Map;let et=null,sr=0;const Jd={gesture:6200,room:7800,object:6e3},pc="IntersectionObserver"in window?new IntersectionObserver(i=>{for(const e of i)!e.isIntersecting&&et?.section===e.target&&li(et)}):null;function uo(i){const e=et===i,t=e?"Pause":i.value===100?"Replay":"Play";i.play.setAttribute("aria-label",t+" "+ur[i.kind]),i.play.setAttribute("aria-pressed",String(e)),Ue("span",i.play).textContent=t+" study"}function li(i){et===i&&(cancelAnimationFrame(sr),sr=0,et=null,i.fromHere=!0,pc?.unobserve(i.section),uo(i))}function ma(i){if(et!==i||sr||!(i.ready||i.staticOnly))return;const e=i.position;let t;function n(r){if(et!==i)return;t??=r;const s=e+(r-t)*100/Jd[i.kind];Es(i,s),s>=100?li(i):sr=requestAnimationFrame(n)}sr=requestAnimationFrame(n)}function $d(i){if(et===i)return li(i);ys(),et&&li(et),(!i.fromHere||i.value===100)&&Es(i,0),et=i,uo(i),pc?.observe(i.section),po(i),ma(i)}document.addEventListener("visibilitychange",()=>{document.hidden&&et&&li(et)});function mc(i){const e=Qt.views[i.kind]===i.value;i.pin.setAttribute("aria-pressed",String(e)),i.pin.textContent=e?"View remembered ✓":"Remember this view ＋"}function fo(){const i=Ue("#pins");i.replaceChildren();for(const e of oc){const t=Qt.views[e],n=Ms.get(e);if(n&&mc(n),t===void 0)continue;const r=ke("span",ur[e]+" · "+t+"%","pin-chip"),s=ke("button","×");s.type="button",s.setAttribute("aria-label","Remove remembered "+ur[e]+" view"),s.addEventListener("click",()=>{delete Qt.views[e],ho(),fo(),mo()}),r.append(s),i.append(r)}}const Qd={gesture:["fly-water.webp","fly-figures.webp","fly-blocks.webp"],room:["blackout-cut.webp","blackout-room-inset.webp","blackout-hall.webp"],object:["liquid-front.webp","liquid-rim.webp","liquid-detail.webp"]};function gc(i){const e=Ue(".scene-fallback img",i.section),t=i.value,n=Qd[i.kind][t<34?0:t<67?1:2];e.dataset.art!==n&&(e.dataset.art=n,e.src=Qi(n))}function jd(i,e){if(i==="gesture")return e+"% separated";if(i==="object")return e+"% through the camera arc";const t=e<18?"paper cutout":e<48?"room emerging":e<57?"bouquet photograph":e<95?"three panels opening":"empty hall";return e+"% · "+t}function Es(i,e){i.position=Math.max(0,Math.min(100,e)),i.renderer?.setProgress(i.position/100);const t=Math.round(i.position);i.value!==t&&(i.value=t,i.section.style.setProperty("--revealed",t+"%"),i.range.value=String(t),i.output.textContent=t+"%",i.range.setAttribute("aria-valuetext",jd(i.kind,t)),i.ready||gc(i),mc(i),et!==i&&uo(i))}function ga(i,e){ys(),et&&li(et),i.fromHere=!0,Es(i,e)}async function po(i){if(i.loading)return;i.loading=!0;const e=Ue(".scene-mode",i.scene),t=()=>{i.ready=!0,i.scene.classList.add("ready"),e.textContent="",ma(i)};function n(){i.ready=!1,i.scene.classList.remove("ready"),e.textContent="Source image sequence",i.staticOnly=!0,gc(i),ma(i)}function r(o,c,l){i.renderer=o(c,i.kind,{assetUrl:Qi,onReady:t,onError:l}),i.renderer.setProgress(i.position/100),i.renderer.resize()}let s=!1;async function a(){if(s)return;s=!0,i.renderer?.dispose(),i.renderer=null,i.ready=!1,i.scene.classList.remove("ready");const o=Ue("canvas",i.scene),c=o.cloneNode(!1);o.replaceWith(c);try{const{createFallback:l}=await Ls(async()=>{const{createFallback:d}=await Promise.resolve().then(()=>tl);return{createFallback:d}},void 0,import.meta.url);r(l,c,n)}catch{n()}}try{if(i.kind==="room"){const{createFallback:c}=await Ls(async()=>{const{createFallback:l}=await Promise.resolve().then(()=>tl);return{createFallback:l}},void 0,import.meta.url);r(c,Ue("canvas",i.scene),n);return}const{createStudy:o}=await Ls(async()=>{const{createStudy:c}=await Promise.resolve().then(()=>m_);return{createStudy:c}},void 0,import.meta.url);r(o,Ue("canvas",i.scene),a)}catch{i.kind==="room"?n():await a()}}function _c(i,e,t,n){let r;i.addEventListener("pointerdown",s=>{s.button===0&&(r={id:s.pointerId,x:s.clientX,y:s.clientY,start:e(),active:!1})}),i.addEventListener("pointermove",s=>{if(!r||s.pointerId!==r.id)return;const a=s.clientX-r.x,o=s.clientY-r.y;if(!r.active&&Math.abs(o)>Math.abs(a)&&Math.abs(o)>9){r=null;return}!r.active&&Math.abs(a)>5&&(r.active=!0,i.setPointerCapture(s.pointerId)),r.active&&(s.preventDefault(),t(r.start+a*n/Math.max(i.clientWidth*.7,1)))});for(const s of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(s,()=>{r=null})}const Wn=Ue("#print-landscape"),kn=Ue("#print-frame"),eh=Ue("#print-time");Wn.style.aspectRatio=Ot.frameWidth+" / "+Ot.frameHeight;Wn.style.backgroundSize=`${Ot.columns*100}% ${Ot.rows*100}%`;kn.max=String(Ot.count-1);function vc(i){const e=Math.max(0,Math.min(Ot.count-1,Math.round(i))),t=e%Ot.columns,n=Math.floor(e/Ot.columns);Wn.style.backgroundPosition=`${100*t/Math.max(1,Ot.columns-1)}% ${100*n/Math.max(1,Ot.rows-1)}%`;const r=Ot.sourceFrames[e]/Ot.sourceFps;kn.value=String(e),eh.textContent=r.toFixed(2)+" s",kn.setAttribute("aria-valuetext",`Frame ${e+1} of ${Ot.count}, ${r.toFixed(2)} seconds into the original film`)}function xc(i){ys(),et&&li(et),vc(i)}function $o(){Wn.style.backgroundImage=`url("${Qi("blackout-print-strip.webp")}")`}if("IntersectionObserver"in window){const i=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&($o(),i.disconnect())},{rootMargin:"350px"});i.observe(Wn)}else $o();vc(Math.round((Ot.count-1)*.55));kn.addEventListener("input",()=>xc(Number(kn.value)));_c(Wn,()=>Number(kn.value),xc,Ot.count-1);const _a="IntersectionObserver"in window?new IntersectionObserver(i=>{for(const e of i)if(e.isIntersecting){const t=Ms.get(e.target.dataset.kind);po(t),_a.unobserve(e.target)}},{rootMargin:"180px 0px"}):null;for(const i of gn(".study[data-kind]")){const e=i.dataset.kind,t=Ue(".scrub",i),n=Ue(".scene",i),r={kind:e,section:i,scene:n,range:t,output:Ue("output",i),pin:Ue(".pin",i),play:Ue(".motion-toggle",i),value:null,position:0,fromHere:!1,ready:!1,staticOnly:!1,loading:!1,renderer:null};Ms.set(e,r),Es(r,Number(t.value)),t.addEventListener("input",()=>ga(r,Number(t.value))),r.play.addEventListener("click",()=>$d(r)),r.pin.addEventListener("click",()=>{et&&li(et),Qt.views[e]=r.value,ho(),fo(),mo(),pr("View added to your note")}),_c(n,()=>r.value,s=>ga(r,s),100),_a?_a.observe(i):po(r)}fo();const us=Ue("#reflection");us.value=Qt.note;function mo(){Ue("#share-result").hidden=!0}us.addEventListener("input",()=>{Qt.note=us.value,ho(),mo()});function th(){return!!(Qt.note.trim()||Object.keys(Qt.views).length)}function wc(){return th()?!0:(Ue("#response-status").textContent="Write a thought or remember a view first.",us.focus(),!1)}Ue("#response-form").addEventListener("submit",i=>{if(i.preventDefault(),!wc())return;const t=(location.protocol==="file:"?lc:location.origin+location.pathname).split("#")[0]+"#response="+Ld(Qt);Ue("#response-link").value=t,Ue("#share-result").hidden=!1,Ue("#response-status").textContent="Ready to send to your director. Anyone holding this response link can read the included note.",Ue("#response-link").focus(),Ue("#response-link").select()});Ue("#copy-response").addEventListener("click",async()=>{const i=Ue("#response-link");i.focus(),i.select();try{await navigator.clipboard.writeText(i.value),pr("Response link copied")}catch{document.execCommand("copy")?pr("Response link copied"):Ue("#response-status").textContent="The link is selected. Copy it to share your response."}});Ue("#download-note").addEventListener("click",()=>{if(!wc())return;const i=JSON.stringify(bs(Qt),null,2),e=URL.createObjectURL(new Blob([i],{type:"application/json"})),t=ke("a");t.href=e,t.download="carryistic-reflection.json",document.body.append(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(e),1500),pr("Response file prepared")});function Sc(){const i="#response=";if(location.hash.startsWith(i))try{const e=Ud(location.hash.slice(i.length)),t=[];e.note&&t.push(ke("p",e.note,"shared-note"));for(const[n,r]of Object.entries(e.views)){const s=ke("button","Open "+ur[n]+" at "+r+"% →","underlink");s.type="button",s.addEventListener("click",()=>{$t.close();const a=Ms.get(n);ga(a,r),a.section.scrollIntoView(),a.range.focus({preventScroll:!0})}),t.push(s)}t.length||t.push(ke("p","This response has no saved views or text.")),yr("A response","Artist’s notebook",t)}catch{pr("This response link could not be read.")}}Fd(Ue("#collection"),{asset:fr,onlineBase:lc});Sc();window.addEventListener("hashchange",Sc);const ih=1080,nh=[128,104,296,618],rh=[508,450,445,548],sh=[237,170,606,733],ah={scale:.749849576,x:134.751865,y:135.211213},oh={size:ih,silhouetteRect:nh,figureRect:rh,roomInsetRect:sh,cutToRoom:ah},lh=["blackout-silhouette.webp","blackout-aperture.webp","blackout-kneeling.webp","blackout-room.webp","blackout-hall.webp"],Fs=new WeakMap,{size:Gt,silhouetteRect:rs,figureRect:ch,roomInsetRect:dh,cutToRoom:ir}=oh,Qo=[0,468/1080,748.5/1080,1],on=(i,e,t)=>i+(e-i)*t;function Nn(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function hh(i){if(Fs.has(i))return Fs.get(i);const e=document.createElement("canvas");e.width=e.height=Gt;const t=e.getContext("2d");return t.drawImage(i["blackout-silhouette.webp"],...rs),t.globalCompositeOperation="lighter",t.drawImage(i["blackout-aperture.webp"],...rs),t.globalCompositeOperation="source-out",t.fillStyle="#fff",t.fillRect(0,0,Gt,Gt),t.globalCompositeOperation="lighter",t.drawImage(i["blackout-silhouette.webp"],...rs),Fs.set(i,e),e}function uh(i,e,t,n,r){const s=Nn(.5,.98,n),a=on(Math.min(t*.83,e*.72),Math.max(e,t)*1.01,s),o=on(e*.61,e*.5,s)-a/2,c=on(t*.54,t*.58,s)-a*on(.5,.61,s),l=i.createLinearGradient(0,0,e,t);l.addColorStop(0,"#222223"),l.addColorStop(.55,"#393633"),l.addColorStop(1,"#151518"),i.fillStyle=l,i.fillRect(0,0,e,t),i.fillStyle="#77736e",i.fillRect(o-1,c-1,a+2,a+2),i.drawImage(r,o,c,a,a),i.fillStyle="rgba(21,20,23,"+.48*(1-s)+")",i.fillRect(o,c,a,a)}function Cr(i,e,t,n,r,s,a){const o=i-n,c=1/(1-Math.abs(o)*Math.sin(r)/(Gt*1.6)),l=(e+t)/2;return{x:n+s+o*Math.cos(r)*c,top:l+(e-l)*c+a,bottom:l+(t-l)*c+a}}function fh(i,e,t,n,r,s,a,o){const c=a===2?1:-1,l=c<0?t:n,d=o*1.37,m=c*Gt*(a===1?2.2:1.8)*o**1.8,h=(a-1.4)*Gt*.055*o,u=n-t,_=Cr(t,r,s,l,d,m,h),v=Cr(n,r,s,l,d,m,h),p=Math.abs(_.bottom-_.top-(v.bottom-v.top)),f=Math.min(72,Math.max(1,Math.ceil(p/1.5)));if(i.save(),i.beginPath(),i.moveTo(_.x,_.top),i.lineTo(v.x,v.top),i.lineTo(v.x,v.bottom),i.lineTo(_.x,_.bottom),i.closePath(),i.clip(),i.fillStyle="#fff",i.fill(),f>1){const S=Math.min(_.top,v.top),P=Math.max(_.bottom,v.bottom)-S;i.drawImage(e,t,r,u,s-r,_.x,S,v.x-_.x,P)}for(let S=0;S<f;S++){const P=t+u*S/f,y=t+u*(S+1)/f,T=Cr(P,r,s,l,d,m,h),M=Cr(y,r,s,l,d,m,h);i.save(),i.transform(M.x-T.x,M.top-T.top,0,T.bottom-T.top,T.x,T.top);const g=S===f-1?0:Math.min(1.5,3/(M.x-T.x));i.drawImage(e,P,r,(y-P)*(1+g),s-r,0,0,1+g,1),i.restore()}o>0&&(i.fillStyle="rgba(21,18,19,"+.31*Math.sin(d)+")",i.fill()),i.restore()}function ph(i,e,t){const[n,r,s,a]=dh,o=Gt*.029,c=n-o,l=r-o,d=s+2*o,m=a+2*o;if(t<.57){i.drawImage(e,c,l,d,m,c,l,d,m);return}for(let h=0;h<3;h++){const u=Nn(.57+h*.044,.86+h*.044,t);u>=1||fh(i,e,c+Qo[h]*d,c+Qo[h+1]*d,l,l+m,h,u)}}function mh(i,e,t){const n=Nn(.17,.52,t);if(i.save(),i.translate(ir.x,ir.y),i.scale(ir.scale,ir.scale),n<1){i.save(),i.translate(-Gt*1.82*n,-Gt*.065*n),i.rotate(-.13*n),i.scale(1-.34*n,1+.035*n);const[r,s,a,o]=rs,c=Nn(.015,.21,t);i.save(),i.beginPath(),i.rect(0,0,Gt,Gt),i.clip(),i.fillStyle="#fff",i.fillRect(r-2,s+(o+3)*c-2,a+4,o+4),i.restore(),i.drawImage(hh(e),0,0),i.restore()}i.globalAlpha=1-Nn(.39,.5,t),i.drawImage(e["blackout-kneeling.webp"],...ch),i.restore()}function gh(i,e,t,n,r){uh(i,e,t,n,r["blackout-hall.webp"]);const s=Nn(.12,.5,n),a=Math.min(t*.86,e*.77),o=Math.min(t*1.15,e*1.08),c=on(a/ir.scale,o,s)/Gt;i.save(),i.translate(e*on(.46,.52,s),t*.515),i.rotate(on(-.035,0,s)),i.scale(c,c),i.translate(-Gt/2,-Gt/2),ph(i,r["blackout-room.webp"],n),n<.52&&mh(i,r,n),i.restore()}const bc=[{crop:[0,280,225,270],loose:[-1.38,1.27,.1],block:[0,324,87,104],step:[.14,1.46,-.9],colors:["#b8b9b4","#e0e1d8","#92958d"]},{crop:[214,409,320,318],loose:[-.43,.68,.74],block:[128,427,164,165],step:[1.04,.98,-.42],colors:["#c21302","#f46a43","#912209"]},{crop:[368,622,296,368],loose:[.59,.02,1.28],block:[333,557,255,256],step:[2.08,.33,.05],colors:["#a1a707","#d2d632","#78800c"]},{crop:[522,844,454,393],loose:[1.85,-.74,1.75],block:[640,768,384,384],step:[3.25,-.58,.43],colors:["#0a80da","#6ec6f1","#075b9b"]}],vn=[[109,29,396,347],[99,17,398,346],[110,20,415,352],[86,6,403,350],[75,0,408,350],[56,0,405,370],[69,0,424,368],[100,0,436,356],[127,0,447,352],[131,0,447,337],[149,0,447,333],[189,0,447,403],[187,25,447,447],[169,40,447,437],[168,42,447,426],[169,41,447,423],[142,39,447,426],[141,42,447,421],[161,30,447,397],[182,48,447,406],[170,72,447,422],[131,68,383,409],[125,49,373,384],[128,36,375,369]],_h=["fly-water.webp","fly-cut-paper.webp","fly-blocks.webp",...bc.map((i,e)=>`pose-${e+1}.webp`)],vh=["liquid-arc.webp","liquid-relief-arc.webp","liquid-detail.webp","liquid-rim.webp"],As=(i,e,t)=>Math.max(e,Math.min(t,i)),pt=(i,e,t)=>i+(e-i)*t;function Ft(i,e,t){const n=As((t-i)/(e-i),0,1);return n*n*(3-2*n)}function yc(i,e,t,n,r,s,a,o,c){const l=Math.min(e/t,i/n),d=Math.cos(r),m=Math.sin(r),h=Math.cos(s),u=Math.sin(s);return(_,v,p)=>{_-=a,v-=o;const f=_*m+p*d,S=v*u+f*h,P=l/Math.max(.6,1-S*c);return{x:i/2+(_*d-p*m)*P,y:e/2-(v*h-f*u)*P,depth:S,scale:P}}}function fs(i,e,t=!0){i.beginPath(),i.moveTo(e[0].x,e[0].y);for(let n=1;n<e.length;n++)i.lineTo(e[n].x,e[n].y);t&&i.closePath()}function oi(i,e,t,n=1){n<=1e-4||(i.save(),i.globalAlpha=n,i.fillStyle=t,fs(i,e),i.fill(),i.restore())}function Mc(i){return[0,0,i.naturalWidth||i.width,i.naturalHeight||i.height]}function mr(i,e,t,n=1,r=Mc(e)){if(n<=.001)return;const[s,a,,o]=t;i.save(),i.globalAlpha=n,i.transform(a.x-s.x,a.y-s.y,o.x-s.x,o.y-s.y,s.x,s.y),i.drawImage(e,...r,0,0,1,1),i.restore()}function Bn(i,e,t,n,r,s,a=0,o=0){const c=Math.cos(a),l=-Math.sin(a),d=Math.cos(o),m=Math.sin(o),h=(u,_)=>{const v=u*d-_*m;return i(e+v*c,t+u*m+_*d,n+v*l)};return[h(-r/2,s/2),h(r/2,s/2),h(r/2,-s/2),h(-r/2,-s/2)]}function Ec(i,e,t,n){const r=i.createLinearGradient(e*.07,0,e*.84,t);for(const[s,a]of n.entries())r.addColorStop(s/(n.length-1),a);i.fillStyle=r,i.fillRect(0,0,e,t)}function ar(i,e,t,n,r,s="52,75,88"){if(r<=.001)return;i.save(),i.translate(e.x,e.y),i.scale(Math.max(1,t*e.scale),Math.max(1,n*e.scale));const a=i.createRadialGradient(0,0,0,0,0,1);a.addColorStop(0,`rgba(${s},${r})`),a.addColorStop(.5,`rgba(${s},${r*.53})`),a.addColorStop(1,`rgba(${s},0)`),i.fillStyle=a,i.fillRect(-1,-1,2,2),i.restore()}function jo([i,e,t,n]){const r=.004046875;return{x:(i+t/2-640)*r,y:(640-e-n/2)*r,w:t*r,h:n*r}}function xh(i,e,t,n,r){const s=Ft(.005,.5,n),a=1-Ft(.53,.84,n);if(a<.001)return;const o=5.18*pt(1,.73,s),c=-2.42*r*s,l=.18*s,d=-1.46*s,m=1-Ft(.009,.13,n);for(const h of[0,1]){const u=(h===0?-.34:.13)*s,_=(h===0?-1:1)*o/2,v=.037*s,p=(M,g)=>e(c+Math.cos(u)*M,l+g+M*v,d-Math.sin(u)*M-.04*s*g),f=h===0?_:0,S=h===0?0:_,P=o/2,y=[p(f,P),p(S,P),p(S,-P),p(f,-P)],T=y.map(M=>({...M,y:M.y+Math.min(3,s*M.scale*.031)}));oi(i,T,"#a2a7a3",a),oi(i,y,h===0?"#fbfbf1":"#eeeede",a);for(const[M,g]of[["fly-cut-paper.webp",1],["fly-water.webp",m]]){const b=t[M],[,,R,E]=Mc(b);mr(i,b,y,g*a,[h*R/2,0,R/2,E])}h===1&&oi(i,y,"#384b58",a*s*.063)}}function wh(i,e,t,n,r,s,a,o,c,l,d,m){if(m<.002)return;const h=Math.cos(c),u=Math.sin(c),_=Math.cos(l),v=Math.sin(l),p=(P,y,T)=>{const M=y*_-T*v,g=y*v+T*_;return e(t+P*h+g*u,n+M,r-P*u+g*h)},f=[[-1,1,1],[1,1,1],[1,-1,1],[-1,-1,1],[-1,1,-1],[1,1,-1],[1,-1,-1],[-1,-1,-1]].map(([P,y,T])=>p(P*s/2,y*a/2,T*o/2)),S=[[[0,1,2,3],d[0]],[[5,4,7,6],d[2]],[[4,0,3,7],d[2]],[[1,5,6,2],d[2]],[[4,5,1,0],d[1]],[[3,2,6,7],d[2]]];for(const[P,y]of S){const T=P.map(g=>f[g]);(T[1].x-T[0].x)*(T[2].y-T[0].y)-(T[1].y-T[0].y)*(T[2].x-T[0].x)>0&&oi(i,T,y,m)}}function Sh(i,e,t,n,r){const s=Ft(.015,.41,n)*(1-Ft(.63,.985,n)),a=As(e/t/1.48,.73,1),o=.235*s,c=.225*s,l=yc(e,t,pt(5.64,6.1,s),pt(5.68,8.78*a,s),o,c,-.05*s,-.2*s,.017*s);Ec(i,e,t,["#d3e4ec","#e4edec","#eceddf"]);const d=-2.68;if(s>.01){i.save(),i.lineWidth=.7,i.strokeStyle=`rgba(91,121,131,${.14*s})`;for(let u=-8;u<=8;u++){const _=u*1.22;for(const v of[[[_,d,-9],[_,d,7]],[[-12,d,_],[12,d,_]]])fs(i,v.map(p=>l(...p)),!1),i.stroke()}i.restore()}ar(i,l(-1.2,d,-.35),2.95,.22,.15*s);const m=Ft(.62,.985,n),h=[{depth:-2,draw:()=>xh(i,l,r,n,a)}];if(n>.66){const u=Bn(l,0,0,-.12,5.18,5.18);h.push({depth:-.18,draw:()=>oi(i,u,"#fff",Ft(.67,.95,n))})}bc.forEach((u,_)=>{const v=jo(u.crop),p=jo(u.block),f=Ft(.018+_*.012,.45+_*.025,n),S=Ft(.57+_*.02,.87+_*.014,n),[P,y,T]=u.loose,M=pt(pt(v.x,P*a,f),p.x,S),g=pt(pt(v.y,y,f),p.y,S),b=pt(pt(.018+_*.002,T,f),.09,S),R=l(M,g,b),E=pt(1,1.46+_*.06,f)*pt(1,.68,S)*R.scale,L=Ft(.006,.115,n)*(1-Ft(.63+_*.023,.82+_*.02,n));ar(i,l(M+.12,d,b-.08),v.w*.95,v.w*.2,.19*L*s),L>.001&&h.push({depth:R.depth,draw:()=>{i.save(),i.globalAlpha=L,i.drawImage(r[`pose-${_+1}.webp`],R.x-v.w*E/2,R.y-v.h*E/2,v.w*E,v.h*E),i.restore()}});const D=Ft(.24+_*.031,.57+_*.028,n),[G,C,z]=u.step,X=pt(G*a,p.x,m),F=pt(C-.38*(1-D),p.y,m),j=pt(z,-.005,m),V=pt(.36,1.02,D),$=D*(1-Ft(.95,.995,n));ar(i,l(X+.07,d,j-.09),p.w*1.12,p.w*.21,.18*$*s),h.push({depth:l(X,F,j).depth,draw:()=>wh(i,l,X,F,j,p.w*V,p.h*V,p.w*.79*V*pt(1,.018,m),-.57*(1-m),.18*(1-m),u.colors,$)})}),h.sort((u,_)=>u.depth-_.depth).forEach(u=>u.draw()),mr(i,r["fly-blocks.webp"],Bn(l,0,0,.06,5.18,5.18),Ft(.925,.995,n))}const bh=Math.PI*2;function va(i,e,t,n,r){return Array.from({length:72},(s,a)=>{const o=a/72*bh;return i(e+Math.cos(o)*r,t,n+Math.sin(o)*r)})}function Os(i,e,t,n,r,s,a,o){const c=va(e,t,s,n,r),l=va(e,t,a,n,r),d=Math.min(...l.map(v=>v.x)),m=Math.max(...l.map(v=>v.x)),h=i.createLinearGradient(d,0,m,0);h.addColorStop(0,o[1]),h.addColorStop(.4,o[2]),h.addColorStop(1,o[3]);const u=[];for(let v=0;v<l.length;v++){const p=(v+1)%l.length,f=[l[v],l[p],c[p],c[v]];(f[1].x-f[0].x)*(f[2].y-f[0].y)-(f[1].y-f[0].y)*(f[2].x-f[0].x)<0&&u.push({i:v,j:p})}const _=u.map(({i:v})=>v).sort((v,p)=>l[v].x-l[p].x);if(_.length){const v=l.indexOf(l.reduce((S,P)=>S.x<P.x?S:P)),p=l.indexOf(l.reduce((S,P)=>S.x>P.x?S:P)),f=[...new Set([v,..._,p])].sort((S,P)=>l[S].x-l[P].x);oi(i,[...f.map(S=>l[S]),...f.slice().reverse().map(S=>c[S])],h)}oi(i,l,o[0])}function el(i,e,t,n,r,s,a,o,c){const l=Bn(e,n,r,s,c,c,a,o);oi(i,l.map(d=>({...d,x:d.x+1.7,y:d.y+2.2})),"#997557"),oi(i,l,"#efe6d7"),mr(i,t,Bn(e,n,r,s+.018,c*.923,c*.923,a,o))}function yh(i){return[i%6*448+1.5,Math.floor(i/6)*448+1.5,445,445]}function Mh(i,e,t,n,r){const s=As(e/t/1.44,.73,1),a=pt(-.145,.185,n),o=yc(e,t,5.65,6.68*s+.4,a,.2+.03*n,-.12,-.035,.009);Ec(i,e,t,["#ead8c5","#eedecd","#d6b298"]);const c=-2.25,l=-1.395,d=pt(-.68,-.53,n)*s+(1-s)*.4;ar(i,o(d,c+.01,.04),3.12,.4,.36,"100,61,46");const m=2.15*s;Os(i,o,m,-1.08,.35,c,c+.1,["#cab799","#967b5b","#aa9473","#8b7052"]);const h=o(m,-.62,-1.08),u=o(m,c+.11,-1.08);i.save(),i.lineWidth=Math.max(1.2,h.scale*.047),i.strokeStyle="#9e8460",fs(i,[h,u],!1),i.stroke(),i.restore(),el(i,o,r["liquid-rim.webp"],m+.11,-.6,-1.22,-.4+a*.35,-.07,1.49),el(i,o,r["liquid-detail.webp"],m,-.7,-1.04,-.4+a*.35,.04,1.49),Os(i,o,d,0,1.84,c,l-.09,["#cd9778","#ad7056","#c08465","#9c604a"]),Os(i,o,d,0,1.9,l-.095,l,["#deb294","#b98165","#d29a78","#a87458"]),i.save(),i.strokeStyle="#ac886b",i.lineWidth=Math.max(.65,o(0,0,0).scale*.012),fs(i,va(o,d,l+.005,0,1.72)),i.stroke(),i.restore(),ar(i,o(d,l+.015,0),1.57,.13,.32,"99,48,32");const _=n*(vn.length-1),v=Math.floor(_),p=Math.min(v+1,vn.length-1),f=_-v,[S,P,y]=vn[v].map((C,z)=>pt(C,vn[p][z],f)),T=Math.round(_),M=vn[T][3],g=4.55,b=d+(.5-(S+y)/(2*448))*g*.83,R=l+(M/448-.5)*g+.035,E=Bn(o,b,R,.014,g,g,a*.82),L=1-Ft(1,27,Math.min(S,P,447-y)),D=yh(T);if(L>.001){const[C,z,X,F]=vn[T],j=Math.max(0,C-19),V=Math.max(0,z-11),$=Math.min(448,X+13),ee=Math.min(448,F+3),ve=(_e,Me)=>({x:E[0].x+(E[1].x-E[0].x)*_e/448+(E[3].x-E[0].x)*Me/448,y:E[0].y+(E[1].y-E[0].y)*_e/448+(E[3].y-E[0].y)*Me/448}),Re=[ve(j,V),ve($,V),ve($,ee),ve(j,ee)];oi(i,Re.map(_e=>({..._e,x:_e.x+1,y:_e.y+2})),"#ac8873",L*.24),oi(i,Re,"#f4e7d4",L*.78);const Z=D[2]/448,ue=D[3]/448;mr(i,r["liquid-arc.webp"],Re,L*.21,[D[0]+j*Z,D[1]+V*ue,($-j)*Z,(ee-V)*ue])}const G=Bn(o,b,R,.079,g,g,a*.82);mr(i,r["liquid-relief-arc.webp"],G,1,D)}function Eh(i,e,{assetUrl:t,onReady:n,onError:r}){let s=!1,a=!1,o=!1,c=!1,l=0,d=.45,m=0,h=0,u=1;const _=i.getContext("2d",{alpha:!1}),v={},[p,f]={gesture:[Sh,_h],object:[Mh,vh],room:[gh,lh]}[e];function S(g){a||s||(a=!0,l&&cancelAnimationFrame(l),l=0,r?.(g))}function P(){if(l=0,!(s||a||!o||!m||!h))try{_.setTransform(u,0,0,u,0,0),_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",p(_,m,h,d,v),c||(c=!0,n?.())}catch(g){S(g)}}function y(){o&&!a&&!s&&!l&&(l=requestAnimationFrame(P))}function T(){if(s||a)return;const g=Math.max(1,Math.round(i.clientWidth)),b=Math.max(1,Math.round(i.clientHeight)),R=Math.min(1.75,window.devicePixelRatio||1);(g!==m||b!==h||u!==R)&&(m=g,h=b,u=R,i.width=Math.max(1,Math.round(g*u)),i.height=Math.max(1,Math.round(b*u))),y()}const M=_&&typeof ResizeObserver=="function"?new ResizeObserver(T):null;return M?.observe(i),_?(Promise.all(f.map(g=>new Promise((b,R)=>{const E=new Image;v[g]=E,E.onload=b,E.onerror=()=>R(new Error(`Could not load the artwork ${g}.`)),E.src=t(g)}))).then(()=>{s||(o=!0,T())}).catch(S),T()):queueMicrotask(()=>S(new Error("The 2D scene could not initialize."))),{setProgress(g){Number.isFinite(g)&&(d=As(g,0,1),y())},resize:T,dispose(){if(!s){s=!0,M?.disconnect(),l&&cancelAnimationFrame(l);for(const g of Object.values(v))g.onload=null,g.onerror=null}}}}const tl=Object.freeze(Object.defineProperty({__proto__:null,createFallback:Eh},Symbol.toStringTag,{value:"Module"}));const go="187",Ah=0,il=1,Th=2,or=1,Ph=2,nr=3,fn=0,Ht=1,_i=2,Fn=0,lr=1,nl=2,rl=3,sl=4,Rh=5,In=100,Ch=101,Dh=102,Ih=103,Lh=104,Uh=200,Nh=201,Fh=202,Oh=203,Ac=204,Tc=205,kh=206,Bh=207,zh=208,Gh=209,Hh=210,Vh=211,Wh=212,Xh=213,qh=214,xa=0,wa=1,Sa=2,gr=3,ba=4,ya=5,Ma=6,Ea=7,Pc=0,Yh=1,Zh=2,wi=0,Rc=1,Cc=2,Dc=3,Ic=4,Lc=5,Uc=6,Nc=7,Fc=300,zn=301,_r=302,ks=303,Bs=304,Aa=1e3,Ii=1001,Ta=1002,At=1003,Kh=1004,Dr=1005,Tt=1006,zs=1007,qi=1008,Xt=1009,Oc=1010,kc=1011,vr=1012,_o=1013,bi=1014,xi=1015,yi=1016,vo=1017,xo=1018,Gn=1020,Bc=35902,zc=35899,Gc=1021,Hc=1022,si=1023,Ki=1026,Yi=1027,Vc=1028,wo=1029,pn=1030,So=1031,bo=1033,ss=33776,as=33777,os=33778,ls=33779,Pa=35840,Ra=35841,Ca=35842,Da=35843,Ia=36196,La=37492,Ua=37496,Na=37488,Fa=37489,ps=37490,Oa=37491,ka=37808,Ba=37809,za=37810,Ga=37811,Ha=37812,Va=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Za=37818,Ka=37819,Ja=37820,$a=37821,Qa=36492,ja=36494,eo=36495,to=36283,io=36284,ms=36285,no=36286,Jh=3200,ro=0,$h=1,Wi="",zt="srgb",gs="srgb-linear",_s="linear",$e="srgb",Gs=7680,Qh=519,jh=512,eu=513,tu=514,Wc=515,iu=516,nu=517,Xc=518,qc=519,ru=35044,al="300 es",ai=2e3,xr=2001;function su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){const i=wr("canvas");return i.style.display="block",i}const ol={};function ll(...i){const e="THREE."+i.shift();console.log(e,...i)}function Yc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Yc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Yc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cs(...i){const e=i.join(" ");e in ol||(ol[e]=!0,Pe(...i))}function ou(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const lu={[xa]:xa,[Sa]:Ma,[ba]:ba,[gr]:ya,[wa]:wa,[Ma]:Sa,[Ea]:Ea,[ya]:gr};class _n{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const cr=Math.PI/180,Sr=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function yo(i,e){return(i%e+e)%e}function cu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function du(i,e,t){return i!==e?(t-i)/(e-i):0}function dr(i,e,t){return(1-t)*i+t*e}function hu(i,e,t,n){return dr(i,e,1-Math.exp(-t*n))}function uu(i,e=1){return e-Math.abs(yo(i,e*2)-e)}function fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gu(i,e){return i+Math.random()*(e-i)}function _u(i){return i*(.5-Math.random())}function vu(i){i!==void 0&&(cl=i);let e=cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xu(i){return i*cr}function wu(i){return i*Sr}function Su(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),d=a((e+n)/2),m=s((e-n)/2),h=a((e-n)/2),u=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*d,c*m,c*h,o*l);break;case"YZY":i.set(c*h,o*d,c*m,o*l);break;case"ZXZ":i.set(c*m,c*h,o*d,o*l);break;case"XZX":i.set(o*d,c*_,c*u,o*l);break;case"YXY":i.set(c*u,o*d,c*_,o*l);break;case"ZYZ":i.set(c*_,c*u,o*d,o*l);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kc(i,e){if(e.constructor===Float32Array)return i;const t=Mo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Jc(i,e){if(e.constructor===Float32Array)return i;const t=Mo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Eo={DEG2RAD:cr,RAD2DEG:Sr,generateUUID:Xn,clamp:Ve,euclideanModulo:yo,mapLinear:cu,inverseLerp:du,lerp:dr,damp:hu,pingpong:uu,smoothstep:fu,smootherstep:pu,randInt:mu,randFloat:gu,randFloatSpread:_u,seededRandom:vu,degToRad:xu,radToDeg:wu,isPowerOfTwo:Su,ceilPowerOfTwo:bu,floorPowerOfTwo:Zc,setQuaternionFromProperEuler:yu,normalize:Jc,denormalize:Kc},Uo=class Uo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uo.prototype.isVector2=!0;let Xe=Uo;class qn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],d=n[r+2],m=n[r+3],h=s[a+0],u=s[a+1],_=s[a+2],v=s[a+3];if(m!==v||c!==h||l!==u||d!==_){let p=c*h+l*u+d*_+m*v;p<0&&(h=-h,u=-u,_=-_,v=-v,p=-p);let f=1-o;if(p<.9995){const S=Math.acos(p),P=Math.sin(S);f=Math.sin(f*S)/P,o=Math.sin(o*S)/P,c=c*f+h*o,l=l*f+u*o,d=d*f+_*o,m=m*f+v*o}else{c=c*f+h*o,l=l*f+u*o,d=d*f+_*o,m=m*f+v*o;const S=1/Math.sqrt(c*c+l*l+d*d+m*m);c*=S,l*=S,d*=S,m*=S}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],m=s[a],h=s[a+1],u=s[a+2],_=s[a+3];return e[t]=o*_+d*m+c*u-l*h,e[t+1]=c*_+d*h+l*m-o*u,e[t+2]=l*_+d*u+o*h-c*m,e[t+3]=d*_-o*m-c*h-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),m=o(s/2),h=c(n/2),u=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=h*d*m+l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m-h*u*_;break;case"YXZ":this._x=h*d*m+l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m+h*u*_;break;case"ZXY":this._x=h*d*m-l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m-h*u*_;break;case"ZYX":this._x=h*d*m-l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m+h*u*_;break;case"YZX":this._x=h*d*m+l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m-h*u*_;break;case"XZY":this._x=h*d*m-l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m+h*u*_;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],m=t[10],h=n+o+m;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(s-l)*u,this._z=(a-r)*u}else if(n>o&&n>m){const u=2*Math.sqrt(1+n-o-m);this._w=(d-c)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+l)/u}else if(o>m){const u=2*Math.sqrt(1+o-n-m);this._w=(s-l)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+m-n-o);this._w=(a-r)/u,this._x=(s+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-r*o,this._w=a*d-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const No=class No{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),d=2*(o*t-s*r),m=2*(s*n-a*t);return this.x=t+c*l+a*m-o*d,this.y=n+c*d+o*l-s*m,this.z=r+c*m+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};No.prototype.isVector3=!0;let H=No;const Hs=new H,dl=new qn,Fo=class Fo{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],m=n[7],h=n[2],u=n[5],_=n[8],v=r[0],p=r[3],f=r[6],S=r[1],P=r[4],y=r[7],T=r[2],M=r[5],g=r[8];return s[0]=a*v+o*S+c*T,s[3]=a*p+o*P+c*M,s[6]=a*f+o*y+c*g,s[1]=l*v+d*S+m*T,s[4]=l*p+d*P+m*M,s[7]=l*f+d*y+m*g,s[2]=h*v+u*S+_*T,s[5]=h*p+u*P+_*M,s[8]=h*f+u*y+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],m=d*a-o*l,h=o*c-d*s,u=l*s-a*c,_=t*m+n*h+r*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=m*v,e[1]=(r*l-d*n)*v,e[2]=(o*n-r*a)*v,e[3]=h*v,e[4]=(d*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=u*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fo.prototype.isMatrix3=!0;let De=Fo;const Vs=new De,hl=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mu(){const i={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$e&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?_s:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gs]:{primaries:e,whitePoint:n,transfer:_s,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const We=Mu();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function On(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xn;class Eu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xn===void 0&&(xn=wr("canvas")),xn.width=e.width,xn.height=e.height;const r=xn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Au=0;class Ao{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ws(r[a].image)):s.push(Ws(r[a]))}else s=Ws(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Tu=0;const Xs=new H;class It extends _n{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Ii,r=Ii,s=Tt,a=qi,o=si,c=Xt,l=It.DEFAULT_ANISOTROPY,d=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Xn(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xs).x}get height(){return this.source.getSize(Xs).y}get depth(){return this.source.getSize(Xs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Fc;It.DEFAULT_ANISOTROPY=1;const Oo=class Oo{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],d=c[4],m=c[8],h=c[1],u=c[5],_=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(d-h)<.01&&Math.abs(m-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(l+1)/2,y=(u+1)/2,T=(f+1)/2,M=(d+h)/4,g=(m+v)/4,b=(_+p)/4;return P>y&&P>T?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=M/n,s=g/n):y>T?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=M/r,s=b/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=g/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(m-v)*(m-v)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(m-v)/S,this.z=(h-d)/S,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oo.prototype.isVector4=!0;let ot=Oo;class Pu extends _n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new It({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ao(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Pu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $c extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ru extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ss=class Ss{constructor(e,t,n,r,s,a,o,c,l,d,m,h,u,_,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,d,m,h,u,_,v,p)}set(e,t,n,r,s,a,o,c,l,d,m,h,u,_,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=m,f[14]=h,f[3]=u,f[7]=_,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ss().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/wn.setFromMatrixColumn(e,0).length(),s=1/wn.setFromMatrixColumn(e,1).length(),a=1/wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const h=a*d,u=a*m,_=o*d,v=o*m;t[0]=c*d,t[4]=-c*m,t[8]=l,t[1]=u+_*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=_+u*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*d,u=c*m,_=l*d,v=l*m;t[0]=h+v*o,t[4]=_*o-u,t[8]=a*l,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=u*o-_,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*d,u=c*m,_=l*d,v=l*m;t[0]=h-v*o,t[4]=-a*m,t[8]=_+u*o,t[1]=u+_*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*d,u=a*m,_=o*d,v=o*m;t[0]=c*d,t[4]=_*l-u,t[8]=h*l+v,t[1]=c*m,t[5]=v*l+h,t[9]=u*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,u=a*l,_=o*c,v=o*l;t[0]=c*d,t[4]=v-h*m,t[8]=_*m+u,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=u*m+_,t[10]=h-v*m}else if(e.order==="XZY"){const h=a*c,u=a*l,_=o*c,v=o*l;t[0]=c*d,t[4]=-m,t[8]=l*d,t[1]=h*m+v,t[5]=a*d,t[9]=u*m-_,t[2]=_*m-u,t[6]=o*d,t[10]=v*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Du)}lookAt(e,t,n){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),ki.crossVectors(n,Vt),ki.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),ki.crossVectors(n,Vt)),ki.normalize(),Ir.crossVectors(Vt,ki),r[0]=ki.x,r[4]=Ir.x,r[8]=Vt.x,r[1]=ki.y,r[5]=Ir.y,r[9]=Vt.y,r[2]=ki.z,r[6]=Ir.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],m=n[5],h=n[9],u=n[13],_=n[2],v=n[6],p=n[10],f=n[14],S=n[3],P=n[7],y=n[11],T=n[15],M=r[0],g=r[4],b=r[8],R=r[12],E=r[1],L=r[5],D=r[9],G=r[13],C=r[2],z=r[6],X=r[10],F=r[14],j=r[3],V=r[7],$=r[11],ee=r[15];return s[0]=a*M+o*E+c*C+l*j,s[4]=a*g+o*L+c*z+l*V,s[8]=a*b+o*D+c*X+l*$,s[12]=a*R+o*G+c*F+l*ee,s[1]=d*M+m*E+h*C+u*j,s[5]=d*g+m*L+h*z+u*V,s[9]=d*b+m*D+h*X+u*$,s[13]=d*R+m*G+h*F+u*ee,s[2]=_*M+v*E+p*C+f*j,s[6]=_*g+v*L+p*z+f*V,s[10]=_*b+v*D+p*X+f*$,s[14]=_*R+v*G+p*F+f*ee,s[3]=S*M+P*E+y*C+T*j,s[7]=S*g+P*L+y*z+T*V,s[11]=S*b+P*D+y*X+T*$,s[15]=S*R+P*G+y*F+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],m=e[6],h=e[10],u=e[14],_=e[3],v=e[7],p=e[11],f=e[15],S=c*u-l*h,P=o*u-l*m,y=o*h-c*m,T=a*u-l*d,M=a*h-c*d,g=a*m-o*d;return t*(v*S-p*P+f*y)-n*(_*S-p*T+f*M)+r*(_*P-v*T+f*g)-s*(_*y-v*M+p*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(s*d-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],m=e[9],h=e[10],u=e[11],_=e[12],v=e[13],p=e[14],f=e[15],S=t*o-n*a,P=t*c-r*a,y=t*l-s*a,T=n*c-r*o,M=n*l-s*o,g=r*l-s*c,b=d*v-m*_,R=d*p-h*_,E=d*f-u*_,L=m*p-h*v,D=m*f-u*v,G=h*f-u*p,C=S*G-P*D+y*L+T*E-M*R+g*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/C;return e[0]=(o*G-c*D+l*L)*z,e[1]=(r*D-n*G-s*L)*z,e[2]=(v*g-p*M+f*T)*z,e[3]=(h*M-m*g-u*T)*z,e[4]=(c*E-a*G-l*R)*z,e[5]=(t*G-r*E+s*R)*z,e[6]=(p*y-_*g-f*P)*z,e[7]=(d*g-h*y+u*P)*z,e[8]=(a*D-o*E+l*b)*z,e[9]=(n*E-t*D-s*b)*z,e[10]=(_*M-v*y+f*S)*z,e[11]=(m*y-d*M-u*S)*z,e[12]=(o*R-a*L-c*b)*z,e[13]=(t*L-n*R+r*b)*z,e[14]=(v*P-_*T-p*S)*z,e[15]=(d*T-m*P+h*S)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,m=o+o,h=s*l,u=s*d,_=s*m,v=a*d,p=a*m,f=o*m,S=c*l,P=c*d,y=c*m,T=n.x,M=n.y,g=n.z;return r[0]=(1-(v+f))*T,r[1]=(u+y)*T,r[2]=(_-P)*T,r[3]=0,r[4]=(u-y)*M,r[5]=(1-(h+f))*M,r[6]=(p+S)*M,r[7]=0,r[8]=(_+P)*g,r[9]=(p-S)*g,r[10]=(1-(h+v))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=wn.set(r[0],r[1],r[2]).length();const o=wn.set(r[4],r[5],r[6]).length(),c=wn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ei.copy(this);const l=1/a,d=1/o,m=1/c;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=d,ei.elements[5]*=d,ei.elements[6]*=d,ei.elements[8]*=m,ei.elements[9]*=m,ei.elements[10]*=m,t.setFromRotationMatrix(ei),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=ai,c=!1){const l=this.elements,d=2*s/(t-e),m=2*s/(n-r),h=(t+e)/(t-e),u=(n+r)/(n-r);let _,v;if(c)_=s/(a-s),v=a*s/(a-s);else if(o===ai)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===xr)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ai,c=!1){const l=this.elements,d=2/(t-e),m=2/(n-r),h=-(t+e)/(t-e),u=-(n+r)/(n-r);let _,v;if(c)_=1/(a-s),v=a/(a-s);else if(o===ai)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===xr)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ss.prototype.isMatrix4=!0;let rt=Ss;const wn=new H,ei=new rt,Cu=new H(0,0,0),Du=new H(1,1,1),ki=new H,Ir=new H,Vt=new H,fl=new rt,pl=new qn;class Ji{constructor(e=0,t=0,n=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],m=r[2],h=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iu=0;const ml=new H,Sn=new qn,Ei=new rt,Lr=new H,Jn=new H,Lu=new H,Uu=new qn,gl=new H(1,0,0),_l=new H(0,1,0),vl=new H(0,0,1),xl={type:"added"},Nu={type:"removed"},bn={type:"childadded",child:null},qs={type:"childremoved",child:null};class bt extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new H,t=new Ji,n=new qn,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new De}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.premultiply(Sn),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Jn,Lr,this.up):Ei.lookAt(Lr,Jn,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Sn.setFromRotationMatrix(Ei),this.quaternion.premultiply(Sn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xl),bn.child=e,this.dispatchEvent(bn),bn.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),qs.child=e,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xl),bn.child=e,this.dispatchEvent(bn),bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,e,Lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,Uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const m=c[l];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),m=a(e.shapes),h=a(e.skeletons),u=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bt.DEFAULT_UP=new H(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Li extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fu={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=d.position.distanceTo(m.position),u=.02,_=.005;l.inputState.pinching&&h>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Zs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=yo(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Zs(a,s,e+1/3),this.g=Zs(a,s,e),this.b=Zs(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return We.workingToColorSpace(Dt.copy(this),e),Math.round(Ve(Dt.r*255,0,255))*65536+Math.round(Ve(Dt.g*255,0,255))*256+Math.round(Ve(Dt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=d<=.5?m/(a+o):m/(2-a-o),a){case n:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-n)/m+2;break;case s:c=(n-r)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=zt){We.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,r=Dt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Ur);const n=dr(Bi.h,Ur.h,t),r=dr(Bi.s,Ur.s,t),s=dr(Bi.l,Ur.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Be;Be.NAMES=jc;class Ts{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new Ts(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ou extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ti=new H,Ai=new H,Ks=new H,Ti=new H,yn=new H,Mn=new H,wl=new H,Js=new H,$s=new H,Qs=new H,js=new ot,ea=new ot,ta=new ot;class ri{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ti.subVectors(e,t),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ti.subVectors(r,t),Ai.subVectors(n,t),Ks.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(Ai),c=ti.dot(Ks),l=Ai.dot(Ai),d=Ai.dot(Ks),m=a*l-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,u=(l*c-o*d)*h,_=(a*d-o*c)*h;return s.set(1-u-_,_,u)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return js.setScalar(0),ea.setScalar(0),ta.setScalar(0),js.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,n),ta.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(js,s.x),a.addScaledVector(ea,s.y),a.addScaledVector(ta,s.z),a}static isFrontFacing(e,t,n,r){return ti.subVectors(n,t),Ai.subVectors(e,t),ti.cross(Ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ti.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;yn.subVectors(r,n),Mn.subVectors(s,n),Js.subVectors(e,n);const c=yn.dot(Js),l=Mn.dot(Js);if(c<=0&&l<=0)return t.copy(n);$s.subVectors(e,r);const d=yn.dot($s),m=Mn.dot($s);if(d>=0&&m<=d)return t.copy(r);const h=c*m-d*l;if(h<=0&&c>=0&&d<=0&&c-d>0)return a=c/(c-d),t.copy(n).addScaledVector(yn,a);Qs.subVectors(e,s);const u=yn.dot(Qs),_=Mn.dot(Qs);if(_>=0&&u<=_)return t.copy(s);const v=u*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Mn,o);const p=d*_-u*m;if(p<=0&&m-d>=0&&u-_>=0)return wl.subVectors(s,r),o=(m-d)/(m-d+(u-_)),t.copy(r).addScaledVector(wl,o);const f=1/(p+v+h);return a=v*f,o=h*f,t.copy(n).addScaledVector(yn,a).addScaledVector(Mn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(s,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($n),Fr.subVectors(this.max,$n),En.subVectors(e.a,$n),An.subVectors(e.b,$n),Tn.subVectors(e.c,$n),zi.subVectors(An,En),Gi.subVectors(Tn,An),nn.subVectors(En,Tn);let t=[0,-zi.z,zi.y,0,-Gi.z,Gi.y,0,-nn.z,nn.y,zi.z,0,-zi.x,Gi.z,0,-Gi.x,nn.z,0,-nn.x,-zi.y,zi.x,0,-Gi.y,Gi.x,0,-nn.y,nn.x,0];return!ia(t,En,An,Tn,Fr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,En,An,Tn,Fr))?!1:(Or.crossVectors(zi,Gi),t=[Or.x,Or.y,Or.z],ia(t,En,An,Tn,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new H,new H,new H,new H,new H,new H,new H,new H],ii=new H,Nr=new Mr,En=new H,An=new H,Tn=new H,zi=new H,Gi=new H,nn=new H,$n=new H,Fr=new H,Or=new H,rn=new H;function ia(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){rn.fromArray(i,s);const o=r.x*Math.abs(rn.x)+r.y*Math.abs(rn.y)+r.z*Math.abs(rn.z),c=e.dot(rn),l=t.dot(rn),d=n.dot(rn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const ht=new H,kr=new Xe;let ku=0;class cn extends _n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ku++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=e!==void 0?Mo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jc(e,this.array)}}class ed extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class td extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bu=new Mr,Qn=new H,na=new H;class Ps{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);const t=Qn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add(na)),this.expandByPoint(Qn.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zu=0;const Jt=new rt,ra=new bt,Pn=new H,Wt=new Mr,jn=new Mr,St=new H;class ci extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(su(e)?td:ed)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];jn.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Wt.min,jn.min),Wt.expandByPoint(St),St.addVectors(Wt.max,jn.max),Wt.expandByPoint(St)):(Wt.expandByPoint(jn.min),Wt.expandByPoint(jn.max))}Wt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)St.fromBufferAttribute(o,l),c&&(Pn.fromBufferAttribute(e,l),St.add(Pn)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new H,c[R]=new H;const d=new H,m=new H,h=new H,u=new Xe,_=new Xe,v=new Xe,p=new H,f=new H;function S(R,E,L){l[R]=l[E]=l[L]=1,d.fromBufferAttribute(n,R),m.fromBufferAttribute(n,E),h.fromBufferAttribute(n,L),u.fromBufferAttribute(s,R),_.fromBufferAttribute(s,E),v.fromBufferAttribute(s,L),m.sub(d),h.sub(d),_.sub(u),v.sub(u);const D=1/(_.x*v.y-v.x*_.y);isFinite(D)&&(p.copy(m).multiplyScalar(v.y).addScaledVector(h,-_.y).multiplyScalar(D),f.copy(h).multiplyScalar(_.x).addScaledVector(m,-v.x).multiplyScalar(D),o[R].add(p),o[E].add(p),o[L].add(p),c[R].add(f),c[E].add(f),c[L].add(f))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let R=0,E=P.length;R<E;++R){const L=P[R],D=L.start,G=L.count;for(let C=D,z=D+G;C<z;C+=3)S(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const y=new H,T=new H,M=new H,g=new H;function b(R){M.fromBufferAttribute(r,R),g.copy(M);const E=o[R];y.copy(E),y.sub(M.multiplyScalar(M.dot(E))).normalize(),T.crossVectors(g,E);const D=T.dot(c[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,D)}for(let R=0,E=n.count;R<E;++R)l[R]&&b(R);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,d=new H,m=new H;if(e)for(let h=0,u=e.count;h<u;h+=3){const _=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,m=o.normalized,h=new l.constructor(c.length*d);let u=0,_=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*d;for(let f=0;f<d;f++)h[_++]=l[u++]}return new cn(h,d,m)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,m=l.length;d<m;d++){const h=l[d],u=e(h,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let m=0,h=l.length;m<h;m++){const u=l[m];d.push(u.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],m=s[l];for(let h=0,u=m.length;h<u;h++)d.push(m[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sa=new H,Gu=new H,Hu=new De;class Vi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=sa.subVectors(n,t).cross(Gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(sa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hu.getNormalMatrix(e),r=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Vu=0;class Yn extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=lr,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Tc,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new H,aa=new H,Br=new H,zr=new H;class id{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){aa.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=zr.dot(this.direction),c=-zr.dot(Br),l=zr.lengthSq(),d=Math.abs(1-a*a);let m,h,u,_;if(d>0)if(m=a*c-o,h=a*o-c,_=s*d,m>=0)if(h>=-_)if(h<=_){const v=1/d;m*=v,h*=v,u=m*(m+a*h+2*o)+h*(a*m+h+2*c)+l}else h=s,m=Math.max(0,-(a*h+o)),u=-m*m+h*(h+2*c)+l;else h=-s,m=Math.max(0,-(a*h+o)),u=-m*m+h*(h+2*c)+l;else h<=-_?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-c),s),u=-m*m+h*(h+2*c)+l):h<=_?(m=0,h=Math.min(Math.max(-s,-c),s),u=h*(h+2*c)+l):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-c),s),u=-m*m+h*(h+2*c)+l);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),u=-m*m+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(aa).addScaledVector(Br,h),u}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),r=Ri.dot(Ri)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,m=e.x-a.x,h=e.y-a.y,u=e.z-a.z,_=t.x-a.x,v=t.y-a.y,p=t.z-a.z,f=n.x-a.x,S=n.y-a.y,P=n.z-a.z,y=Math.abs(c),T=Math.abs(l),M=Math.abs(d);let g,b,R,E,L,D,G,C,z,X,F,j;if(y>=T&&y>=M?(R=c,D=m,z=_,j=f,c>=0?(g=l,b=d,E=h,L=u,G=v,C=p,X=S,F=P):(g=d,b=l,E=u,L=h,G=p,C=v,X=P,F=S)):T>=M?(R=l,D=h,z=v,j=S,l>=0?(g=d,b=c,E=u,L=m,G=p,C=_,X=P,F=f):(g=c,b=d,E=m,L=u,G=_,C=p,X=f,F=P)):(R=d,D=u,z=p,j=P,d>=0?(g=c,b=l,E=m,L=h,G=_,C=v,X=f,F=S):(g=l,b=c,E=h,L=m,G=v,C=_,X=S,F=f)),R===0)return null;const V=g/R,$=b/R,ee=1/R,ve=E-V*D,Re=L-$*D,Z=G-V*z,ue=C-$*z,_e=X-V*j,Me=F-$*j,me=_e*ue-Me*Z,Le=ve*Me-Re*_e,ct=Z*Re-ue*ve;if(r){if(me<0||Le<0||ct<0)return null}else if((me<0||Le<0||ct<0)&&(me>0||Le>0||ct>0))return null;const Te=me+Le+ct;if(Te===0)return null;const Ke=ee*(me*D+Le*z+ct*j);return(Te>0?Ke<0:Ke>0)?null:this.at(Ke/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class To extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sl=new rt,sn=new id,Gr=new Ps,bl=new H,Hr=new H,Vr=new H,Wr=new H,oa=new H,Xr=new H,yl=new H,qr=new H;class $i extends bt{constructor(e=new ci,t=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],m=s[c];d!==0&&(oa.fromBufferAttribute(m,e),a?Xr.addScaledVector(oa,d):Xr.addScaledVector(oa.sub(t),d))}t.add(Xr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),sn.copy(e.ray).recast(e.near),!(Gr.containsPoint(sn.origin)===!1&&(sn.intersectSphere(Gr,bl)===null||sn.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Sl.copy(s).invert(),sn.copy(e.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&sn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,h=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],f=a[p.materialIndex],S=Math.max(p.start,u.start),P=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,T=P;y<T;y+=3){const M=o.getX(y),g=o.getX(y+1),b=o.getX(y+2);r=Yr(this,f,e,n,l,d,m,M,g,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let p=_,f=v;p<f;p+=3){const S=o.getX(p),P=o.getX(p+1),y=o.getX(p+2);r=Yr(this,a,e,n,l,d,m,S,P,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],f=a[p.materialIndex],S=Math.max(p.start,u.start),P=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,T=P;y<T;y+=3){const M=y,g=y+1,b=y+2;r=Yr(this,f,e,n,l,d,m,M,g,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let p=_,f=v;p<f;p+=3){const S=p,P=p+1,y=p+2;r=Yr(this,a,e,n,l,d,m,S,P,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Wu(i,e,t,n,r,s,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===fn,o),c===null)return null;qr.copy(o),qr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qr);return l<t.near||l>t.far?null:{distance:l,point:qr.clone(),object:i}}function Yr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Hr),i.getVertexPosition(c,Vr),i.getVertexPosition(l,Wr);const d=Wu(i,e,t,n,Hr,Vr,Wr,yl);if(d){const m=new H;ri.getBarycoord(yl,Hr,Vr,Wr,m),r&&(d.uv=ri.getInterpolatedAttribute(r,o,c,l,m,new Xe)),s&&(d.uv1=ri.getInterpolatedAttribute(s,o,c,l,m,new Xe)),a&&(d.normal=ri.getInterpolatedAttribute(a,o,c,l,m,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new H,materialIndex:0};ri.getNormal(Hr,Vr,Wr,h.normal),d.face=h,d.barycoord=m}return d}class nd extends It{constructor(e=null,t=1,n=1,r,s,a,o,c,l=At,d=At,m,h){super(null,a,o,c,l,d,r,s,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const an=new Ps,Xu=new Xe(.5,.5),Zr=new H;class br{constructor(e=new Vi,t=new Vi,n=new Vi,r=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],m=s[5],h=s[6],u=s[7],_=s[8],v=s[9],p=s[10],f=s[11],S=s[12],P=s[13],y=s[14],T=s[15];if(r[0].setComponents(l-a,u-d,f-_,T-S).normalize(),r[1].setComponents(l+a,u+d,f+_,T+S).normalize(),r[2].setComponents(l+o,u+m,f+v,T+P).normalize(),r[3].setComponents(l-o,u-m,f-v,T-P).normalize(),n)r[4].setComponents(c,h,p,y).normalize(),r[5].setComponents(l-c,u-h,f-p,T-y).normalize();else if(r[4].setComponents(l-c,u-h,f-p,T-y).normalize(),t===ai)r[5].setComponents(l+c,u+h,f+p,T+y).normalize();else if(t===xr)r[5].setComponents(c,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),an.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),an.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(an)}intersectsSprite(e){an.center.set(0,0,0);const t=Xu.distanceTo(e.center);return an.radius=.7071067811865476+t,an.applyMatrix4(e.matrixWorld),this.intersectsSphere(an)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Zr.x=r.normal.x>0?e.max.x:e.min.x,Zr.y=r.normal.y>0?e.max.y:e.min.y,Zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ml=new rt;class Po{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Ml.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new br),n[r].setFromProjectionMatrix(Ml,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new br),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Po().copy(this)}}class rd extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vs=new H,xs=new H,El=new rt,er=new id,Kr=new Ps,la=new H,Al=new H;class qu extends bt{constructor(e=new ci,t=new rd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)vs.fromBufferAttribute(t,r-1),xs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=vs.distanceTo(xs);e.setAttribute("lineDistance",new yt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;El.copy(r).invert(),er.copy(e.ray).applyMatrix4(El);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const u=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let v=u,p=_-1;v<p;v+=l){const f=d.getX(v),S=d.getX(v+1),P=Jr(this,e,er,c,f,S,v);P&&t.push(P)}if(this.isLineLoop){const v=d.getX(_-1),p=d.getX(u),f=Jr(this,e,er,c,v,p,_-1);f&&t.push(f)}}else{const u=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=u,p=_-1;v<p;v+=l){const f=Jr(this,e,er,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Jr(this,e,er,c,_-1,u,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(vs.fromBufferAttribute(o,r),xs.fromBufferAttribute(o,s),t.distanceSqToSegment(vs,xs,la,Al)>n)return;la.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(la);if(!(l<e.near||l>e.far))return{distance:l,point:Al.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Tl=new H,Pl=new H;class Yu extends qu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Tl.fromBufferAttribute(t,r),Pl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Tl.distanceTo(Pl);e.setAttribute("lineDistance",new yt(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends It{constructor(e=[],t=zn,n,r,s,a,o,c,l,d){super(e,t,n,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hn extends It{constructor(e,t,n=bi,r,s,a,o=At,c=At,l,d=Ki,m=1){if(d!==Ki&&d!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:m};super(h,r,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ad extends Hn{constructor(e,t=bi,n=zn,r,s,a=At,o=At,c,l=Ki){const d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,r,s,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class od extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ni extends ci{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],m=[];let h=0,u=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(m,2));function _(v,p,f,S,P,y,T,M,g,b,R){const E=y/g,L=T/b,D=y/2,G=T/2,C=M/2,z=g+1,X=b+1;let F=0,j=0;const V=new H;for(let $=0;$<X;$++){const ee=$*L-G;for(let ve=0;ve<z;ve++){const Re=ve*E-D;V[v]=Re*S,V[p]=ee*P,V[f]=C,l.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[f]=M>0?1:-1,d.push(V.x,V.y,V.z),m.push(ve/g),m.push(1-$/b),F+=1}}for(let $=0;$<b;$++)for(let ee=0;ee<g;ee++){const ve=h+ee+z*$,Re=h+ee+z*($+1),Z=h+(ee+1)+z*($+1),ue=h+(ee+1)+z*$;c.push(ve,Re,ue),c.push(Re,Z,ue),j+=6}o.addGroup(u,j,R),u+=j,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ln extends ci{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],m=[],h=[],u=[];let _=0;const v=[],p=n/2;let f=0;S(),a===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(d),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function S(){const y=new H,T=new H;let M=0;const g=(t-e)/n;for(let b=0;b<=s;b++){const R=[],E=b/s,L=E*(t-e)+e;for(let D=0;D<=r;D++){const G=D/r,C=G*c+o,z=Math.sin(C),X=Math.cos(C);T.x=L*z,T.y=-E*n+p,T.z=L*X,m.push(T.x,T.y,T.z),y.set(z,g,X).normalize(),h.push(y.x,y.y,y.z),u.push(G,1-E),R.push(_++)}v.push(R)}for(let b=0;b<r;b++)for(let R=0;R<s;R++){const E=v[R][b],L=v[R+1][b],D=v[R+1][b+1],G=v[R][b+1];(e>0||R!==0)&&(d.push(E,L,G),M+=3),(t>0||R!==s-1)&&(d.push(L,D,G),M+=3)}l.addGroup(f,M,0),f+=M}function P(y){const T=_,M=new Xe,g=new H;let b=0;const R=y===!0?e:t,E=y===!0?1:-1;for(let D=1;D<=r;D++)m.push(0,p*E,0),h.push(0,E,0),u.push(.5,.5),_++;const L=_;for(let D=0;D<=r;D++){const C=D/r*c+o,z=Math.cos(C),X=Math.sin(C);g.x=R*X,g.y=p*E,g.z=R*z,m.push(g.x,g.y,g.z),h.push(0,E,0),M.x=z*.5+.5,M.y=X*.5*E+.5,u.push(M.x,M.y),_++}for(let D=0;D<r;D++){const G=T+D,C=L+D;y===!0?d.push(C,C+1,G):d.push(C+1,C,G),b+=3}l.addGroup(f,b,y===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Er extends ci{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,m=e/o,h=t/c,u=[],_=[],v=[],p=[];for(let f=0;f<d;f++){const S=f*h-a;for(let P=0;P<l;P++){const y=P*m-s;_.push(y,-S,0),v.push(0,0,1),p.push(P/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const P=S+l*f,y=S+l*(f+1),T=S+1+l*(f+1),M=S+1+l*f;u.push(P,y,M),u.push(y,T,M)}this.setIndex(u),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ro extends ci{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],d=[],m=[],h=new H,u=new H,_=new H;for(let v=0;v<=n;v++){const p=a+v/n*o;for(let f=0;f<=r;f++){const S=f/r*s;u.x=(e+t*Math.cos(p))*Math.cos(S),u.y=(e+t*Math.cos(p))*Math.sin(S),u.z=t*Math.sin(p),l.push(u.x,u.y,u.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),_.subVectors(u,h).normalize(),d.push(_.x,_.y,_.z),m.push(f/r),m.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=r;p++){const f=(r+1)*v+p-1,S=(r+1)*(v-1)+p-1,P=(r+1)*(v-1)+p,y=(r+1)*v+p;c.push(f,S,y),c.push(S,P,y)}this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Vn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Rl(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Rl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Vn(i[t]);for(const r in n)e[r]=n[r]}return e}function Rl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ld(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Ku={clone:Vn,merge:Nt};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vn(e.uniforms),this.uniformsGroups=Zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(r.value);break;case"m3":this.uniforms[n].value=new De().fromArray(r.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qu extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ju extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ef extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tf extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ca={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Cl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Cl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Cl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class nf{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,m){return l.push(d,m),this},this.removeHandler=function(d){const m=l.indexOf(d);return m!==-1&&l.splice(m,2),this},this.getHandler=function(d){for(let m=0,h=l.length;m<h;m+=2){const u=l[m],_=l[m+1];if(u.global&&(u.lastIndex=0),u.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rf=new nf;class Co{constructor(e){this.manager=e!==void 0?e:rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn=new WeakMap;class sf extends Co{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ca.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let m=Rn.get(a);m===void 0&&(m=[],Rn.set(a,m)),m.push({onLoad:t,onError:r})}return a}const o=wr("img");function c(){d(),t&&t(this);const m=Rn.get(this)||[];for(let h=0;h<m.length;h++){const u=m[h];u.onLoad&&u.onLoad(this)}Rn.delete(this),s.manager.itemEnd(e)}function l(m){d(),r&&r(m),ca.remove(`image:${e}`);const h=Rn.get(this)||[];for(let u=0;u<h.length;u++){const _=h[u];_.onError&&_.onError(m)}Rn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ca.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class af extends Co{constructor(e){super(e)}load(e,t,n,r){const s=new It,a=new sf(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class cd extends bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class of extends cd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const da=new rt,Dl=new H,Il=new H;class lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dl),Il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Il),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(da,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $r=new H,Qr=new qn,hi=new H;class dd extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($r,Qr,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Qr,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($r,Qr,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Qr,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new H,Ll=new Xe,Ul=new Xe;class fi extends dd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Ll,Ul),t.subVectors(Ul,Ll)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Do extends dd{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cf extends lf{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class df extends cd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new cf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Cn=-90,Dn=1;class so extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fi(Cn,Dn,e,t);r.layers=this.layers,this.add(r);const s=new fi(Cn,Dn,e,t);s.layers=this.layers,this.add(s);const a=new fi(Cn,Dn,e,t);a.layers=this.layers,this.add(a);const o=new fi(Cn,Dn,e,t);o.layers=this.layers,this.add(o);const c=new fi(Cn,Dn,e,t);c.layers=this.layers,this.add(c);const l=new fi(Cn,Dn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,h,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hf extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Nl(i,e,t,n){const r=uf(n);switch(t){case Gc:return i*e;case Vc:return i*e/r.components*r.byteLength;case wo:return i*e/r.components*r.byteLength;case pn:return i*e*2/r.components*r.byteLength;case So:return i*e*2/r.components*r.byteLength;case Hc:return i*e*3/r.components*r.byteLength;case si:return i*e*4/r.components*r.byteLength;case bo:return i*e*4/r.components*r.byteLength;case ss:case as:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case os:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:case Da:return Math.max(i,16)*Math.max(e,8)/4;case Pa:case Ca:return Math.max(i,8)*Math.max(e,8)/2;case Ia:case La:case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ua:case ps:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qa:case ja:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case to:case io:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ms:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uf(i){switch(i){case Xt:case Oc:return{byteLength:1,components:1};case vr:case kc:case yi:return{byteLength:2,components:1};case vo:case xo:return{byteLength:2,components:4};case bi:case _o:case xi:return{byteLength:4,components:1};case Bc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);function hd(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ff(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,m=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){const d=c.array,m=c.updateRanges;if(i.bindBuffer(l,o),m.length===0)i.bufferSubData(l,0,d);else{m.sort((u,_)=>u.start-_.start);let h=0;for(let u=1;u<m.length;u++){const _=m[h],v=m[u];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,m[h]=v)}m.length=h+1;for(let u=0,_=m.length;u<_;u++){const v=m[u];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,up=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Um=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:_f,alphatest_fragment:vf,alphatest_pars_fragment:xf,aomap_fragment:wf,aomap_pars_fragment:Sf,batching_pars_vertex:bf,batching_vertex:yf,begin_vertex:Mf,beginnormal_vertex:Ef,bsdfs:Af,iridescence_fragment:Tf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:If,color_fragment:Lf,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Ff,common:Of,defaultnormal_vertex:kf,displacementmap_pars_vertex:Bf,displacementmap_vertex:zf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:sp,envmap_vertex:Kf,fog_vertex:Jf,fog_pars_vertex:$f,fog_fragment:Qf,fog_pars_fragment:jf,gradientmap_pars_fragment:ep,lightmap_pars_fragment:tp,lights_lambert_fragment:ip,lights_lambert_pars_fragment:np,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:op,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:dp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:fp,lights_fragment_end:pp,lightprobes_pars_fragment:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:xp,map_fragment:wp,map_pars_fragment:Sp,map_particle_fragment:bp,map_particle_pars_fragment:yp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:Ap,morphcolor_vertex:Tp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Dp,normal_fragment_maps:Ip,normal_pars_fragment:Lp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:Gp,packing:Hp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Jp,shadowmap_vertex:$p,shadowmask_pars_fragment:Qp,skinbase_vertex:jp,skinning_pars_vertex:em,skinning_vertex:tm,skinnormal_vertex:im,specularmap_fragment:nm,specularmap_pars_fragment:rm,tonemapping_fragment:sm,tonemapping_pars_fragment:am,transmission_fragment:om,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:dm,uv_vertex:hm,worldpos_vertex:um,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:_m,cube_frag:vm,depth_vert:xm,depth_frag:wm,distance_vert:Sm,distance_frag:bm,equirect_vert:ym,equirect_frag:Mm,linedashed_vert:Em,linedashed_frag:Am,meshbasic_vert:Tm,meshbasic_frag:Pm,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Dm,meshmatcap_frag:Im,meshnormal_vert:Lm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:km,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:Gm,points_frag:Hm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},pi={basic:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Nt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Nt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Nt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Nt([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Nt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Nt([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Nt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Nt([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Nt([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Nt([pe.lights,pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};pi.physical={uniforms:Nt([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const jr={r:0,b:0,g:0},Ym=new rt,ud=new De;ud.set(-1,0,0,0,1,0,0,0,1);function Zm(i,e,t,n,r,s){const a=new Be(0);let o=r===!0?0:1,c,l,d=null,m=0,h=null;function u(S){let P=S.isScene===!0?S.background:null;if(P&&P.isTexture){const y=S.backgroundBlurriness>0;P=e.get(P,y)}return P}function _(S){let P=!1;const y=u(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),P=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,P){const y=u(P);y&&y.isCubeTexture?(l===void 0&&(l=new $i(new Ni(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Vn(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,M,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ud),l.material.toneMapped=We.getTransfer(y.colorSpace)!==$e,(d!==y||m!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,m=y.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $i(new Er(2,2),new mn({name:"BackgroundMaterial",uniforms:Vn(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=We.getTransfer(y.colorSpace)!==$e,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||m!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,m=y.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,P){S.getRGB(jr,ld(i)),t.buffers.color.setClear(jr.r,jr.g,jr.b,P,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,P=1){a.set(S),o=P,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:_,addToRenderList:v,dispose:f}}function Km(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(L,D,G,C,z){let X=!1;const F=m(L,C,G,D);s!==F&&(s=F,l(s.object)),X=u(L,C,G,z),X&&_(L,C,G,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(L,D,G,C),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function m(L,D,G,C){const z=C.wireframe===!0;let X=n[D.id];X===void 0&&(X={},n[D.id]=X);const F=L.isInstancedMesh===!0?L.id:0;let j=X[F];j===void 0&&(j={},X[F]=j);let V=j[G.id];V===void 0&&(V={},j[G.id]=V);let $=V[z];return $===void 0&&($=h(c()),V[z]=$),$}function h(L){const D=[],G=[],C=[];for(let z=0;z<t;z++)D[z]=0,G[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:C,object:L,attributes:{},index:null}}function u(L,D,G,C){const z=s.attributes,X=D.attributes;let F=0;const j=G.getAttributes();for(const V in j)if(j[V].location>=0){const ee=z[V];let ve=X[V];if(ve===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor)),ee===void 0||ee.attribute!==ve||ve&&ee.data!==ve.data)return!0;F++}return s.attributesNum!==F||s.index!==C}function _(L,D,G,C){const z={},X=D.attributes;let F=0;const j=G.getAttributes();for(const V in j)if(j[V].location>=0){let ee=X[V];ee===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const ve={};ve.attribute=ee,ee&&ee.data&&(ve.data=ee.data),z[V]=ve,F++}s.attributes=z,s.attributesNum=F,s.index=C}function v(){const L=s.newAttributes;for(let D=0,G=L.length;D<G;D++)L[D]=0}function p(L){f(L,0)}function f(L,D){const G=s.newAttributes,C=s.enabledAttributes,z=s.attributeDivisors;G[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),z[L]!==D&&(i.vertexAttribDivisor(L,D),z[L]=D)}function S(){const L=s.newAttributes,D=s.enabledAttributes;for(let G=0,C=D.length;G<C;G++)D[G]!==L[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function P(L,D,G,C,z,X,F){F===!0?i.vertexAttribIPointer(L,D,G,z,X):i.vertexAttribPointer(L,D,G,C,z,X)}function y(L,D,G,C){v();const z=C.attributes,X=G.getAttributes(),F=D.defaultAttributeValues;for(const j in X){const V=X[j];if(V.location>=0){let $=z[j];if($===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){const ee=$.normalized,ve=$.itemSize,Re=e.get($);if(Re===void 0)continue;const Z=Re.buffer,ue=Re.type,_e=Re.bytesPerElement,Me=ue===i.INT||ue===i.UNSIGNED_INT||$.gpuType===_o;if($.isInterleavedBufferAttribute){const me=$.data,Le=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ct=$.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Te=0;Te<V.locationSize;Te++)f(V.location+Te,me.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Te=0;Te<V.locationSize;Te++)p(V.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Te=0;Te<V.locationSize;Te++)P(V.location+Te,ve/V.locationSize,ue,ee,Le*_e,(ct+ve/V.locationSize*Te)*_e,Me)}else{if($.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)f(V.location+me,$.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<V.locationSize;me++)p(V.location+me);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let me=0;me<V.locationSize;me++)P(V.location+me,ve/V.locationSize,ue,ee,ve*_e,ve/V.locationSize*me*_e,Me)}}else if(F!==void 0){const ee=F[j];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(V.location,ee);break;case 3:i.vertexAttrib3fv(V.location,ee);break;case 4:i.vertexAttrib4fv(V.location,ee);break;default:i.vertexAttrib1fv(V.location,ee)}}}}S()}function T(){R();for(const L in n){const D=n[L];for(const G in D){const C=D[G];for(const z in C){const X=C[z];for(const F in X)d(X[F].object),delete X[F];delete C[z]}}delete n[L]}}function M(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const G in D){const C=D[G];for(const z in C){const X=C[z];for(const F in X)d(X[F].object),delete X[F];delete C[z]}}delete n[L.id]}function g(L){for(const D in n){const G=n[D];for(const C in G){const z=G[C];if(z[L.id]===void 0)continue;const X=z[L.id];for(const F in X)d(X[F].object),delete X[F];delete z[L.id]}}}function b(L){for(const D in n){const G=n[D],C=L.isInstancedMesh===!0?L.id:0,z=G[C];if(z!==void 0){for(const X in z){const F=z[X];for(const j in F)d(F[j].object),delete F[j];delete z[X]}delete G[C],Object.keys(G).length===0&&delete n[D]}}}function R(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function Jm(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let u=0;u<d;u++)h+=l[u];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function $m(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==si&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const b=g===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Xt&&g!==xi&&!b&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Pe("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:u,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:P,maxFragmentUniforms:y,maxSamples:T,samples:M}}function Qm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Vi,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const u=m.length!==0||h||n!==0||r;return r=h,n=m.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){t=d(m,h,0)},this.setState=function(m,h,u){const _=m.clippingPlanes,v=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!r||_===null||_.length===0||s&&!p)s?d(null):l();else{const S=s?0:n,P=S*4;let y=f.clippingState||null;c.value=y,y=d(_,h,P,u);for(let T=0;T!==P;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,h,u,_){const v=m!==null?m.length:0;let p=null;if(v!==0){if(p=c.value,_!==!0||p===null){const f=u+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let P=0,y=u;P!==v;++P,y+=4)a.copy(m[P]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class Io extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new sd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:Vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Fn});s.uniforms.tEquirect.value=t;const a=new $i(r,s),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=Tt),new so(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Fl=256,jm=3,eg=20,fd=256,pd=16,tg=3,ig=new H,ng=new Be;class ws{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new so(1,10,null),this._boxMesh=new $i(new Ni(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=ig}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,h=c.autoClearColor,u=c.autoClearDepth,_=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(ng));const p=new so(n,r,d);return p.position.copy(o),p.update(c,e),c.autoClear=m,c.autoClearColor=h,c.autoClearDepth=u,c.autoClearStencil=_,e.background=v,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Fl,Zc(e))}_fromTexture(e,t){e.mapping===zn||e.mapping===_r?this._setSize(e.image.length===0?Fl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ol(e,!1,!1),n=Math.log2(e)-jm;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ol(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zn||e.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=rg(),this._integrationMaterial=sg());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/pd);for(let a=0;a<=n;a++){const o=ws.lodToRoughness(a,n);if(a>n-tg)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(fd*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ag());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function Ol(i,e,t){return new Io(i,{minFilter:qi,generateMipmaps:e,type:yi,colorSpace:gs,depthBuffer:t})}function Ar(i,e,t){return new mn({name:i,uniforms:e,vertexShader:Oe.cube_vert,fragmentShader:t,side:Ht,blending:Fn,depthTest:!1,depthWrite:!1})}function rg(){return Ar("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sg(){return Ar("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ag(){return Ar("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${eg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kl(){return Ar("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bl(){return Ar("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function og(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,u=!1){return h==null?null:u?a(h):s(h)}function s(h){if(h&&h.isTexture){const u=h.mapping;if(u===ks||u===Bs)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const v=new Io(_.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const u=h.mapping,_=u===ks||u===Bs,v=u===zn||u===_r;if(_||v){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new ws(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const S=h.image;return _&&S&&S.height>0||v&&S&&c(S)?(n===null&&(n=new ws(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,u){return u===ks?h.mapping=zn:u===Bs&&(h.mapping=_r),h}function c(h){let u=0;const _=6;for(let v=0;v<_;v++)h[v]!==void 0&&u++;return u===_}function l(h){const u=h.target;u.removeEventListener("dispose",l);const _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function d(h){const u=h.target;u.removeEventListener("dispose",d);const _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function lg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&cs("WebGLRenderer: "+n+" extension not supported."),r}}}function cg(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);const v=s.get(_);v&&(e.remove(v),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function d(_){const v=_.attributes;for(const p in v)e.update(v[p],i.ARRAY_BUFFER)}function m(_){const v=_.index,p=_.attributes.position;let f=0;if(p===void 0)return;const S=v!==null?v.array.length:p.array.length/3-1,P=p.count>=65535?td:ed,y=new P(Math.ceil(S/3)*6,1),T=y.array;if(v!==null){const g=v.array;f=v.version;for(let b=0,R=0;b<S;b+=3){const E=g[b+0],L=g[b+1],D=g[b+2];T[R++]=E,T[R++]=L,T[R++]=L,T[R++]=D,T[R++]=D,T[R++]=E}}else{f=p.version;for(let g=0,b=0;g<S;g+=3){const R=g+0,E=g+1,L=g+2;T[b++]=R,T[b++]=E,T[b++]=E,T[b++]=L,T[b++]=L,T[b++]=R}}y.version=f;const M=s.get(_);M&&e.remove(M),s.set(_,y)}function h(_){const v=s.get(_);if(v){const p=_.index;p!==null&&v.version<p.version&&m(_)}else m(_);return s.get(_)}function u(){for(const _ in r){const v=r[_].deref();v!==void 0&&c(v)}}return{get:l,update:d,getWireframeAttribute:h,dispose:u}}function dg(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function c(m,h){i.drawElements(n,h,s,m*a),t.update(h,n,1)}function l(m,h,u){u!==0&&(i.drawElementsInstanced(n,h,s,m*a,u),t.update(h,n,u))}function d(m,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,m,0,u);let v=0;for(let p=0;p<u;p++)v+=h[p];t.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function hg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ug(i,e,t){const n=new WeakMap,r=new ot;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==m){let R=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();const u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let P=0;u===!0&&(P=1),_===!0&&(P=2),v===!0&&(P=3);let y=o.attributes.position.count*P,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const M=new Float32Array(y*T*4*m),g=new $c(M,y,T,m);g.type=xi,g.needsUpdate=!0;const b=P*4;for(let E=0;E<m;E++){const L=p[E],D=f[E],G=S[E],C=y*T*4*E;for(let z=0;z<L.count;z++){const X=z*b;u===!0&&(r.fromBufferAttribute(L,z),M[C+X+0]=r.x,M[C+X+1]=r.y,M[C+X+2]=r.z,M[C+X+3]=0),_===!0&&(r.fromBufferAttribute(D,z),M[C+X+4]=r.x,M[C+X+5]=r.y,M[C+X+6]=r.z,M[C+X+7]=0),v===!0&&(r.fromBufferAttribute(G,z),M[C+X+8]=r.x,M[C+X+9]=r.y,M[C+X+10]=r.z,M[C+X+11]=G.itemSize===4?r.w:1)}}h={count:m,texture:g,size:new Xe(y,T)},n.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let v=0;v<l.length;v++)u+=l[v];const _=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function fg(i,e,t,n,r){let s=new WeakMap;function a(l){const d=r.render.frame,m=l.geometry,h=e.get(l,m);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return h}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const pg={[Rc]:"LINEAR_TONE_MAPPING",[Cc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Nc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function mg(i,e,t,n,r,s){const a=new Si(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const d=new ci;d.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new yt([0,2,0,0,2,0],2));const m=new Qu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new $i(d,m),u=new Do(-1,1,1,-1,0,1);let _=null,v=null,p=!1,f,S=null,P=[],y=!1;this.setSize=function(T,M){a.setSize(T,M),o!==null&&o.setSize(T,M),c!==null&&c.setSize(T,M);for(let g=0;g<P.length;g++){const b=P[g];b.setSize&&b.setSize(T,M)}},this.setEffects=function(T){P=T,y=P.length>0&&P[0].isRenderPass===!0;const M=a.width,g=a.height;P.length>0&&o===null&&(o=new Si(M,g,{type:yi,depthBuffer:!1,stencilBuffer:!1}),c=new Si(M,g,{type:yi,depthBuffer:!1,stencilBuffer:!1}));const b=r===!0&&P.some(R=>R.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Hn(M,g),s===!0&&(l.format=Yi,l.type=Gn)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let R=0;R<P.length;R++){const E=P[R];E.setSize&&E.setSize(M,g),b&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(l)}},this.begin=function(T,M){if(p||T.toneMapping===wi&&P.length===0)return!1;if(S=M,M!==null){const g=M.width,b=M.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return y===!1&&T.setRenderTarget(a),f=T.toneMapping,T.toneMapping=wi,!0},this.hasRenderPass=function(){return y},this.end=function(T,M){T.toneMapping=f,p=!0;let g=a,b=o;for(let R=0;R<P.length;R++){const E=P[R];E.enabled!==!1&&(E.render(T,b,g,M),E.needsSwap!==!1&&(g=b,b=b===o?c:o))}if(_!==T.outputColorSpace||v!==T.toneMapping){_=T.outputColorSpace,v=T.toneMapping,m.defines={},We.getTransfer(_)===$e&&(m.defines.SRGB_TRANSFER="");const R=pg[v];R&&(m.defines[R]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(S),T.render(h,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),d.dispose(),m.dispose()}}const md=new It,gd=new Hn(1,1),_d=new ad(1),vd=new $c,xd=new Ru,wd=new sd,zl=[],Gl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function Zn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=zl[r];if(s===void 0&&(s=new Float32Array(r),zl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function wg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),_t(t,n)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),_t(t,n)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),_t(t,n)}}function yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Cs(i){return i.version===0&&(i.compareFunction=qc,i.needsUpdate=!0),i}function Dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Cs(gd):s=md,t.setTexture2D(e||s,r)}function Ig(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||xd,r)}function Lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Cs(_d):s=wd,t.setTextureCube(e||s,r)}function Ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vd,r)}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return wg;case 35675:return Sg;case 35676:return bg;case 5124:case 35670:return yg;case 35667:case 35671:return Mg;case 35668:case 35672:return Eg;case 35669:case 35673:return Ag;case 5125:return Tg;case 36294:return Pg;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ug}}function Fg(i,e){i.uniform1fv(this.addr,e)}function Og(i,e){const t=Zn(e,this.size,2);i.uniform2fv(this.addr,t)}function kg(i,e){const t=Zn(e,this.size,3);i.uniform3fv(this.addr,t)}function Bg(i,e){const t=Zn(e,this.size,4);i.uniform4fv(this.addr,t)}function zg(i,e){const t=Zn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gg(i,e){const t=Zn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hg(i,e){const t=Zn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vg(i,e){i.uniform1iv(this.addr,e)}function Wg(i,e){i.uniform2iv(this.addr,e)}function Xg(i,e){i.uniform3iv(this.addr,e)}function qg(i,e){i.uniform4iv(this.addr,e)}function Yg(i,e){i.uniform1uiv(this.addr,e)}function Zg(i,e){i.uniform2uiv(this.addr,e)}function Kg(i,e){i.uniform3uiv(this.addr,e)}function Jg(i,e){i.uniform4uiv(this.addr,e)}function $g(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Cs(gd):a=md;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Qg(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||xd,s[a])}function jg(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Cs(_d):a=wd;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function e0(i,e,t){const n=this.cache,r=e.length,s=Rs(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||vd,s[a])}function t0(i){switch(i){case 5126:return Fg;case 35664:return Og;case 35665:return kg;case 35666:return Bg;case 35674:return zg;case 35675:return Gg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Zg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return e0}}class i0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ng(t.type)}}class n0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t0(t.type)}}class r0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Xl(i,e){i.seq.push(e),i.map[e.id]=e}function s0(i,e,t){const n=i.name,r=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),a=ha.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Xl(t,l===void 0?new i0(o,i,e):new n0(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new r0(o),Xl(t,m)),t=m}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);s0(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ql(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const a0=37297;let o0=0;function l0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Yl=new De;function c0(i){We._getMatrix(Yl,We.workingColorSpace,i);const e=`mat3( ${Yl.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case _s:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+l0(i.getShaderSource(e),o)}else return s}function d0(i,e){const t=c0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const h0={[Rc]:"Linear",[Cc]:"Reinhard",[Dc]:"Cineon",[Ic]:"ACESFilmic",[Uc]:"AgX",[Nc]:"Neutral",[Lc]:"Custom"};function u0(i,e){const t=h0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const es=new H;function f0(){We.getLuminanceCoefficients(es);const i=es.x.toFixed(4),e=es.y.toFixed(4),t=es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function m0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function Kl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(i){return i.replace(_0,v0)}function v0(i,e){const t=Oe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ao(t)}const x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(x0,w0)}function w0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ql(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const S0={[or]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function b0(i){return S0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y0={[_r]:"ENVMAP_MODE_REFRACTION"};function M0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":y0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E0={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function A0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":E0[i.combine]||"ENVMAP_BLENDING_NONE"}function T0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=b0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=M0(t),m=A0(t),h=p0(t),u=m0(s),_=r.createProgram();let v,p,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(rr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(v=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==wi?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,d0("linearToOutputTexel",t.outputColorSpace),f0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=ao(a),a=Kl(a,t),a=Jl(a,t),o=ao(o),o=Kl(o,t),o=Jl(o,t),a=$l(a),o=$l(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=f+v+a,P=f+p+o,y=ql(r,r.VERTEX_SHADER,S),T=ql(r,r.FRAGMENT_SHADER,P);r.attachShader(_,y),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(E){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",D=r.getShaderInfoLog(y)||"",G=r.getShaderInfoLog(T)||"",C=L.trim(),z=D.trim(),X=G.trim();let F=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,y,T);else{const V=Zl(r,y,"vertex"),$=Zl(r,T,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+C+`
`+V+`
`+$)}else C!==""?Pe("WebGLProgram: Program Info Log:",C):(z===""||X==="")&&(j=!1);j&&(E.diagnostics={runnable:F,programLog:C,vertexShader:{log:z,prefix:v},fragmentShader:{log:X,prefix:p}})}r.deleteShader(y),r.deleteShader(T),g=new ds(r,_),b=g0(r,_)}let g;this.getUniforms=function(){return g===void 0&&M(this),g};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,a0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let P0=0;class R0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new C0(e),t.set(e,n)),n}}class C0{constructor(e){this.id=P0++,this.code=e,this.usedTimes=0}}function D0(i){return i===pn||i===ps||i===ms}function I0(i,e,t,n,r,s){const a=new Qc,o=new R0,c=new Set,l=[],d=new Map,m=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,b,R,E,L,D){const G=E.fog,C=L.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?E.environment:null,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,F=e.get(g.envMap||z,X),j=h[g.type];let V=n.precision;g.precision!==null&&(V=n.getMaxPrecision(g.precision),V!==g.precision&&Pe("WebGLProgram.getParameters:",g.precision,"not supported, using",V,"instead."));const $=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=$!==void 0?$.length:0;let ve=0;C.morphAttributes.position!==void 0&&(ve=1),C.morphAttributes.normal!==void 0&&(ve=2),C.morphAttributes.color!==void 0&&(ve=3);let Re,Z,ue,_e;if(j){const fe=pi[j];Re=fe.vertexShader,Z=fe.fragmentShader}else{Re=g.vertexShader,Z=g.fragmentShader;const fe=o.getVertexShaderStage(g),Je=o.getFragmentShaderStage(g);o.update(g,fe,Je),ue=fe.id,_e=Je.id}const Me=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Le=L.isInstancedMesh===!0,ct=L.isBatchedMesh===!0,Te=!!g.map,Ke=!!g.matcap,Qe=!!F,ze=Qe&&F.isPMREMTexture===!0,Mt=!!g.aoMap,ut=!!g.lightMap,kt=!!g.bumpMap&&g.wireframe===!1,st=!!g.normalMap,di=!!g.displacementMap,vt=!!g.emissiveMap,qt=!!g.metalnessMap,Yt=!!g.roughnessMap,Zt=g.anisotropy>0,N=g.clearcoat>0,Kt=g.diffuseRoughness>0,it=g.dispersion>0,nt=g.retroreflectivity>0,he=g.iridescence>0,ft=g.sheen>0,Ae=g.transmission>0,Ce=Zt&&!!g.anisotropyMap,A=N&&!!g.clearcoatMap,x=N&&!!g.clearcoatNormalMap,k=N&&!!g.clearcoatRoughnessMap,te=Kt&&!!g.diffuseRoughnessMap,Q=he&&!!g.iridescenceMap,re=he&&!!g.iridescenceThicknessMap,ce=ft&&!!g.sheenColorMap,Y=ft&&!!g.sheenRoughnessMap,K=!!g.specularMap,ae=!!g.specularColorMap,I=!!g.specularIntensityMap,J=Ae&&!!g.transmissionMap,q=Ae&&!!g.thicknessMap,oe=!!g.gradientMap,ne=!!g.alphaMap,se=g.alphaTest>0,ye=!!g.alphaHash,Fe=!!g.extensions;let ie=wi;g.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ie=i.toneMapping);const Ee=ze?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Ne={shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:Re,fragmentShader:Z,defines:g.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:V,batching:ct,batchingColor:ct&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Te,matcap:Ke,envMap:Qe,envMapMode:Qe&&F.mapping,envMapPMREM:ze,envMapMaxLod:ze?Ee.length-1:null,envMapSize:ze?Ee[0].width:null,aoMap:Mt,lightMap:ut,bumpMap:kt,normalMap:st,displacementMap:di,emissiveMap:vt,normalMapObjectSpace:st&&g.normalMapType===$h,normalMapTangentSpace:st&&g.normalMapType===ro,packedNormalMap:st&&g.normalMapType===ro&&D0(g.normalMap.format),metalnessMap:qt,roughnessMap:Yt,anisotropy:Zt,anisotropyMap:Ce,clearcoat:N,clearcoatMap:A,clearcoatNormalMap:x,clearcoatRoughnessMap:k,diffuseRoughness:Kt,diffuseRoughnessMap:te,dispersion:it,retroreflection:nt,iridescence:he,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:ft,sheenColorMap:ce,sheenRoughnessMap:Y,specularMap:K,specularColorMap:ae,specularIntensityMap:I,transmission:Ae,transmissionMap:J,thicknessMap:q,gradientMap:oe,opaque:g.transparent===!1&&g.blending===lr&&g.alphaToCoverage===!1,alphaMap:ne,alphaTest:se,alphaHash:ye,combine:g.combine,mapUv:Te&&u(g.map.channel),aoMapUv:Mt&&u(g.aoMap.channel),lightMapUv:ut&&u(g.lightMap.channel),bumpMapUv:kt&&u(g.bumpMap.channel),normalMapUv:st&&u(g.normalMap.channel),displacementMapUv:di&&u(g.displacementMap.channel),emissiveMapUv:vt&&u(g.emissiveMap.channel),metalnessMapUv:qt&&u(g.metalnessMap.channel),roughnessMapUv:Yt&&u(g.roughnessMap.channel),anisotropyMapUv:Ce&&u(g.anisotropyMap.channel),clearcoatMapUv:A&&u(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&u(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&u(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&u(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&u(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&u(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&u(g.sheenRoughnessMap.channel),specularMapUv:K&&u(g.specularMap.channel),specularColorMapUv:ae&&u(g.specularColorMap.channel),specularIntensityMapUv:I&&u(g.specularIntensityMap.channel),transmissionMapUv:J&&u(g.transmissionMap.channel),thicknessMapUv:q&&u(g.thicknessMap.channel),alphaMapUv:ne&&u(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(st||Zt),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(Te||ne),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&st===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ve,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.filter(fe=>fe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Te&&g.map.isVideoTexture===!0&&We.getTransfer(g.map.colorSpace)===$e,decodeVideoTextureEmissive:vt&&g.emissiveMap.isVideoTexture===!0&&We.getTransfer(g.emissiveMap.colorSpace)===$e,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===_i,flipSided:g.side===Ht,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Fe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&g.extensions.multiDraw===!0||ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function v(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)b.push(R),b.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(p(b,g),f(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function f(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){const b=h[g.type];let R;if(b){const E=pi[b];R=Ku.clone(E.uniforms)}else R=g.uniforms;return R}function P(g,b){let R=d.get(b);return R!==void 0?++R.usedTimes:(R=new T0(i,b,g,r),l.push(R),d.set(b,R)),R}function y(g){if(--g.usedTimes===0){const b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),d.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function M(){o.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:S,acquireProgram:P,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:M}}function L0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function U0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ec(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,_,v,p,f){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:u,material:_,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:f},i[e]=S):(S.id=h.id,S.object=h,S.geometry=u,S.material=_,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=p,S.group=f),e++,S}function c(h,u,_,v,p,f,S){S.reversedDepth===!0&&(p=-p);const P=o(h,u,_,v,p,f);_.transmission>0?n.push(P):_.transparent===!0?r.push(P):t.push(P)}function l(h,u,_,v,p,f){const S=o(h,u,_,v,p,f);_.transmission>0?n.unshift(S):_.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,u){t.length>1&&t.sort(h||U0),n.length>1&&n.sort(u||jl),r.length>1&&r.sort(u||jl)}function m(){for(let h=e,u=i.length;h<u;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:m,sort:d}}function N0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ec,i.set(n,[a])):r>=s.length?(a=new ec,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function F0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Be};break;case"SpotLight":t={position:new H,direction:new H,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function O0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let k0=0;function B0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z0(i){const e=new F0,t=O0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,s=new rt,a=new rt;function o(l){let d=0,m=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,_=0,v=0,p=0,f=0,S=0,P=0,y=0,T=0,M=0,g=0,b=0,R=0,E=0;l.sort(B0);for(let D=0,G=l.length;D<G;D++){const C=l[D],z=C.color,X=C.intensity,F=C.distance;let j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===pn?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=z.r*X,m+=z.g*X,h+=z.b*X;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],X);E++}else if(C.isSunLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,ee=t.get(C);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=j;const ve=$.getViewportCount();for(let Re=0;Re<ve;Re++)n.sunShadowMatrix[v+Re]=$.getMatrix(Re),n.sunShadowCascade[v+Re]=$._cascadeData[Re];v+=ve,_++}n.sun[u]=V,u++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,ee=t.get(C);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=C.shadow.matrix,T++}n.directional[p]=V,p++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(z).multiplyScalar(X),V.distance=F,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[S]=V;const $=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,$.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[S]=$.matrix,C.castShadow){const ee=t.get(C);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,n.spotShadow[S]=ee,n.spotShadowMap[S]=j,g++}S++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(z).multiplyScalar(X),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[P]=V,P++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const $=C.shadow,ee=t.get(C);ee.shadowIntensity=$.intensity,ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=j,n.pointShadowMatrix[f]=C.shadow.matrix,M++}n.point[f]=V,f++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(X),V.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[y]=V,y++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=h;const L=n.hash;(L.sunLength!==u||L.directionalLength!==p||L.pointLength!==f||L.spotLength!==S||L.rectAreaLength!==P||L.hemiLength!==y||L.numSunShadows!==_||L.numDirectionalShadows!==T||L.numPointShadows!==M||L.numSpotShadows!==g||L.numSpotMaps!==b||L.numLightProbes!==E)&&(n.sun.length=u,n.directional.length=p,n.spot.length=S,n.rectArea.length=P,n.point.length=f,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,L.sunLength=u,L.directionalLength=p,L.pointLength=f,L.spotLength=S,L.rectAreaLength=P,L.hemiLength=y,L.numSunShadows=_,L.numDirectionalShadows=T,L.numPointShadows=M,L.numSpotShadows=g,L.numSpotMaps=b,L.numLightProbes=E,n.version=k0++)}function c(l,d){let m=0,h=0,u=0,_=0,v=0,p=0;const f=d.matrixWorldInverse;for(let S=0,P=l.length;S<P;S++){const y=l[S];if(y.isSunLight){const T=n.sun[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),m++}else if(y.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),h++}else if(y.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),u++}else if(y.isHemisphereLight){const T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:o,setupView:c,state:n}}function tc(i){const e=new z0(i),t=[],n=[],r=[];function s(m){d.camera=m,t.length=0,n.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):t.push(m)}function o(m){n.push(m)}function c(){e.setup(t),r.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function l(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function G0(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new tc(i),e.set(r,[o])):s>=a.length?(o=new tc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,W0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],X0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],ic=new rt,tr=new H,ua=new H;function q0(i,e,t){let n=new br;const r=new Xe,s=new Xe,a=new ot,o=new ef,c=new tf,l={},d=t.maxTextureSize,m={[fn]:Ht,[Ht]:fn,[_i]:_i},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:H0,fragmentShader:V0}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const _=new ci;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $i(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let f=this.type;this.render=function(M,g,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Ph&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);const R=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Fn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=f!==this.type;G&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=M.length;C<z;C++){const X=M[C],F=X.shadow;if(F===void 0){Pe("WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();r.multiply(j),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,F.mapSize.y=s.y));const V=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===nr){if(X.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Si(r.x,r.y,{format:pn,type:yi,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),F.map.texture.name=X.name+".shadowMap",F.map.depthTexture=new Hn(r.x,r.y,xi),F.map.depthTexture.name=X.name+".shadowMapDepth",F.map.depthTexture.format=Ki,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=At,F.map.depthTexture.magFilter=At}else X.isPointLight?(F.map=new Io(r.x),F.map.depthTexture=new ad(r.x,bi)):(F.map=new Si(r.x,r.y),F.map.depthTexture=new Hn(r.x,r.y,bi)),F.map.depthTexture.name=X.name+".shadowMap",F.map.depthTexture.format=Ki,this.type===or?(F.map.depthTexture.compareFunction=V?Xc:Wc,F.map.depthTexture.minFilter=Tt,F.map.depthTexture.magFilter=Tt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=At,F.map.depthTexture.magFilter=At);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==r.x||F.map.height!==r.y)&&F.map.setSize(r.x,r.y);const $=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();X.isPointLight!==!0&&F.updateMatrices(X,b);const ee=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let ve=0;ve<$;ve++){const Re=F.getCamera(ve);if(X.isPointLight){const Z=F.camera,ue=F.matrix,_e=X.distance||Z.far;_e!==Z.far&&(Z.far=_e,Z.updateProjectionMatrix()),tr.setFromMatrixPosition(X.matrixWorld),Z.position.copy(tr),ua.copy(Z.position),ua.add(W0[ve]),Z.up.copy(X0[ve]),Z.lookAt(ua),Z.updateMatrixWorld(),ue.makeTranslation(-tr.x,-tr.y,-tr.z),ic.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ic,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(F.map),i.clear());const Z=F.getViewport(ve);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),D.viewport(a)}n=F.getFrustum(ve),y(g,b,Re,X,ee,this.type)}F.isPointLightShadow!==!0&&this.type===nr&&S(F,b),F.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(R,E,L)};function S(M,g){const b=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null?M.mapPass=new Si(r.x,r.y,{format:pn,type:yi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(g,null,b,h,v,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(g,null,b,u,v,null)}function P(M,g,b,R){let E=null;const L=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)E=L;else if(E=b.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const D=E.uuid,G=g.uuid;let C=l[D];C===void 0&&(C={},l[D]=C);let z=C[G];z===void 0&&(z=E.clone(),C[G]=z,g.addEventListener("dispose",T)),E=z}if(E.visible=g.visible,E.wireframe=g.wireframe,R===nr?E.side=g.shadowSide!==null?g.shadowSide:g.side:E.side=g.shadowSide!==null?g.shadowSide:m[g.side],E.alphaMap=g.alphaMap,E.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,E.map=g.map,E.clipShadows=g.clipShadows,E.clippingPlanes=g.clippingPlanes,E.clipIntersection=g.clipIntersection,E.displacementMap=g.displacementMap,E.displacementScale=g.displacementScale,E.displacementBias=g.displacementBias,E.wireframeLinewidth=g.wireframeLinewidth,E.linewidth=g.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=i.properties.get(E);D.light=b}return E}function y(M,g,b,R,E,L){if(M.visible===!1)return;if(M.layers.test(E)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===nr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const C=e.update(M),z=M.material;if(Array.isArray(z)){const X=C.groups;for(let F=0,j=X.length;F<j;F++){const V=X[F],$=z[V.materialIndex];if($&&$.visible){const ee=P(M,$,R,L);M.onBeforeShadow(i,M,g,b,C,ee,V),i.renderBufferDirect(b,null,C,ee,M,V),M.onAfterShadow(i,M,g,b,C,ee,V)}}}else if(z.visible){const X=P(M,z,R,L);M.onBeforeShadow(i,M,g,b,C,X,null),i.renderBufferDirect(b,null,C,X,M,null),M.onAfterShadow(i,M,g,b,C,X,null)}}const G=M.children;for(let C=0,z=G.length;C<z;C++)y(G[C],g,b,R,E,L)}function T(M){M.target.removeEventListener("dispose",T);for(const b in l){const R=l[b],E=M.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}function Y0(i,e){function t(){let I=!1;const J=new ot;let q=null;const oe=new ot(0,0,0,0);return{setMask:function(ne){q!==ne&&!I&&(i.colorMask(ne,ne,ne,ne),q=ne)},setLocked:function(ne){I=ne},setClear:function(ne,se,ye,Fe,ie){ie===!0&&(ne*=Fe,se*=Fe,ye*=Fe),J.set(ne,se,ye,Fe),oe.equals(J)===!1&&(i.clearColor(ne,se,ye,Fe),oe.copy(J))},reset:function(){I=!1,q=null,oe.set(-1,0,0,0)}}}function n(){let I=!1,J=!1,q=null,oe=null,ne=null;return{setReversed:function(se){if(J!==se){const ye=e.get("EXT_clip_control");se?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),J=se;const Fe=ne;ne=null,this.setClear(Fe)}},getReversed:function(){return J},setTest:function(se){se?me(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(se){q!==se&&!I&&(i.depthMask(se),q=se)},setFunc:function(se){if(J&&(se=lu[se]),oe!==se){switch(se){case xa:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=se}},setLocked:function(se){I=se},setClear:function(se){ne!==se&&(ne=se,J&&(se=1-se),i.clearDepth(se))},reset:function(){I=!1,q=null,oe=null,ne=null,J=!1}}}function r(){let I=!1,J=null,q=null,oe=null,ne=null,se=null,ye=null,Fe=null,ie=null;return{setTest:function(Ee){I||(Ee?me(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Ee){J!==Ee&&!I&&(i.stencilMask(Ee),J=Ee)},setFunc:function(Ee,Ne,fe){(q!==Ee||oe!==Ne||ne!==fe)&&(i.stencilFunc(Ee,Ne,fe),q=Ee,oe=Ne,ne=fe)},setOp:function(Ee,Ne,fe){(se!==Ee||ye!==Ne||Fe!==fe)&&(i.stencilOp(Ee,Ne,fe),se=Ee,ye=Ne,Fe=fe)},setLocked:function(Ee){I=Ee},setClear:function(Ee){ie!==Ee&&(i.clearStencil(Ee),ie=Ee)},reset:function(){I=!1,J=null,q=null,oe=null,ne=null,se=null,ye=null,Fe=null,ie=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let d={},m={},h={},u=new WeakMap,_=[],v=null,p=!1,f=null,S=null,P=null,y=null,T=null,M=null,g=null,b=new Be(0,0,0),R=0,E=!1,L=null,D=null,G=null,C=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=j>=2);let $=null,ee={};const ve=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Z=new ot().fromArray(ve),ue=new ot().fromArray(Re);function _e(I,J,q,oe){const ne=new Uint8Array(4),se=i.createTexture();i.bindTexture(I,se),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<q;ye++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(J+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return se}const Me={};Me[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(gr),kt(!1),st(il),me(i.CULL_FACE),Mt(Fn);function me(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Le(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function ct(I,J){return h[I]!==J?(i.bindFramebuffer(I,J),h[I]=J,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=J),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Te(I,J){let q=_,oe=!1;if(I){q=u.get(J),q===void 0&&(q=[],u.set(J,q));const ne=I.textures;if(q.length!==ne.length||q[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ye=ne.length;se<ye;se++)q[se]=i.COLOR_ATTACHMENT0+se;q.length=ne.length,oe=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,oe=!0);oe&&i.drawBuffers(q)}function Ke(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const Qe={[In]:i.FUNC_ADD,[Ch]:i.FUNC_SUBTRACT,[Dh]:i.FUNC_REVERSE_SUBTRACT};Qe[Ih]=i.MIN,Qe[Lh]=i.MAX;const ze={[Uh]:i.ZERO,[Nh]:i.ONE,[Fh]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[Tc]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Vh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(I,J,q,oe,ne,se,ye,Fe,ie,Ee){if(I===Fn){p===!0&&(Le(i.BLEND),p=!1);return}if(p===!1&&(me(i.BLEND),p=!0),I!==Rh){if(I!==f||Ee!==E){if((S!==In||T!==In)&&(i.blendEquation(i.FUNC_ADD),S=In,T=In),Ee)switch(I){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",I);break}else switch(I){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rl:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",I);break}P=null,y=null,M=null,g=null,b.set(0,0,0),R=0,f=I,E=Ee}return}ne=ne||J,se=se||q,ye=ye||oe,(J!==S||ne!==T)&&(i.blendEquationSeparate(Qe[J],Qe[ne]),S=J,T=ne),(q!==P||oe!==y||se!==M||ye!==g)&&(i.blendFuncSeparate(ze[q],ze[oe],ze[se],ze[ye]),P=q,y=oe,M=se,g=ye),(Fe.equals(b)===!1||ie!==R)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ie),b.copy(Fe),R=ie),f=I,E=!1}function ut(I,J){I.side===_i?Le(i.CULL_FACE):me(i.CULL_FACE);let q=I.side===Ht;J&&(q=!q),kt(q),I.blending===lr&&I.transparent===!1?Mt(Fn):Mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const oe=I.stencilWrite;o.setTest(oe),oe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function st(I){I!==Ah?(me(i.CULL_FACE),I!==D&&(I===il?i.cullFace(i.BACK):I===Th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),D=I}function di(I){I!==G&&(F&&i.lineWidth(I),G=I)}function vt(I,J,q){I?(me(i.POLYGON_OFFSET_FILL),(C!==J||z!==q)&&(C=J,z=q,a.getReversed()&&(J=-J,q=-q),i.polygonOffset(J,q))):Le(i.POLYGON_OFFSET_FILL)}function qt(I){I?me(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function Yt(I){I===void 0&&(I=i.TEXTURE0+X-1),$!==I&&(i.activeTexture(I),$=I)}function Zt(I,J,q){q===void 0&&($===null?q=i.TEXTURE0+X-1:q=$);let oe=ee[q];oe===void 0&&(oe={type:void 0,texture:void 0},ee[q]=oe),(oe.type!==I||oe.texture!==J)&&($!==q&&(i.activeTexture(q),$=q),i.bindTexture(I,J||Me[I]),oe.type=I,oe.texture=J)}function N(){const I=ee[$];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function nt(){try{i.texSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function he(){try{i.texSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ft(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Ce(){try{i.texStorage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function A(){try{i.texStorage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function x(){try{i.texImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function k(){try{i.texImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function te(I){return m[I]!==void 0?m[I]:i.getParameter(I)}function Q(I,J){m[I]!==J&&(i.pixelStorei(I,J),m[I]=J)}function re(I){Z.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function ce(I){ue.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ue.copy(I))}function Y(I,J){let q=l.get(J);q===void 0&&(q=new WeakMap,l.set(J,q));let oe=q.get(I);oe===void 0&&(oe=i.getUniformBlockIndex(J,I.name),i.uniformBlockBinding(J,oe,oe),q.set(I,oe))}function K(I,J,q){const ne=l.get(J).get(I);c[ne]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ne,q),c[ne]=q)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},$=null,ee={},h={},c={},u=new WeakMap,_=[],v=null,p=!1,f=null,S=null,P=null,y=null,T=null,M=null,g=null,b=new Be(0,0,0),R=0,E=!1,L=null,D=null,G=null,C=null,z=null,Z.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Le,bindFramebuffer:ct,drawBuffers:Te,useProgram:Ke,setBlending:Mt,setMaterial:ut,setFlipSided:kt,setCullFace:st,setLineWidth:di,setPolygonOffset:vt,setScissorTest:qt,activeTexture:Yt,bindTexture:Zt,unbindTexture:N,compressedTexImage2D:Kt,compressedTexImage3D:it,texImage2D:x,texImage3D:k,pixelStorei:Q,getParameter:te,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Ce,texStorage3D:A,texSubImage2D:nt,texSubImage3D:he,compressedTexSubImage2D:ft,compressedTexSubImage3D:Ae,scissor:re,viewport:ce,reset:ae}}function Z0(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,d=new WeakMap,m=new Set;let h;const u=new WeakMap,_=new Set,v=new FinalizationRegistry(A=>_.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,x){return p?new OffscreenCanvas(A,x):wr("canvas")}function S(A,x,k){let te=1;const Q=Ce(A);if((Q.width>k||Q.height>k)&&(te=k/Math.max(Q.width,Q.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(te*Q.width),ce=Math.floor(te*Q.height);h===void 0&&(h=f(re,ce));const Y=x?f(re,ce):h;return Y.width=re,Y.height=ce,Y.getContext("2d").drawImage(A,0,0,re,ce),Pe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+ce+")."),Y}else return"data"in A&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function P(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,x,k,te,Q,re=!1){if(A!==null){if(i[A]!==void 0)return i[A];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8),k===i.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),k===i.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),x===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8),k===i.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),k===i.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),k===i.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const K=re?_s:We.getTransfer(Q);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=K===$e?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),k===i.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(A,x){let k;return A?x===null||x===bi||x===Gn?k=i.DEPTH24_STENCIL8:x===xi?k=i.DEPTH32F_STENCIL8:x===vr&&(k=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bi||x===Gn?k=i.DEPTH_COMPONENT24:x===xi?k=i.DEPTH_COMPONENT32F:x===vr&&(k=i.DEPTH_COMPONENT16),k}function b(A,x){return P(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Tt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=new WeakRef(A);n.get(A).__ref=x,_.add(x),v.register(A,x,x)}function E(A){const x=n.get(A).__ref;x!==void 0&&(_.delete(x),v.unregister(x))}function L(A){G(A.target)}function D(A){C(A.target)}function G(A){A.removeEventListener("dispose",L),E(A),X(A),A.isVideoTexture&&d.delete(A),A.isHTMLTexture&&m.delete(A)}function C(A){A.removeEventListener("dispose",D),E(A),j(A)}function z(){for(const A of _){const x=A.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):G(x))}_.clear(),m.clear()}function X(A){const x=n.get(A);if(x.__webglInit===void 0)return;const k=A.source,te=u.get(k);if(te){const Q=te[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&F(A),Object.keys(te).length===0&&u.delete(k)}n.remove(A)}function F(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const k=A.source,te=u.get(k);delete te[x.__cacheKey],a.memory.textures--}function j(A){const x=n.get(A);x.__depthDisposeCallback&&x.__depthDisposeCallback();const k=A.depthTexture;if(k&&k.renderTarget===A&&G(k),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let re=0;re<x.__webglFramebuffer[Q].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[Q][re]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const te=A.textures;for(let Q=0,re=te.length;Q<re;Q++){const ce=n.get(te[Q]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[Q])}n.remove(A)}let V=0;function $(){V=0}function ee(){return V}function ve(A){V=A}function Re(){const A=V;return A>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),V+=1,A}function Z(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.mipmapsAutoUpdate),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ue(A,x){const k=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const te=A.image;if(te===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(k,A,x);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function _e(A,x){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ut(k,A,x);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function Me(A,x){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ut(k,A,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function me(A,x){const k=n.get(A);if(A.version>0&&k.__version!==A.version){kt(k,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const Le={[Aa]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},ct={[At]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[zs]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Te={[jh]:i.NEVER,[qc]:i.ALWAYS,[eu]:i.LESS,[Wc]:i.LEQUAL,[tu]:i.EQUAL,[Xc]:i.GEQUAL,[iu]:i.GREATER,[nu]:i.NOTEQUAL};function Ke(A,x){if(x.type===xi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Tt||x.magFilter===zs||x.magFilter===Dr||x.magFilter===qi||x.minFilter===Tt||x.minFilter===zs||x.minFilter===Dr||x.minFilter===qi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Le[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Le[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Le[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===At||x.minFilter!==Dr&&x.minFilter!==qi||x.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L),R(x));const te=x.source;let Q=u.get(te);Q===void 0&&(Q={},u.set(te,Q));const re=Z(x);if(re!==A.__cacheKey){Q[re]===void 0&&(Q[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[re].usedTimes++;const ce=Q[A.__cacheKey];ce!==void 0&&(Q[A.__cacheKey].usedTimes--,ce.usedTimes===0&&F(x)),A.__cacheKey=re,A.__webglTexture=Q[re].texture}return k}function ze(A,x,k){return Math.floor(Math.floor(A/k)/x)}function Mt(A,x,k,te){const re=A.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,te,x.data);else{re.sort((I,J)=>I.start-J.start);let ce=0;for(let I=1;I<re.length;I++){const J=re[ce],q=re[I],oe=J.start+J.count,ne=ze(q.start,x.width,4),se=ze(J.start,x.width,4);q.start<=oe+1&&ne===se&&ze(q.start+q.count-1,x.width,4)===ne?J.count=Math.max(J.count,q.start+q.count-J.start):(++ce,re[ce]=q)}re.length=ce+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let I=0,J=re.length;I<J;I++){const q=re[I],oe=Math.floor(q.start/4),ne=Math.ceil(q.count/4),se=oe%x.width,ye=Math.floor(oe/x.width),Fe=ne,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye),t.texSubImage2D(i.TEXTURE_2D,0,se,ye,Fe,ie,k,te,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ut(A,x,k){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);const Q=Qe(A,x),re=x.source;t.bindTexture(te,A.__webglTexture,i.TEXTURE0+k);const ce=n.get(re);if(re.version!==ce.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ie=We.getPrimaries(We.workingColorSpace),Ee=x.colorSpace===Wi?null:We.getPrimaries(x.colorSpace),Ne=x.colorSpace===Wi||ie===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=S(x.image,!1,r.maxTextureSize);K=Ae(x,K);const ae=s.convert(x.format,x.colorSpace),I=s.convert(x.type);let J=M(x.internalFormat,ae,I,x.normalized,x.colorSpace,x.isVideoTexture);Ke(te,x);let q;const oe=x.mipmaps,ne=x.isVideoTexture!==!0,se=ce.__version===void 0||Q===!0,ye=re.dataReady,Fe=b(x,K);if(x.isDepthTexture)J=g(x.format===Yi,x.type),se&&(ne?t.texStorage2D(i.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,ae,I,null));else if(x.isDataTexture)if(oe.length>0){ne&&se&&t.texStorage2D(i.TEXTURE_2D,Fe,J,oe[0].width,oe[0].height);for(let ie=0,Ee=oe.length;ie<Ee;ie++)q=oe[ie],ne?ye&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,ae,I,q.data):t.texImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,ae,I,q.data);x.generateMipmaps=!1}else ne?(se&&t.texStorage2D(i.TEXTURE_2D,Fe,J,K.width,K.height),ye&&Mt(x,K,ae,I)):t.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,ae,I,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ne&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,J,oe[0].width,oe[0].height,K.depth);for(let ie=0,Ee=oe.length;ie<Ee;ie++)if(q=oe[ie],x.format!==si)if(ae!==null)if(ne){if(ye)if(x.layerUpdates.size>0){const Ne=Nl(q.width,q.height,x.format,x.type);for(const fe of x.layerUpdates){const Je=q.data.subarray(fe*Ne/q.data.BYTES_PER_ELEMENT,(fe+1)*Ne/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,fe,q.width,q.height,1,ae,Je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,K.depth,ae,q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,J,q.width,q.height,K.depth,0,q.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,K.depth,ae,I,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,J,q.width,q.height,K.depth,0,ae,I,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ne&&se&&t.texStorage2D(i.TEXTURE_2D,Fe,J,oe[0].width,oe[0].height);for(let ie=0,Ee=oe.length;ie<Ee;ie++)q=oe[ie],x.format!==si?ae!==null?ne?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,ae,q.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,q.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?ye&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,ae,I,q.data):t.texImage2D(i.TEXTURE_2D,ie,J,q.width,q.height,0,ae,I,q.data)}else if(x.isDataArrayTexture)if(ne){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,J,K.width,K.height,K.depth),ye)if(x.layerUpdates.size>0){const ie=Nl(K.width,K.height,x.format,x.type);for(const Ee of x.layerUpdates){const Ne=K.data.subarray(Ee*ie/K.data.BYTES_PER_ELEMENT,(Ee+1)*ie/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,K.width,K.height,1,ae,I,Ne)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,I,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ae,I,K.data);else if(x.isData3DTexture)ne?(se&&t.texStorage3D(i.TEXTURE_3D,Fe,J,K.width,K.height,K.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,I,K.data)):t.texImage3D(i.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ae,I,K.data);else if(x.isFramebufferTexture){if(se)if(ne)t.texStorage2D(i.TEXTURE_2D,Fe,J,K.width,K.height);else{let ie=K.width,Ee=K.height;for(let Ne=0;Ne<Fe;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,J,ie,Ee,0,ae,I,null),ie>>=1,Ee>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),K.parentNode!==ie){ie.appendChild(K),m.add(x),ie.onpaint=Ee=>{const Ne=Ee.changedElements;for(const fe of m)Ne.includes(fe.image)&&(fe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Ne=i.RGBA,fe=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,fe,Je,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ne&&se){const ie=Ce(oe[0]);t.texStorage2D(i.TEXTURE_2D,Fe,J,ie.width,ie.height)}for(let ie=0,Ee=oe.length;ie<Ee;ie++)q=oe[ie],ne?ye&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ae,I,q):t.texImage2D(i.TEXTURE_2D,ie,J,ae,I,q);x.generateMipmaps=!1}else if(ne){if(se){const ie=Ce(K);t.texStorage2D(i.TEXTURE_2D,Fe,J,ie.width,ie.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,I,K)}else t.texImage2D(i.TEXTURE_2D,0,J,ae,I,K);P(x)&&x.mipmapsAutoUpdate===!0&&y(te),ce.__version=re.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function kt(A,x,k){if(x.image.length!==6)return;const te=Qe(A,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const re=n.get(Q);if(Q.version!==re.__version||te===!0){t.activeTexture(i.TEXTURE0+k);const ce=We.getPrimaries(We.workingColorSpace),Y=x.colorSpace===Wi?null:We.getPrimaries(x.colorSpace),K=x.colorSpace===Wi||ce===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ae=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,J=[];for(let fe=0;fe<6;fe++)!ae&&!I?J[fe]=S(x.image[fe],!0,r.maxCubemapSize):J[fe]=I?x.image[fe].image:x.image[fe],J[fe]=Ae(x,J[fe]);const q=J[0],oe=s.convert(x.format,x.colorSpace),ne=s.convert(x.type);let se=M(x.internalFormat,oe,ne,x.normalized,x.colorSpace);const ye=x.isVideoTexture!==!0,Fe=re.__version===void 0||te===!0,ie=Q.dataReady;let Ee=b(x,q);Ke(i.TEXTURE_CUBE_MAP,x);let Ne;if(x.isDepthTexture){if(se=g(x.format===Yi,x.type),Fe)if(ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,se,q.width,q.height);else for(let fe=0;fe<6;fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,q.width,q.height,0,oe,ne,null)}else if(ae){ye&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,se,q.width,q.height);for(let fe=0;fe<6;fe++){Ne=J[fe].mipmaps;for(let Je=0;Je<Ne.length;Je++){const xt=Ne[Je];x.format!==si?oe!==null?ye?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je,0,0,xt.width,xt.height,oe,xt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je,se,xt.width,xt.height,0,xt.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je,0,0,xt.width,xt.height,oe,ne,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je,se,xt.width,xt.height,0,oe,ne,xt.data)}}}else{if(Ne=x.mipmaps,ye&&Fe){Ne.length>0&&Ee++;const fe=Ce(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,se,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(I){ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,J[fe].width,J[fe].height,oe,ne,J[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,J[fe].width,J[fe].height,0,oe,ne,J[fe].data);for(let Je=0;Je<Ne.length;Je++){const Fi=Ne[Je].image[fe].image;ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je+1,0,0,Fi.width,Fi.height,oe,ne,Fi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je+1,se,Fi.width,Fi.height,0,oe,ne,Fi.data)}}else{ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,oe,ne,J[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,oe,ne,J[fe]);for(let Je=0;Je<Ne.length;Je++){const xt=Ne[Je];ye?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je+1,0,0,oe,ne,xt.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Je+1,se,oe,ne,xt.image[fe])}}}P(x)&&x.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),re.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function st(A,x,k,te,Q,re){const ce=s.convert(k.format,k.colorSpace),Y=s.convert(k.type),K=M(k.internalFormat,ce,Y,k.normalized,k.colorSpace),ae=n.get(x),I=n.get(k);if(I.__renderTarget=x,!ae.__hasExternalTextures){const J=Math.max(1,x.width>>re),q=Math.max(1,x.height>>re);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,K,J,q,x.depth,0,ce,Y,null):t.texImage2D(Q,re,K,J,q,0,ce,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,I.__webglTexture,0,nt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,I.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function di(A,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const te=x.depthTexture,Q=te&&te.isDepthTexture?te.type:null,re=g(x.stencilBuffer,Q),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(x),re,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(x),re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,A)}else{const te=x.textures;for(let Q=0;Q<te.length;Q++){const re=te[Q],ce=s.convert(re.format,re.colorSpace),Y=s.convert(re.type),K=M(re.internalFormat,ce,Y,re.normalized,re.colorSpace);he(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(x),K,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(A,x,k){const te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(x.depthTexture);Q.__renderTarget=x;const re=te?x.depthTexture.image[0]:x.depthTexture.image;(!Q.__webglTexture||re.width!==x.width||re.height!==x.height)&&(re.width=x.width,re.height=x.height,x.depthTexture.needsUpdate=!0),te?me(x.depthTexture,0):ue(x.depthTexture,0);const ce=Q.__webglTexture,Y=nt(x),K=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ae=x.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ki)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else if(x.depthTexture.format===Yi)he(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(A){const x=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const te=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",Q)};te.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=te}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let te=0;te<6;te++)vt(x.__webglFramebuffer[te],A,te);else A.texture.mipmaps.length>0?vt(x.__webglFramebuffer[0],A,0):vt(x.__webglFramebuffer,A,0);else if(k){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),di(x.__webglDepthbuffer[te],A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,re)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),di(x.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(A,x,k){const te=n.get(A);x!==void 0&&st(te.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&qt(A)}function Zt(A){const x=A.texture,k=n.get(A),te=n.get(x);A.addEventListener("dispose",D),R(A);const Q=A.textures,re=A.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let K=0;K<x.mipmaps.length;K++)k.__webglFramebuffer[Y][K]=i.createFramebuffer()}else k.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)k.__webglFramebuffer[Y]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Y=0,K=Q.length;Y<K;Y++){const ae=n.get(Q[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&he(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){const K=Q[Y];k.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const ae=s.convert(K.format,K.colorSpace),I=s.convert(K.type),J=M(K.internalFormat,ae,I,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),q=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),di(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)st(k.__webglFramebuffer[Y][K],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else st(k.__webglFramebuffer[Y],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);P(x)?y(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let Y=0,K=Q.length;Y<K;Y++){const ae=Q[Y],I=n.get(ae);let J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,I.__webglTexture),Ke(J,ae),st(k.__webglFramebuffer,A,ae,i.COLOR_ATTACHMENT0+Y,J,0),P(ae)&&y(J)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,te.__webglTexture),Ke(Y,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)st(k.__webglFramebuffer[K],A,x,i.COLOR_ATTACHMENT0,Y,K);else st(k.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Y,0);P(x)?y(Y):x.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&qt(A)}function N(A){const x=A.textures;for(let k=0,te=x.length;k<te;k++){const Q=x[k];if(P(Q)&&Q.mipmapsAutoUpdate===!0){const re=T(A),ce=n.get(Q).__webglTexture;t.bindTexture(re,ce),y(re),t.unbindTexture()}}}const Kt=[];function it(A){if(A.samples>0){if(he(A)===!1){const x=A.textures,k=A.width,te=A.height;let Q=i.COLOR_BUFFER_BIT;const re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(A),Y=x.length>1;if(Y)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const I=n.get(x[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,k,te,0,0,k,te,Q,i.NEAREST),c===!0&&(Kt.length=0,Kt.push(i.COLOR_ATTACHMENT0+ae),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Kt.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const I=n.get(x[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function nt(A){return Math.min(r.maxSamples,A.samples)}function he(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ft(A){const x=a.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function Ae(A,x){const k=A.colorSpace,te=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==gs&&k!==Wi&&(We.getTransfer(k)===$e?(te!==si||Q!==Xt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),x}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Re,this.resetTextureUnits=$,this.getTextureUnits=ee,this.setTextureUnits=ve,this.setTexture2D=ue,this.setTexture2DArray=_e,this.setTexture3D=Me,this.setTextureCube=me,this.rebindTextures=Yt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=he,this.dispose=z}function K0(i,e){function t(n,r=Wi){let s;const a=We.getTransfer(r);if(n===Xt)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oc)return i.BYTE;if(n===kc)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===si)return i.RGBA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Vc)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===pn)return i.RG;if(n===So)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===ss||n===as||n===os||n===ls)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===Ra||n===Ca||n===Da)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===La||n===Ua||n===Na||n===Fa||n===ps||n===Oa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ia||n===La)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Na)return s.COMPRESSED_R11_EAC;if(n===Fa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ps)return s.COMPRESSED_RG11_EAC;if(n===Oa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ka||n===Ba||n===za||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ka||n===Ja||n===$a)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ka)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===ja||n===eo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qa)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===io||n===ms||n===no)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===to)return s.COMPRESSED_RED_RGTC1_EXT;if(n===io)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ms)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new od(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mn({vertexShader:J0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $i(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j0 extends _n{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,m=null,h=null,u=null,_=null;const v=typeof XRWebGLBinding<"u",p=new Q0,f={},S=t.getContextAttributes();let P=null,y=null;const T=[],M=[],g=new Xe;let b=null,R=null;const E=new fi;E.viewport=new ot;const L=new fi;L.viewport=new ot;const D=[E,L],G=new hf;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Ys,T[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Ys,T[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=T[Z];return ue===void 0&&(ue=new Ys,T[Z]=ue),ue.getHandSpace()};function X(Z){const ue=M.indexOf(Z.inputSource);if(ue===-1)return;const _e=T[ue];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,l||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<T.length;Z++){const ue=M[Z];ue!==null&&(M[Z]=null,T[Z].disconnect(ue))}C=null,z=null,p.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(P),u=null,h=null,m=null,r=null,y=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),R!==null){const Z=R.camera;Z.fov=R.fov,Z.zoom=R.zoom,Z.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",F),r.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Me=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?Yi:Ki,Me=S.stencil?Gn:bi);const Le={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Si(h.textureWidth,h.textureHeight,{format:si,type:Xt,depthTexture:new Hn(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Si(u.framebufferWidth,u.framebufferHeight,{format:si,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(Z){for(let ue=0;ue<Z.removed.length;ue++){const _e=Z.removed[ue],Me=M.indexOf(_e);Me>=0&&(M[Me]=null,T[Me].disconnect(_e))}for(let ue=0;ue<Z.added.length;ue++){const _e=Z.added[ue];let Me=M.indexOf(_e);if(Me===-1){for(let Le=0;Le<T.length;Le++)if(Le>=M.length){M.push(_e),Me=Le;break}else if(M[Le]===null){M[Le]=_e,Me=Le;break}if(Me===-1)break}const me=T[Me];me&&me.connect(_e)}}function V(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ue=Z.near,_e=Z.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),G.near=L.near=E.near=ue,G.far=L.far=E.far=_e,(C!==G.near||z!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),C=G.near,z=G.far),G.layers.mask=Z.layers.mask|6,E.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;const Me=Z.parent,me=G.cameras;V(G,Me);for(let Le=0;Le<me.length;Le++)V(me[Le],Me);G.projectionMatrix.copy(E.projectionMatrix),G.projectionMatrixInverse.copy(E.projectionMatrixInverse),R===null&&Z.isPerspectiveCamera&&(R={camera:Z,fov:Z.fov,zoom:Z.zoom}),$(Z,G,Me)};function $(Z,ue,_e){_e===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Sr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Z){return f[Z]};let ee=null;function ve(Z,ue){if(d=ue.getViewerPose(l||a),_=ue,d!==null){const _e=d.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Me=!1;_e.length!==G.cameras.length&&(G.cameras.length=0,Me=!0);for(let Te=0;Te<_e.length;Te++){const Ke=_e[Te];let Qe=null;if(u!==null)Qe=u.getViewport(Ke);else{const Mt=m.getViewSubImage(h,Ke);Qe=Mt.viewport,Te===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(y))}let ze=D[Te];ze===void 0&&(ze=new fi,ze.layers.enable(Te),ze.viewport=new ot,D[Te]=ze),ze.matrix.fromArray(Ke.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ke.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Te===0&&(G.matrix.copy(ze.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Me===!0&&G.cameras.push(ze)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){m=n.getBinding();const Te=m.getDepthInformation(_e[0]);Te&&Te.isValid&&Te.texture&&p.init(Te,r.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),m=n.getBinding();for(let Te=0;Te<_e.length;Te++){const Ke=_e[Te].camera;if(Ke){let Qe=f[Ke];Qe||(Qe=new od,f[Ke]=Qe);const ze=m.getCameraImage(Ke);Qe.sourceTexture=ze}}}}for(let _e=0;_e<T.length;_e++){const Me=M[_e],me=T[_e];Me!==null&&me!==void 0&&me.update(Me,ue,l||a)}ee&&ee(Z,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Re=new hd;Re.setAnimationLoop(ve),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}}const e_=new rt,Sd=new De;Sd.set(-1,0,0,0,1,0,0,0,1);function t_(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ld(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,P,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),m(p,f)):f.isMeshPhongMaterial?(s(p,f),d(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&u(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,S,P):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ht&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ht&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f),P=S.envMap,y=S.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Sd),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,P){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=P*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,S){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function i_(i,e,t,n){let r={},s={};function a(S,P){const y=P.program;n.uniformBlockBinding(S,y,r[S.id])}function o(S,P){let y=r[S.id];y===void 0&&(_(S),y=c(S),r[S.id]=y,S.addEventListener("dispose",p));const T=P.program;n.updateUBOMapping(S,T);const M=e.render.frame;s[S.id]!==M&&(l(S),s[S.id]=M)}function c(S){const P=i.createBuffer(),y=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),P}function l(S){const P=r[S.id],y=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let M=0,g=y.length;M<g;M++){const b=y[M];if(Array.isArray(b))for(let R=0,E=b.length;R<E;R++)d(b[R],M,R,T);else d(b,M,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,P,y,T){if(h(S,P,y,T)===!0){const M=S.__offset,g=S.value;if(Array.isArray(g)){let b=0;for(let R=0;R<g.length;R++){const E=g[R],L=v(E,!0);m(E,S.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,S.__data)}}function m(S,P,y){typeof S=="number"||typeof S=="boolean"?P[y]=S:S.isMatrix3?(P[y]=S.elements[0],P[y+1]=S.elements[1],P[y+2]=S.elements[2],P[y+3]=0,P[y+4]=S.elements[3],P[y+5]=S.elements[4],P[y+6]=S.elements[5],P[y+7]=0,P[y+8]=S.elements[6],P[y+9]=S.elements[7],P[y+10]=S.elements[8],P[y+11]=0):ArrayBuffer.isView(S)?P.set(S.subarray(0,P.length-y),y):S.toArray(P,y)}function h(S,P,y,T){const M=S.value,g=P+"_"+y;if(Array.isArray(M)){T[g]===void 0&&(T[g]=[]);const b=T[g];let R=!1;for(let E=0;E<M.length;E++)u(M[E],b,E)===!0&&(R=!0);return R}return u(M,T,g)}function u(S,P,y){if(P[y]===void 0)return typeof S=="number"||typeof S=="boolean"?P[y]=S:ArrayBuffer.isView(S)?P[y]=S.slice():P[y]=S.clone(),!0;{const T=P[y];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return P[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(T.equals(S)===!1)return T.copy(S),!0}}return!1}function _(S){const P=S.uniforms;let y=0;const T=16;for(let g=0,b=P.length;g<b;g++){const R=Array.isArray(P[g])?P[g]:[P[g]];for(let E=0,L=R.length;E<L;E++){const D=R[E],G=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(P[g])||Array.isArray(D.value);let z=y;for(let F=0,j=G.length;F<j;F++){const V=G[F],$=v(V,C),ee=y%T,ve=ee%$.boundary,Re=ee+ve;y+=ve,Re!==0&&T-Re<$.storage&&(y+=T-Re),F===0&&(z=y),y+=$.storage}const X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((y-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}const M=y%T;return M>0&&(y+=T-M),S.__size=y,S.__cache={},this}function v(S,P){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",S),P===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(S){const P=S.target;P.removeEventListener("dispose",p),i.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function f(){for(const S in r)i.deleteBuffer(r[S]);r={},s={}}return{bind:a,update:o,dispose:f}}const n_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function r_(){return ui===null&&(ui=new nd(n_,16,16,pn,yi),ui.name="DFG_LUT",ui.minFilter=Tt,ui.magFilter=Tt,ui.wrapS=Ii,ui.wrapT=Ii,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class s_{constructor(e={}){const{canvas:t=au(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:u=Xt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const v=u,p=new Set([bo,So,wo]),f=new Set([Xt,bi,vr,Gn,vo,xo]),S=new Uint32Array(4),P=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let T=null,M=null;const g=[],b=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1,D=null,G=null,C=null,z=null;this._outputColorSpace=zt;let X=0,F=0,j=null,V=-1,$=null;const ee=new ot,ve=new ot;let Re=null;const Z=new Be(0);let ue=0,_e=t.width,Me=t.height,me=1,Le=null,ct=null;const Te=new ot(0,0,_e,Me),Ke=new ot(0,0,_e,Me);let Qe=!1;const ze=new br,Mt=new Po;let ut=!1,kt=!1;const st=new rt,di=new H,vt=new ot,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Zt(){return j===null?me:1}let N=n;function Kt(w,U){return t.getContext(w,U)}let it,nt,he,ft,Ae,Ce,A,x,k,te,Q,re,ce,Y,K,ae,I,J,q,oe,ne,se,ye;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",fe,!1),N===null){const U="webgl2";if(N=Kt(U,w),N===null)throw Kt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(w){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ze("WebGLRenderer: "+w.message),w}function Fe(){it=new lg(N),it.init(),ne=new K0(N,it),nt=new $m(N,it,e,ne),he=new Y0(N,it),nt.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),G=N.createFramebuffer(),C=N.createFramebuffer(),z=N.createFramebuffer(),ft=new hg(N),Ae=new L0,Ce=new Z0(N,it,he,Ae,nt,ne,ft),A=new og(E),x=new ff(N),se=new Km(N,x),k=new cg(N,x,ft,se),te=new fg(N,k,x,se,ft),J=new ug(N,nt,Ce),K=new Qm(Ae),Q=new I0(E,A,it,nt,se,K),re=new t_(E,Ae),ce=new N0,Y=new G0(it),I=new Zm(E,A,he,te,_,c),ae=new q0(E,te,nt),ye=new i_(N,ft,nt,he),q=new Jm(N,it,ft),oe=new dg(N,it,ft),ft.programs=Q.programs,E.capabilities=nt,E.extensions=it,E.properties=Ae,E.renderLists=ce,E.shadowMap=ae,E.state=he,E.info=ft}v!==Xt&&(R=new mg(v,t.width,t.height,o,r,s));const ie=new j0(E,N);this.xr=ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(w){w!==void 0&&(me=w,this.setSize(_e,Me,!1))},this.getSize=function(w){return w.set(_e,Me)},this.setSize=function(w,U,W=!0){if(ie.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=w,Me=U,t.width=Math.floor(w*me),t.height=Math.floor(U*me),W===!0&&(t.style.width=w+"px",t.style.height=U+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(_e*me,Me*me).floor()},this.setDrawingBufferSize=function(w,U,W){_e=w,Me=U,me=W,t.width=Math.floor(w*W),t.height=Math.floor(U*W),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(v===Xt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(Te)},this.setViewport=function(w,U,W,O){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,U,W,O),he.viewport(ee.copy(Te).multiplyScalar(Zt()).round())},this.getScissor=function(w){return w.copy(Ke)},this.setScissor=function(w,U,W,O){w.isVector4?Ke.set(w.x,w.y,w.z,w.w):Ke.set(w,U,W,O),he.scissor(ve.copy(Ke).multiplyScalar(Zt()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){he.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){Le=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,W=!0){let O=0;if(w){let B=!1;if(j!==null){const de=j.texture.format;B=p.has(de)}if(B){const de=j.texture.type,xe=f.has(de),le=I.getClearColor(),ge=I.getClearAlpha(),be=le.r,Ie=le.g,Ge=le.b;xe?(S[0]=be,S[1]=Ie,S[2]=Ge,S[3]=ge,N.clearBufferuiv(N.COLOR,0,S)):(P[0]=be,P[1]=Ie,P[2]=Ge,P[3]=ge,N.clearBufferiv(N.COLOR,0,P))}else O|=N.COLOR_BUFFER_BIT}U&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),I.dispose(),ce.dispose(),Y.dispose(),Ce.dispose(),Ae.dispose(),A.dispose(),te.dispose(),k.dispose(),se.dispose(),ye.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Bo),ie.removeEventListener("sessionend",zo),ji.stop()};function Ee(w){w.preventDefault(),ll("WebGLRenderer: Context Lost."),L=!0}function Ne(){ll("WebGLRenderer: Context Restored."),L=!1;const w=ft.autoReset,U=ae.enabled,W=ae.autoUpdate,O=ae.needsUpdate,B=ae.type;Fe(),ft.autoReset=w,ae.enabled=U,ae.autoUpdate=W,ae.needsUpdate=O,ae.type=B}function fe(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Je(w){const U=w.target;U.removeEventListener("dispose",Je),xt(U)}function xt(w){Fi(w),Ae.remove(w)}function Fi(w){const U=Ae.get(w).programs;U!==void 0&&(U.forEach(function(W){Q.releaseProgram(W)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,W,O,B,de){U===null&&(U=qt);const xe=B.isMesh&&B.matrixWorld.determinantAffine()<0,le=Td(w,U,W,O,B);he.setMaterial(O,xe);let ge=W.index,be=1;if(O.wireframe===!0){if(ge=k.getWireframeAttribute(W),ge===void 0)return;be=2}const Ie=W.drawRange,Ge=W.attributes.position;let we=Ie.start*be,He=(Ie.start+Ie.count)*be;de!==null&&(we=Math.max(we,de.start*be),He=Math.min(He,(de.start+de.count)*be)),ge!==null?(we=Math.max(we,0),He=Math.min(He,ge.count)):Ge!=null&&(we=Math.max(we,0),He=Math.min(He,Ge.count));const dt=He-we;if(dt<0||dt===1/0)return;se.setup(B,O,le,W,ge);let tt,je=q;if(ge!==null&&(tt=x.get(ge),je=oe,je.setIndex(tt)),B.isMesh)O.wireframe===!0?(he.setLineWidth(O.wireframeLinewidth*Zt()),je.setMode(N.LINES)):je.setMode(N.TRIANGLES);else if(B.isLine){let Pt=O.linewidth;Pt===void 0&&(Pt=1),he.setLineWidth(Pt*Zt()),B.isLineSegments?je.setMode(N.LINES):B.isLineLoop?je.setMode(N.LINE_LOOP):je.setMode(N.LINE_STRIP)}else B.isPoints?je.setMode(N.POINTS):B.isSprite&&je.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(it.get("WEBGL_multi_draw"))je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pt=B._multiDrawStarts,Se=B._multiDrawCounts,Lt=B._multiDrawCount,Ye=ge?x.get(ge).bytesPerElement:1,en=Ae.get(O).currentProgram.getUniforms();for(let Rt=0;Rt<Lt;Rt++)en.setValue(N,"_gl_DrawID",Rt),je.render(Pt[Rt]/Ye,Se[Rt])}else if(B.isInstancedMesh)je.renderInstances(we,dt,B.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Pt);je.renderInstances(we,dt,Se)}else je.render(we,dt)};function ko(w,U,W,O){D!==null&&w.isNodeMaterial&&D.setObject(O,w),ut===!0&&K.setState(w,W,!1),w.transparent===!0&&w.side===_i&&w.forceSinglePass===!1?(w.side=Ht,w.needsUpdate=!0,Kn(w,U,O),w.side=fn,w.needsUpdate=!0,Kn(w,U,O),w.side=_i):Kn(w,U,O)}this.compile=function(w,U,W=null){W===null&&(W=w),D!==null&&D.renderStart(w,U,W),M=Y.get(W),M.init(U),b.push(M),W.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(M.pushLight(B),B.castShadow&&M.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(M.pushLight(B),B.castShadow&&M.pushShadow(B))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),kt=this.localClippingEnabled,ut=K.init(this.clippingPlanes,kt),ut===!0&&K.setGlobalState(this.clippingPlanes,U),D!==null&&ae.render(M.state.shadowsArray,W,U);const O=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const le=de[xe];ko(le,W,U,B),O.add(le)}else ko(de,W,U,B),O.add(de)}),M=b.pop(),D!==null&&D.renderEnd(),O},this.compileAsync=function(w,U,W=null){const O=this.compile(w,U,W);return new Promise(B=>{function de(){if(O.forEach(function(xe){const ge=Ae.get(xe).currentProgram;(ge===void 0||ge.isReady())&&O.delete(xe)}),O.size===0){B(w);return}setTimeout(de,10)}it.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ds=null;function Ed(w){Ds&&Ds(w)}function Bo(){ji.stop()}function zo(){ji.start()}const ji=new hd;ji.setAnimationLoop(Ed),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(w){Ds=w,ie.setAnimationLoop(w),w===null?ji.stop():ji.start()},ie.addEventListener("sessionstart",Bo),ie.addEventListener("sessionend",zo),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,U);const W=ie.enabled===!0&&ie.isPresenting===!0,O=R!==null&&(j===null||W)&&R.begin(E,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,U,j),M=Y.get(w,b.length),M.init(U),M.state.textureUnits=Ce.getTextureUnits(),b.push(M),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Mt.setFromArrayCamera(U):ze.setFromProjectionMatrix(st,ai,U.reversedDepth),kt=this.localClippingEnabled,ut=K.init(this.clippingPlanes,kt),T=ce.get(w,g.length),T.init(),g.push(T),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){const xe=E.xr.getDepthSensingMesh();xe!==null&&Is(xe,U,-1/0,E.sortObjects)}Is(w,U,0,E.sortObjects),T.finish(),D!==null&&D.updateLights(M.state.lightsArray),E.sortObjects===!0&&T.sort(Le,ct),Yt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Yt&&I.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),ut===!0&&K.beginShadows();const B=M.state.shadowsArray;if(ae.render(B,w,U),ut===!0&&K.endShadows(),(O&&R.hasRenderPass())===!1){const xe=T.opaque,le=T.transmissive;if(M.setupLights(),U.isArrayCamera){const ge=U.cameras;if(le.length>0)for(let be=0,Ie=ge.length;be<Ie;be++){const Ge=ge[be];Ho(xe,le,w,Ge)}Yt&&I.render(w);for(let be=0,Ie=ge.length;be<Ie;be++){const Ge=ge[be];Go(T,w,Ge,Ge.viewport)}}else le.length>0&&Ho(xe,le,w,U),Yt&&I.render(w),Go(T,w,U)}j!==null&&F===0&&(Ce.updateMultisampleRenderTarget(j),Ce.updateRenderTargetMipmap(j)),O&&R.end(E),w.isScene===!0&&w.onAfterRender(E,w,U),se.resetDefaultState(),V=-1,$=null,b.pop(),b.length>0?(M=b[b.length-1],Ce.setTextureUnits(M.state.textureUnits),ut===!0&&K.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,D!==null&&D.renderEnd()};function Is(w,U,W,O){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){const xe=U.isArrayCamera?Mt:ze;if(!w.frustumCulled||w.intersectsFrustum(xe)){O&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(st);const le=te.update(w),ge=w.material;ge.visible&&T.push(w,le,ge,W,vt.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){const xe=U.isArrayCamera?Mt:ze;if(!w.frustumCulled||w.intersectsFrustum(xe)){const le=te.update(w),ge=w.material;if(O&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),vt.copy(le.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(st)),Array.isArray(ge)){const be=le.groups;for(let Ie=0,Ge=be.length;Ie<Ge;Ie++){const we=be[Ie],He=ge[we.materialIndex];He&&He.visible&&T.push(w,le,He,W,vt.z,we,U)}}else ge.visible&&T.push(w,le,ge,W,vt.z,null,U)}}}const de=w.children;for(let xe=0,le=de.length;xe<le;xe++)Is(de[xe],U,W,O)}function Go(w,U,W,O){const{opaque:B,transmissive:de,transparent:xe}=w;M.setupLightsView(W),ut===!0&&K.setGlobalState(E.clippingPlanes,W),O&&he.viewport(ee.copy(O)),B.length>0&&Tr(B,U,W),de.length>0&&Tr(de,U,W),xe.length>0&&Tr(xe,U,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ho(w,U,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[O.id]===void 0){const we=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[O.id]=new Si(1,1,{generateMipmaps:!0,type:we?yi:Xt,minFilter:qi,samples:Math.max(4,nt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const de=M.state.transmissionRenderTarget[O.id],xe=O.viewport||ee;de.setSize(xe.z*E.transmissionResolutionScale,xe.w*E.transmissionResolutionScale);const le=E.getRenderTarget(),ge=E.getActiveCubeFace(),be=E.getActiveMipmapLevel();E.setRenderTarget(de),E.getClearColor(Z),ue=E.getClearAlpha(),ue<1&&E.setClearColor(16777215,.5),E.clear(),Yt&&I.render(W);const Ie=E.toneMapping;E.toneMapping=wi;const Ge=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),M.setupLightsView(O),ut===!0&&K.setGlobalState(E.clippingPlanes,O),Tr(w,W,O),Ce.updateMultisampleRenderTarget(de),Ce.updateRenderTargetMipmap(de),it.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let He=0,dt=U.length;He<dt;He++){const tt=U[He],{object:je,geometry:Pt,material:Se,group:Lt}=tt;if(Se.side===_i&&je.layers.test(O.layers)){const Ye=Se.side;Se.side=Ht,Se.needsUpdate=!0,Vo(je,W,O,Pt,Se,Lt),Se.side=Ye,Se.needsUpdate=!0,we=!0}}we===!0&&(Ce.updateMultisampleRenderTarget(de),Ce.updateRenderTargetMipmap(de))}E.setRenderTarget(le,ge,be),E.setClearColor(Z,ue),Ge!==void 0&&(O.viewport=Ge),E.toneMapping=Ie}function Tr(w,U,W){const O=U.isScene===!0?U.overrideMaterial:null;for(let B=0,de=w.length;B<de;B++){const xe=w[B],{object:le,geometry:ge,group:be}=xe;let Ie=xe.material;Ie.allowOverride===!0&&O!==null&&(Ie=O),le.layers.test(W.layers)&&Vo(le,U,W,ge,Ie,be)}}function Vo(w,U,W,O,B,de){D!==null&&B.isNodeMaterial&&D.setObject(w,B),w.onBeforeRender(E,U,W,O,B,de),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(E,U,W,O,w,de),B.transparent===!0&&B.side===_i&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,E.renderBufferDirect(W,U,O,B,w,de),B.side=fn,B.needsUpdate=!0,E.renderBufferDirect(W,U,O,B,w,de),B.side=_i):E.renderBufferDirect(W,U,O,B,w,de),w.onAfterRender(E,U,W,O,B,de)}function Wo(w){let U=0;for(const W of w)W.texture!==null&&U++;return U}function Kn(w,U,W){U.isScene!==!0&&(U=qt);const O=Ae.get(w),B=M.state.lights,de=M.state.shadowsArray,xe=B.state.version,le=Q.getParameters(w,B.state,de,U,W,M.state.lightProbeGridArray),ge=Q.getProgramCacheKey(le);let be=O.programs;O.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,O.fog=U.fog;const Ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;O.envMap=A.get(w.envMap||O.environment,Ie),O.envMapRotation=O.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",Je),be=new Map,O.programs=be,O.programVariants=new Map);let Ge=be.get(ge);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===xe)return qo(w,le),Ge}else le.uniforms=Q.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,W,le),w.onBeforeCompile(le,E),Ge=Q.acquireProgram(le,ge),be.set(ge,Ge),O.uniforms=le.uniforms;const we=O.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=K.uniform),qo(w,le),O.needsLights=Rd(w),O.lightsStateVersion=xe,O.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.sunLights.value=B.state.sun,we.sunLightShadows.value=B.state.sunShadow,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.sunShadowMatrix.value=B.state.sunShadowMatrix,we.sunShadowCascade.value=B.state.sunShadowCascade,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),O.numLightProbeGrids=Wo(M.state.lightProbeGridArray),O.currentProgram=Ge,O.uniformsList=null,Ge}function Ad(w,U,W,O,B){const de=Ae.get(w),xe=de.currentProgram.id+","+O+","+B;let le=de.programVariants.get(xe);return le===void 0?(le=Kn(w,U,W),de.programVariants.set(xe,le)):(de.currentProgram=le,de.uniformsList=null,de.outputColorSpace=O,de.toneMapping=B),le}function Xo(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=ds.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function qo(w,U){const W=Ae.get(w);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Td(w,U,W,O,B){U.isScene!==!0&&(U=qt),Ce.resetTextureUnits();const de=U.fog,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?U.environment:null,le=j===null?E.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:We.workingColorSpace,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,be=A.get(O.envMap||xe,ge),Ie=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),we=!!W.morphAttributes.position,He=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let tt=wi;O.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(tt=E.toneMapping);const je=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Pt=je!==void 0?je.length:0,Se=Ae.get(O),Lt=M.state.lights;if(ut===!0&&(kt===!0||w!==$)){const at=w===$&&O.id===V;K.setState(O,w,at)}let Ye=!1,en=!1;O.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Lt.state.version||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==be||O.fog===!0&&Se.fog!==de||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==K.numPlanes||Se.numIntersection!==K.numIntersection)||Se.vertexAlphas!==Ie||Se.vertexTangents!==Ge||Se.morphTargets!==we||Se.morphNormals!==He||Se.morphColors!==dt||Se.morphTargetsCount!==Pt||Se.numLightProbeGrids!==Wo(M.state.lightProbeGridArray)?Ye=!0:(Se.outputColorSpace!==le||Se.toneMapping!==tt)&&(en=!0):(Ye=!0,Se.__version=O.version);let Rt=Se.currentProgram;(Ye===!0||en===!0)&&(Rt=en===!0?Ad(O,U,B,le,tt):Kn(O,U,B),D&&O.isNodeMaterial&&D.onUpdateProgram(O,Rt,Se));let Pr=!1,Oi=!1,tn=!1;const qe=Rt.getUniforms(),Et=Se.uniforms;if(he.useProgram(Rt.program)&&(Pr=!0,Oi=!0,tn=!0),O.id!==V&&(V=O.id,Oi=!0),Pr||$!==w){he.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),qe.setValue(N,"projectionMatrix",w.projectionMatrix),qe.setValue(N,"viewMatrix",w.matrixWorldInverse);const wt=qe.map.cameraPosition;wt!==void 0&&wt.setValue(N,di.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&qe.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&qe.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,Oi=!0,tn=!0)}if(Se.needsLights&&(Lt.state.sunShadowMap.length>0&&qe.setValue(N,"sunShadowMap",Lt.state.sunShadowMap,Ce),Lt.state.directionalShadowMap.length>0&&qe.setValue(N,"directionalShadowMap",Lt.state.directionalShadowMap,Ce),Lt.state.spotShadowMap.length>0&&qe.setValue(N,"spotShadowMap",Lt.state.spotShadowMap,Ce),Lt.state.pointShadowMap.length>0&&qe.setValue(N,"pointShadowMap",Lt.state.pointShadowMap,Ce)),B.isSkinnedMesh){qe.setOptional(N,B,"bindMatrix"),qe.setOptional(N,B,"bindMatrixInverse");const at=B.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),qe.setValue(N,"boneTexture",at.boneTexture,Ce))}B.isBatchedMesh&&(qe.setOptional(N,B,"batchingTexture"),qe.setValue(N,"batchingTexture",B._matricesTexture,Ce),qe.setOptional(N,B,"batchingIdTexture"),qe.setValue(N,"batchingIdTexture",B._indirectTexture,Ce),qe.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&qe.setValue(N,"batchingColorTexture",B._colorsTexture,Ce));const jt=W.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&J.update(B,W,Rt),(Oi||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,qe.setValue(N,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&U.environment!==null&&(Et.envMapIntensity.value=U.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=r_()),Oi){if(qe.setValue(N,"toneMappingExposure",E.toneMappingExposure),Se.needsLights&&Pd(Et,tn),de&&O.fog===!0&&re.refreshFogUniforms(Et,de),re.refreshMaterialUniforms(Et,O,me,Me,M.state.transmissionRenderTarget[w.id]),Se.needsLights&&Se.numLightProbeGrids>0){const at=y;let wt=0;for(const Mi of M.state.lightProbeGridArray)Mi.texture!==null&&(at.textures[wt]=Mi.texture,at.min[wt]=Mi.boundingBox.min,at.max[wt]=Mi.boundingBox.max,at.resolution[wt]=Mi.resolution,wt++);for(const Mi in at)at[Mi].length=wt;Et.probesSH.value=at.textures,Et.probesMin.value=at.min,Et.probesMax.value=at.max,Et.probesResolution.value=at.resolution}ds.upload(N,Xo(Se),Et,Ce)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ds.upload(N,Xo(Se),Et,Ce),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&qe.setValue(N,"center",B.center),qe.setValue(N,"modelViewMatrix",B.modelViewMatrix),qe.setValue(N,"normalMatrix",B.normalMatrix),qe.setValue(N,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const at=O.uniformsGroups;for(let wt=0,Mi=at.length;wt<Mi;wt++){const Zo=at[wt];ye.update(Zo,Rt),ye.bind(Zo,Rt)}}return Rt}function Pd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Rd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,U,W){const O=Ae.get(w);O.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ae.get(w.texture).__webglTexture=U,Ae.get(w.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const W=Ae.get(w);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,W=0){j=w,X=U,F=W;let O=null,B=!1,de=!1;if(w){const le=Ae.get(w);if(le.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(N.FRAMEBUFFER,le.__webglFramebuffer),ee.copy(w.viewport),ve.copy(w.scissor),Re=w.scissorTest,he.viewport(ee),he.scissor(ve),he.setScissorTest(Re),V=-1;return}else if(le.__webglFramebuffer===void 0)Ce.setupRenderTarget(w);else if(le.__hasExternalTextures)Ce.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(le.__boundDepthTexture!==Ie){if(Ie!==null&&Ae.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(w)}}const ge=w.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(de=!0);const be=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[U])?O=be[U][W]:O=be[U],B=!0):w.samples>0&&Ce.useMultisampledRTT(w)===!1?O=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?O=be[W]:O=be,ee.copy(w.viewport),ve.copy(w.scissor),Re=w.scissorTest}else ee.copy(Te).multiplyScalar(me).floor(),ve.copy(Ke).multiplyScalar(me).floor(),Re=Qe;if(W!==0&&(O=G),he.bindFramebuffer(N.FRAMEBUFFER,O)&&he.drawBuffers(w,O),he.viewport(ee),he.scissor(ve),he.setScissorTest(Re),B){const le=Ae.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,le.__webglTexture,W)}else if(de){const le=U;for(let ge=0;ge<w.textures.length;ge++){const be=Ae.get(w.textures[ge]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ge,be.__webglTexture,W,le)}}else if(w!==null&&W!==0){const le=Ae.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,le.__webglTexture,W)}V=-1};function Yo(w){const U=Ae.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=nt.textureFormatReadable(w.format),U.__typeReadable=nt.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,W,O,B,de,xe,le=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge){he.bindFramebuffer(N.FRAMEBUFFER,ge);try{const be=w.textures[le],Ie=be.format,Ge=be.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+le);const we=Yo(be);if(we.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-O&&W>=0&&W<=w.height-B&&N.readPixels(U,W,O,B,ne.convert(Ie),ne.convert(Ge),de)}finally{const be=j!==null?Ae.get(j).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,U,W,O,B,de,xe,le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge)if(U>=0&&U<=w.width-O&&W>=0&&W<=w.height-B){he.bindFramebuffer(N.FRAMEBUFFER,ge);const be=w.textures[le],Ie=be.format,Ge=be.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+le);const we=Yo(be);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(U,W,O,B,ne.convert(Ie),ne.convert(Ge),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const dt=j!==null?Ae.get(j).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,dt);const tt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ou(N,tt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(He),N.deleteSync(tt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,W=0){const O=Math.pow(2,-W),B=Math.floor(w.image.width*O),de=Math.floor(w.image.height*O),xe=U!==null?U.x:0,le=U!==null?U.y:0;Ce.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,xe,le,B,de),he.unbindTexture()},this.copyTextureToTexture=function(w,U,W=null,O=null,B=0,de=0){let xe,le,ge,be,Ie,Ge,we,He,dt;const tt=w.isCompressedTexture?w.mipmaps[de]:w.image;if(W!==null)xe=W.max.x-W.min.x,le=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Ie=W.min.y,Ge=W.isBox3?W.min.z:0;else{const qe=Math.pow(2,-B);xe=Math.floor(tt.width*qe),le=Math.floor(tt.height*qe),w.isDataArrayTexture?ge=tt.depth:w.isData3DTexture?ge=Math.floor(tt.depth*qe):ge=1,be=0,Ie=0,Ge=0}O!==null?(we=O.x,He=O.y,dt=O.z):(we=0,He=0,dt=0);const je=ne.convert(U.format),Pt=ne.convert(U.type);let Se;U.isData3DTexture?(Ce.setTexture3D(U,0),Se=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ce.setTexture2DArray(U,0),Se=N.TEXTURE_2D_ARRAY):(Ce.setTexture2D(U,0),Se=N.TEXTURE_2D),he.activeTexture(N.TEXTURE0),he.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),he.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),he.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Lt=he.getParameter(N.UNPACK_ROW_LENGTH),Ye=he.getParameter(N.UNPACK_IMAGE_HEIGHT),en=he.getParameter(N.UNPACK_SKIP_PIXELS),Rt=he.getParameter(N.UNPACK_SKIP_ROWS),Pr=he.getParameter(N.UNPACK_SKIP_IMAGES);he.pixelStorei(N.UNPACK_ROW_LENGTH,tt.width),he.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt.height),he.pixelStorei(N.UNPACK_SKIP_PIXELS,be),he.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),he.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const Oi=w.isDataArrayTexture||w.isData3DTexture,tn=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const qe=Ae.get(w),Et=Ae.get(U),jt=Ae.get(qe.__renderTarget),at=Ae.get(Et.__renderTarget);he.bindFramebuffer(N.READ_FRAMEBUFFER,jt.__webglFramebuffer),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let wt=0;wt<ge;wt++)Oi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(w).__webglTexture,B,Ge+wt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,de,dt+wt)),N.blitFramebuffer(be,Ie,be+xe,Ie+le,we,He,we+xe,He+le,N.DEPTH_BUFFER_BIT,N.NEAREST);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||Ae.has(w)){const qe=Ae.get(w),Et=Ae.get(U);he.bindFramebuffer(N.READ_FRAMEBUFFER,C),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let jt=0;jt<ge;jt++)Oi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qe.__webglTexture,B,Ge+jt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qe.__webglTexture,B),tn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,de,dt+jt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Et.__webglTexture,de),B!==0?N.blitFramebuffer(be,Ie,be+xe,Ie+le,we,He,we+xe,He+le,N.COLOR_BUFFER_BIT,N.NEAREST):tn?N.copyTexSubImage3D(Se,de,we,He,dt+jt,be,Ie,xe,le):N.copyTexSubImage2D(Se,de,we,He,be,Ie,xe,le);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Se,de,we,He,dt,xe,le,ge,je,Pt,tt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Se,de,we,He,dt,xe,le,ge,je,tt.data):N.texSubImage3D(Se,de,we,He,dt,xe,le,ge,je,Pt,tt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,we,He,xe,le,je,Pt,tt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,we,He,tt.width,tt.height,je,tt.data):N.texSubImage2D(N.TEXTURE_2D,de,we,He,xe,le,je,Pt,tt);he.pixelStorei(N.UNPACK_ROW_LENGTH,Lt),he.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),he.pixelStorei(N.UNPACK_SKIP_PIXELS,en),he.pixelStorei(N.UNPACK_SKIP_ROWS,Rt),he.pixelStorei(N.UNPACK_SKIP_IMAGES,Pr),de===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&N.generateMipmap(Se),he.unbindTexture()},this.initRenderTarget=function(w){Ae.get(w).__webglFramebuffer===void 0&&Ce.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ce.setTextureCube(w,0):w.isData3DTexture?Ce.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ce.setTexture2DArray(w,0):Ce.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){X=0,F=0,j=null,he.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const Bt=5.18,ts=1280,oo=[{crop:[0,280,225,270],open:[-1.38,1.27,.1]},{crop:[214,409,320,318],open:[-.43,.68,.74]},{crop:[368,622,296,368],open:[.59,.02,1.28]},{crop:[522,844,454,393],open:[1.85,-.74,1.75]}],nc=[{crop:[0,324,87,104],color:12106164,open:[.14,1.46,-.9]},{crop:[128,427,164,165],color:12718850,open:[1.04,.98,-.42]},{crop:[333,557,255,256],color:10594055,open:[2.08,.33,.05]},{crop:[640,768,384,384],color:688346,open:[3.25,-.58,.43]}],a_=["fly-water.webp","fly-cut-paper.webp","fly-blocks.webp",...oo.map((i,e)=>`pose-${e+1}.webp`)],o_=["liquid-arc.webp","liquid-relief-arc.webp","liquid-detail.webp","liquid-rim.webp"],Lo=Eo.clamp,lt=Eo.lerp;function Ut(i,e,t){return Eo.smoothstep(t,i,e)}function mi(i,e,t){const n=new $i(e,t);return i.add(n),n}function gi(i,e=.88,t=0){return new ju({color:i,roughness:e,metalness:t})}function Xi(i){return new To({color:16777215,map:i,transparent:!0,side:_i,depthWrite:!1,toneMapped:!1})}function Di(i,e){i.visible=e>.001,i.material.opacity=e}function vi(i,e,t,n){return mi(i,new Er(e,t),n)}function bd(i,e,t){const n=vi(i,160,160,gi(e));return n.rotation.x=-Math.PI/2,n.position.y=t,n.receiveShadow=!0,n}function l_(){const e=new Uint8Array(16384);for(let n=0;n<64;n++)for(let r=0;r<64;r++){const s=(r+.5)*2/64-1,a=(n+.5)*2/64-1,o=s*s+a*a,c=(n*64+r)*4;e.set([255,255,255,Math.round(255*Math.max(0,Math.exp(-3.8*o)-.024))],c)}const t=new nd(e,64,64,si);return t.magFilter=Tt,t.minFilter=Tt,t.needsUpdate=!0,t}function hr(i,e,t,n,r,s,a,o,c){const l=vi(i,s,a,new To({map:e,color:o,transparent:!0,opacity:c,depthWrite:!1,toneMapped:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,n,r),l.renderOrder=-2,l}function yd(i,e,t,n,r){i.add(new of(e,t,2));const s=new df(n,r);return s.position.set(-4.2,7,5.6),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:.5,far:26}),s.shadow.normalBias=.025,s.shadow.bias=-35e-5,i.add(s),s}function Md(i,e,t,n,r,s){const a=Math.max(t,n/e);i.left=-a*e/2,i.right=a*e/2,i.top=a/2,i.bottom=-a/2,i.position.set(...r),i.lookAt(...s),i.updateProjectionMatrix(),i.updateMatrixWorld()}function c_(i,e){const t=[];for(let s=-6;s<=6;s++){const a=s*1.48;t.push(a,e,-9,a,e,7,-12,e,a,12,e,a)}const n=new ci;n.setAttribute("position",new yt(t,3));const r=new rd({color:6388617,transparent:!0,opacity:.075});i.add(new Yu(n,r))}function rc(i){const[e,t,n,r]=i;return{x:((e+n/2)/ts-.5)*Bt,y:(.5-(t+r/2)/ts)*Bt,w:n*Bt/ts,h:r*Bt/ts}}function d_(i,e,t,n){i.background=new Be(15002861),i.fog=new Ts(15002861,.036),yd(i,15399423,12368035,16774885,2);const r=-2.67;bd(i,14345445,r),c_(i,r+.003),hr(i,n,-1.25,r+.006,-.3,5.8,2.1,4806502,.21);const s=new Li;i.add(s);const a=mi(s,new Ni(Bt+.024,Bt+.024,.055),gi(16382193));a.material.transparent=!0,a.position.z=-.038,a.castShadow=!0;const o=vi(s,Bt,Bt,Xi(t["fly-cut-paper.webp"]));o.renderOrder=1;const c=vi(s,Bt,Bt,Xi(t["fly-water.webp"]));c.position.z=.009,c.renderOrder=2;const l=oo.map(({crop:u},_)=>{const v=rc(u),p=Xi(t[`pose-${_+1}.webp`]);p.alphaTest=.025;const f=vi(i,v.w,v.h,p);f.renderOrder=3+_;const S=hr(i,n,0,r+.009+_*.001,0,v.w*1.7,v.w*.79,4675940,0);return{figure:f,shadow:S,c:v}}),d=nc.map(({crop:u,color:_})=>{const v=rc(u),p=gi(_,.67);p.transparent=!0;const f=mi(i,new Ni(v.w,v.h,v.w*.78),p);f.castShadow=!0,f.receiveShadow=!0;const S=hr(i,n,0,r+.017,0,v.w*2.1,v.w*1,4346472,0);return{block:f,shadow:S,c:v}}),m=vi(i,Bt,Bt,Xi(t["fly-blocks.webp"]));m.position.z=.06,m.renderOrder=12;const h=vi(i,Bt,Bt,Xi(null));return h.position.z=-.1,(u,_)=>{const v=Ut(.015,.41,u)*(1-Ut(.63,.985,u)),p=Lo(_/1.48,.73,1);Md(e,_,lt(5.64,5.9,v),lt(5.68,8.65*p,v),[3.2*v,3.5*v,14],[-.05*v,-.2*v,0]);const f=Ut(.005,.5,u),S=1-Ut(.53,.84,u),P=lt(1,.72,f);s.scale.setScalar(P),s.position.set(-2.42*p*f,.18*f,-1.46*f),s.rotation.set(-.045*f,-.22*f,.038*f),Di(a,S),a.castShadow=S>.45,Di(o,S),Di(c,1-Ut(.009,.13,u)),l.forEach(({figure:T,shadow:M,c:g},b)=>{const R=Ut(.018+b*.012,.45+b*.025,u),E=Ut(.57+b*.02,.87+b*.014,u),L=oo[b].open,D=d[b].c;T.position.set(lt(lt(g.x,L[0]*p,R),D.x,E),lt(lt(g.y,L[1],R),D.y,E),lt(lt(.018+b*.002,L[2],R),.09,E)),T.quaternion.copy(e.quaternion);const G=lt(1,1.45+b*.06,R)*lt(1,.68,E);T.scale.setScalar(G);const C=Ut(.006,.115,u)*(1-Ut(.63+b*.023,.82+b*.02,u));Di(T,C),M.position.x=T.position.x+.13,M.position.z=T.position.z-.1,M.material.opacity=.21*C*v});const y=Ut(.62,.985,u);d.forEach(({block:T,shadow:M,c:g},b)=>{const R=Ut(.24+b*.031,.57+b*.028,u),E=nc[b].open,L=lt(.36,1.02,R);T.position.set(lt(E[0]*p,g.x,y),lt(E[1]-.38*(1-R),g.y,y),lt(E[2],-.005,y)),T.rotation.set(lt(.18,0,y),lt(-.57,0,y),lt(-.047,0,y)),T.scale.set(L,L,L*lt(1,.018,y));const D=R*(1-Ut(.95,.995,u));Di(T,D),T.castShadow=D>.5,M.position.x=T.position.x+.07,M.position.z=T.position.z-.09,M.material.opacity=D*v*.17}),Di(h,Ut(.67,.95,u)),Di(m,Ut(.925,.995,u))}}const h_=24,is=6,fa=4,hs=448;function sc(i,e){const t=e%is,n=fa-1-Math.floor(e/is),r=.6/hs;i.offset.set((t+r)/is,(n+r)/fa),i.repeat.set((1-r*2)/is,(1-r*2)/fa)}const u_=[[109,29,396,347],[99,17,398,346],[110,20,415,352],[86,6,403,350],[75,0,408,350],[56,0,405,370],[69,0,424,368],[100,0,436,356],[127,0,447,352],[131,0,447,337],[149,0,447,333],[189,0,447,403],[187,25,447,447],[169,40,447,437],[168,42,447,426],[169,41,447,423],[142,39,447,426],[141,42,447,421],[161,30,447,397],[182,48,447,406],[170,72,447,422],[131,68,383,409],[125,49,373,384],[128,36,375,369]];function ac(i,e,t){const n=new Li;i.add(n);const r=mi(n,new Ni(t,t,.055),gi(15193783));r.castShadow=!0;const s=vi(n,t*.935,t*.935,Xi(e));return s.position.z=.032,s.renderOrder=1,n}function f_(i,e,t,n){i.background=new Be(15326152),i.fog=new Ts(15326152,.04),yd(i,16772574,13019275,16773324,2.25);const r=-2.25;bd(i,15127483,r),hr(i,n,-.55,r+.01,.05,6.45,4.2,7029040,.32);const s=new Li;s.position.x=-.65,i.add(s);const a=mi(s,new Ln(1.87,1.83,.76,84),gi(11956050));a.position.y=r+.38,a.castShadow=!0,a.receiveShadow=!0;const o=mi(s,new Ln(1.91,1.87,.095,84),gi(13671028)),c=r+.855;o.position.y=c-.0475,o.castShadow=!0,o.receiveShadow=!0;const l=mi(s,new Ro(1.72,.009,6,90),gi(11241563,.5,.19));l.rotation.x=Math.PI/2,l.position.y=c+.008;const d=hr(s,n,0,c+.015,0,3.2,1.35,7682593,.35),m=new Li;s.add(m);const h=4.55,u=vi(m,h,h,Xi(t["liquid-arc.webp"]));u.renderOrder=1;const _=mi(m,new Ni(h+.046,h+.046,.034),gi(15127741));_.material.transparent=!0,_.material.depthWrite=!1,_.position.z=-.04;const v=vi(m,h,h,Xi(t["liquid-relief-arc.webp"]));v.position.z=.075,v.material.alphaTest=.02,v.renderOrder=3;const p=new Li;i.add(p);const f=ac(p,t["liquid-rim.webp"],1.49);f.position.set(.09,.08,-.13),f.rotation.z=-.065;const S=ac(p,t["liquid-detail.webp"],1.49);S.rotation.z=.04;const P=mi(i,new Ln(.03,.034,1.25,12),gi(10978648,.53,.26)),y=mi(i,new Ln(.35,.37,.105,36),gi(11902845));P.castShadow=!0,y.receiveShadow=!0;let T=-1;return(M,g)=>{const b=Lo(g/1.44,.73,1),R=lt(-.14,.18,M);Md(e,g,5.62,6.68*b+.4,[Math.sin(R)*13.9,2.75+.32*M,Math.cos(R)*13.9],[-.12,-.035,0]),s.position.x=lt(-.68,-.53,M)*b+(1-b)*.4;const E=Math.round(M*(h_-1));E!==T&&(sc(t["liquid-arc.webp"],E),sc(t["liquid-relief-arc.webp"],E),T=E);const[L,D,G,C]=u_[E],z=(L+G)/(2*hs);m.rotation.y=R*.82,m.position.x=(.5-z)*h*.83,m.position.y=c+(C/hs-.5)*h+.03;const X=Math.min(D,hs-1-G,L),F=1-Ut(1,27,X);Di(u,F*.6),Di(_,F*.91),d.scale.x=lt(1,.82,M),p.position.set(2.15*b,-.71,-1.08),p.rotation.set(-.13,-.4+R*.35,.015),P.position.set(p.position.x,r+.64,p.position.z),y.position.set(p.position.x,r+.052,p.position.z)}}function p_(i,e,{assetUrl:t,onReady:n,onError:r}){let s;try{const E={antialias:!0,alpha:!1,powerPreference:"low-power"},L=i.getContext("webgl2",E);if(!L)throw new Error("WebGL is unavailable for this study.");s=new s_({canvas:i,context:L,...E})}catch(E){let L=!1;return queueMicrotask(()=>{L||r?.(E)}),{setProgress(){},resize(){},dispose(){L=!0}}}const a=new Ou,o=new Do(-3,3,3,-3,.1,100);s.outputColorSpace=zt,s.toneMapping=wi,s.shadowMap.enabled=!0,s.shadowMap.type=or,s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65));const c=new af,l={},d=l_(),m=e==="object"?o_:a_;let h=!1,u=!1,_=!1,v=0,p=.45,f=1,S=1,P;function y(E){u||h||(u=!0,v&&cancelAnimationFrame(v),v=0,r?.(E))}function T(){if(v=0,!(!P||h||u))try{P(p,f/S),s.render(a,o),_||(_=!0,n?.())}catch(E){y(E)}}function M(){P&&!v&&!h&&!u&&(v=requestAnimationFrame(T))}function g(){if(h)return;const E=Math.max(1,Math.round(i.clientWidth)),L=Math.max(1,Math.round(i.clientHeight));(E!==f||L!==S)&&(f=E,S=L,s.setSize(E,L,!1)),M()}function b(E){E.preventDefault(),y(new Error("The spatial preview lost its graphics context."))}i.addEventListener("webglcontextlost",b);const R=typeof ResizeObserver=="function"?new ResizeObserver(g):null;return R?.observe(i),g(),Promise.all(m.map(E=>new Promise((L,D)=>{const G=t(E),C=c.load(G,L,void 0,D);C.colorSpace=zt,C.anisotropy=Math.min(4,s.capabilities.getMaxAnisotropy()),E.endsWith("arc.webp")&&(C.generateMipmaps=!1,C.minFilter=Tt),l[E]=C}))).then(()=>{h||u||(P=(e==="object"?f_:d_)(a,o,l,d),g())}).catch(y),{setProgress(E){Number.isFinite(E)&&(p=Lo(E,0,1),M())},resize:g,dispose(){if(h)return;h=!0,R?.disconnect(),v&&cancelAnimationFrame(v),i.removeEventListener("webglcontextlost",b);const E=new Set,L=new Set;a.traverse(D=>{D.geometry&&E.add(D.geometry),D.material&&(Array.isArray(D.material)?D.material:[D.material]).forEach(C=>L.add(C)),D.shadow?.map?.dispose(),D.shadow?.mapPass?.dispose()}),E.forEach(D=>D.dispose()),L.forEach(D=>D.dispose()),Object.values(l).forEach(D=>D.dispose()),d.dispose(),s.dispose()}}}const m_=Object.freeze(Object.defineProperty({__proto__:null,createStudy:p_},Symbol.toStringTag,{value:"Module"}));
