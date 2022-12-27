import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryCards = createGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector(`.gallery`);

galleryContainer.insertAdjacentHTML(`beforeend`, galleryCards);

function createGalleryMarkup(galleryItems) {
  let i = 0;
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}" >
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
      </a>
    
        `;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});