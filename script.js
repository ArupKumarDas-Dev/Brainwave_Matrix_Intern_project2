// Theme toggle + persist
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('apblogs-theme');
if (saved === 'dark') root.classList.add('dark');
document.getElementById('year').textContent = new Date().getFullYear();

themeToggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('apblogs-theme', root.classList.contains('dark') ? 'dark' : 'light');
});

// Intersection Observer for reveal animations
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (ev) => {
    const href = a.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      ev.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// subtle parallax for decorative circles
const decors = document.querySelectorAll('.decor');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  decors.forEach((d, i) => {
    const speed = (i + 1) * 0.05;
    d.style.transform = `translateY(${y * speed}px)`;
  });
});
