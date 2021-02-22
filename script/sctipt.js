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



		function updateClock(){
			let timer = getTimeRemaining();
			timer.hours = (timer.hours < 10) ? '0' + timer.hours : timer.hours;
			timer.minutes = (timer.minutes < 10) ? '0' + timer.minutes : timer.minutes;
			timer.seconds = (timer.seconds < 10) ? '0' + timer.seconds : timer.seconds;
			if (timer.seconds >= 0){
				timerHours.textContent = timer.hours;
				timerMinutes.textContent = timer.minutes;
				timerSeconds.textContent = timer.seconds;
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

	countTimer('23 Feb 2021 18:51:30');


});
