
$('.to-top').hide();

var scrollAnterior = 0;

    $(window).scroll(function(){
    	// Primero le decimos que si la distancia del scroll 
    	// desde el top hacia abajo es mayor a 0, entonces debe 
    	// ocultar el botón
    	
       var scrollActual = $(this).scrollTop();
       if (scrollActual > scrollAnterior){
           $('.to-top').fadeOut('slow');
       } else {
          $('.to-top').fadeIn('slow');
       }
       scrollAnterior = scrollActual;
    });
