!function(){"use strict";var e=JSON.parse('[{"name":"Додо"},{"name":"Картопля"},{"name":"М\'ясна"},{"name":"Кур сир"},{"name":"Курча часн"},{"name":"Грецька"},{"name":"Своя піца"},{"name":"4 сезони"}]');!function(){const e=document.querySelector(".mobile-nav-btn"),n=document.querySelector(".mobile-nav"),t=document.querySelector(".nav-icon");e.onclick=function(){n.classList.toggle("mobile-nav--open"),t.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}}();const n=document.querySelector(".list-menu"),t=e.reduce(((e,{name:n})=>e+`<li class="list-menu__item">\n       ${n}\n     </li>`));n.insertAdjacentHTML("beforeend",t)}();