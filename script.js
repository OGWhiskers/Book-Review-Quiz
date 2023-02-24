"use strict";

// SELECT elements

//Select NodeLists:
// LEARN HOW TO LOOP THROUGH NODELIST!!!!!!!!!!
const closeBtn = document.querySelectorAll(".btn-close");
const homeBtn = document.querySelectorAll(".btn-page-1");
// const StartBtn = document.querySelectorAll(".btn-page");

const startLink = document.getElementById("start-link");
// console.log(closeModalPage);

// img

const pageImg = document.querySelector(".img-item-1");
const chapterImg = document.querySelector(".img-item-2");
const bookImg = document.querySelector(".img-item-3");

// modal

const pageModal = document.getElementById("page");
const chapterModal = document.getElementById("chapter");
const bookModal = document.getElementById("book");

// overlay

const overlay = document.querySelector(".overlay");

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

pageImg.addEventListener("click", togglePage);

chapterImg.addEventListener("click", toggleChapter);

bookImg.addEventListener("click", toggleBook);

// closeModal

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", closeModal);
}

// click-overlay listener

overlay.addEventListener("click", closeModal);

// ESC Event listener

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Home button functionality:

for (let i = 0; i < homeBtn.length; i++) {
  homeBtn[i].addEventListener("click", closeModal);
}
