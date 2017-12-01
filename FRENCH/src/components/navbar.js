// BURGER

	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const navbar = document.querySelector('.navbar');
  let distanceMenuToTranslate;

	function toggleMenu () {
		if (burger.classList.contains('burger')) {
			burger.classList.remove('burger');
			menu.classList.add('is-active');
			burger.classList.add('burger-is-open');
      recalculateTranslation();
		} else {
			burger.classList.remove('burger-is-open');
			menu.classList.remove('is-active');
			burger.classList.add('burger');
      recalculateTranslation();
		};
	}

function recalculateTranslation () {

  const windowWidth = window.innerWidth;
  const menuWidth = window.getComputedStyle(menu).getPropertyValue('width').replace('px', '');
  if (menu.classList.contains('is-active')) {
  menu.style.transform = `translateX(${windowWidth - menuWidth}px)`
  } else {
  menu.style.transform = `translateX(${windowWidth}px)`
  }
}
burger.addEventListener('click', toggleMenu);
window.addEventListener('resize', recalculateTranslation);
window.addEventListener('load', recalculateTranslation);
// SMOOTH



	$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});




