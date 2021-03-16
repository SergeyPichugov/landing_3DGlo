'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import blockForm from './modules/blockForm';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/SliderCarousel';


//Timer
countTimer('19 Mar 2021 7:00:00');
// меню
toggleMenu();
//popup
togglePopUp();
//табы
tabs();
//слайдел
slider();
//изменение фото
changePhoto();
// форма осталиь вопросы
blockForm();
//калькулятор 
calc(100);
//send-ajax-form
sendForm();
//слайдер 'Нам доверяют'
const carousel = new SliderCarousel({
   main: '.companies-wrapper',
   wrap: '.companies-hor',
   slidesToShow: 5,
   infinity: true,

   responsive: [{
         breakpoint: 1024,
         slidesToShow: 4
      },
      {
         breakpoint: 768,
         slidesToShow: 3
      },
      {
         breakpoint: 576,
         slidesToShow: 2
      },
   ]
});

carousel.init();
