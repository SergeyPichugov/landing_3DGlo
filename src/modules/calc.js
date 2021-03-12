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

      if (calcCount.value > 1) {
         countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
         dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
         dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
         total = price * typeValue * squareValue * countValue * dayValue;

         let counterNum = 0;
         let changeModal;
         let tmp = Math.ceil(total / 39);

         const animateNumbers = () => {
            changeModal = requestAnimationFrame(animateNumbers);
            counterNum += tmp;

            if (total > counterNum) {
               totalValue.textContent = counterNum;
            } else {
               totalValue.textContent = Math.floor(total);
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

export default calc;