
import './index.html';
import './index.scss';
/** slider Swiper */
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


const swiper = new Swiper('.slider', {
  // ! Optional parameters
  direction: 'horizontal',
  loop: true,

  // ! Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});