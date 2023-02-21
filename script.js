"use strict";

// SELECT elements
const closeModalPage = document.getElementById("page-close");
const closeModalChapter = document.getElementById("chapter-close");
const closeModalBook = document.getElementById("book-close");
console.log(closeModalPage);
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

closeModalPage.addEventListener("click", togglePage);

closeModalChapter.addEventListener("click", toggleChapter);

closeModalBook.addEventListener("click", toggleBook);

// ESC Event listener
pageModal.addEventListener("keydown", (e) => {
  console.log(e);
  console.log("hi");
});
