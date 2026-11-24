const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const filters = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    filter.classList.add('active');
    const category = filter.dataset.filter;
    projectCards.forEach(card => {
      card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

const copyButton = document.getElementById('copyEmail');
const toast = document.getElementById('toast');
copyButton.addEventListener('click', async () => {
  const email = 'rayenharabi767@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
