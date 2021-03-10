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

   const postData = (body) => {
      return fetch('./server.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'multipart/from-data'
         },
         body: JSON.stringify(body)

      });
   };
   
   bodyTag.addEventListener('submit', (event) => {
      event.preventDefault();
      let target = event.target;

      target.appendChild(statusMessage);
      statusMessage.style.color = 'white';
      statusMessage.textContent = '';
      statusMessage.appendChild(statusImg);

      const formData = new FormData(target);

      postData(formData)
         .then((responce) => {
            if (responce.status !== 200) {
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

   
};

export default sendForm;