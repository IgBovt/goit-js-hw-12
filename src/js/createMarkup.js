import { getRefs } from './refs';
import { removeLoader } from './loaders';
import { initializeLightbox } from './simpleLightBox';
import { NewApiService } from './backend-service';

const refs = getRefs();
const newApiService = new NewApiService();

export function createMarkup(images) {
  const refs = getRefs();
  if (images.hits.length <= 0) {
    return removePaginationBtn(), removeLoader();
  }
  const markup = images.hits
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
  refs.container.insertAdjacentHTML('beforeend', markup);
  initializeLightbox();
  addPaginationBtn();
  removeLoader();
}

export function addPaginationBtn() {
  refs.pagBtn.classList.add('btn-showed');
}

export function removePaginationBtn() {
  refs.pagBtn.classList.remove('btn-showed');
}
