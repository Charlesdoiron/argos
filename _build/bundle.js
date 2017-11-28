/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
<<<<<<< HEAD
module.exports = __webpack_require__(6);
=======
module.exports = __webpack_require__(5);
>>>>>>> 49a3a09a7ce4e8d76f6629d87897b61c502112e3


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DOMStyling__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Chap1Carousel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robot__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__robot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__robot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imgAnimation__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imgAnimation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__imgAnimation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__navbar__);
// import { uniq } from 'lodash';
// import jsonp from 'jsonp';
// import insane from 'insane';
// import 'bootstrap';








/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export chapterTitles */
/* unused harmony export chap6DivOverflowed */
/* unused harmony export carouselThumbnailsWidth */
/*----------- chapters left-right arranging ----------*/
const chapterTitles = [...document.querySelectorAll('.chap-title')];

chapterTitles.forEach(chapterTitle => {
  if (chapterTitles.indexOf(chapterTitle) % 2 === 1) {
    chapterTitle.style.alignItems = 'flex-end';
    chapterTitle.style.textAlign = 'right';
  } else {
    chapterTitle.style.alignItems = 'flex-start';
  }

  if (chapterTitles.indexOf(chapterTitle) > 3) {
    chapterTitle.firstElementChild.style.color = 'rgba(228,44,47,1.00)';
  }
});


/*-------------------- chapter6 clearfix -------------*/

const chap6DivOverflowed = document.querySelector('#chap-6-overflowed');

function calculatechap6DivOverflowedMarginBottom () {
  const chap6Persons = document.querySelector('#chap-6-overflower');
  const chap6DivOverflowedHeight = parseFloat(window.getComputedStyle(chap6DivOverflowed).getPropertyValue('height').replace('px',''));
  const chap6PersonsHeight = parseFloat(window.getComputedStyle(chap6Persons).getPropertyValue('height').replace('px',''));
  const chap6PersonsTop = parseFloat(window.getComputedStyle(chap6Persons).getPropertyValue('top').replace('px',''));

  chap6DivOverflowed.style.marginBottom = `${chap6PersonsTop + chap6PersonsHeight - chap6DivOverflowedHeight + 50}px`;
};

calculatechap6DivOverflowedMarginBottom ();
window.addEventListener('resize', calculatechap6DivOverflowedMarginBottom);

/*----------------- chapter1 get carousel width -----------------*/
/*----------------- UPDATE : no need finally -----------------*/

const carouselThumbnailDiv = document.querySelector('.chap-1-carousel-thumbnails');
const carouselThumbnails = [...document.querySelectorAll('.carousel-thumbnail-pic')];
const carouselLinks = [...document.querySelectorAll('.carousel-thumbnail-link')];

let carouselThumbnailsWidth = 0;

carouselThumbnails.forEach(thumbnail => {
  const thumbnailWidth = parseFloat(window.getComputedStyle(thumbnail).getPropertyValue('width').replace('px',''));
  carouselThumbnailsWidth += thumbnailWidth;
})

carouselLinks.forEach(link => {
  const linkWidth = parseFloat(window.getComputedStyle(link).getPropertyValue('width').replace('px',''));
  carouselThumbnailsWidth += linkWidth;
})

carouselThumbnailsWidth += parseFloat(window.getComputedStyle(carouselThumbnailDiv).getPropertyValue('padding-right').replace('px',''));
carouselThumbnailsWidth += parseFloat(window.getComputedStyle(carouselThumbnailDiv).getPropertyValue('padding-left').replace('px',''));

// carouselThumbnailDiv.style.width = `${carouselThumbnailsWidth}px`

/*----------------- chapter1 clearfix -----------------*/

const carouselPicDisplay = document.querySelector('.chap-1-carousel-pic-display');
const carouselDisplayDesc = document.querySelector('.chap-1-carousel-desc-display');

const displayDescTop = carouselDisplayDesc.getBoundingClientRect().top - carouselPicDisplay.getBoundingClientRect().top;
const displayDescHeight =  carouselDisplayDesc.getBoundingClientRect().height;
const displayHeight = carouselPicDisplay.getBoundingClientRect().height;

const carouselDisplayDescOverflow = displayDescTop + displayDescHeight - displayHeight;
const carouselDescDisplay = document.querySelector('.chap-1-carousel-desc-display').firstElementChild;

carouselPicDisplay.parentElement.style.marginBottom = `${carouselDisplayDescOverflow * 1.3}px`;

/*----------------- chapter1 link-line position -----------------*/

const carouselFisrtThumbnail = document.querySelector("[data-thumbnail='1']");
const carouselThumbnailPadding = document.querySelector('.carousel-padding');

const linkLineThickness = 1;
const linkLineTopPosition = (carouselFisrtThumbnail.getBoundingClientRect().height + linkLineThickness) / 2;


carouselThumbnailPadding.style.height = `${linkLineTopPosition}px`
carouselThumbnailPadding.style.borderTopWidth = `${linkLineThickness}px`





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragscroll__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dragscroll__);



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





<<<<<<< HEAD
/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):n("undefined"!=typeof exports?exports:e.dragscroll={})}(this,function(e){var n,t,o=window,l=document,c="mousemove",r="mouseup",i="mousedown",m="EventListener",d="add"+m,s="remove"+m,f=[],u=function(e,m){for(e=0;e<f.length;)m=f[e++],m=m.container||m,m[s](i,m.md,0),o[s](r,m.mu,0),o[s](c,m.mm,0);for(f=[].slice.call(l.getElementsByClassName("dragscroll")),e=0;e<f.length;)!function(e,m,s,f,u,a){(a=e.container||e)[d](i,a.md=function(n){e.hasAttribute("nochilddrag")&&l.elementFromPoint(n.pageX,n.pageY)!=a||(f=1,m=n.clientX,s=n.clientY,n.preventDefault())},0),o[d](r,a.mu=function(){f=0},0),o[d](c,a.mm=function(o){f&&((u=e.scroller||e).scrollLeft-=n=-m+(m=o.clientX),u.scrollTop-=t=-s+(s=o.clientY),e==l.body&&((u=l.documentElement).scrollLeft-=n,u.scrollTop-=t))},0)}(f[e++])};"complete"==l.readyState?u():o[d]("load",u,0),e.reset=u});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// POSITION ROBOT

	const circle = document.querySelector('.robot-circle');
    const width = parseFloat(window.getComputedStyle(circle).getPropertyValue('width').replace('px', ''));
    const height = parseFloat(window.getComputedStyle(circle).getPropertyValue('height').replace('px', ''));
    const robotImg = document.querySelector('.robot-img');
    const top = parseFloat(window.getComputedStyle(circle).getPropertyValue('top').replace('px', ''));
    circle.style.height = `${width}px`;

window.addEventListener('resize', () => {
    const circle = document.querySelector('.robot-circle');
    const width = parseFloat(window.getComputedStyle(circle).getPropertyValue('width').replace('px', ''));
    const height = parseFloat(window.getComputedStyle(circle).getPropertyValue('height').replace('px', ''));
    const robotImg = document.querySelector('.robot-img');
    const top = parseFloat(window.getComputedStyle(circle).getPropertyValue('top').replace('px', ''));
    circle.style.height = `${width}px`;
});



/***/ }),
/* 6 */
/***/ (function(module, exports) {
=======
>>>>>>> 49a3a09a7ce4e8d76f6629d87897b61c502112e3


/***/ }),
<<<<<<< HEAD
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {
=======
/* 4 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> 49a3a09a7ce4e8d76f6629d87897b61c502112e3

// RECAP CARDS ANIMATION


window.addEventListener('scroll', () => {
    const recapPictures = document.querySelectorAll('.recap-card');
    recapPictures.forEach((picture) => {
        if (window.scrollY <= 500) {
            console.log('good');
            picture.classList.remove('changeHeight')
        } else {
            picture.classList.add('changeHeight')
        }
    })
});


// function debounce (func, wait = 20, immediate = true){
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function(){
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if(callNow) func.apply(context; args);
// 	};
// };


// OPEN ANIMATION



window.addEventListener('load', () => {
    const logo = document.querySelector('.logo')
    const slogan = document.querySelector('.slogan')
    const volet = document.querySelector('.volet')
    const logoBlack = document.querySelector('.logo-black')
    setInterval(function(){ 
     volet.classList.add('voletAnim1')
	}, 100);
	   setInterval(function(){ 
     volet.classList.add('voletAnim2')
	}, 1000);
    setInterval(function(){ 
    	logo.classList.add('appear')
    	slogan.classList.add('toOrigin')
	}, 1600);
})



/***/ }),
/* 11 */
/***/ (function(module, exports) {

// BURGER

	const burger = document.querySelector('.burger')
	burger.addEventListener('click', () => {
		if(burger.classList.contains('burger')){
			burger.classList.remove('burger')
			burger.classList.add('burger-is-open')
		}else{
			burger.classList.remove('burger-is-open')
			burger.classList.add('burger')
		}
	})

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map