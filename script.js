const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
  nav.classList.toggle('is-open', !open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  nav.classList.remove('is-open');
}));

const form = document.querySelector('#demo-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  form.reset();
  status.textContent = 'Prueba completada. No se envió ni guardó ningún dato.';
});

const panel = document.querySelector('#cookie-panel');
const key = 'casa-nocturna-demo-preference';
const buttons = panel.querySelectorAll('[data-choice]');
try {
  panel.hidden = Boolean(localStorage.getItem(key));
  buttons.forEach((button) => button.addEventListener('click', () => {
    localStorage.setItem(key, button.dataset.choice);
    panel.hidden = true;
  }));
} catch {
  panel.hidden = false;
  buttons.forEach((button) => button.addEventListener('click', () => { panel.hidden = true; }));
}
