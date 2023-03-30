
import './index.html';
import './index.scss';
/** slider Swiper */
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


const swiper = new Swiper('.hero__slider', {
  // ! Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,

  // ! Distance between slides
  spaceBetween: 10, 

  // ! Navigation arrows
  navigation: {
    nextEl: '.button__slider-next',
    prevEl: '.button__slider-prev',
  },
});