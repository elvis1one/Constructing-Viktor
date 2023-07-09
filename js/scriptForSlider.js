
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

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('sending');
			} else {
				alert('Помилка');
				form.classList.remove('sending');
			}
		} else {
			alert("Заповніть, будь ласка, обов'язкові поля");
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
	}

	function formAddError(input) {
		input.parentElement.classList.add('error');
		input.classList.add('error')
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('error');
		input.classList.remove('error')
	}


});
