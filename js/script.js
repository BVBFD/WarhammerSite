// const header = document.querySelector(".header");
// const headerHeight = header.getBoundingClientRect().height;
const navbarBtn = document.querySelector(".header #menu-btn");
const navbar = document.querySelector(".header .navShareBox .navbar");
const videoBoxesBtn = document.querySelectorAll(
  ".faction .factionBox .btnClickVideo i"
);
const factionBoxes = document.querySelectorAll(".faction .factionBox");

navbarBtn.onclick = () => {
  navbar.classList.toggle("active");
};

factionBoxes.forEach((factionBox) => {
  factionBox.onclick = (event) => {
    if (event.target.parentNode.dataset.src.slice(1, 7) === "videos") {
      let videoBox = event.target.parentNode.querySelector(".btnClickVideo");
      videoBox.classList.toggle("active");
    }
  };
});

videoBoxesBtn.forEach((btn) => {
  btn.onclick = (event) => {
    console.log(event.target);
    event.target.parentNode.parentNode.classList.toggle("active");
    event.target.parentNode.parentNode.getElementsByTagName("video")[0].pause();
  };
});

// document.addEventListener("mouseover", (event) => {
//   console.log(event.target, headerHeight);
//   if (event.clientY <= headerHeight) {
//     header.classList.add("active");
//   }
//   if (event.clientY > headerHeight) {
//     header.classList.remove("active");
//   }
// });
