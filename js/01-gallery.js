import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryCards = createGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector(`.gallery`);
const galleryMain = document.querySelector(`.gallery`);
let instance;

galleryMain.addEventListener(`click`, openPopup);
galleryContainer.insertAdjacentHTML(`beforeend`, galleryCards);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" >
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `;
    })
    .join("");
}

function openPopup(event) {
  const currentActiveImage = event.target.closest(`.gallery__image`);
  const bigImageSRC = currentActiveImage.dataset.source;

  if (event.target.classList != `gallery__image`) {
    return;
  }
  changePopupSRC(bigImageSRC);
  escapePopupCloser();
}

function changePopupSRC(src) {
  instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
`);
  instance.show();
}

function escapePopupCloser() {
  document.addEventListener(`keydown`, escapePopupListener);
}

function escapePopupListener(e) {
  if (e.code == "Escape") {
    instance.close();
  }
  document.removeEventListener(`keydown`, escapePopupListener);
}
