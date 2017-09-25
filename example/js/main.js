$(document).ready(function(){
    
    
    

    // Создаем переменые для кнопки и для меню
	var pull = $("#pull");
	var nav = $("#mobile_nav");

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

        // Открываем/Скрываем меню
		$(nav).slideToggle();
	});


    // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 700 && nav.is(':hidden')) {
		    nav.removeAttr('style');
		}
	});

    $("#slider_container").owlCarousel({

		// Most important owl features
		items : 4,
        
        singleItem : false,

		itemsScaleUp : false,
        
        autoPlay : false,
		stopOnHover : false,
		// Navigation
		navigation : true,
		navigationText : ["<img src=\"img/left.png\">","<img src=\"img/right.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
        pagination : false,
        
        baseClass : "owl-carousel",
		theme : "owl-theme",

	});
    
    
    $("#slider_container_2").owlCarousel({

		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,
		
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		navigation : false,
		rewindNav : true,
		scrollPerPage : false,
		paginationSpeed : 800,
		rewindSpeed : 1200,
        pagination : true,
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		//transitionStyle : "backSlide"

		

	});
});