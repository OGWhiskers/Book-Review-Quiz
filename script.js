"use strict";

// SELECT elements

// const closeBtn = document.querySelectorAll(".btn-close");
const closeModalPage = document.getElementById("page-close");
const closeModalChapter = document.getElementById("chapter-close");
const closeModalBook = document.getElementById("book-close");
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

// closeBtn.addEventListener("click", closeModal);

closeModalPage.addEventListener("click", togglePage);

closeModalChapter.addEventListener("click", toggleChapter);

closeModalBook.addEventListener("click", toggleBook);

// click-overlay listener

overlay.addEventListener("click", closeModal);

// ESC Event listener

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
