document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al carousel
    var carousel = document.querySelector('#carousel');
  
    // Función para avanzar al siguiente slide
    function nextSlide() {
      carousel.carousel('next');
    }
  
    // Configurar intervalo de transición automática (5 segundos)
    setInterval(nextSlide, 5000);
  
    // Hacer que la transición sea suave
    carousel.style.scrollBehavior = 'smooth';
  });