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
  text: `Laurent Chiabotto is Head of the Methods Department at Total Exploration & Production in Pau. He is in charge of cross-functional subjects such as the Field Operations Management System, discipline data and solutions and operations for the future. He joined the Total group in 1994 and worked in different positions as an expatriate, in particular in Venezuela, Myanmar, Cameroon, Nigeria and recently in the United Arab Emirates as Field Operations Manager.
 "Since I work for the Field Operations department at Total, I consider myself as a potential future client. So I will be following the development of these robotic solutions very closely. The ARGOS robot must first and foremost ramp up safety for operators and boost our efficiency."  
`
},
{
  name: `Etienne Dombre`,
  text: `Etienne Dombre chaired the “Transferts LR” Manufacturing Scientific Committee from 2005 to 2014, a regional agency that promotes technology transfer. He is one of the two French delegates of the International Advanced Robotics program (IARP) whose objective is to encourage and support international cooperation in robotics. He is co-author of eight books and has published about a hundred scientific papers.
“Innovation and robustness should be the keywords that drive the development of the robots for the next competitions.”`
},
{
  name: `Philippe GIRARD `,
  text: `Philippe Girard is in charge of the "Prospective Labs" of the Total Group R&D department and as such, is interested in the development possibilities for robotics and complex autonomous systems, in coordination with the entities and with those in charge of developing command-control software. As a mechanics engineer, he brings his knowledge in energy management and automated mechanical systems to the ARGOS Challenge project.
"Robotics is an important factor in technological developments which should contribute to securing and automating our industrial platforms. In this sense, the E&P initiative helps clear the way for new areas of research and will help us progress to more accurately define our future applications."
`
},
{
  name: `Serge Macrez`,
  text: `Serge Macrez works in the Technology Division in Total’s Exploration & Production branch. He’s an expert in Instrumentation and Control Systems with over 40 years’ experience in the automation industry. He promotes the use of new or recent mobile and portable technologies and is involved in the implementation of the Integrated Operations concept and in various R&D projects.
“The results of the first competition revealed that the robots’ mobility and autonomy need to be improved. A key issue will be to demonstrate that the robot can move safely and avoid situations that are harmful to people.”`
},
{
  name: `Jean-Paul Monet`,
  text: `Lieutenant-colonel Jean-Paul Monet is a senior fire officer employed by the Bouches-du-Rhône fire department, France. Managing 13 stations, 1,000 firemen, and protecting a population of 250,000 inhabitants, this assistant chief officer is departmental and regional CBRNe (Chemical Biological Radioactive Nuclear and Explosives) advisor for French civil protection.
“I’m representing the public service users’ community. My fire department uses aerial imagery, two light UAVs and one UGV, I therefore consider robots as tactical tools, beyond their fashionable aspects.”`
},
{
  name: `Claudio Moriconi`,
  text: `Claudio Moriconi is the italian delegate of the International Advanced Robotics Program. Is the Director of the Robotics Laboratory of ENEA, recently rearranged with the name of IDRA (Distributed Intelligence and Autonomous Robots). He is the author of many international publications, co-author of two books, reviewer of the italian Ministry research projects, leaded more Antarctica Italian Robotics Project and project leader of tens of robotics projects.
"I expect that this Challenge initiative can address a new way to support the high tech industrial research in the robotics international competition arena."`
},
{
  name: `Geoff Pegman`,
  text: `Geoff Pegman is the Managing Director of R U Robots and is a Chartered Director with over 26 years’ experience of the advanced robotics industry. He is also the UK representative to, and Vice-President of, the International Advanced Robotics Programme, an intergovernmental organization with 15 member states.
“I am very interested in the user interfaces developed for each of these robots in terms of the clarity of the information that is presented to the operator and the ease with which the operator can command the robot.”
`
},
{
  name: `Pascal Pourcel`,
  text: `Pascal Pourcel is a member of the Major Risks division in the Total group HSE Division. He is a specialist in safety engineering and risk assessment, and provides technical expertise to project teams and the affiliates. He also contributes to drafting technical standards and to the development of in-house calculation tools, and gives training courses to different Group entities.
 "I would like the ARGOS Challenge to provide us with innovative, robust solutions to monitor our installations and to help us deal with crisis situations."
`
},
{
  name: `Pascal Pourcel`,
  text: `Pascal Pourcel is a member of the Major Risks division in the Total group HSE Division. He is a specialist in safety engineering and risk assessment, and provides technical expertise to project teams and the affiliates. He also contributes to drafting technical standards and to the development of in-house calculation tools, and gives training courses to different Group entities.
 "I would like the ARGOS Challenge to provide us with innovative, robust solutions to monitor our installations and to help us deal with crisis situations."

`
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







