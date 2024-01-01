import { getRefs } from './refs';
import { removeLoader } from './loaders';
import { initializeLightbox } from './simpleLightBox';

const refs = getRefs();

export function createMarkup(images) {
  const refs = getRefs();

  refs.container.innerHTML = images.hits
    .map(
      img =>
        `   <li>
            <a class="link" href="${img.largeImageURL}">
            <img
                class="img"
                src="${img.webformatURL}"
                alt="${img.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${img.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${img.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${img.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${img.downloads}</p>
                </div>
            </div> </a
            >
            </li>`
    )
    .join('');
  initializeLightbox();
  addPaginationBtn();
  removeLoader();
  if (refs.container.childElementCount === 0) {
    removePaginationBtn();
  }
}

export function addPaginationBtn() {
  refs.pagBtn.classList.add('btn-showed');
}

export function removePaginationBtn() {
  refs.pagBtn.classList.remove('btn-showed');
}
