$(document).ready(function () {
  /* Activar Tooltip Bootstrap */
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  /* Activar Alert Bootstrap */
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      appendAlert("Genial, gracias por contactarnos!", "info");
    });
  }

  /* cambiar bg de navbar al hacer scroll  */
  $(window).scroll(function () {
    //scrollTop permite detectar el desplazamiento vertical de la página desde  la parte superior
    var scrollTop = $(window).scrollTop();
    //aplicar cambio solamente en pantalla grande
    if (window.innerWidth > 768) {
      //aplicar cambio solamente si la página se ha desplazado más de 100 pixeles desde su parte superior
      if (scrollTop > 100) {
        $(".navbar").css({
          background: "rgba(0, 0, 0, 0.8)",
          transition: "background 500ms ease", //aplicar transición para que el cambio de color del bg sea más suave a la vista
        });
      } else
        $(".navbar").css({
          background: "transparent",
          transition: "background 500ms ease",
        });
    }
  });
});
