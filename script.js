"use strict";

// SELECT elements

//Select NodeLists:

const closeBtn = document.querySelectorAll(".btn-close");
const homeBtn = document.querySelectorAll(".btn-page-1");
const StartBtn = document.querySelectorAll(".btn-page");

const startLink = document.getElementById("start-link");

// img

const modalImgs = document.querySelectorAll(".img-item-main");
// const modalImgsM = document.querySelectorAll(".img-item");

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
function closeModal() {
  if (!pageModal.classList.contains("hidden")) {
    togglePage();
  } else if (!bookModal.classList.contains("hidden")) {
    toggleBook();
  } else if (!chapterModal.classList.contains("hidden")) {
    toggleChapter();
  }
}

function openModal() {
  if (bookModal.classList.contains("hidden")) {
    toggleBook();
  } else if (pageModal.classList.contains("hidden")) {
    togglePage();
  } else if (chapterModal.classList.contains("hidden")) {
    toggleChapter();
  }
}

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

// for (let i = 0; i < modalImgsM.length; i++) {
//   modalImgsM[i].addEventListener("click", openModal);
// }

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
  if (e.key === "Escape") {
    closeModal();
  }
});

// Navbar

window.onscroll = () => {
  window.pageYOffset >= sticky
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

// Add pages and fix bug with the modal appearance.
