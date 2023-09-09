document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger')
	const mobileBurgerBtn = document.querySelector('.mobile-burger')
	const mobileMenu = document.querySelector('.mobile-menu')
	const bodyLock = document.querySelector('body')
	const headerElement = document.querySelector('.header')
	const filterMenu = document.querySelector('.filter')
	const filterBtn = document.querySelector('.filter-btn')
	const filterCloseBtn = document.querySelector('.filter__btn-close')

	function addLock() {
		bodyLock.classList.add('lock')
		headerElement.classList.add('header-lock')
	}

	function removeLock() {
		bodyLock.classList.remove('lock')
		headerElement.classList.remove('header-lock')
	}

	function addMobileMenu() {
		mobileMenu.classList.add('mobile-menu--active')
		addLock()
	}

	function removeMobileMenu() {
		mobileMenu.classList.remove('mobile-menu--active')
		removeLock()
	}

	burger.addEventListener('click', () => {
		addMobileMenu()
	})

	mobileBurgerBtn.addEventListener('click', () => {
		removeMobileMenu()
	})

	filterBtn.addEventListener('click', () => {
		filterMenu.classList.add('filter--active')
		filterCloseBtn.classList.add('filter__btn-close--active')
		addLock()
	})

	filterCloseBtn.addEventListener('click', () => {
		filterMenu.classList.remove('filter--active')
		filterCloseBtn.classList.remove('filter__btn-close--active')
		removeLock()
	})

	document.addEventListener('click', function (e) {
		if (
			e.target !== mobileMenu &&
			!mobileMenu.contains(e.target) &&
			e.target !== burger &&
			e.target !== filterMenu &&
			!filterMenu.contains(e.target) &&
			e.target !== filterBtn
		) {
			filterMenu.classList.remove('filter--active')
			filterCloseBtn.classList.remove('filter__btn-close--active')
			removeMobileMenu()
		}
	})
})

$(function () {
	var $range = $('.filter-price__input')
	var $inputFrom = $('.filter-price__from')
	var $inputTo = $('.filter-price__to')
	var instance
	var min = 0
	var max = 1000
	var from = 0
	var to = 0

	$range.ionRangeSlider({
		type: 'double',
		min: min,
		max: max,

		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs,
	})
	instance = $range.data('ionRangeSlider')

	function updateInputs(data) {
		from = data.from
		to = data.to

		$inputFrom.prop('value', from)
		$inputTo.prop('value', to)
	}

	$inputFrom.on('change', function () {
		var val = $(this).prop('value')

		// validate
		if (val < min) {
			val = min
		} else if (val > to) {
			val = to
		}

		instance.update({
			from: val,
		})

		$(this).prop('value', val)
	})

	$inputTo.on('change', function () {
		var val = $(this).prop('value')

		// validate
		if (val < from) {
			val = from
		} else if (val > max) {
			val = max
		}

		instance.update({
			to: val,
		})

		$(this).prop('value', val)
	})

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
			$('.promo__items:not(.slick-initialized)').slick({
				arrows: false,
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 3000,
			})
		} else {
			$('.promo__items.slick-initialized').slick('unslick')
		}
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

	$('.select-style').styler()

	$('.scroll').on('click', function (event) {
		event.preventDefault()
		var id = $(this).attr('href'),
			top = $(id).offset().top
		$('body,html').animate({ scrollTop: top }, 1500)
	})

	$('.menu-list__link').on('click', function () {
		$('.mobile-menu').removeClass('mobile-menu--active')
		$('.header').removeClass('header-lock')
		$('body').removeClass('lock')
	})
})

var mixer = mixitup('.popular__items')

mixer.filter('.category-a')
