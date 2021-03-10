const countTimer = (deadline) => {
   const timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

   const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime(),
         dateNow = new Date().getTime(),
         timeRemaining = (dateStop - dateNow) / 1000,
         seconds = Math.floor(timeRemaining % 60),
         minutes = Math.floor((timeRemaining / 60) % 60),
         hours = Math.floor(timeRemaining / 60 / 60);
      return {
         timeRemaining,
         hours,
         minutes,
         seconds
      };
   };

   const zeroAdd = x => ((x < 10) ? '0' + x : x);

   const updateClock = () => {
      let timer = getTimeRemaining();

      if (timer.seconds >= 0) {
         timerHours.textContent = zeroAdd(timer.hours);
         timerMinutes.textContent = zeroAdd(timer.minutes);
         timerSeconds.textContent = zeroAdd(timer.seconds);
      } else {
         timerHours.textContent = '00';
         timerMinutes.textContent = '00';
         timerSeconds.textContent = '00';
      }

      if (timer.timeRemaining < 1) {
         clearInterval(timerId);
      }
   };

   const timerId = setInterval(updateClock, 1000);
};

export default countTimer;
