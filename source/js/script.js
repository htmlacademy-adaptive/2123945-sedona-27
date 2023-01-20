let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let submitButton = document.querySelector('.submit-review');
let modalContainerSuccess = document.querySelector('.modal-container--success');
let closeButtonSuccess = document.querySelector('.button--success');

navMain.classList.remove('main-nav--nojs');

submitButton.addEventListener('click', function () {
  modalContainerSuccess.classList.add('modal-container--open');
});

closeButtonSuccess.addEventListener('click', function () {
  modalContainerSuccess.classList.remove('modal-container--open');
});

//let modalContainerFailure = document.querySelector('.modal-container--failure');
//let closeButtonFailure = document.querySelector('.button--failure');

////navMain.classList.remove('main-nav--nojs');

//submitButton.addEventListener('click', function () {
//  modalContainerFailure.classList.add('modal-container--open');
//});

//closeButtonFailure.addEventListener('click', function () {
//  modalContainerFailure.classList.remove('modal-container--open');
//});
