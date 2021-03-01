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

	// проверка ссылок на якоря
	const scrollPage = (target) => {
		let menuId = target.getAttribute('href').substring(1);
		if (document.getElementById(menuId)){
			event.preventDefault();
			document.getElementById(menuId).scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		}
	};

	//меню
	const toogleMenu = ()=>{
		const menu = document.querySelector('menu');
		
		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		document.addEventListener('click', (event) => {
			let target = event.target;
			
			if (target.closest('.menu') || target.closest('.close-btn') || target.closest('.active-menu')){
				handlerMenu();
			}

			if (target.getAttribute('href') && target.getAttribute('href').charAt(0) === '#') {
				scrollPage(target);
			}
		});

	};
	
	toogleMenu();

	//popup
	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popupContent = document.querySelector('.popup-content'),
			scrollBtn = document.querySelector('a');
			
			let count = 0;
			let moveModal;
			
		const animationModal = () => {
			moveModal = requestAnimationFrame(animationModal);
			count += 4;
			if (count < 104){
				popupContent.style.transform = `translateY(-${100 -count}%)`;
			} else {
				count = 0;
				cancelAnimationFrame(moveModal);
			}
		};

		popupBtn.forEach((elem) => {
			elem.addEventListener('click', () => {
				popup.style.display = 'block';
				let widthWin = document.documentElement.clientWidth;
				if (widthWin >= 768) {
					popupContent.style.transform = `translateY(-100%)`;
					moveModal = requestAnimationFrame(animationModal);
				}
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


	//слайдел
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
				slider = document.querySelector('.portfolio-content'),
				portfolioDots = document.querySelector('.portfolio-dots');

		let currentSlide = 0,
			interval;

		slide.forEach((item, index) => {
			const li = document.createElement('li');
			li.classList.add('dot');
			portfolioDots.append(li);

			if (item.matches('.portfolio-item-active')){
				document.querySelectorAll('.dot')[index].classList.add('dot-active');
				currentSlide = index;
			}
		});

		const dot = document.querySelectorAll('.dot');

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length){
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 1500) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', (event) => {
			event.preventDefault();
			
			let target = event.target;

			if (!target.matches('.portfolio-btn, .dot')){
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')){
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) =>{
					if (elem === target){
						currentSlide = index;
					}
				});
			}

			if(currentSlide >= slide.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		});

		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot') ) {
				stopSlide();
			}
		});
		
		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide();
			}
		});

		startSlide(3000);
	};

	slider();


	//изменение фото
	const changePhoto = () => {

		const photoAll = document.querySelectorAll('.command__photo');

		photoAll.forEach((item) => {
			let tmp;
			item.addEventListener('mouseenter', (e) => {
				tmp = event.target.src;
				event.target.src = event.target.dataset.img;
			});
			item.addEventListener('mouseleave', (e) => {
				event.target.src = tmp;
			});

		});
	};

	changePhoto();

	// ваоидация калькулятора
	const validCalc = () => {
		const inputAll = document.querySelectorAll('.calc-block  input');

		inputAll.forEach(item => {
			item.addEventListener('input', (e) => {
				item.value = item.value.replace(/\D/, '');
			});
		});
	};

	validCalc();

	// форма осталиь вопросы
	const blockForm = () => {

		const formName = document.getElementById('form2-name'),
		formEmail = document.querySelectorAll('.form-email'),
		formPhone = document.querySelectorAll('.form-phone'),
		formMessage = document.getElementById('form2-message');

		const regWord = function (btn) {
			if (!/[а-я\s-]/ig.test(btn.data)) {
				this.value = this.value.replace(/[^а-я\s-]/ig, '');
			}
		};

		const regEmail = function (btn) {
			if (!/[a-z@_\-\.!`\*']/ig.test(btn.data)) {
				console.log(12123);
				this.value = this.value.replace(/[^a-z@_\-\.!`\*']/ig, '');
			}
		};

		const regNumder = function (btn) {
			if (!/[\d()-]/ig.test(btn.data)) {
				this.value = this.value.replace(/[^\d()-]/ig, '');
			}
		};

		const regExp = new RegExp('^-* *|-(?=-)| (?= )| *-*$', 'ig');
		
		formName.addEventListener('input', regWord);
		formMessage.addEventListener('input', regWord);

		formEmail.forEach((item) => {
			item.addEventListener('input', regEmail);
		});
		formPhone.forEach((item) => {
			item.addEventListener('input', regNumder);
			item.addEventListener('blur', () => {
				item.value = item.value.replace(regExp, '');
			});
		});
		
		formName.addEventListener('blur', () => {
			formName.value = formName.value.replace(regExp, '');
			let tmp = formName.value.split(' ');
			
			tmp.map((item, i) => {
				tmp[i] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
			});
			
			formName.value = tmp.join(' ');
		});

		formMessage.addEventListener('blur', () => {
			formMessage.value = formMessage.value.replace(regExp, '');
		});


	};

	blockForm();




});
