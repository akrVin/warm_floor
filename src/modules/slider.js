/** slider Swiper */
// core version + navigation, pagination modules:
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],

  // ! Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  // ! Distance between slides
  spaceBetween: 10, 

  // ! Navigation arrows
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
  },
});