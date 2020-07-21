$(function() {
	// preloader
	    var $preloader = $('.pl'),
	        $spinner   = $preloader.find('.round1');
	    $spinner.fadeOut();
	    $preloader.delay(350).fadeOut('slow');

	// Плавное перемещение страницы к нужному блоку
	$('.go-to').click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1000);
	});
	// Модальное окно arcticModal
	$('#exampleModal-1').arcticmodal('setDefault', {
		overlay: {
			css: {
				backgroundColor: '#131731',
	    		opacity: .93
			}
		}    
	});
	$('.order-btn, .footer-btn').click(function() {
		$('#exampleModal-1').arcticmodal()
	});
	//Открытие меню гамбургера
	$('.hamburger').click(function(){
		$('.menu-collapse').toggleClass('d-none').toggleClass('order-1');
		$('.menu').toggleClass('menu-opend');
		$('.menu a').click(function(){
			$('.menu-collapse').addClass('d-none').removeClass('order-1');
			$('.menu').removeClass('menu-opend');
		});
	});

	// Слайдер slick
	$('.slider').slick(
		{	autoplay: true,
			dots: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
		}
	);
});