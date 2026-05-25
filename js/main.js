/* HEADER SCROLL */

const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 40){

    header.classList.add('scrolled');

  }else{

    header.classList.remove('scrolled');
  }

});

/* MOBILE MENU */

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

  navLinks.classList.toggle('active');

});

/* CURSOR GLOW */

const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});

/* GSAP */

gsap.registerPlugin(ScrollTrigger);

/* HERO INTRO */

gsap.from(".hero-animate",{

  opacity: 0,
  y: 80,

  duration: 1.2,

  stagger: 0.2,

  ease: "power4.out"

});

/* ABOUT ANIMATION */

gsap.from(".about-content",{

  scrollTrigger: {
    trigger: ".about-content",
    start: "top 80%"
  },

  opacity: 0,
  y: 80,

  duration: 1.2,

  ease: "power4.out"

});

/* PROJECT CARDS */

gsap.from(".project-card",{

  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 80%"
  },

  opacity: 0,
  y: 80,

  stagger: 0.2,

  duration: 1,

  ease: "power4.out"

});

/* SPOTLIGHT EFFECT */

const spotlightCards = document.querySelectorAll('.spotlight-card');

spotlightCards.forEach((card) => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

  });

});

/* YEAR */

const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

/* SMOOTH SCROLL OFFSET */

const menuLinks =
  document.querySelectorAll('.nav-links a');

menuLinks.forEach(link => {

  link.addEventListener('click', (e) => {

    e.preventDefault();

    const targetId =
      link.getAttribute('href');

    const targetSection =
      document.querySelector(targetId);

    const navbar =
      document.querySelector('.header');

    const offset = 180;

    const targetPosition =
      targetSection.offsetTop - offset;

    window.scrollTo({

      top: targetPosition,

      behavior: 'smooth'

    });

    /* CLOSE MOBILE MENU */

    navLinks.classList.remove('active');

  });

});