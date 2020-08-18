$(document).ready(function(){

	//abrir y cerrar menu en sitio responsivo ///////////

	$('.navbar-toggle').click(function(){
		$('.header-menu').removeClass('menu-ubicacion');
		$('.header-menu').addClass('menuResponsivo-ubicacion');
	});
	
	$('.menu-cerrar h3').click(function(){
		$('.header-menu').removeClass('menuResponsivo-ubicacion');
		$('.header-menu').addClass('menu-ubicacion');
	});


	/////////////////////////////////////////////////////////

	// $('.navbar-toggle').click(function(){
	// 	$('#header-menu').css('left',0);
	// });
	
	// $('.menu-cerrar h3').click(function(){
	// 	$('#header-menu').css('left',-1850);
	// })

	//////////////////////////////////////////////////////////

	// var ventana_ancho = $(window).width();

	// console.log(ventana_ancho);

	// if(ventana_ancho > 1186){
	// 	$('.header-menu').css('left',0);
	// };
	
	//boton para subir al inicio ///////////////////

 	var $boton_top	= $('.to-top');
 	$boton_top.hide();

 	$(window).scroll(function(){
 		if ( $(this).scrollTop() > 300 ) {
 			$boton_top.fadeIn();
 		} else {
 			$boton_top.fadeOut();
 		}
 	});

 	$boton_top.click(function(event){
 		event.preventDefault();
 		$('html, body').animate({
 			scrollTop:0},1200)
 		return false;
 	});

});