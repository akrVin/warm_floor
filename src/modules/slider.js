/** slider Swiper */
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
  // ! Optional parameters
  direction: 'horizontal',
  loop: true,

  // ! Distance between slides
  spaceBetween: 10, 

  // ! Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});