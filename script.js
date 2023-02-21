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

// function closeModalFunc() {
//   closeModal.addEventListener("click", function () {
//     pageModal.classList.add("hidden");
//     chapterModal.classList.add("hidden");
//     bookModal.classList.add("hidden");

//     //seperate
//     overlay.classList.add("hidden");
//     overlay.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });
// }

pageImg.addEventListener("click", function () {
  pageModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

chapterImg.addEventListener("click", function () {
  chapterModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

bookImg.addEventListener("click", function () {
  bookModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// closeModal

closeModalPage.addEventListener("click", function () {
  pageModal.classList.add("hidden");
  overlay.classList.add("hidden");
});

closeModalChapter.addEventListener("click", function () {
  chapterModal.classList.add("hidden");
  overlay.classList.add("hidden");
});

closeModalBook.addEventListener("click", function () {
  bookModal.classList.add("hidden");
  overlay.classList.add("hidden");
});
