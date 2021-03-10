const blockForm = () => {
   const formName1 = document.getElementById('form1-name'),
         formName2 = document.getElementById('form2-name'),
         formName3 = document.getElementById('form3-name'),
         formMessage = document.getElementById('form2-message'),
         regExp = new RegExp('^-* *|-(?=-)| (?= )| *-*$', 'ig');

   const regName = (btn) => {
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

      if (target.type === 'tel') {
         regNumder(event);
      }

      if (target.type === 'email') {
         regEmail(event);
      }

      if (target.id === 'form1-name' || target.id === 'form2-name' || target.id === 'form3-name') {
         regName(event);
      }
   });

   const nameUpperCase = () => {
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

export default blockForm;