// tippy.js
tippy("[data-tippy-content]");

// aos.js
AOS.init({
  duration: 700,
  once: true
});

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

// scroll navbar
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 700) {
      $("nav").addClass("nav-w");
      $(".navbar-menu").addClass("nav-w");
      $(".navbar-item").addClass("nav-dark");
      $(".navbar-link").addClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-white");
      $(".navbar-burger").addClass("has-text-dark");
    } else {
      $("nav").removeClass("nav-w");
      $(".navbar-menu").removeClass("nav-w");
      $(".navbar-item").removeClass("nav-dark");
      $(".navbar-link").removeClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-dark");
      $(".navbar-burger").addClass("has-text-white");
    }
  });
});

// back to top
var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear()


// popup dziala
/*
const popupBtn = document.getElementById('popup-btn');
const popupContainer = document.getElementById('popup-container');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const body = document.body;

popupBtn.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    overlay.style.display = 'block';
    body.style.overflow = 'hidden'; // Prevent scrolling
});

closeBtn.addEventListener('click', () => {
    closePopup();
});

overlay.addEventListener('click', () => {
    closePopup();
});

function closePopup() {
    popupContainer.style.display = 'none';
    overlay.style.display = 'none';
    body.style.overflow = 'auto'; // Allow scrolling
}


*/
// test 

const urlParams = new URLSearchParams(window.location.search);
const isOpen = urlParams.get('popup');
console.log(urlParams)
if (isOpen === 'true') {
  const popupContainer = document.getElementById('popup-container');
  const overlay = document.getElementById('overlay');
  const body = document.body;
  popupContainer.style.display = 'block';
  overlay.style.display = 'block';
  body.style.overflow = 'hidden'; // Prevent scrolling
}

const popupBtn = document.getElementById('popup-btn');
const popupContainer = document.getElementById('popup-container');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

popupBtn.addEventListener('click', () => {
  popupContainer.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
});

closeBtn.addEventListener('click', () => {
  closePopup();
});

overlay.addEventListener('click', () => {
  closePopup();
});

function closePopup() {
  popupContainer.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto'; // Allow scrolling
}


/**
  * @INFO
  * Website Coded by Vivoxi#8069
  * @INFO
  * Please mention him when using this Code!
  * @INFO
*/