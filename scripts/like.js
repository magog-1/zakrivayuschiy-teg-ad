const popup = document.getElementById("popup-id");
const openButton = document.querySelector(".button__popup-open");
const closeButton = document.querySelector(".button__popup-close");

if (openButton) {
  openButton.addEventListener("click", (event) => {
    event.preventDefault();
    popup.showModal();
  });
}

if (closeButton) {
  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    popup.close();
  });
}

if (popup) {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.close();
    }
  });
}

const likeHeartArray = document.querySelectorAll(".like-icon");
const likeButtonArray = document.querySelectorAll(".card__like-button");
const iconButtonArray = document.querySelectorAll(".card__icon-button");

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener("click", (event) => {
    event.preventDefault();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    toggleIsLiked(likeHeartArray[index], button);
  });
});

function toggleIsLiked(heart, button) {
  if (!heart || !button) return;
  heart.classList.toggle("is-liked");
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  const textElement = button.querySelector(".button__text");
  if (!textElement) return;

  setTimeout(() => {
    textElement.textContent = heart.classList.contains("is-liked")
      ? "Unlike"
      : "Like";
  }, 500);
}
