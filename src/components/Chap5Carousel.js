'use strict';
import 'dragscroll';


/*---------------- Variables ---------------------*/
const carouselContainer = document.querySelector('.chap-text-carousel-container');

const arrowRightChap5 = document.querySelector('#chap-5-arrow-right');
const arrowLeftChap5 = document.querySelector('#chap-5-arrow-left');

let clickedIndex = 0;
let counterScroll;


let carouselContentObjects = [
{
  number: `1`,
  text: `Naviguer et effectuer des rondes d’inspection de manière autonome en toute sécurité et livrer des informations et analyses fiables.`
},
{
  number: `2`,
  text: `Faire face aux événements internes et externes en adoptant le bon comportement : anomalies au point de contrôle, dysfonctionnements internes, arrêts d’urgence, batterie faible, alarmes, obstacles fixes ou mobiles tels que détecter la présence de l’opérateur...`
},
{
  number: `3`,
  text: `Opérer en situation dégradée (perte de la connexion wifi, obstacles inconnus).`
},
{
  number: `4`,
  text: `Surveiller l’environnement par l’analyse du bruit de fonctionnement des pompes.`
},
{
  number: `5`,
  text: `Démontrer la réactivité du robot : vitesse de programmation, alternance rapide entre le mode autonome et télé-opéré.`
},
{
  number: `6`,
  text: `Développer une interface homme/machine simple d’utilisation et intuitive.`
}
];


/*-------------- Load Carousel --------------*/


let currentDisplayedIndex;


carouselContentObjects.forEach(object => {

  const carouselSubcontainer = document.createElement('div');
  carouselSubcontainer.classList.add('chap-5-text-carousel-subcontainer');
  carouselContainer.appendChild(carouselSubcontainer);

  const carouselDisplayNumber = document.createElement('span');
  carouselDisplayNumber.classList.add('chap-text-carousel-text-number');
  carouselDisplayNumber.textContent = object.number;
  carouselSubcontainer.appendChild(carouselDisplayNumber);

  const carouselDisplayText = document.createElement('p');
  carouselDisplayText.classList.add('chap-text-carousel-text-text');
  carouselDisplayText.textContent = object.text;
  carouselSubcontainer.appendChild(carouselDisplayText);


})

// function initCarousel (index) {
//   currentDisplayedIndex = index;
//   carouselDisplayNumber.textContent = carouselContentObjects[currentDisplayedIndex].number;
//   carouselDisplayText.textContent = carouselContentObjects[currentDisplayedIndex].text;
// }
// initCarousel(0);
// /*---------- IF CLICKED ON THE ARROWS ---------------*/

function clickingOnArrow () {

  //Variables spécifiques
  const arrowClicked = this;
  const currentScrolled = carouselContainer.scrollLeft;
  const widthOfSubcontainer = window.getComputedStyle(carouselContainer).getPropertyValue('width').replace('px', '');
  const carouselContainerMaxScroll  = Math.floor(widthOfSubcontainer * (carouselContentObjects.length - 1));
  const previousIndex = Math.floor(currentScrolled / widthOfSubcontainer);

  //Variables scrolling animation
  const timeScale = 50;
  let scrollIsUpToDate = false;
  let counterScroll = 0;
  const transitionDuration = 500;
  let scrolled;
  let toScroll;
  let newScrollPosition;
  let carouselMoving;

  //Define if need to scroll and to where need to scroll
  //Define newScrollPosition and toScroll
  if ((arrowClicked === arrowRightChap5 && currentScrolled === carouselContainerMaxScroll) || (arrowClicked === arrowLeftChap5 && currentScrolled === 0)) {
    return;
  } else if (arrowClicked === arrowRightChap5) {
    const nextIndex = (previousIndex === 0 ? 1 : Math.ceil(currentScrolled / widthOfSubcontainer));
    const nextScroll = (currentScrolled === Math.floor(nextIndex * widthOfSubcontainer) ? Math.floor((nextIndex + 1) * widthOfSubcontainer) : Math.floor(nextIndex * widthOfSubcontainer));
    const remainingScroll = nextScroll - carouselContainer.scrollLeft;
    newScrollPosition = nextScroll;
    toScroll = remainingScroll;
    animateScrolling ();
  } else if (arrowClicked === arrowLeftChap5) {
    const previousScroll = Math.floor(previousIndex * widthOfSubcontainer);
    const remainingScroll = previousScroll - carouselContainer.scrollLeft;
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
    scrollIsUpToDate = (carouselContainer.scrollLeft == newScrollPosition);
    animateScrolling();
  }

  function animateScrolling () {
    counterScroll++;
    if (scrollIsUpToDate) {
      return;
    }
    counterScroll === 1 ? scrolled = 1 : scrolled = (toScroll - (newScrollPosition - carouselContainer.scrollLeft));
    Math.abs(scrollSpeed(scrolled) * timeScale) < 1 ? carouselContainer.scrollLeft += (Math.abs(toScroll) / toScroll) : carouselContainer.scrollLeft += scrollSpeed(scrolled) * timeScale;
    carouselMoving = window.requestAnimationFrame(calculateScrollingToDo);
  }

}

arrowRightChap5.addEventListener('click', clickingOnArrow)
arrowLeftChap5.addEventListener('click', clickingOnArrow)








