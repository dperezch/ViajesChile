$(document).ready(function () {
  /* Activar Popover Bootstrap */
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
  /* Activar Tooltip Bootstrap */
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  /* cambiar bg de navbar al hacer scroll  */
  $(window).scroll(function () {
    //scrollTop permite detectar el desplazamiento vertical de la páginas desde  la parte superior
    var scrollTop = $(window).scrollTop();
    //aplicar cambio solamente en pantalla grande
    if (window.innerWidth > 768) {
      if (scrollTop > 100) {
        $(".navbar").css({
          background: "rgba(0, 0, 0, 0.8)",
          transition: "background 500ms ease",
        });
      } else
        $(".navbar").css({
          background: "transparent",
          transition: "background 500ms ease",
        });
    }
  });
});
