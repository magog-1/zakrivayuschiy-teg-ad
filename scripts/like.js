/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
    return false;
  });
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleIsLiked(likeHeartArray[index], button);
    return false;
  });
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}

const popup = document.getElementById('popup-id');
const popupOpenButton = document.querySelector('.button__popup-open');
const popupCloseButton = document.querySelector('.button__popup-close');

if (popupOpenButton) {
  popupOpenButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.showModal();
    return false;
  });
}

if (popupCloseButton) {
  popupCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.close();
    return false;
  });
}
