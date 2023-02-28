"use strict";

// SELECT elements

//Select NodeLists:
const closeBtn = document.querySelectorAll(".btn-close");
const homeBtn = document.querySelectorAll(".btn-page-1");

const StartBtn = document.querySelectorAll(".btn-page");
const startLink = document.getElementById("start-link");

// img
const modalImgs = document.querySelectorAll(".img-item-main");

// modal
const pageModal = document.getElementById("page");
const chapterModal = document.getElementById("chapter");
const bookModal = document.getElementById("book");

// overlay
const overlay = document.querySelector(".overlay");

// Nav bar
const nav = document.querySelector(".head");
const sticky = nav.offsetTop;

// functions:
const doNothing = () => {
  console.log(`nothing`);
};

function closeModal() {
  !pageModal.classList.contains("hidden")
    ? togglePage()
    : !bookModal.classList.contains("hidden")
    ? toggleBook()
    : !chapterModal.classList.contains("hidden")
    ? toggleChapter()
    : doNothing();
}

function openModal() {}

function togglePage() {
  pageModal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
function toggleChapter() {
  chapterModal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
function toggleBook() {
  bookModal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

// Img openModal
for (let i = 0; i < modalImgs.length; i++) {
  modalImgs[i].addEventListener("click", openModal);
}

// closeModal
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", closeModal);
}

// Home button functionality:
for (let i = 0; i < homeBtn.length; i++) {
  homeBtn[i].addEventListener("click", closeModal);
}

// click-overlay listener
overlay.addEventListener("click", closeModal);

// ESC Event listener
document.addEventListener("keydown", function (e) {
  e.key === "Escape" ? closeModal() : doNothing();
});

// Navbar

window.onscroll = () => {
  window.pageYOffset >= sticky
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

// Add pages and fix bug with the modal appearance.
