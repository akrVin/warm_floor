/** slider Swiper */
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

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