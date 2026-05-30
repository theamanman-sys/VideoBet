module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const targetUrl = req.query.url;
  if (!targetUrl) {
    res.status(400).json({ error: 'Missing url parameter' });
    return;
  }

  if (!targetUrl.includes('player.cinezo.live')) {
    res.status(403).json({ error: 'Only cinezo player allowed' });
    return;
  }

  try {
    const upstream = await fetch(targetUrl, {
      headers: {
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!upstream.ok) {
      res.status(502).json({ error: `Upstream ${upstream.status}`, url: targetUrl });
      return;
    }

    let html = await upstream.text();
    const origin = new URL(targetUrl).origin;

    html = html.replace('<head>', `<head><base href="${origin}">`);

    const inject = `
<script>
(function(){
  var iv=setInterval(function(){
    var v=document.querySelector('video');
    if(v&&typeof v.currentTime==='number'&&isFinite(v.currentTime)){
      window.parent.postMessage({type:'videobet-progress',currentTime:v.currentTime,duration:v.duration||0,paused:v.paused},'*');
    }
  },200);
})();
<\/script>`;

    html = html.replace('</body>', inject + '</body>');

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.status(200).send(html);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
};
