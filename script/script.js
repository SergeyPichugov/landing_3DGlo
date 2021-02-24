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
		const menu = document.querySelector('menu'),
				menuItems = menu.querySelectorAll('ul > li > a');
		
		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		document.addEventListener('click', (event) => {
			let target = event.target;

			if (target.closest('.menu') || target.closest('.close-btn')) {
				handlerMenu();
			}

			menuItems.forEach((elem, i) => {
				if (menuItems[i] === target) {
					handlerMenu();

					event.preventDefault();
					let menuId = elem.getAttribute('href').substring(1);

					document.getElementById(menuId).scrollIntoView({
						block: 'start',
						behavior: 'smooth'
					});

				}
			});

		});

	};

	toogleMenu();

	//popup
	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popupContent = document.querySelector('.popup-content'),
			widthWin = document.documentElement.clientWidth,
			scrollBtn = document.querySelector('a'),
			menuItems = document.querySelectorAll('menu > ul > li > a');

		let count = 0;
		let moveModal;

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

		popupBtn.forEach((elem) => {
			elem.addEventListener('click', () => {
				popup.style.display = 'block';
				popupContent.style.transform = `translateY(-100%)`;
				moveModal = requestAnimationFrame(animationModal);
			});
		});


		scrollBtn.addEventListener('click', () => {
			event.preventDefault();
			document.getElementById('service-block').scrollIntoView({block: 'start', behavior: 'smooth'});
		});
		

		popup.addEventListener('click', (event) => {
			let target = event.target;
			if (target.classList.contains('popup-close')){
				popup.style.display = 'none';
			} else {
				target = target.closest('.popup-content');
				if (!target){
					popup.style.display = 'none';
				}
			}
		});

	};

	togglePopUp();

	//табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
				tab = document.querySelectorAll('.service-header-tab'),
				tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = (index) => {
			for(let i = 0; i < tabContent.length; i++){
				if(index === i){
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', (event) => {
			let target = event.target;
			target = target.closest('.service-header-tab');

			if (target){
					tab.forEach((item, i) => {
						if (item === target){
							toggleTabContent(i);
						}
					});
				}
		});
	};

	tabs();




});
