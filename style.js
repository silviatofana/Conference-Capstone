const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100vh';
  mainMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

/** More Button */
const moreButton = document.querySelector('.show-more');
const dispNone = document.querySelector('.dis-none1');
const lessButton = document.querySelector('.show-less');

function showB() {
  dispNone.style.display = 'block';
  moreButton.style.display = 'none';
}

function hideB() {
  dispNone.style.display = 'none';
  moreButton.style.display = 'block';
}

moreButton.addEventListener('click', showB);
lessButton.addEventListener('click', hideB);
