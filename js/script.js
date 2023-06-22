




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


// ============add <br> to text on small windowWidth==============

window.addEventListener('resize', insertLineBreak);

function insertLineBreak() {
	const textElement = document.getElementById('text');
	const windowWidth = window.innerWidth;

	if (windowWidth <= 768) {
		textElement.innerHTML = 'Ручна та машинна штукатурка<br> в Києві та передмісті';
	} else {
		textElement.innerHTML = 'Ручна та машинна штукатурка в Києві та передмісті';
	}
}