document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger')
	const mobileBurgerBtn = document.querySelector('.mobile-burger')
	const mobileMenu = document.querySelector('.mobile-menu')
	const bodyLock = document.querySelector('body')
	const headerElement = document.querySelector('.header')

	function addMobileMenu() {
		mobileMenu.classList.add('mobile-menu--active')
		bodyLock.classList.add('lock')
		headerElement.classList.add('header-lock')
	}
  function removeMobileMenu() {
		mobileMenu.classList.remove('mobile-menu--active')
		bodyLock.classList.remove('lock')
		headerElement.classList.remove('header-lock')
	}

  burger.addEventListener('click', () => {
		addMobileMenu()
	})

	mobileBurgerBtn.addEventListener('click', () => {
		removeMobileMenu()
	})

	document.addEventListener('click', function (e) {
		if (
			e.target !== mobileMenu &&
			!mobileMenu.contains(e.target) &&
			e.target !== burger
		) {
			removeMobileMenu()
		}
	})
})

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

	$(window).on('load resize', function () {
		if ($(window).width() < 768) {
			$('.restaurants__list:not(.slick-initialized)').slick({
				arrows: false,
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 3000,
			})
		} else {
			$('.restaurants__list.slick-initialized').slick('unslick')
		}
	})

	$('.testimonials__list').slick({
		dots: true,
		arrows: true,
		infinite: false,
		prevArrow:
			'<button type="button" class="slick-slider__arrow slick-slider__arrow--prev"><svg class="slick-slider__icon slick-slider__icon--left"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',
		nextArrow:
			'<button type="button" class="slick-slider__arrow slick-slider__arrow--next"><svg class="slick-slider__icon slick-slider__icon--right"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',
		appendArrows: '.arrows-wrap',
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
				},
			},
		],
	})
})

var mixer = mixitup('.popular__items')

mixer.filter('.category-a')
