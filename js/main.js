const middleLeftEl = document.querySelector(".search .middle_left_input");
const countrysEl = document.querySelector(".search .countrys");
const middleLeftInputEl = middleLeftEl.querySelector("input");

middleLeftEl.addEventListener("click", function (event) {
  if (countrysEl.classList.contains("show")) {
    countrysEl.classList.remove("show");
  } else {
    countrysEl.classList.add("show");
    event.stopPropagation();
  }
});

window.addEventListener("click", function () {
  countrysEl.classList.remove("show");
});
