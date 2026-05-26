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

gsap.from(".projects-grid .project-card",{

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

/* SKILLS CARDS ANIMATION */
gsap.from(".skills-grid .skills-category-card", {
  scrollTrigger: {
    trigger: ".skills-grid",       // O gatilho é a própria grade de tecnologias
    start: "top 85%"              // Começa a animar um pouquinho antes de chegar nela
  },
  opacity: 0,
  y: 80,                          // Surge de baixo para cima igual aos projetos
  stagger: 0.2,                   // Faz um card aparecer atrás do outro com efeito cascata
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

    // Garante compatibilidade enviando para todos os padrões de variáveis CSS possíveis
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Atualiza diretamente os elementos internos de brilho se eles existirem (para os novos cards)
    const glow = card.querySelector('.spotlight-glow');
    const borderGlow = card.querySelector('.spotlight-border-glow');
    
    if (glow) {
      glow.style.setProperty('--mouse-x', `${x}px`);
      glow.style.setProperty('--mouse-y', `${y}px`);
    }
    if (borderGlow) {
      borderGlow.style.setProperty('--mouse-x', `${x}px`);
      borderGlow.style.setProperty('--mouse-y', `${y}px`);
    }
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

/* BACK TO TOP */

const backToTop =
  document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {

  if(window.scrollY > 500){

    backToTop.classList.add('show');

  }else{

    backToTop.classList.remove('show');

  }

});

backToTop.addEventListener('click', () => {

  window.scrollTo({

    top: 0,

    behavior: 'smooth'

  });

});

/* LUCIDE ICONS */

lucide.createIcons();