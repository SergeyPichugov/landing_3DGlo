(()=>{"use strict";var e,t,n,o,a,r,c,i,l,u,s,d,m,v,f,g,p,h,y;f=document.querySelector("#timer-hours"),g=document.querySelector("#timer-minutes"),p=document.querySelector("#timer-seconds"),h=function(e){return e<10?"0"+e:e},y=setInterval((function(){var e,t,n,o=(e=(new Date("19 Mar 2021 7:00:00").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60),minutes:n,seconds:t});o.seconds>=0?(f.textContent=h(o.hours),g.textContent=h(o.minutes),p.textContent=h(o.seconds)):(f.textContent="00",g.textContent="00",p.textContent="00"),o.timeRemaining<1&&clearInterval(y)}),1e3),m=function(e){var t=e.getAttribute("href").substring(1);document.getElementById(t)&&(event.preventDefault(),document.getElementById(t).scrollIntoView({block:"start",behavior:"smooth"}))},v=document.querySelector("menu"),document.addEventListener("click",(function(e){var t=e.target;(t.closest(".menu")||t.closest(".close-btn")||t.matches("a")&&t.closest(".active-menu")||!t.closest(".active-menu")&&v.matches(".active-menu"))&&v.classList.toggle("active-menu"),t.getAttribute("href")&&"#"===t.getAttribute("href").charAt(0)&&m(t)})),c=document.querySelector(".popup"),i=document.querySelectorAll(".popup-btn"),l=document.querySelector(".popup-content"),u=document.querySelector("a"),s=0,d=function e(){r=requestAnimationFrame(e),(s+=4)<104?l.style.transform="translateY(-".concat(100-s,"%)"):(s=0,cancelAnimationFrame(r))},i.forEach((function(e){e.addEventListener("click",(function(){c.style.display="block",document.documentElement.clientWidth>=768&&(l.style.transform="translateY(-100%)",r=requestAnimationFrame(d))}))})),u.addEventListener("click",(function(){event.preventDefault(),document.getElementById("service-block").scrollIntoView({block:"start",behavior:"smooth"})})),c.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?c.style.display="none":(t=t.closest(".popup-content"))||(c.style.display="none")})),n=document.querySelector(".service-header"),o=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab"),n.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&o.forEach((function(e,n){e===t&&function(e){for(var t=0;t<a.length;t++)e===t?(o[t].classList.add("active"),a[t].classList.remove("d-none")):(o[t].classList.remove("active"),a[t].classList.add("d-none"))}(n)}))})),function(){var e,t=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-content"),o=document.querySelector(".portfolio-dots"),a=0;t.forEach((function(e,t){var n=document.createElement("li");n.classList.add("dot"),o.append(n),e.matches(".portfolio-item-active")&&(document.querySelectorAll(".dot")[t].classList.add("dot-active"),a=t)}));var r=document.querySelectorAll(".dot"),c=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},l=function(){c(t,a,"portfolio-item-active"),c(r,a,"dot-active"),++a>=t.length&&(a=0),i(t,a,"portfolio-item-active"),i(r,a,"dot-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;e=setInterval(l,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(c(t,a,"portfolio-item-active"),c(r,a,"dot-active"),n.matches("#arrow-right")?a++:n.matches("#arrow-left")?a--:n.matches(".dot")&&r.forEach((function(e,t){e===n&&(a=t)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),i(t,a,"portfolio-item-active"),i(r,a,"dot-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(3e3)}(),document.getElementById("command").addEventListener("mouseover",(function(n){var o=event.target;o.matches(".command__photo")&&(e=o.src,t=o,o.src=o.dataset.img),!o.matches(".command__photo")&&e&&((o=t).src=e)})),function(){var e=document.getElementById("form1-name"),t=document.getElementById("form2-name"),n=document.getElementById("form3-name"),o=document.getElementById("form2-message"),a=new RegExp("^-* *|-(?=-)| (?= )| *-*$","ig");o.addEventListener("input",(function(e){/[а-я\s\d\.,!\?]/gi.test(e.data)||(this.value=this.value.replace(/[^а-я\s\d\.,!\?]/gi,""))})),document.addEventListener("input",(function(e){var t,n=e.target;"tel"===n.type&&(/[+\d]/gi.test((t=e).data)||(t.target.value=t.target.value.replace(/[^+\d]/gi,"")),t.target.value=t.target.value.replace(/(.{12}).*/gi,"$1"),/^[78]/gi.test(t.target.value)&&(t.target.value=t.target.value.replace(/[+]/gi,""),t.target.value=t.target.value.replace(/([\d]{11})\d*/gi,"$1")),n.value.length<7?n.setCustomValidity("минимум 7 цифр"):n.setCustomValidity("")),"email"===n.type&&function(e){/[a-z@_\-\.!\~\*']/gi.test(e.data)||(e.target.value=e.target.value.replace(/[^a-z@_\-\.!\~\*']/gi,""))}(e),"form1-name"!==n.id&&"form2-name"!==n.id&&"form3-name"!==n.id||(function(e){/[а-я\s]/gi.test(e.data)||(e.target.value=e.target.value.replace(/[^а-я\s]/gi,""))}(e),n.value.length<2?n.setCustomValidity("слишком короткое имя"):n.setCustomValidity(""))}));var r=function(){var e=event.target;e.value=e.value.replace(a,"");var t=e.value.split(" ");t.map((function(e,n){t[n]=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})),e.value=t.join(" ")};e.addEventListener("blur",r),t.addEventListener("blur",r),n.addEventListener("blur",r),o.addEventListener("blur",(function(){o.value=o.value.replace(a,"")}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),c=document.getElementById("total"),i=function(){var t=0,i=1,l=1,u=n.options[n.selectedIndex].value,s=+o.value;if(a.value>1&&(i+=(a.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),u&&s){t=e*u*s*i*l;var d,m=0,v=Math.ceil(t/39);d=requestAnimationFrame((function e(){d=requestAnimationFrame(e),t>(m+=v)?c.textContent=m:(c.textContent=Math.floor(t),cancelAnimationFrame(d))}))}};t.addEventListener("input",(function(e){var t=e.target;"INPUT"===t.tagName&&(t.value=t.value.replace(/\D/,"")),(t.matches("select")||t.matches("input"))&&i()}))}(100),function(){var e=document.createElement("div");e.style.cssText="font-size: 2rem";var t=document.createElement("img");t.src="./images/833.svg",document.querySelector("body").addEventListener("submit",(function(n){n.preventDefault();var o=n.target;if(!(o.querySelector('[name="user_phone"]').value.length<7||o.querySelector('[name="user_name"]').value.length<2)){o.appendChild(e),e.style.color="white",e.textContent="",e.appendChild(t);var a=new FormData(o),r={};a.forEach((function(e,t){r[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(r).then((function(t){if(200!==t.status)throw new Error("status network not 200");e.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){return e.textContent=""}),4e3)})).catch((function(t){e.textContent="Что то пошло не так",console.error(t)})),o.querySelectorAll("input").forEach((function(e){e.value=""}))}}))}()})();