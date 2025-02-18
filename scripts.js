document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  if (videos.length < 2) return; // Si hay menos de 2 videos, no hacer nada

  let masterVideo = videos[0]; // Tomamos el primer video como referencia

  // Función para sincronizar los otros videos con el maestro
  function syncVideos() {
    videos.forEach((video) => {
      if (video !== masterVideo) {
        video.currentTime = masterVideo.currentTime; // Igualamos el tiempo
        if (masterVideo.paused) {
          video.pause(); // Si el maestro se pausa, los demás también
        } else {
          video.play(); // Si el maestro se reproduce, los demás también
        }
      }
    });
  }

  // Asegurar que todos los videos comiencen al mismo tiempo
  function startVideos() {
    videos.forEach((video) => {
      video.play().catch((error) => console.error("Error al reproducir:", error));
    });

    setTimeout(() => {
      masterVideo.play(); // Asegurar que el maestro arranque
    }, 100);
  }

  // Sincronizar cuando cambie el tiempo en el video maestro
  masterVideo.addEventListener("timeupdate", syncVideos);

  // Sincronizar cuando se haga pausa o play en el video maestro
  masterVideo.addEventListener("play", syncVideos);
  masterVideo.addEventListener("pause", syncVideos);

  // Iniciar sincronización cuando todos los videos estén cargados
  Promise.all([...videos].map((v) => v.readyState >= 3)).then(startVideos);
});
