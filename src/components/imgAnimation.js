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


// OPEN ANIMATION



window.addEventListener('load', () => {

  const logo = document.querySelector('.logo')
  const slogan = document.querySelector('.slogan')
  const volet = document.querySelector('.volet')
  const logoBlack = document.querySelector('.logo-black')
  const recapPictures = document.querySelectorAll('.recap-card');
  const navbar = document.querySelector('.navbar');
  setInterval(function(){
   volet.classList.add('voletAnim1');
 }, 100);
  setInterval(function(){
   volet.classList.add('voletAnim2');
 }, 1000);
    setInterval(function(){
   navbar.classList.add('appearNav');
 }, 1800);
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