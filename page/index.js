const headerMobileMenu = document.querySelector('.header__mobile-menu');
const popupMenu = document.querySelector('.popup_menu');
const popupMenuButtonClose = document.querySelector('.popup__menu-button-close')

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

headerMobileMenu.addEventListener('click', () => {
  openPopup(popupMenu);
})

popupMenuButtonClose.addEventListener('click', () => {
  closePopup(popupMenu);
})