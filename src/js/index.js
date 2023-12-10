import data from "../data/data.json";

const list = document.querySelector(".list-menu");

const markup = data.reduce(
  (acc, { name }) =>
    acc +
    `<li class="list-menu__item">
       <p class="list-menu__item-title">${name}</p>
       <div class="selection-box">
       <p class="selection"></p>
       <p class="selection"></p>
       <p class="selection"></p>
       <p class="selection"></p>
       <p class="selection"></p>
       </div>
     </li>`,
  ""
);

list.insertAdjacentHTML("beforeend", markup);

list.addEventListener("click", onClick);

function onClick(e) {
  if (e.target.classList.contains("selection")) {
    e.target.classList.toggle("selection--active");
    if (e.target.classList.contains("selection--active")) {
      e.target.textContent = "1";
    } else {
      e.target.textContent = "";
    }
  }
  return;
}
