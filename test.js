<button class="ytp-play-button ytp-button" aria-label="Reproducir (k)" 
title="Reproducir (k)">
<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
<use class="ytp-svg-shadow" xlink:href="#ytp-id-63"></use>
<path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-63"></path>
</svg></button>

setInterval(() => {
 let boton = document.querySelector('.ytp-play-button');
 if(boton.ariaLabel === 'Reproducir (k)' && boton.title === 'Reproducir (k)' ){
    boton.ariaLabel = 'Pausa (k)';
    boton.title = 'Pausa (k)'
 } else if(boton.ariaLabel === 'Pausa (k)' && boton.title === 'Pausa (k)') {
    boton.ariaLabel = 'Reproducir (k)';
    boton.title = 'Reproducir (k)';
 }
}, 5000);