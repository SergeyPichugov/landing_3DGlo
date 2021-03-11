const toggleMenu = () => {
   const scrollPage = (target) => {
      let menuId = target.getAttribute('href').substring(1);
      if (document.getElementById(menuId)) {
         event.preventDefault();
         document.getElementById(menuId).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
         });
      }
   };
   
   const menu = document.querySelector('menu');

   const handlerMenu = () => {
      menu.classList.toggle('active-menu');
   };

   document.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.menu') || target.matches('a') || !target.closest('.active-menu') && menu.matches('.active-menu')) {
         handlerMenu();
      }

      if (target.getAttribute('href') && target.getAttribute('href').charAt(0) === '#') {
         scrollPage(target);
      }
   });

};

export default toggleMenu;