
//   //const modal = document.getElementsByClassName('modal')[0];
//   const openModalButton = document.querySelector('modal-open--menu');
//   const closeModalButton = document.querySelector('modal-form__toggle--close');
//   const closeMenu = document.querySelector('.modal-close');
//   const openModal = document.querySelector('.modal');

export const modalForm = function modalDescription() {
  // Кнопка по которой происходит клик
  const openModalButton = document.getElementById('modal-open-button');
  // Модальное окно, которое необходимо открыть
  const modalWindow = document.getElementById('modal-window');
  // Кнопка "закрыть" внутри модального окна
  const closeModalButton = modalWindow.getElementsByClassName('modal-form__toggle--close')[0];
  // Тег body для запрета прокрутки
  const tagBody = document.getElementsByTagName('body');
  const modalWrapper = document.querySelector('.modal__wrapper');

  //   openModalButton.onclick = function (e) {
  //     e.preventDefault();
  //     modalWindow.classList.add('modal-open');
  //     tagBody.classList.add('hidden');
  //   };

  //   closeModalButton.onclick = function (e) {
  //     e.preventDefault();
  //     modalWindow.classList.remove('modal-open');
  //     tagBody.classList.remove('hidden');
  //   };
  //   modalWindow.onmousedown = function (e) {
  //     const target = e.target;
  //     const modalContent = modalWindow.getElementsByClassName('modal__content')[0];
  //     if (e.target.closest(`.${ modalContent.className}`) === null) {
  //       this.classList.remove('modal-open');
  //       tagBody.classList.remove('hidden');
  //     }
  //   };
  // });
  openModalButton.addEventListener('click', () =>{
    modalWindow.classList.toggle('modal-open');
    tagBody.classList.toggle('hidden');
  });
  closeModalButton.addEventListener('click', () =>{
    modalWindow.classList.remove('modal-open');
    tagBody.classList.remove('hidden');
  });
  document.addEventListener('mouseup', (e) => {
    if (!modalWrapper.contains(e.target)) {
      modalWindow.classList.remove('modal-open');
      tagBody.classList.remove('hidden');
    }
  });
};


