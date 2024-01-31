/* Tooltips */
var tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
/* Al hacer click en enviarCorreo nos aparecera un alert */
$("#enviarCorreo").click(function (e) {
	e.preventDefault();
	alert("El correo fue enviado correctamente...");
}); 
/* Al hacer doble click se convierte en rojo*/
$(".receta").dblclick(function(){
    $(this).css({
    "color": "red",
    });
    });
    /* uso de toggle */
$(".card-title").click(function () {
	$("#recetas").toggle();
});