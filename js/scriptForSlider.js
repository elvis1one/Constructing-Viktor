
//--------------------------sliderForImages

const images = document.querySelectorAll('.slider__line img');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

function init() {
	console.log('resize');
	width = document.querySelector('.slider__container').offsetWidth;
	sliderLine.style.width = width * images.length + 'px';
	images.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	});
	rollSlider();
}

window.addEventListener('resize', init);
init();


document.querySelector('.slider-next').addEventListener('click', function () {
	count++;
	if (count >= images.length) {
		count = 0;
	}
	rollSlider();
})

document.querySelector('.slider-prev').addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = images.length - 1;
	}
	rollSlider();
})

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
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