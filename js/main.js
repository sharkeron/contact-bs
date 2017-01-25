(function () {
	'use strict';

	$(function () {
		$(document).on('click', '.menu-toggle', function (e) {

			e.preventDefault();

			$('header .menu-icon').toggleClass('active');

			if ($('.menu-gamb').css('display') == 'none') {
				$('.menu-gamb').show('slow');
			} else if ($('.menu-gamb').css('display') !== 'none') {
				$('.menu-gamb').hide('slow');
			}

		});

		$(document).on('click', '.menu-gamb-item a', function (e) {
			$('menu-gamb').hide('slow');
		});

		$(function () {

			$(document).on('click', '.menu-gamb-item a', function (e) {

				e.preventDefault();

				var elemId = $(this).attr('href');

				if (elemId.length > 2) {
					var top = $(elemId).offset().top;

					$('body').animate({
						scrollTop: top
					}, 1500);
				}

			});

		});

		$(document).on('click', '.reviews .tab-list li', function () {

			var tab_id = $(this).attr('data-tab');
			$('.reviews .active[data-tab]').removeClass('active');
			$('.reviews [data-tab="' + tab_id + '"]').addClass('active');
		});

		$(function () {

			var tabsMaxHeight = 0;

			$('.reviews .tabs-content .tab-content').css('display', 'block');

			$('.reviews .tabs-content .tab-content').each(function () {
				var height = $(this).outerHeight(true);
				if (height > tabsMaxHeight) {
					tabsMaxHeight = height;
				}
			});

			$('.reviews .tabs-content').css('height', tabsMaxHeight + 'px');
			$('.reviews .tabs-content .tab-content').css('display', '');
		});
	});
})();
