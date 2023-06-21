
// //--------------------------sliderForImages

// const images = document.querySelectorAll('.slider__line img');
// const sliderLine = document.querySelector('.slider__line');
// let count = 0;
// let width;

// function init() {
// 	console.log('resize');
// 	width = document.querySelector('.slider__container').offsetWidth;
// 	sliderLine.style.width = width * images.length + 'px';
// 	images.forEach(item => {
// 		item.style.width = width + 'px';
// 		item.style.height = 'auto';
// 	});
// 	rollSlider();
// }

// window.addEventListener('resize', init);
// init();


// document.querySelector('.slider-next').addEventListener('click', function () {
// 	count++;
// 	if (count >= images.length) {
// 		count = 0;
// 	}
// 	rollSlider();
// })

// document.querySelector('.slider-prev').addEventListener('click', function () {
// 	count--;
// 	if (count < 0) {
// 		count = images.length - 1;
// 	}
// 	rollSlider();
// })

// function rollSlider() {
// 	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
// }



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
