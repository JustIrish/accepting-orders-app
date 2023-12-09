// import mobileNav from "./modules/mobile-nav.js";
// mobileNav();

import data from "../data/data.json";

const list = document.querySelector(".list-menu");

const markup = data.reduce((acc, { name }) => {
  return (
    acc +
    `<li class="list-menu__item">
       ${name}
     </li>`
  );
});

list.insertAdjacentHTML("beforeend", markup);
