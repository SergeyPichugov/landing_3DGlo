 window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	//Timer
	function countTimer(deadline){
		let timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining(){
			let dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
			return {timeRemaining, hours, minutes, seconds};
		}

		const zerroAdd = x => ((x < 10) ? '0' + x : x);

		function updateClock(){
			let timer = getTimeRemaining();

			if (timer.seconds >= 0){
				timerHours.textContent = zerroAdd(timer.hours);
				timerMinutes.textContent = zerroAdd(timer.minutes);
				timerSeconds.textContent = zerroAdd(timer.seconds);
			} else {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
			}

			if (timer.timeRemaining < 1){
				clearInterval(timerId);
			}
		}
		

		let timerId = setInterval(updateClock, 1000);
	}

	countTimer('28 Feb 2021 7:00:31');


	//меню
	const toogleMenu = ()=>{
		const btnMenu =document.querySelector('.menu'),
				menu = document.querySelector('menu'),
				closeBtn = document.querySelector('.close-btn'),
				menuItems = menu.querySelectorAll('ul > li > a');
		
		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);
		menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
	};

	toogleMenu();

	//popup
	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popUpClose = document.querySelector('.popup-close'),
			popupContent = document.querySelector('.popup-content'),
			widthWin = document.documentElement.clientWidth,
			scrollBtn = document.querySelector('a');

		let count = 0;
		let moveModal;
		let moveScroll;

		const animationModal = () => {
			if (widthWin >= 768){
				moveModal = requestAnimationFrame(animationModal);
				count += 4;
				if (count < 104){
					popupContent.style.transform = `translateY(-${100 -count}%)`;
				} else {
					count = 0;
					cancelAnimationFrame(moveModal);
				}
			}
		};

		const scrollMove = () => {
			moveScroll = requestAnimationFrame(scrollMove);
			count += 15;
			if (count < 845) {
				document.documentElement.scrollTop = count;
			} else {
				count = 0;
				cancelAnimationFrame(moveScroll);
			}

		};
		
		popupBtn.forEach((elem) => {
			elem.addEventListener('click', () => {
				popup.style.display = 'block';
				popupContent.style.transform = `translateY(-100%)`;
				moveModal = requestAnimationFrame(animationModal);
			});
		});

		popUpClose.addEventListener('click', ()=> {
			popup.style.display = 'none';
		}); 

		scrollBtn.addEventListener('click', () => {
			event.preventDefault();
			count = document.documentElement.scrollTop;
			moveScroll = requestAnimationFrame(scrollMove);
		});



	};

	togglePopUp();






});
