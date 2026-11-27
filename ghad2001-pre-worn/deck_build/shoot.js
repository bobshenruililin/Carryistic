const { chromium } = require('playwright');
(async () => {
  const dir = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await p.goto('file://' + dir + '/preview.html');
  await p.waitForTimeout(2500);
  const secs = await p.$$('section');
  const over = [];
  for (let i = 0; i < secs.length; i++) {
    const id = await secs[i].getAttribute('id');
    await secs[i].screenshot({ path: `${dir}/png/${String(i + 1).padStart(2, '0')}-${id}.png` });
    const o = await secs[i].evaluate(s => {
      const r = s.getBoundingClientRect(); const bad = [];
      s.querySelectorAll('h2,p,div,img,table').forEach(e => { const q = e.getBoundingClientRect();
        if (q.width && (q.right > r.right + 1 || q.bottom > r.bottom + 1)) bad.push(e.tagName + ':' + (e.textContent || '').slice(0, 30)); });
      return bad.slice(0, 3);
    });
    if (o.length) over.push(id + ' -> ' + o.join(' | '));
  }
  console.log('overflow:', over.length ? over.join('\n') : 'none');
  await b.close();
})();
