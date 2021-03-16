(()=>{"use strict";function t(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const o=function(){function o(t){var e=t.main,n=t.wrap,i=t.next,r=t.prev,a=t.infinity,s=void 0!==a&&a,l=t.position,c=void 0===l?0:l,d=t.slidesToShow,u=void 0===d?3:d,m=t.responsive,v=void 0===m?[]:m;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),e&&n||console.warn('slider-carousel: необхдимо 2 свойства "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.next=document.querySelector(i),this.prev=document.querySelector(r),this.slidesToShow=u,this.options={position:c,infinity:s,widthSlide:Math.floor(100/u),maxPosition:this.slides.length-this.slidesToShow},this.responsive=v}var i,r;return i=o,(r=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,n=function(e,n){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=t(e))){o&&(e=o);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var t=o.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==o.return||o.return()}finally{if(l)throw a}}}}(this.slides);try{for(n.s();!(e=n.n()).done;)e.value.classList.add("glo-slider__item")}catch(t){n.e(t)}finally{n.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n\t\t\t\t.glo-slider{\n\t\t\t\t\toverflow: hidden !important;\n\t\t\t\t}\n\t\t\t\t.glo-slider__wrap{\n\t\t\t\t\tdisplay: flex !important;\n\t\t\t\t\ttransition: transform 0.5s !important;\n\t\t\t\t\twill-change: transform !important;\n\t\t\t\t}\n\t\t\t\t.glo-slider__item{\n\t\t\t\t\tdisplay: flex !important;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tflex: 0 0 ".concat(this.options.widthSlide,"% !important;\n\t\t\t\t\tmargin: auto 0 !important;\n\t\t\t\t}\n\t\t\t"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition-1&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.classList="glo-slider__prev",this.next.classList="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var t=document.createElement("style");t.textContent="\n\t\t\t\t.glo-slider__prev, \n\t\t\t\t.glo-slider__next {\n\t\t\t\t\tmargin: 0 10px;\n\t\t\t\t\tborder: 20px solid transparent;\n\t\t\t\t\tbackground: transparent;\n\n\t\t\t\t}\n\t\t\t\t.glo-slider__next {\n\t\t\t\t\tborder-left-color: #19b5fe;\n\t\t\t\t}\n\t\t\t\t.glo-slider__prev {\n\t\t\t\t\tborder-right-color: #19b5fe;\n\t\t\t\t}\n\t\t\t\t.glo-slider__prev:hover,\n\t\t\t\t.glo-slider__next:hover,\n\t\t\t\t.glo-slider__prev:focus,\n\t\t\t\t.glo-slider__next:focus {\n\t\t\t\t\tbackground: transparent;\n\t\t\t\t\toutline: transparent;\n\t\t\t\t}\n\t\t\t",document.head.appendChild(t)}},{key:"responseInit",value:function(){var n,o=this,i=this.slidesToShow,r=this.responsive.map((function(t){return t.breakpoint})),a=Math.max.apply(Math,function(t){if(Array.isArray(t))return e(t)}(n=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=function(){var t=document.documentElement.clientWidth;if(t<a)for(var e=0;e<r.length;e++)t<r[e]&&(o.slidesToShow=o.responsive[e].slidesToShow,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle());else o.slidesToShow=i,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle()};s(),window.addEventListener("resize",s)}}])&&n(i.prototype,r),o}();var i,r,a,s,l,c,d,u,m,v,p,h,f,y,g,S,b,w,E,x;g="19 Mar 2021 7:00:00",S=document.querySelector("#timer-hours"),b=document.querySelector("#timer-minutes"),w=document.querySelector("#timer-seconds"),E=function(t){return t<10?"0"+t:t},x=setInterval((function(){var t,e,n,o=(t=(new Date(g).getTime()-(new Date).getTime())/1e3,e=Math.floor(t%60),n=Math.floor(t/60%60),{timeRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:e});o.seconds>=0?(S.textContent=E(o.hours),b.textContent=E(o.minutes),w.textContent=E(o.seconds)):(S.textContent="00",b.textContent="00",w.textContent="00"),o.timeRemaining<1&&clearInterval(x)}),1e3),f=function(t){var e=t.getAttribute("href").substring(1);document.getElementById(e)&&(event.preventDefault(),document.getElementById(e).scrollIntoView({block:"start",behavior:"smooth"}))},y=document.querySelector("menu"),document.addEventListener("click",(function(t){var e=t.target;(e.closest(".menu")||e.closest(".close-btn")||e.matches("a")&&e.closest(".active-menu")||!e.closest(".active-menu")&&y.matches(".active-menu"))&&y.classList.toggle("active-menu"),e.getAttribute("href")&&"#"===e.getAttribute("href").charAt(0)&&f(e)})),d=document.querySelector(".popup"),u=document.querySelectorAll(".popup-btn"),m=document.querySelector(".popup-content"),v=document.querySelector("a"),p=0,h=function t(){c=requestAnimationFrame(t),(p+=4)<104?m.style.transform="translateY(-".concat(100-p,"%)"):(p=0,cancelAnimationFrame(c))},u.forEach((function(t){t.addEventListener("click",(function(){d.style.display="block",document.documentElement.clientWidth>=768&&(m.style.transform="translateY(-100%)",c=requestAnimationFrame(h))}))})),v.addEventListener("click",(function(){event.preventDefault(),document.getElementById("service-block").scrollIntoView({block:"start",behavior:"smooth"})})),d.addEventListener("click",(function(t){var e=t.target;e.classList.contains("popup-close")?d.style.display="none":(e=e.closest(".popup-content"))||(d.style.display="none")})),a=document.querySelector(".service-header"),s=document.querySelectorAll(".service-header-tab"),l=document.querySelectorAll(".service-tab"),a.addEventListener("click",(function(t){var e=t.target;(e=e.closest(".service-header-tab"))&&s.forEach((function(t,n){t===e&&function(t){for(var e=0;e<l.length;e++)t===e?(s[e].classList.add("active"),l[e].classList.remove("d-none")):(s[e].classList.remove("active"),l[e].classList.add("d-none"))}(n)}))})),function(){var t,e=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-content"),o=document.querySelector(".portfolio-dots"),i=0;e.forEach((function(t,e){var n=document.createElement("li");n.classList.add("dot"),o.append(n),t.matches(".portfolio-item-active")&&(document.querySelectorAll(".dot")[e].classList.add("dot-active"),i=e)}));var r=document.querySelectorAll(".dot"),a=function(t,e,n){t[e].classList.remove(n)},s=function(t,e,n){t[e].classList.add(n)},l=function(){a(e,i,"portfolio-item-active"),a(r,i,"dot-active"),++i>=e.length&&(i=0),s(e,i,"portfolio-item-active"),s(r,i,"dot-active")},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;t=setInterval(l,e)};n.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".portfolio-btn, .dot")&&(a(e,i,"portfolio-item-active"),a(r,i,"dot-active"),n.matches("#arrow-right")?i++:n.matches("#arrow-left")?i--:n.matches(".dot")&&r.forEach((function(t,e){t===n&&(i=e)})),i>=e.length&&(i=0),i<0&&(i=e.length-1),s(e,i,"portfolio-item-active"),s(r,i,"dot-active"))})),n.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(t)})),n.addEventListener("mouseout",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&c()})),c(3e3)}(),document.getElementById("command").addEventListener("mouseover",(function(t){var e=event.target;e.matches(".command__photo")&&(i=e.src,r=e,e.src=e.dataset.img),!e.matches(".command__photo")&&i&&((e=r).src=i)})),function(){var t=document.getElementById("form1-name"),e=document.getElementById("form2-name"),n=document.getElementById("form3-name"),o=document.getElementById("form2-message"),i=new RegExp("^-* *|-(?=-)| (?= )| *-*$","ig");o.addEventListener("input",(function(t){/[а-я\s\d\.,!\?]/gi.test(t.data)||(this.value=this.value.replace(/[^а-я\s\d\.,!\?]/gi,""))})),document.addEventListener("input",(function(t){var e,n=t.target;"tel"===n.type&&(/[+\d]/gi.test((e=t).data)||(e.target.value=e.target.value.replace(/[^+\d]/gi,"")),e.target.value=e.target.value.replace(/(.{12}).*/gi,"$1"),/^[78]/gi.test(e.target.value)&&(e.target.value=e.target.value.replace(/[+]/gi,""),e.target.value=e.target.value.replace(/([\d]{11})\d*/gi,"$1")),n.value.length<7?n.setCustomValidity("минимум 7 цифр"):n.setCustomValidity("")),"email"===n.type&&function(t){/[a-z@_\-\.!\~\*']/gi.test(t.data)||(t.target.value=t.target.value.replace(/[^a-z@_\-\.!\~\*']/gi,""))}(t),"form1-name"!==n.id&&"form2-name"!==n.id&&"form3-name"!==n.id||(function(t){/[а-я\s]/gi.test(t.data)||(t.target.value=t.target.value.replace(/[^а-я\s]/gi,""))}(t),n.value.length<2?n.setCustomValidity("слишком короткое имя"):n.setCustomValidity(""))}));var r=function(){var t=event.target;t.value=t.value.replace(i,"");var e=t.value.split(" ");e.map((function(t,n){e[n]=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})),t.value=e.join(" ")};t.addEventListener("blur",r),e.addEventListener("blur",r),n.addEventListener("blur",r),o.addEventListener("blur",(function(){o.value=o.value.replace(i,"")}))}(),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),i=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),a=document.getElementById("total"),s=function(){var e=0,s=1,l=1,c=n.options[n.selectedIndex].value,d=+o.value;if(i.value>1&&(s+=(i.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),c&&d){e=t*c*d*s*l;var u,m=0,v=Math.ceil(e/39);u=requestAnimationFrame((function t(){u=requestAnimationFrame(t),e>(m+=v)?a.textContent=m:(a.textContent=Math.floor(e),cancelAnimationFrame(u))}))}};e.addEventListener("input",(function(t){var e=t.target;"INPUT"===e.tagName&&(e.value=e.value.replace(/\D/,"")),(e.matches("select")||e.matches("input"))&&s()}))}(100),function(){var t=document.createElement("div");t.style.cssText="font-size: 2rem";var e=document.createElement("img");e.src="./images/833.svg",document.querySelector("body").addEventListener("submit",(function(n){n.preventDefault();var o=n.target;if(!(o.querySelector('[name="user_phone"]').value.length<7||o.querySelector('[name="user_name"]').value.length<2)){o.appendChild(t),t.style.color="white",t.textContent="",t.appendChild(e);var i=new FormData(o),r={};i.forEach((function(t,e){r[e]=t})),function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(r).then((function(e){if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){return t.textContent=""}),4e3)})).catch((function(e){t.textContent="Что то пошло не так",console.error(e)})),o.querySelectorAll("input").forEach((function(t){t.value=""}))}}))}(),new o({main:".companies-wrapper",wrap:".companies-hor",slidesToShow:5,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:4},{breakpoint:768,slidesToShow:3},{breakpoint:576,slidesToShow:2}]}).init()})();