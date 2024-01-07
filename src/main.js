import { getRefs } from './js/refs';
import {
  addLoader,
  removeLoader,
  addPaginationBtn,
  removePaginationBtn,
  removeSearchText,
} from './js/loaders&buttons';
import { clearGallery } from './js/clearGallery';
import { PixabayAPI } from './js/backend-service';
import { createMarkup } from './js/createMarkup';
import {
  getAlert,
  getWarningAlert,
  getInfoAlert,
  getErrorAlert,
} from './js/alert';
import { initializeLightbox } from './js/simpleLightBox';

const refs = getRefs();
const pixabayAPI = new PixabayAPI();
refs.form.addEventListener('submit', onSearch);
refs.pagBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  removePaginationBtn();
  removeSearchText();
  addLoader();
  clearGallery();
  pixabayAPI.resetPage();
  pixabayAPI.resetTotal();
  pixabayAPI.query = e.currentTarget.elements.delay.value.trim();

  if (pixabayAPI.query === '') {
    return (
      getWarningAlert(),
      removeLoader(),
      removePaginationBtn(),
      removeSearchText()
    );
  }
  makeGallery();
  e.currentTarget.reset();
}

function onLoadMore() {
  addLoader();
  makeGallery();
}

async function makeGallery() {
  try {
    const images = await pixabayAPI.getPhoto();
    createMarkup(images);
    removeLoader();
    initializeLightbox();
    refs.textRequest.textContent = `"${pixabayAPI.searchQuery}"`;
    refs.totalCount.textContent = `"${pixabayAPI.total}"`;

    if (pixabayAPI.total > 40) {
      addPaginationBtn();
    }
    if (refs.container.childElementCount <= 0) {
      getAlert();
    }
    if (
      (pixabayAPI.page - 1) * 40 >= pixabayAPI.total &&
      refs.container.childElementCount > 1 &&
      pixabayAPI.page > 2
    ) {
      removePaginationBtn();
      getInfoAlert();
    }
    if (pixabayAPI.page > 2) {
      window.scrollBy({
        top:
          refs.container.firstElementChild.getBoundingClientRect().height * 2,
        behavior: 'smooth',
      });
    }
  } catch {
    getErrorAlert();
  }
}
