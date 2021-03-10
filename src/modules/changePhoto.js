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

export default changePhoto;