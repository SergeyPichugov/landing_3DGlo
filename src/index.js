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