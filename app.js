// Forzar recarga del favicon (cache-busting)
const favicon = document.getElementById('favicon');
function setFavicon(path){
  favicon.href = path + '?v=' + Date.now();
}
setFavicon('classroom-favicon.ico');

// Redirección con cuenta regresiva (opcional)
function redirectWithCountdown(url, seconds=5){
  let s = seconds;
  const t = setInterval(()=>{
    document.title = `Redirigiendo (${s}s) - Inicio - Classroom`;
    if(--s < 0){ clearInterval(t); window.location.href = url; }
  },1000);
}
// redirectWithCountdown('https://talk.brave.com/Sl37uuQGtWEu2Rt3-gYCdY7bBLeeJ1hRxc4MiuD7mxw', 5);
