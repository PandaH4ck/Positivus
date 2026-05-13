"use strict";
AOS.init({
  duration: 3000,
  easing: "ease-out-quart",
  once: true,
  offset: 150,
  delay: 100,
});
let offset = 0;
const sliderLine = document.querySelector(".testimonials");
let sliderNext = document.querySelector(".slider-next");
let sliderBack = document.querySelector(".slider-back");
const step = 656;

sliderNext.addEventListener("click", function () {
  offset += step;

  if (offset > step) {
    offset = -step;
  }

  sliderLine.style.transform = `translateX(${-offset}px)`;
});

sliderBack.addEventListener("click", function () {
  offset -= step;

  if (offset < -step) {
    offset = step;
  }

  sliderLine.style.transform = `translateX(${-offset}px)`;
});
// heder
const linkAbout = document.querySelector("#link-about");
const sectionAbout = document.querySelector("#section-about");
linkAbout.addEventListener("click", function (event) {
  sectionAbout.scrollIntoView({
    behavior: "smooth",
  });
});

const scrollServices = document.querySelector("#link-services");
const sectionHeader = document.querySelector("#section-services");
scrollServices.addEventListener("click", function (event) {
  sectionHeader.scrollIntoView({
    behavior: "smooth",
  });
});

const linkCases = document.querySelector("#link-cases");
const sectionCases = document.querySelector("#section-cases");
linkCases.addEventListener("click", function (event) {
  sectionCases.scrollIntoView({
    behavior: "smooth",
  });
});

const linkTeam = document.querySelector("#link-team");
const sectionTeam = document.querySelector("#section-team");
linkTeam.addEventListener("click", function (event) {
  sectionTeam.scrollIntoView({
    behavior: "smooth",
  });
});
// Footer

const linkAboutFooter = document.querySelector("#link-about-footer");
linkAboutFooter.addEventListener("click", function (event) {
  event.preventDefault();
  sectionAbout.scrollIntoView({
    behavior: "smooth",
  });
});

const scrollServicesFooter = document.querySelector("#link-services-footer");

scrollServicesFooter.addEventListener("click", function (event) {
  sectionHeader.scrollIntoView({
    behavior: "smooth",
  });
});

const linkCasesFooter = document.querySelector("#link-cases-footer");

linkCasesFooter.addEventListener("click", function (event) {
  sectionCases.scrollIntoView({
    behavior: "smooth",
  });
});

const linkTeamFooter = document.querySelector("#link-team-footer");

linkTeamFooter.addEventListener("click", function (event) {
  sectionTeam.scrollIntoView({
    behavior: "smooth",
  });
});
