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
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DOMStyling__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Chap1Carousel__ = __webpack_require__(3);
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

const carouselDisplay = document.querySelector('.chap-1-carousel-display');
const carouselThumbnailsContainer = document.querySelector('.chap-1-carousel-thumbnails-container');
const carouselDisplayDesc = document.querySelector('.chap-1-carousel-desc-display');

const carouselDisplayDescOverflow =
  parseFloat(window.getComputedStyle(carouselDisplayDesc).getPropertyValue('top').replace('px','')) +
  parseFloat(window.getComputedStyle(carouselDisplayDesc).getPropertyValue('height').replace('px','')) -
  parseFloat(window.getComputedStyle(carouselDisplay).getPropertyValue('height').replace('px',''));

carouselDisplay.style.marginBottom = `${carouselDisplayDescOverflow * 1.2}px`





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragscroll__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dragscroll__);


//If no-JS, keep scrollbar. If JS, remove scrollbar in CSS do this script.
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

/*---------------- Variables ---------------------*/
const carouselContainer = document.querySelector('.chap-1-carousel-thumbnails-container');
const carouselContent = document.querySelector('.chap-1-carousel-thumbnails');
const carouselDisplay = document.querySelector('.chap-1-carousel-display');
const carouselPicDisplay = document.querySelector('.chap-1-carousel-pic-display');
const carouselDescDisplay = document.querySelector('.chap-1-carousel-desc-display');
const carouselThumbnails = [...document.querySelectorAll('.carousel-thumbnail-pic')];

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
  carouselDescDisplay.firstElementChild.innerHTML = `${carouselContentObjects[index].description}`;
  currentDisplayedIndex = index;
}
initCarousel(1);

//This variable to check wether the user clicked or dragged.
let carouselScrollY = carouselContainer.scrollLeft;
let carouselScrollX = carouselContainer.scrollRight;
  const transitionDuration = 300;

function loadCarousel (e) {
  //If carouselContainer.scrollLeft > carouselScroll, the user dragged, didn't clicked.
  //User clicked if carouselScroll == carouselContainer.scrollLeft. Then we change the picture.
  if (currentDisplayedIndex != e.target.dataset.thumbnail && carouselScroll == carouselContainer.scrollLeft && e.target.classList.contains('carousel-thumbnail-pic')) {
    //Picture first
    carouselPicDisplay.style.backgroundImage = window.getComputedStyle(e.target).getPropertyValue('background-image');
    carouselPicDisplay.style.transition = `all ${transitionDuration}ms`;
    //Description
    carouselDescDisplay.firstElementChild.style.transition = `all ${transitionDuration / 2}ms`;
    carouselDescDisplay.firstElementChild.style.opacity = 0;
    window.setTimeout(() => {
    carouselDescDisplay.firstElementChild.textContent = `${carouselContentObjects[e.target.dataset.thumbnail].description}`;
    carouselDescDisplay.firstElementChild.style.opacity = 1;
    }, transitionDuration / 2);
  }

  //We update carouselScroll
  carouselScrollY = carouselContainer.scrollLeft;
  carouselScrollX = carouselContainer.scrollRight;
  currentDisplayedIndex = e.target.dataset.thumbnail;
}

carouselContainer.addEventListener('mouseup', loadCarousel)








/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):n("undefined"!=typeof exports?exports:e.dragscroll={})}(this,function(e){var n,t,o=window,l=document,c="mousemove",r="mouseup",i="mousedown",m="EventListener",d="add"+m,s="remove"+m,f=[],u=function(e,m){for(e=0;e<f.length;)m=f[e++],m=m.container||m,m[s](i,m.md,0),o[s](r,m.mu,0),o[s](c,m.mm,0);for(f=[].slice.call(l.getElementsByClassName("dragscroll")),e=0;e<f.length;)!function(e,m,s,f,u,a){(a=e.container||e)[d](i,a.md=function(n){e.hasAttribute("nochilddrag")&&l.elementFromPoint(n.pageX,n.pageY)!=a||(f=1,m=n.clientX,s=n.clientY,n.preventDefault())},0),o[d](r,a.mu=function(){f=0},0),o[d](c,a.mm=function(o){f&&((u=e.scroller||e).scrollLeft-=n=-m+(m=o.clientX),u.scrollTop-=t=-s+(s=o.clientY),e==l.body&&((u=l.documentElement).scrollLeft-=n,u.scrollTop-=t))},0)}(f[e++])};"complete"==l.readyState?u():o[d]("load",u,0),e.reset=u});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map