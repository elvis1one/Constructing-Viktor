




//-------------------animation-text

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}


	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

	setTimeout(() => {
		animOnScroll();
	}, 500);
}



//===============form to e-mail=======
$(document).ready(function () {
	// E-mail Ajax Send
	$("form").submit(function () {
		var th = $(this);

		// Валидация формы
		function removeError(input) {
			var parent = input.closest('.form-group');
			parent.removeClass('error');
			parent.find('.error-label').remove();
		}

		function createError(input, text) {
			var parent = input.closest('.form-group');
			parent.addClass('error');
			parent.append('<label class="error-label">' + text + '</label>');
		}

		var result = true;

		th.find('input[type="text"], input[type="tel"], textarea').each(function () {
			removeError($(this));
			if ($(this).val() === '') {
				createError($(this), 'Поле не заповнене');
				result = false;
			}
		});

		if (!result) {
			return false;
		}

		// Отправка AJAX-запроса
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			alert("Дякуємо! Ваші дані успішно надіслано");
			setTimeout(function () {
				th.trigger("reset");
			}, 1000);
		});

		return false;
	});
});