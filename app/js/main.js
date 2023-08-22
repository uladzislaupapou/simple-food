$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('.header').addClass('sticky')
		} else {
			$('.header').removeClass('sticky')
		}
	})

 $('.menu-list')
		.find('.menu-list__link')
		.on('click', function () {
			if ($(this).hasClass('menu-list__link--active')) {
				return
			}
			$('.menu-list')
				.find('.menu-list__link--active')
				.removeClass('menu-list__link--active')
			$(this).addClass('menu-list__link--active')
		})

    $('.testimonials__list').slick({
			dots: true,
			arrows: true,
			prevArrow:
				'<button type="button" class="slick-slider__arrow slick-slider__arrow--prev"><svg class="slick-slider__icon slick-slider__icon--left"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',
			nextArrow:
				'<button type="button" class="slick-slider__arrow slick-slider__arrow--next"><svg class="slick-slider__icon slick-slider__icon--right"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',
			appendArrows: '.arrows-wrap',
			fade: true,
			autoplay: true,
			autoplaySpeed: 2000,
		})

})

var mixer = mixitup('.popular__items')

mixer.filter('.category-a')
