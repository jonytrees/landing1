$(document).ready(function () {
    
    
    

    // Создаем переменые для кнопки и для меню
	var pull = $("#pull"),
	    nav = $("#mobile_nav");

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function (e) {
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

        // Открываем/Скрываем меню
		$(nav).slideToggle();
	});


    // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function () {
		var w = $(window).width();
		if (w > 700 && nav.is(':hidden')) {
		    nav.removeAttr('style');
		}
	});

    $("#slider_container").owlCarousel({

		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199, 4],
		itemsDesktopSmall : [980, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: false,
		itemsMobile : [479, 1],
		
		singleItem : true,

		itemsScaleUp : false,
		
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		navigation : true,
		navigationText : ["<img src=\"img/left.png\">", "<img src=\"img/right.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme"
	});
    
     $("#slider_container1").owlCarousel({

		// Most important owl features
		items : 3,
		itemsCustom : false,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [980, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: false,
		itemsMobile : [479, 1],
		
		singleItem : false,

		itemsScaleUp : false,
		
		
		//Autoplay
		autoPlay : true,
		stopOnHover : false,
		
		// Navigation
		navigation : true,
		navigationText : ["<img src=\"img/left_2.png\">", "<img src=\"img/right_2.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme1"
	});
    
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    
    $('.tabs_menu a').click(function (e) {
        e.preventDefault();
        $('.tabs_menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display': 'none'});
        $(tab).fadeIn(400);
    });
    
    
});

