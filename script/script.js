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

	countTimer('19 Mar 2021 7:00:00');

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

		const command = document.getElementById('command');
		
		let tmpSrc;
		let tmpTarget;
		command.addEventListener('mouseover', (e) => {
			let target = event.target;

			if (target.matches('.command__photo')) {
				tmpSrc = target.src;
				tmpTarget = target;
				target.src = target.dataset.img;
			}
			
			if (!target.matches('.command__photo') && tmpSrc) {
				target = tmpTarget;
				target.src = tmpSrc;
			}

		});
	};

	changePhoto();


	// форма осталиь вопросы
	const blockForm = () => {

		const formName1 = document.getElementById('form1-name'),
				formName2 = document.getElementById('form2-name'),
				formName3 = document.getElementById('form3-name'),
				formMessage = document.getElementById('form2-message'),
				regExp = new RegExp('^-* *|-(?=-)| (?= )| *-*$', 'ig');

		const regName = function (btn) {
			if (!/[а-я\s]/ig.test(btn.data)) {
				btn.target.value = btn.target.value.replace(/[^а-я\s]/ig, '');
			}
		};
		
		const regMessage = function (btn) {
			if (!/[а-я\s\d\.,]/ig.test(btn.data)) {
				this.value = this.value.replace(/[^а-я\s\d\.,]/ig, '');
			}
		};

		const regEmail = (btn) => {
			if (!/[a-z@_\-\.!\~\*']/ig.test(btn.data)) {
				btn.target.value = btn.target.value.replace(/[^a-z@_\-\.!\~\*']/ig, '');
			}
		};

		const regNumder = (btn) => {
			if (!/[+\d]/ig.test(btn.data)) {
				btn.target.value = btn.target.value.replace(/[^+\d]/ig, '');
			}

			if (/^\+/ig.test(btn.target.value)) {
				btn.target.value = btn.target.value.replace(/(.{12}).*/ig, '$1');
			}

			if (/^[78]/ig.test(btn.target.value)) {
				btn.target.value = btn.target.value.replace(/[+]/ig, '');
				btn.target.value = btn.target.value.replace(/([\d]{11})\d*/ig, '$1');
			}
		};

		formMessage.addEventListener('input', regMessage);

		document.addEventListener('input', (event) => {
			let target = event.target;
			
			if (target.type ==='tel') {
				regNumder(event);
			}
			
			if (target.type === 'email') {
				regEmail(event);
			}

			if (target.id === 'form1-name' || target.id === 'form2-name' || target.id === 'form3-name') {
				regName(event);
			}
		});

		const nameUpperCase = (formN) => {
			let target = event.target;
			target.value = target.value.replace(regExp, '');
			let tmp = target.value.split(' ');

			tmp.map((item, i) => {
				tmp[i] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
			});

			target.value = tmp.join(' ');
		};

		formName1.addEventListener('blur', nameUpperCase);
		formName2.addEventListener('blur', nameUpperCase);
		formName3.addEventListener('blur', nameUpperCase);

		formMessage.addEventListener('blur', () => {
			formMessage.value = formMessage.value.replace(regExp, '');
		});

	};

	blockForm();


	//калькулятор 
	const calc = (price = 100) => {

		const calcBlock = document.querySelector('.calc-block'),
				calcType = document.querySelector('.calc-type'),
				calcSquare = document.querySelector('.calc-square'),
				calcCount = document.querySelector('.calc-count'),
				calcDay = document.querySelector('.calc-day'),
				totalValue = document.getElementById('total');

		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value,
					squareValue = +calcSquare.value;

			if (calcCount.value > 1){
				countValue += (calcCount.value - 1 )/ 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue){
				total = price * typeValue * squareValue * countValue * dayValue;

				let counterNum = 0;
				let changeModal;
				let tmp = Math.ceil(total / 39);

				const animateNumbers = () => {
					changeModal = requestAnimationFrame(animateNumbers);
					counterNum += tmp;
					
					if (total > counterNum){
						totalValue.textContent = counterNum;
					} else {
						totalValue.textContent = total;
						cancelAnimationFrame(changeModal);
					}
				};
				
				changeModal = requestAnimationFrame(animateNumbers);

			} 

		};

		calcBlock.addEventListener('input', (event) => {
			const target = event.target;

			if (target.tagName === 'INPUT') {
				target.value = target.value.replace(/\D/, '');
			}

			if (target.matches('select') || target.matches('input')) {
				countSum();
			}
		});


	};

	calc(100);


	//send-ajax-form
	const sendForm = () => {
		const errorMassage = 'Что то пошло не так',
				successMassage = 'Спасибо! Мы скоро с вами свяжемся!';
		
		const clearInput = (formClear) => {
			const formInrut = formClear.querySelectorAll('input');
			formInrut.forEach(item => {
				item.value = '';
			});
		};

		const statusMessage = document.createElement('div');
		statusMessage.style.cssText = 'font-size: 2rem';
		
		const statusImg = document.createElement('img');
		statusImg.src = './images/833.svg';

		const bodyTag = document.querySelector('body');

		bodyTag.addEventListener('submit', (event) =>{
			event.preventDefault();
			let target = event.target;

			target.appendChild(statusMessage);
			statusMessage.style.color = 'white';
			statusMessage.textContent = '';
			statusMessage.appendChild(statusImg);

			const formData = new FormData(target);

			postData(formData)
				.then((responce) => {
					if (responce.status !== 200){
						throw new Error('status network not 200');
					}
					statusMessage.textContent = successMassage;
					setTimeout(() => statusMessage.textContent = '', 4000);
				})
				.catch(error => {
					statusMessage.textContent = errorMassage;
					console.error(error);
				});
			
			clearInput(target);
		});


		const postData = (body) => {
			return fetch('./server.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/from-data'
				},
				body: JSON.stringify(body)

			});

			
		};
	};

	sendForm();


});
