"use strict";

const qs = (query) => document.querySelector(query);

const moon = qs(".moon");
const stars = qs(".stars");
const mountainsBack = qs(".mountains--back");
const heroTitle = qs(".hero__title");
const mountainsFront = qs(".mountains--front");
const heroLink = qs(".hero__link");
const trees = qs(".trees");

const MOON_SPEED_RATIO = 0.8;
const STARS_SPEED_RATIO = 0.15;
const HERO_TITLE_X_SPEED_RATIO = 3;
const HERO_TITLE_Y_SPEED_RATIO = 0.25;
const MOUNTAINS_BACK_SPEED_RATIO = 0.6;
const MOUNTAINS_FRONT_SPEED_RATIO = 0.4;
const HERO_LINK_Y_SPEED_RATIO = 0.1;
const HERO_LINK_X_SPEED_RATIO = 0.02;
const TREES_SPEED_RATIO = 0;

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  moon.style.marginTop = `${value * MOON_SPEED_RATIO}px`;
  stars.style.left = `${value * STARS_SPEED_RATIO}px`;
  heroTitle.style.marginRight = `${value * HERO_TITLE_X_SPEED_RATIO}px`;
  heroTitle.style.marginTop = `${value * HERO_TITLE_Y_SPEED_RATIO}px`;
  mountainsBack.style.marginTop = `${value * MOUNTAINS_BACK_SPEED_RATIO}px`;
  mountainsFront.style.marginTop = `${value * MOUNTAINS_FRONT_SPEED_RATIO}px`;
  heroLink.style.marginTop = `${value * HERO_LINK_Y_SPEED_RATIO}px`;
  heroLink.style.marginLeft = `${value * HERO_LINK_X_SPEED_RATIO}px`;
  trees.style.marginTop = `${value * TREES_SPEED_RATIO}px`;
});
