const middleLeftEl = document.querySelector(".search .middle_left_input");
const countrysEl = document.querySelector(".search .countrys");
const middleLeftInputEl = middleLeftEl.querySelector("input");

middleLeftEl.addEventListener("click", function (event) {
  if (countrysEl.classList.contains("show")) {
    countrysEl.classList.remove("show");
  } else {
    middleRightEl.classList.remove("show");
    countrysEl.classList.add("show");
    event.stopPropagation();
  }
});

window.addEventListener("click", function () {
  countrysEl.classList.remove("show");
  middleRightEl.classList.remove("show");
});

const countrysBtnEls = countrysEl.querySelectorAll("button");

countrysBtnEls.forEach(function (button) {
  button.addEventListener("click", function () {
    const clickBtn = button.getAttribute("value");
    middleLeftInputEl.value = clickBtn;
  });
});

const lastestEl = document.querySelector(".middle_right .lastest");
const favoritesEl = document.querySelector(".middle_right .favorites");
const middleRightEl = document.querySelector(".search .middle_right");

middleRightEl.addEventListener("click", function (event) {
  if (countrysEl.classList.contains("show")) {
    countrysEl.classList.remove("show");
    middleRightEl.classList.add("show");
  } else {
    middleRightEl.classList.add("show");
  }
  event.stopPropagation();
});

lastestEl.addEventListener("click", function (event) {
  if (!lastestEl.classList.contains("show")) {
    lastestEl.classList.add("show");
    favoritesEl.classList.remove("show");
  }
});

favoritesEl.addEventListener("click", function () {
  if (!favoritesEl.classList.contains("show")) {
    favoritesEl.classList.add("show");
    lastestEl.classList.remove("show");
  }
});
