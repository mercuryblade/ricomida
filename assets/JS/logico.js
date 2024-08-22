// Inicializar tooltips
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})

//function enviar_correo() {
  
//alert("El correo fue enviado correctamente");
//}


$(document).ready(function() {
    // Inicializar el tooltip de Bootstrap
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Manejar el evento de clic del botón
    $("#btnEnviarCorreo").click(function() {
        alert("El correo fue enviado correctamente");
    });
});

$(document).ready(function() {
    $("#tituloIngredientes").dblclick(function() {
        $(this).css("color", "red");
    });
});
$(document).ready(function() {
    $("#tituloPreparacion").dblclick(function() {
        $(this).css("color", "red");
    });
});

$(document).ready(function() {
    $(".card-title").click(function() {
        $(this).next(".card-content").toggle(); // Alterna la visibilidad del contenido de la tarjeta
    });
});