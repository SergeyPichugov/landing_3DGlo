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
      if (count < 104) {
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
      document.getElementById('service-block').scrollIntoView({
         block: 'start',
         behavior: 'smooth'
      });
   });

   popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
         popup.style.display = 'none';
      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popup.style.display = 'none';
         }
      }
   });

};

export default togglePopUp;