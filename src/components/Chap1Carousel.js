'use strict';
import 'dragscroll';

//If no-JS, keep scrollbar. If JS, remove scrollbar in CSS do this script.
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

/*---------------- Variables ---------------------*/
const carouselContainer = document.querySelector('.chap-1-carousel-thumbnails-container');
const carouselContent = document.querySelector('.chap-1-carousel-thumbnails');
const carouselDisplay = document.querySelector('.chap-1-carousel-display');
const carouselPicDisplay = document.querySelector('.chap-1-carousel-pic-display');
const carouselDescDisplay = document.querySelector('.chap-1-carousel-desc-display').firstElementChild;
const carouselThumbnails = [...document.querySelectorAll('.carousel-thumbnail-pic')];
const carouselFirstThumbnail = carouselThumbnails[0];
const carouselLastThumbnail = carouselThumbnails[carouselThumbnails.length - 1];
const thumbnailWidth = Math.round(parseFloat(window.getComputedStyle(carouselFirstThumbnail).getPropertyValue('width').replace('px', '')) * 100 / window.innerWidth);
const carouselMargin = (100 - thumbnailWidth) / 2;
const dotlinkWidth = Math.round(parseFloat(window.getComputedStyle(document.querySelector('#first-link')).getPropertyValue('width').replace('px', '')) * 100 / window.innerWidth);
const arrowRightChap1 = document.querySelector('#chap-1-arrow-right');
const arrowLeftChap1 = document.querySelector('#chap-1-arrow-left');
let carouselMoving;


carouselFirstThumbnail.style.marginLeft = `${carouselMargin}vw`;
carouselLastThumbnail.style.marginRight = `${carouselMargin}vw`;

let carouselContentObjects = [];


/*----------------- Scroll and drag and hide scrollbar of carousel ----------------*/
//We imported drascroll which makes almost all the business...


function determineOverflow(content, container) {
  const containerMetrics = container.getBoundingClientRect();
  const containerMetricsLeft = Math.floor(containerMetrics.left);
  const containerMetricsRight = Math.floor(containerMetrics.right);
  const contentMetrics = content.getBoundingClientRect();
  const contentMetricsRight = Math.floor(contentMetrics.right);
  const contentMetricsLeft = Math.floor(contentMetrics.left);
  if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
    return "both";
  } else if (contentMetricsLeft < containerMetricsLeft) {
    return "left";
  } else if (contentMetricsRight > containerMetricsRight) {
    return "right";
  } else {
    return "none";
  }
}

carouselContent.style.cssFloat = 'left';
carouselContainer.setAttribute("data-overflowing", determineOverflow(carouselContent, carouselContainer));


// Handle the scroll of the horizontal container
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  carouselContainer.setAttribute("data-overflowing", determineOverflow(carouselContent, carouselContainer));
}

carouselContainer.addEventListener("scroll", function() {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});


/*-------------- Load Carousel --------------*/

//Create carousel object content
for (let i = 0; i < carouselThumbnails.length; i++) {
  carouselContentObjects[i+1] = {
    name: `item-${i+1}`,
    pictureUrl: `https://picsum.photos/200/300?image=${i+1}`,
    description: `description ${i+1}`
  };
}

for (var i = 0; i < carouselThumbnails.length; i++) {
  carouselThumbnails[i].style.backgroundImage = `url(${carouselContentObjects[i+1].pictureUrl})`;
}

let currentDisplayedIndex;

function initCarousel (index) {
  carouselPicDisplay.style.backgroundImage = `url(${carouselContentObjects[index].pictureUrl})`;
  carouselDescDisplay.textContent = `${carouselContentObjects[index].description}`;
  currentDisplayedIndex = index;
  document.querySelector(`[data-thumbnail='${currentDisplayedIndex}']`).firstElementChild.classList.add('active');
}
initCarousel(1);

//This variable to check wether the user clicked or dragged.
let carouselScrollLeft = carouselContainer.scrollLeft;
const transitionDuration = 500;



/*---------- IF CLICKED ON A THUMBNAIL ---------------*/
function clickingOnThumbnail (e) {
  const thumbnailClicked = e.target.parentElement;
  const clickedIndex = thumbnailClicked.dataset.thumbnail;
  //If carouselContainer.scrollLeft > carouselScroll, the user dragged, didn't clicked.
  //User clicked if carouselScroll == carouselContainer.scrollLeft. Then we change the picture.
  const changeIndex = currentDisplayedIndex != clickedIndex;
  const noScroll = carouselScrollLeft == carouselContainer.scrollLeft;
  const noScrollAccident = (Math.abs(carouselScrollLeft - carouselContainer.scrollLeft) < 10);
  const clickedIsThumbnail = e.target.parentElement.classList.contains('carousel-thumbnail-pic');

  if (!(changeIndex && (noScroll || noScrollAccident) && clickedIsThumbnail)) {
    //If dragged and not clicked, update carouselScroll only
    carouselScrollLeft = carouselContainer.scrollLeft;
  } else {
    loadCarousel(thumbnailClicked, clickedIndex);
  }
}

/*---------- IF CLICKED ON THE ARROWS ---------------*/

function clickingOnArrow () {
  console.log(arrowLeftChap1);
  window.cancelAnimationFrame(carouselMoving);
  if ((this === arrowRightChap1 && currentDisplayedIndex >= carouselThumbnails.length) || (this === arrowLeftChap1 && currentDisplayedIndex <= 1)) {
    return;
  } else if (this === arrowRightChap1) {
    const thumbnailClicked = carouselThumbnails[(currentDisplayedIndex - 1) + 1];
    const clickedIndex = thumbnailClicked.dataset.thumbnail;
    loadCarousel(thumbnailClicked, clickedIndex);
  } else if (this === arrowLeftChap1) {
    const thumbnailClicked = carouselThumbnails[(currentDisplayedIndex - 1) - 1];
    const clickedIndex = thumbnailClicked.dataset.thumbnail;
    loadCarousel(thumbnailClicked, clickedIndex);
  }
}


/*---------- LOAD CAROUSEL ---------------*/
function loadCarousel (thumbnailClicked, clickedIndex) {

  //Picture first
  carouselPicDisplay.style.backgroundImage = window.getComputedStyle(thumbnailClicked).getPropertyValue('background-image');
  carouselPicDisplay.style.transition = `all ${transitionDuration}ms`;
  //Remove old description
  carouselDescDisplay.style.transition = `all ${transitionDuration / 2}ms`;
  carouselDescDisplay.style.opacity = 0;
  //Filters
  const filterPreviousThumbnail = document.querySelector(`[data-thumbnail='${currentDisplayedIndex}']`).firstElementChild;
  const filterNextThumbnail = document.querySelector(`[data-thumbnail='${clickedIndex}']`).firstElementChild;
  filterPreviousThumbnail.classList.toggle('active');
  filterPreviousThumbnail.style.transition = `all ${transitionDuration}ms`;
  filterNextThumbnail.classList.add('active');
  filterNextThumbnail.style.transition = `all ${transitionDuration}ms`;

  //Description treatment with timeout
  window.setTimeout(() => {
    // Show new description
    carouselDescDisplay.textContent = `${carouselContentObjects[clickedIndex].description}`;
    carouselDescDisplay.style.opacity = 1;
    //Update idnex of thumbnail shown
    currentDisplayedIndex = clickedIndex;
  }, transitionDuration / 2);

  /*------------ Scroll to the thumbnail -----------------*/
  //0-1 - Get the values from unit vw to px (javascript doesn't understand vw or vh)
  const vwToPx = window.innerWidth / 100;
  //0-2 - Get the future final position of the thumbnail scrolling
  const newScrollPosition = Math.round(((clickedIndex - 1) * (thumbnailWidth + dotlinkWidth)) * vwToPx)
  //0-3 - Get the total distance to scroll (negative or positive)
  const toScroll = newScrollPosition - carouselContainer.scrollLeft;
  //0-4 - This value is actually giving the transitionDuration its real duration. The value is based on the time intervals requestAnimationFrame is called.
  const timeScale = 50;
  //0-5 - Init variable to check if the scrolling is over or not
  let scrollIsUpToDate = false;
  //0-6 - Init variable to record how much has been scrolled yet
  let scrolled;

  //Speed calculation to have an ease-in and ease-out transition
  function scrollSpeed (alreadyScrolled) {
    //Equation du second degré : on veut une fonction en -x2 pour laquelle f(0) = 0, f(toScroll) = 0, f(toScroll/2) = maxSpeed
    const maxSpeed = toScroll / transitionDuration;
    return 3 * maxSpeed / toScroll * alreadyScrolled * (1 - alreadyScrolled / toScroll);
  }

  //Because RequestAnimationFrame works only if we 'do something' while we work
  function resetScrollUpadte () {
    //6 - Scrolling is over ?
    scrollIsUpToDate = (carouselContainer.scrollLeft == newScrollPosition);
    //7 - Updated the scroll position of the carousel
    carouselScrollLeft = carouselContainer.scrollLeft;
    //8 - Move the carousel again
    repositionCarousel();
  }

  //Function to rescroll the Carousel
  function repositionCarousel() {
    // 2 - If the carousel is all scrolled, nothing to do anymore
    if (scrollIsUpToDate) {
      return;
    }
    //3 - Set or update the scrolled value
    (toScroll - (newScrollPosition - carouselScrollLeft)) === 0 ? scrolled = 1 : scrolled = (toScroll - (newScrollPosition - carouselScrollLeft));
    //4 - Increment the scroll : 1 px. If less, we force the move.
    Math.abs(scrollSpeed(scrolled) * timeScale) < 1 ? carouselContainer.scrollLeft += (Math.abs(toScroll) / toScroll) : carouselContainer.scrollLeft += scrollSpeed(scrolled) * timeScale;
    //5 - We go to resetScrollUpdate and redo repositionCarousel over and over again and again
    carouselMoving = window.requestAnimationFrame(resetScrollUpadte);
  };
  //1 - We launch the reposition of the carousel
  repositionCarousel();
}



carouselContainer.addEventListener('click', clickingOnThumbnail)
arrowRightChap1.addEventListener('click', clickingOnArrow)
arrowLeftChap1.addEventListener('click', clickingOnArrow)





