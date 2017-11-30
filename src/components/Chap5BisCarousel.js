'use strict';
import 'dragscroll';


/*---------------- Variables ---------------------*/
const carousel5BisContainer = document.querySelector('.chap-text-5-bis-carousel-container');

const arrowRightChap5Bis = document.querySelector('#chap-5-bis-arrow-right');
const arrowLeftChap5Bis = document.querySelector('#chap-5-bis-arrow-left');
const buttonsToClick = [...document.querySelectorAll('[data-button]')];
const buttons = document.querySelector('.container-buttons').firstElementChild;


let clickedIndex = 0;
let counterScroll;


let carouselContentObjects = [
{
  name: `Laurent Chiabotto`,
  text: `Laurent Chiabotto est Chef du Département Méthodes au sein de Total Exploration-Production à Pau. Il est en charge de sujets transverses comme le Système de Management de l’Exploitation, les données et Solutions Métiers ou encore les Opérations pour le futur. <br>
  Entré dans le Groupe Total en 1994, Il occupe plusieurs postes en expatriation, notamment au Venezuela, au Myanmar, au Cameroun, au Nigeria et dernièrement aux Emirats-Arabes-Unis en tant que Field Opérations Manager.<br><br>
  « Travaillant au service exploitation de Total, je me considère comme un potentiel futur client. Je serai donc très attentif à l’évolution de ces solutions robotiques. Le robot ARGOS doit avant tout renforcer la sécurité des opérateurs et permettre de gagner en efficacité. »`
},
{
  name: `Laurent Chiabotto`,
  text: `Laurent Chiabotto est Chef du Département Méthodes au sein de Total Exploration-Production à Pau. Il est en charge de sujets transverses comme le Système de Management de l’Exploitation, les données et Solutions Métiers ou encore les Opérations pour le futur. <br>
  Entré dans le Groupe Total en 1994, Il occupe plusieurs postes en expatriation, notamment au Venezuela, au Myanmar, au Cameroun, au Nigeria et dernièrement aux Emirats-Arabes-Unis en tant que Field Opérations Manager.<br><br>
  « Travaillant au service exploitation de Total, je me considère comme un potentiel futur client. Je serai donc très attentif à l’évolution de ces solutions robotiques. Le robot ARGOS doit avant tout renforcer la sécurité des opérateurs et permettre de gagner en efficacité. »`
},
{
  name: `Laurent Chiabotto`,
  text: `Laurent Chiabotto est Chef du Département Méthodes au sein de Total Exploration-Production à Pau. Il est en charge de sujets transverses comme le Système de Management de l’Exploitation, les données et Solutions Métiers ou encore les Opérations pour le futur. <br>
  Entré dans le Groupe Total en 1994, Il occupe plusieurs postes en expatriation, notamment au Venezuela, au Myanmar, au Cameroun, au Nigeria et dernièrement aux Emirats-Arabes-Unis en tant que Field Opérations Manager.<br><br>
  « Travaillant au service exploitation de Total, je me considère comme un potentiel futur client. Je serai donc très attentif à l’évolution de ces solutions robotiques. Le robot ARGOS doit avant tout renforcer la sécurité des opérateurs et permettre de gagner en efficacité. »`
},
{
  name: `Laurent Chiabotto`,
  text: `Laurent Chiabotto est Chef du Département Méthodes au sein de Total Exploration-Production à Pau. Il est en charge de sujets transverses comme le Système de Management de l’Exploitation, les données et Solutions Métiers ou encore les Opérations pour le futur. <br>
  Entré dans le Groupe Total en 1994, Il occupe plusieurs postes en expatriation, notamment au Venezuela, au Myanmar, au Cameroun, au Nigeria et dernièrement aux Emirats-Arabes-Unis en tant que Field Opérations Manager.<br><br>
  « Travaillant au service exploitation de Total, je me considère comme un potentiel futur client. Je serai donc très attentif à l’évolution de ces solutions robotiques. Le robot ARGOS doit avant tout renforcer la sécurité des opérateurs et permettre de gagner en efficacité. »`
},
{
  name: `Laurent Chiabotto`,
  text: `Laurent Chiabotto est Chef du Département Méthodes au sein de Total Exploration-Production à Pau. Il est en charge de sujets transverses comme le Système de Management de l’Exploitation, les données et Solutions Métiers ou encore les Opérations pour le futur. <br>
  Entré dans le Groupe Total en 1994, Il occupe plusieurs postes en expatriation, notamment au Venezuela, au Myanmar, au Cameroun, au Nigeria et dernièrement aux Emirats-Arabes-Unis en tant que Field Opérations Manager.<br><br>
  « Travaillant au service exploitation de Total, je me considère comme un potentiel futur client. Je serai donc très attentif à l’évolution de ces solutions robotiques. Le robot ARGOS doit avant tout renforcer la sécurité des opérateurs et permettre de gagner en efficacité. »`
},
{
  name: `Laurent Chiabotto`,
  text: `Laurent Chiabotto est Chef du Département Méthodes au sein de Total Exploration-Production à Pau. Il est en charge de sujets transverses comme le Système de Management de l’Exploitation, les données et Solutions Métiers ou encore les Opérations pour le futur. <br>
  Entré dans le Groupe Total en 1994, Il occupe plusieurs postes en expatriation, notamment au Venezuela, au Myanmar, au Cameroun, au Nigeria et dernièrement aux Emirats-Arabes-Unis en tant que Field Opérations Manager.<br><br>
  « Travaillant au service exploitation de Total, je me considère comme un potentiel futur client. Je serai donc très attentif à l’évolution de ces solutions robotiques. Le robot ARGOS doit avant tout renforcer la sécurité des opérateurs et permettre de gagner en efficacité. »`
}
];


/*-------------- Load Carousel --------------*/


let currentDisplayedIndex;
  let carouselMoving;



carouselContentObjects.forEach(object => {

  const carouselSubcontainer = document.createElement('div');
  carouselSubcontainer.classList.add('chap-5-bis-text-carousel-subcontainer');
  carouselSubcontainer.classList.add('mr-4');
  if (carouselContentObjects.indexOf(object) === carouselContentObjects.length - 1) {
    carouselSubcontainer.id = `last-container`;
  }
  carousel5BisContainer.appendChild(carouselSubcontainer);

  const carouselDisplayNumber = document.createElement('p');
  carouselDisplayNumber.classList.add('title')
  carouselDisplayNumber.innerHTML = object.name;
  carouselSubcontainer.appendChild(carouselDisplayNumber);

  const carouselDisplayText = document.createElement('p');
  carouselDisplayText.classList.add('chap-text-carousel-text-text');
  carouselDisplayText.innerHTML = object.text;
  carouselSubcontainer.appendChild(carouselDisplayText);


});

buttonsToClick[0].classList.add('active')

// function initCarousel (index) {
//   currentDisplayedIndex = index;
//   carouselDisplayNumber.textContent = carouselContentObjects[currentDisplayedIndex].number;
//   carouselDisplayText.textContent = carouselContentObjects[currentDisplayedIndex].text;
// }
// initCarousel(0);
// /*---------- IF CLICKED ON THE ARROWS ---------------*/

function clickingSomewhere (e) {
  window.cancelAnimationFrame(carouselMoving);
  //Variables spécifiques
  const arrowClicked = e.target;
  const currentScrolled = carousel5BisContainer.scrollLeft;
  const widthOfSubcontainer = parseFloat(window.getComputedStyle(carousel5BisContainer.firstElementChild).getPropertyValue('width').replace('px', '')) + parseFloat(window.getComputedStyle(carousel5BisContainer.firstElementChild).getPropertyValue('margin-right').replace('px', ''));
  const carouselContainerMaxScroll  = Math.floor(widthOfSubcontainer * (carouselContentObjects.length - 2));
  const previousIndex = Math.floor(currentScrolled / widthOfSubcontainer);
  const currentDisplayedIndex = Math.floor(currentScrolled / Math.floor(widthOfSubcontainer));

  //Variables scrolling animation
  const timeScale = 50;
  let scrollIsUpToDate = false;
  let counterScroll = 0;
  const transitionDuration = 500;
  let scrolled;
  let toScroll;
  let newScrollPosition;

  //Define if need to scroll and to where need to scroll
  //Define newScrollPosition and toScroll
  if ((arrowClicked === arrowRightChap5Bis && currentScrolled === carouselContainerMaxScroll) || (arrowClicked === arrowLeftChap5Bis && currentScrolled === 0)) {
    return;
  } else if (arrowClicked.dataset.button > 0) {
    const clickedIndex = arrowClicked.dataset.button - 1;
    const previousScroll = Math.floor(clickedIndex * widthOfSubcontainer);
    const remainingScroll = previousScroll - carousel5BisContainer.scrollLeft;
    buttonsToClick.forEach(button => {
      (button.dataset.button === arrowClicked.dataset.button) ? button.classList.add('active') : (button.classList.contains('active') ? button.classList.remove('active') : '');
    })
    newScrollPosition = previousScroll;
    toScroll = remainingScroll;
    animateScrolling ();
  } else if (arrowClicked === arrowRightChap5Bis) {
    const nextIndex = currentDisplayedIndex + 1;
    const nextScroll = (currentScrolled === Math.floor(nextIndex * widthOfSubcontainer) ? Math.floor((nextIndex + 1) * widthOfSubcontainer) : Math.floor(nextIndex * widthOfSubcontainer));
    const remainingScroll = nextScroll - carousel5BisContainer.scrollLeft;
    buttonsToClick.forEach(button => {
      (parseInt(button.dataset.button) - 1 === nextIndex) ? button.classList.add('active') : (button.classList.contains('active') ? button.classList.remove('active') : '');
    })
    newScrollPosition = nextScroll;
    toScroll = remainingScroll;
    animateScrolling ();
  } else if (arrowClicked === arrowLeftChap5Bis) {
    const previousScroll = Math.floor(previousIndex * widthOfSubcontainer);
    const remainingScroll = previousScroll - carousel5BisContainer.scrollLeft;
    console.log(`previousIndex: ${previousIndex}`);
    buttonsToClick.forEach(button => {
      console.log(`previousIndex: ${previousIndex}`);
      console.log(`parseInt(button.dataset.button): ${parseInt(button.dataset.button)}`);
      (parseInt(button.dataset.button) - 1 === previousIndex) ? button.classList.add('active') : (button.classList.contains('active') ? button.classList.remove('active') : '');
    })
    newScrollPosition = previousScroll;
    toScroll = remainingScroll;
    animateScrolling ();
  }

  //Functions animation
  function scrollSpeed (alreadyScrolled) {
    //Equation du second degré : on veut une fonction en -x2 pour laquelle f(0) = 0, f(toScroll) = 0, f(toScroll/2) = maxSpeed
    return 3 * alreadyScrolled / transitionDuration * (1 - alreadyScrolled / toScroll);
  }

  function calculateScrollingToDo () {
    scrollIsUpToDate = (carousel5BisContainer.scrollLeft == newScrollPosition);
    animateScrolling();
  }

  function animateScrolling () {
    counterScroll++;
    if (scrollIsUpToDate) {
      return;
    }
    counterScroll === 1 ? scrolled = 1 : scrolled = (toScroll - (newScrollPosition - carousel5BisContainer.scrollLeft));
    Math.abs(scrollSpeed(scrolled) * timeScale) < 1 ? carousel5BisContainer.scrollLeft += (Math.abs(toScroll) / toScroll) : carousel5BisContainer.scrollLeft += scrollSpeed(scrolled) * timeScale;
    carouselMoving = window.requestAnimationFrame(calculateScrollingToDo);
  }

}

arrowRightChap5Bis.addEventListener('click', clickingSomewhere)
arrowLeftChap5Bis.addEventListener('click', clickingSomewhere)
buttons.addEventListener('click', clickingSomewhere)







