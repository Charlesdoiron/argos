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
module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DOMStyling__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Chap1Carousel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Chap5Carousel__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__robot__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__robot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__robot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__imgAnimation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__imgAnimation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__imgAnimation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__navbar__);
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


/*------------------------------------*\
    CHAPTER 1
    \*------------------------------------*/



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

    function chap1Clearfix (){
      const carouselPicDisplay = document.querySelector('.chap-1-carousel-pic-display');
      const carouselDisplayDesc = document.querySelector('.chap-1-carousel-desc-display');

      const displayDescTop = carouselDisplayDesc.getBoundingClientRect().top - carouselPicDisplay.getBoundingClientRect().top;
      const displayDescHeight =  carouselDisplayDesc.getBoundingClientRect().height;
      const displayHeight = carouselPicDisplay.getBoundingClientRect().height;

      const carouselDisplayDescOverflow = displayDescTop + displayDescHeight - displayHeight;
      const carouselDescDisplay = document.querySelector('.chap-1-carousel-desc-display').firstElementChild;

      carouselPicDisplay.parentElement.style.marginBottom = `${carouselDisplayDescOverflow * 2}px`;
    }
    chap1Clearfix()

    /*----------------- chapter1 link-line position -----------------*/

    function repositionLink () {
      const carouselFisrtThumbnail = document.querySelector("[data-thumbnail='1']");
      const carouselThumbnailPadding = document.querySelector('.carousel-padding');
      const linkLineThickness = 1;
      const linkLineTopPosition = (carouselFisrtThumbnail.getBoundingClientRect().height + linkLineThickness) / 2;

      carouselThumbnailPadding.style.height = `${linkLineTopPosition}px`
      carouselThumbnailPadding.style.borderTopWidth = `${linkLineThickness}px`
    }

    repositionLink ();
    

    /*----------------- chapter1 padding left and right -----------------*/

    function recalculatePaddingCarousel () {
      const carouselFirstThumbnail = document.querySelector('#first-thumbnail');
      const carouselLastThumbnail = document.querySelector('#last-thumbnail');
      const thumbnailWidth = Math.round(parseFloat(window.getComputedStyle(carouselFirstThumbnail).getPropertyValue('width').replace('px', '')) * 100 / window.innerWidth);
      const carouselMargin = (100 - thumbnailWidth) / 2;
      carouselFirstThumbnail.style.marginLeft = `${carouselMargin}vw`;
      carouselLastThumbnail.style.marginRight = `${carouselMargin}vw`;
    }

    recalculatePaddingCarousel ();


    window.addEventListener('resize', recalculatePaddingCarousel);
    window.addEventListener('resize', repositionLink);
    window.addEventListener('resize', chap1Clearfix);


/*------------------------------------*\
    CHAPTER 3
    \*------------------------------------*/

    const sliderImages = [...document.querySelectorAll('.chap-classic-pic')];
    const sliderTexts = [...document.querySelectorAll('.chap-classic-desc')];

    const imagesToSlide = [
    {
      backgroundImage: `url('./src/img/chap-3-robot-1.png')`
    },
    {
      backgroundImage: `url('./src/img/chap-3-robot-2.png')`
    },
    {
      backgroundImage: `url('./src/img/chap-3-robot-3.png')`
    }
    ]

    sliderImages.forEach(sliderImage => {
      sliderImage.style.backgroundImage = imagesToSlide[sliderImages.indexOf(sliderImage)].backgroundImage;
      if ((sliderImages.indexOf(sliderImage)+1) % 2 === 1) {
        sliderImage.classList.add('slider-right')
      } else {
        sliderImage.classList.add('slider-left')
      }
    });

    sliderTexts.forEach(sliderText => {
      if ((sliderTexts.indexOf(sliderText)+1) % 2 === 1) {
        sliderText.classList.add('slider-left')
      } else {
        sliderText.classList.add('slider-right')
      }
    });


    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    function checkSlide() {


      sliderImages.forEach(sliderImage => {
        sliderTexts.forEach(sliderText => {
          if (sliderImages.indexOf(sliderImage) === sliderTexts.indexOf(sliderText)) {
          // half way through the image
          const slideInAt = (window.pageYOffset + window.innerHeight) - sliderImage.offsetHeight / 2;
          // bottom of the image
          const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
          const isHalfShown = slideInAt > sliderImage.offsetTop;
          const isNotScrolledPast = window.pageYOffset < imageBottom;
          if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
            sliderText.classList.add('active');
          } else {
            sliderImage.classList.remove('active');
            sliderText.classList.remove('active');
          }

        }
      });
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));



/*------------------------------------*\
    CHAPTER 6
    \*------------------------------------*/

    const challengerPics = [...document.querySelectorAll('.challenger-pic')]

    const challengerPictures = [
    {
      backgroundPicture:  `url('./src/img/chap-6-team-1.jpg')`
    },
    {
      backgroundPicture:  `url('./src/img/chap-6-team-2.jpg')`
    },
    {
      backgroundPicture:  `url('./src/img/chap-6-team-3.jpg')`
    },
    {
      backgroundPicture:  `url('./src/img/chap-6-team-4.jpg')`
    }
    ]

    challengerPics.forEach(challengerPic => {
      challengerPic.style.backgroundImage = challengerPictures[challengerPics.indexOf(challengerPic)].backgroundPicture;
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
let thumbnailWidth;
let dotlinkWidth;

const arrowRightChap1 = document.querySelector('#chap-1-arrow-right');
const arrowLeftChap1 = document.querySelector('#chap-1-arrow-left');
let carouselMoving;
let clickedIndex = 0;
let counterScroll;

let carouselContentObjects = [
{
  date: `Décembre 2013`,
  pictureUrl: `../src/img/chap-1-carouselpic-1.jpg`,
  description: `Lancement de l’appel à projet international`
},
{
  date: `Juin 2014`,
  pictureUrl: `../src/img/chap-1-carouselpic-2.jpg`,
  description: `Sélection des cinq équipes parmi 31 dossiers de candidature`
},
{
  date: `Septembre 2014`,
  pictureUrl: `../src/img/chap-1-carouselpic-3.jpg`,
  description: `Lancement officiel du Challenge ARGOS`
},
{
  date: `Septembre 2014`,
  pictureUrl: `../src/img/chap-1-carouselpic-4.jpg`,
  description: `Réunions techniques et visite du site de compétition avec les équipes sélectionnées`
},
{
  date: `Avril 2015`,
  pictureUrl: `../src/img/chap-1-carouselpic-5.jpg`,
  description: `Semaine d’entraînement sur le site de compétition à Lacq (Sud Ouest de la France)`
},
{
  date: `Juin 2015`,
  pictureUrl: `../src/img/chap-1-carouselpic-6.jpg`,
  description: `1ère compétition : des résultats prometteurs en navigation autonome`
},
{
  date: `Avril 2016`,
  pictureUrl: `../src/img/chap-1-carouselpic-7.jpg`,
  description: `2ème compétition : confronter les robots à la réalité du terrain`
},
{
  date: `Mars 2017`,
  pictureUrl: `../src/img/chap-1-carouselpic-8.jpg`,
  description: `3ème compétition : opérer en toute sécurité sur un site industriel`
},
{
  date: `Mai 2017`,
  pictureUrl: `../src/img/chap-1-carouselpic-9.jpg`,
  description: `Cérémonie de remise des trophées. ARGONAUTS (Autriche/Allemagne) remporte le Challenge ARGOS`
},

];


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

for (var i = 0; i < carouselThumbnails.length; i++) {
  carouselThumbnails[i].style.backgroundImage = `url(${carouselContentObjects[i].pictureUrl})`;
  carouselThumbnails[i].firstElementChild.firstElementChild.textContent = carouselContentObjects[i].date;
}

let currentDisplayedIndex;

function initCarousel (index) {
  carouselPicDisplay.style.backgroundImage = `url(${carouselContentObjects[index].pictureUrl})`;
  carouselDescDisplay.textContent = `${carouselContentObjects[index].description}`;
  currentDisplayedIndex = index + 1;
  document.querySelector(`[data-thumbnail='${currentDisplayedIndex}']`).firstElementChild.classList.add('active');
}
initCarousel(0);

function adaptCarouselToWindowSize() {
  thumbnailWidth = Math.round(parseFloat(window.getComputedStyle(carouselFirstThumbnail).getPropertyValue('width').replace('px', '')) * 100 / window.innerWidth);
  dotlinkWidth = Math.round(parseFloat(window.getComputedStyle(document.querySelector('#first-link')).getPropertyValue('width').replace('px', '')) * 100 / window.innerWidth);
  const vwToPx = window.innerWidth / 100;
  const newScrollPosition = Math.round(((currentDisplayedIndex - 1) * (thumbnailWidth + dotlinkWidth)) * vwToPx);
  carouselContainer.scrollLeft = newScrollPosition;
}
adaptCarouselToWindowSize();

//This variable to check wether the user clicked or dragged.
let carouselScrollLeft = carouselContainer.scrollLeft;
const transitionDuration = 500;


/*---------- IF CLICKED ON A THUMBNAIL ---------------*/
function clickingOnThumbnail (e) {
  const thumbnailClicked = e.target.parentElement;
  clickedIndex = thumbnailClicked.dataset.thumbnail;
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
  window.cancelAnimationFrame(carouselMoving);
  console.log(`clickedIndex-beforeClickArrow: ${clickedIndex}`);
  console.log(`currentDisplayedIndex-beforeClickArrow: ${currentDisplayedIndex}`);
  if ((this === arrowRightChap1 && currentDisplayedIndex >= carouselThumbnails.length) || (this === arrowLeftChap1 && currentDisplayedIndex <= 1)) {
    return;
  } else if (this === arrowRightChap1) {
console.log('flèche droite')
    const thumbnailClicked = carouselThumbnails[((clickedIndex === 0 ? currentDisplayedIndex - 1 : clickedIndex - 1)) + 1];
    console.log(`thumbnailClicked.dataset.thumbnail: ${thumbnailClicked.dataset.thumbnail}`);
    loadCarousel(thumbnailClicked, thumbnailClicked.dataset.thumbnail);
  } else if (this === arrowLeftChap1) {
console.log('flèche gauche')
    const thumbnailClicked = carouselThumbnails[((clickedIndex === 0 ? currentDisplayedIndex - 1 : clickedIndex - 1)) - 1];
    console.log(`thumbnailClicked.dataset.thumbnail: ${thumbnailClicked.dataset.thumbnail}`);
    loadCarousel(thumbnailClicked, thumbnailClicked.dataset.thumbnail);
  }
}


/*---------- LOAD CAROUSEL ---------------*/
function loadCarousel (thumbnailClicked, parameterClickedIndex) {
  counterScroll = 0;

  clickedIndex = parameterClickedIndex;
  const startingDate = Date.now();

  window.cancelAnimationFrame(carouselMoving);
  //Picture first
  carouselPicDisplay.style.backgroundImage = window.getComputedStyle(thumbnailClicked).getPropertyValue('background-image');
  carouselPicDisplay.style.transition = `background-image ${transitionDuration}ms`;
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
    carouselDescDisplay.textContent = `${carouselContentObjects[clickedIndex - 1].description}`;
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
  // console.log(`toScroll: ${toScroll}`);
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
    counterScroll++;
    // 2 - If the carousel is all scrolled, nothing to do anymore
    if (scrollIsUpToDate) {
      //Rest clickedIndex to allow scrolling
      clickedIndex = 0;
      return;
    }
    //3 - Set or update the scrolled value
    counterScroll === 1 ? scrolled = 1 : scrolled = (toScroll - (newScrollPosition - carouselScrollLeft));
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

window.addEventListener('resize', adaptCarouselToWindowSize)







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

// RECAP CARDS ANIMATION


window.addEventListener('scroll', () => {
const recapPictures = document.querySelectorAll('.recap-card');
  recapPictures.forEach((picture) => {
    if ((window.innerWidth > 1100) && (window.scrollY <= 500)) {
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
  const recapPictures = document.querySelectorAll('.recap-card');
  setInterval(function(){
   volet.classList.add('voletAnim1');
 }, 100);
  setInterval(function(){
   volet.classList.add('voletAnim2');
 }, 1000);
  setInterval(function(){
   logo.classList.add('appear');
   slogan.classList.add('toOrigin');
   if (window.innerWidth < 1100) {
    recapPictures.forEach((picture) => {
      picture.classList.add('changeHeight');
    })
  }
}, 1600);
  })

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragscroll__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dragscroll__);




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










/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map