export const mainMenu = function sliderGallery() {
  const menuButtonClose = document.querySelector('.close-menu__toggle');
  const closeMenu = document.querySelector('.close-menu');
  const menuButtonOpen = document.querySelector('.main-nav__toggle-close');
  const openMenu = document.querySelector('.main-nav__menu');
  //const tagBody = document.getElementsByTagName('body');
  //const mainList = document.querySelector('.main-nav__list');

  // const noJs = Array.from(document.querySelectorAll('.main-list__nojs'));

  // for (let i = 0; i < 2; i++) {
  //   noJs[i].classList.remove('main-list__nojs');
  // }

  menuButtonClose.addEventListener('click', () =>{
    closeMenu.classList.toggle('close-menu--disabled');
    openMenu.classList.remove('main-nav__menu--disabled');
    //tagBody.classList.toggle('hidden');
  });
  menuButtonOpen.addEventListener('click', () =>{
    closeMenu.classList.remove('close-menu--disabled');
    openMenu.classList.toggle('main-nav__menu--disabled');
    //tagBody.classList.remove('hidden');
  });

  // document.addEventListener('mouseup', (e) => {
  //   if (!mainList.contains(e.target)) {
  //     closeMenu.classList.remove('close-menu--disabled');
  //     openMenu.classList.toggle('main-nav__menu--disabled');
  //     tagBody.classList.remove('hidden');
  //   }
  // });
};
