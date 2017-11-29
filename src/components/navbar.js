// BURGER

	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const navbar = document.querySelector('.navbar');
	
	burger.addEventListener('click', () => {
		if(burger.classList.contains('burger')){
			burger.classList.remove('burger')
			menu.classList.add('is-active')
			burger.classList.add('burger-is-open')
		}else{
			burger.classList.remove('burger-is-open')
			menu.classList.remove('is-active')
			burger.classList.add('burger')
		}
	})



// SMOOTH



	$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});




