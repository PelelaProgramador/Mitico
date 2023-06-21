
function reproducirMusica() {
  if (audio.paused) {
    audio.play();
    btnMusica.innerHTML = 'Pausar música';
  } else {
    audio.pause();
    btnMusica.innerHTML = 'Reproducir música';
  }
}


// Reproducir la canción seleccionada
function playAudio() {
  audio.src = songSelect.value;
  audio.play();
}






// Cambiar el volumen
function setVolume() {
  audio.volume = volumeSlider.value;
}


           
function cambiarImagen() {
  var imagen = document.getElementById("imagen");
  if (imagen.src.match("img/Amongus.png")) {
    imagen.src = "img/pumtoma.jpg";
    var audio = new Audio("img/roca.mp3");
    audio.play();
  } else {
    imagen.src = "img/Amongus.png";
    var audio = new Audio("img/Amongus.mp3");
    audio.play();
  }
}

