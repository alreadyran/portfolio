const menuBtn = document.querySelector('.nav_icon');
const menu = document.querySelector('.gnb');
const bod = document.querySelector('.nav_wrap');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');

  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});