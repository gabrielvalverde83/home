

/* NOTA: Desactiven este arcxhivo desde el HTML y activen 
el que se llama mis_scripts-scroll-top.js. Allí tienen resuelto 
el desafío planteado por Lorena de detectar el scroll hacia arriba y 
que allí aparezca el botón */

var top_btn = $('.to-top');
top_btn.hide();

$(window).scroll(function(){
	/* Detecto el evento scroll del usuario y cuando sea de más de 300px
	 hago que aparezca el botón. De lo contratio, desaparece. */

	if ( $(this).scrollTop() > 300 ) {
		top_btn.fadeIn();
	} else {
		top_btn.fadeOut();
	}
});

	/* Monitoreamos el evento click y cuando este sucede
		llevo al usuario al top del sitio de manera suave 
		usando la función animate */

top_btn.click(function(event){
	event.preventDefault;
	$('html, body').animate({
		scrollTop:0}, 600);
	return false;
});





