const slides = document.querySelectorAll('.matcap__container');
const length = slides.length;

const prev = document.querySelector('.matcap__slider-control_type_prev');
const next = document.querySelector('.matcap__slider-control_type_next');

var index = 0;
//console.log(slides[1]);

// Previous
prev.addEventListener( 'click', () => {
  slides.forEach( (slide) => {
    slide.classList.remove('matcap__container_current');
  } );
  index--;
  if ( index < 0 ) { index = length - 1; }
  slides[index].classList.add('matcap__container_current');
} );

// Next
next.addEventListener( 'click', () => {
  slides.forEach( (slide) => {
    slide.classList.remove('matcap__container_current');
  } );
  index++;
  if ( index > ( length - 1 ) ) { index = 0; }
  slides[index].classList.add('matcap__container_current');
} );