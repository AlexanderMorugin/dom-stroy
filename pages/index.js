

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


// OFFER  FILTER

const offerButtons = document.querySelectorAll('.offer__button');
const offerFilters = document.querySelectorAll('.offer__filter');

const filterHouses = document.querySelectorAll('.filter__house');
const filterSaunas = document.querySelectorAll('.filter__sauna');
const filterPavilions = document.querySelectorAll('.filter__pavilion');
const filterChangeHouses = document.querySelectorAll('.filter__change-house');
const filterOutbuildings = document.querySelectorAll('.filter__outbuilding');

// function activateFilter(obj) {
//   obj.classList.add('offer__card_active');
// }

// function deactivateFilter(obj) {
//   obj.classList.remove('offer__card_active');
// }

function activateFilterHouse() {
  filterHouses.forEach(house => {
    house.classList.add('offer__card_active');
  })  
}

function deactivateFilterHouse() {
  filterHouses.forEach(house => {
    house.classList.remove('offer__card_active');
  })
}

function activateFilterSauna() {
  filterSaunas.forEach(sauna => {
    sauna.classList.add('offer__card_active');
  })  
}

function deactivateFilterSauna() {
  filterSaunas.forEach(sauna => {
    sauna.classList.remove('offer__card_active');
  })
}

function activateFilterPavilion() {
  filterPavilions.forEach(pavilion => {
    pavilion.classList.add('offer__card_active');
  })  
}

function deactivateFilterPavilion() {
  filterPavilions.forEach(pavilion => {
    pavilion.classList.remove('offer__card_active');
  })
}

function activateFilterChangeHouse() {
  filterChangeHouses.forEach(changeHouse => {
    changeHouse.classList.add('offer__card_active');
  })  
}

function deactivateFilterChangeHouse() {
  filterChangeHouses.forEach(changeHouse => {
    changeHouse.classList.remove('offer__card_active');
  })
}

function activateFilterOutbuilding() {
  filterOutbuildings.forEach(outbuilding => {
    outbuilding.classList.add('offer__card_active');
  })  
}

function deactivateFilterOutbuilding() {
  filterOutbuildings.forEach(outbuilding => {
    outbuilding.classList.remove('offer__card_active');
  })
}


// OFFER  BUTTONS

const buttonHouse = document.querySelector('.button__house');
const buttonSauna = document.querySelector('.button__sauna');
const buttonPavilion = document.querySelector('.button__pavilion');
const buttonChangeHouse = document.querySelector('.button__change-house');
const buttonOutbuilding = document.querySelector('.button__outbuilding');

function activateButton(button) {
  button.classList.add('offer__button_active');
}

function deactivateButton(button) {
  button.classList.remove('offer__button_active');
}

buttonHouse.addEventListener('click', () => {
  deactivateButton(buttonSauna);
  deactivateButton(buttonPavilion);
  deactivateButton(buttonChangeHouse);
  deactivateButton(buttonOutbuilding);
  activateButton(buttonHouse);

  activateFilterHouse();
  deactivateFilterSauna();
  deactivateFilterPavilion();
  deactivateFilterChangeHouse();
  deactivateFilterOutbuilding();
})

buttonSauna.addEventListener('click', () => {
  deactivateButton(buttonHouse);  
  deactivateButton(buttonPavilion);
  deactivateButton(buttonChangeHouse);
  deactivateButton(buttonOutbuilding);
  activateButton(buttonSauna);

  activateFilterSauna();
  deactivateFilterHouse();
  deactivateFilterPavilion();
  deactivateFilterChangeHouse();
  deactivateFilterOutbuilding();
})

buttonPavilion.addEventListener('click', () => {
  deactivateButton(buttonHouse);
  deactivateButton(buttonSauna);
  deactivateButton(buttonChangeHouse);
  deactivateButton(buttonOutbuilding);
  activateButton(buttonPavilion);

  deactivateFilterSauna();
  deactivateFilterHouse();
  activateFilterPavilion();
  deactivateFilterChangeHouse();
  deactivateFilterOutbuilding();
})

buttonChangeHouse.addEventListener('click', () => {
  deactivateButton(buttonHouse);
  deactivateButton(buttonSauna);
  deactivateButton(buttonPavilion);
  deactivateButton(buttonOutbuilding);
  activateButton(buttonChangeHouse);

  deactivateFilterSauna();
  deactivateFilterHouse();
  deactivateFilterPavilion();
  activateFilterChangeHouse();
  deactivateFilterOutbuilding();
})

buttonOutbuilding.addEventListener('click', () => {
  deactivateButton(buttonHouse);
  deactivateButton(buttonSauna);
  deactivateButton(buttonPavilion);
  deactivateButton(buttonChangeHouse);
  activateButton(buttonOutbuilding);

  deactivateFilterSauna();
  deactivateFilterHouse();
  deactivateFilterPavilion();
  deactivateFilterChangeHouse();
  activateFilterOutbuilding();
})

// function filter(category, items) {
//   items.forEach((item) => {
//     const isItemFiltered = !item.classList.contains(category)
//     if (isItemFiltered) {
//       item.classList.add('offer__filter_active')
//     } else {
//       item.classList.remove('offer__filter_active')
//     }
//   })
// }

// offerButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const currentCategory = button.dataset.filter;
//     filter(currentCategory, offerFilters);
//     console.log(currentCategory);
//   })
// })



