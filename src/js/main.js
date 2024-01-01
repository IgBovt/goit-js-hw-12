import { getRefs } from './refs';
import { getAlert, getErrorAlert } from './alert';
import { addLoader, removeLoader } from './loaders';
import { clearGallery } from './clearGallery';
import { initializeLightbox } from './simpleLightBox';

const KEY = '41531809-f9219a766117007ff116a3463';
const refs = getRefs();
refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  addLoader();
  clearGallery();
  const query = e.currentTarget.elements.delay.value.trim();
  getPhoto(query);
  e.currentTarget.reset();
}

function getPhoto(query) {
  fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=21`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      if (images.hits.length <= 0) {
        getAlert();
      }
      createMarkup(images);
      removeLoader();
      initializeLightbox();
      refs.pagBtn.classList.add('btn-showed');
    })
    .catch(error => getErrorAlert());
}

function createMarkup(images) {
  return (refs.container.innerHTML = images.hits
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
    .join(''));
}
