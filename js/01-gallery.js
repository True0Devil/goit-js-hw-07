import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Markup ================================================== //

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems
  .map(image => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </div >`;
  })
  .join('');

galleryRef.innerHTML = markup;

// 2.Delegation ================================================ //

galleryRef.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  e.preventDefault();

  const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="300">
`);

  instance.show();

  document.addEventListener('keydown', (eKeyboard) => {
    if (eKeyboard.key === 'Escape') {
      instance.close()
    }
    console.log(eKeyboard.key);
  })
};