let lis = document.querySelectorAll("ul li");
let myDiv = document.querySelector(".myDiv");

if (window.localStorage.getItem("color")) {
  myDiv.style.backgroundColor = window.localStorage.getItem("color");
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // The First Way
  lis.forEach((li) => {
    if (li.dataset.color === window.localStorage.getItem("color")) {
      li.classList.add("active");
    }
  });
  // The Second Way:
  //   document
  //     .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
  //     .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    myDiv.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
