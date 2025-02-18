document.addEventListener('DOMContentLoaded', function() {
  // Obtener todos los videos por su id
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');
  const video3 = document.getElementById('video3');

  // Aseguramos que todos los videos estén listos para reproducirse
  function checkReady() {
    if (video1.readyState >= 3 && video2.readyState >= 3 && video3.readyState >= 3) {
      // Reproducir todos los videos al mismo tiempo
      video1.play();
      video2.play();
      video3.play();
    }
  }

  // Esperamos a que los tres videos estén listos
  video1.addEventListener('canplaythrough', checkReady);
  video2.addEventListener('canplaythrough', checkReady);
  video3.addEventListener('canplaythrough', checkReady);
});
