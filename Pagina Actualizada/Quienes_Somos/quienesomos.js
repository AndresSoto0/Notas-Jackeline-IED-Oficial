/* ==========================================================
   ANIMACIÓN DE IMÁGENES DE MIEMBROS (entrada suave y moderna)
   ========================================================== */
document.querySelectorAll(".img-neon").forEach((img, i) => {
  img.style.opacity = "0";
  img.style.transform = "translateY(20px) scale(0.96)";
  img.style.filter = "blur(3px)";

  setTimeout(() => {
    img.style.transition =
      "opacity 1s ease-out, transform 0.9s ease-out, filter 1s ease-out";
    img.style.opacity = "1";
    img.style.transform = "translateY(0) scale(1)";
    img.style.filter = "blur(0)";
  }, 200 * (i + 1)); // efecto escalonado
});

/* ==========================================================
   ROTADOR DE IMÁGENES DEL COLEGIO (entrada lateral + fade)
   ========================================================== */
const schoolImages = [
  "Imagenes/rotativo/logocolegio.jpg",
  "Imagenes/rotativo/logocolegio2.jpg",
  "Imagenes/rotativo/logocolegio3.jpg"
];

let currentIndex = 0;
const schoolImg = document.getElementById("school-img");

if (schoolImg) {
  // Inicializa estilo compatible con el diseño moderno
  schoolImg.style.position = "relative";
  schoolImg.style.left = "0";
  schoolImg.style.opacity = "1";
  schoolImg.style.transition = "left 1s ease, opacity 1s ease";

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % schoolImages.length;
    const fromLeft = Math.random() < 0.5; // dirección aleatoria

    // Desaparece la imagen actual
    schoolImg.style.opacity = "0";
    schoolImg.style.transform = "scale(0.97)";

    setTimeout(() => {
      // Cambia la imagen
      schoolImg.src = schoolImages[nextIndex];

      // Posiciona la nueva fuera de pantalla
      schoolImg.style.left = fromLeft ? "-100%" : "100%";

      // Animación de entrada suave con desenfoque y rebote
      setTimeout(() => {
        schoolImg.style.transition =
          "left 1s cubic-bezier(.2,.8,.3,1), opacity 0.8s ease, transform 0.8s ease";
        schoolImg.style.left = "0";
        schoolImg.style.opacity = "1";
        schoolImg.style.transform = "scale(1)";
      }, 80);
    }, 500);

    currentIndex = nextIndex;
  }, 4000);
}
