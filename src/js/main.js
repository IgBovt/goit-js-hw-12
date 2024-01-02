import { getRefs } from './refs';
import {
  addLoader,
  removeLoader,
  addPaginationBtn,
  removePaginationBtn,
} from './loaders&buttons';
import { clearGallery } from './clearGallery';
import { NewApiService } from './backend-service';
import { createMarkup } from './createMarkup';
import { getAlert, getWarningAlert } from './alert';
import { initializeLightbox } from './simpleLightBox';

const refs = getRefs();
refs.form.addEventListener('submit', onSearch);
refs.pagBtn.addEventListener('click', onLoadMore);
const newApiService = new NewApiService();

function makeGallery() {
  newApiService.getPhoto().then(images => {
    createMarkup(images);
    removeLoader();
    initializeLightbox();
    if (refs.container.childElementCount > 19) {
      addPaginationBtn();
    }
    if (refs.container.childElementCount <= 0) {
      getAlert();
      removeLoader();
    }
  });
}

function onSearch(e) {
  e.preventDefault();
  removePaginationBtn();
  addLoader();
  clearGallery();
  newApiService.resetPage();
  newApiService.query = e.currentTarget.elements.delay.value.trim();

  if (newApiService.query === '') {
    return getWarningAlert(), removeLoader(), removePaginationBtn();
  }
  makeGallery();
  e.currentTarget.reset();
}

function onLoadMore() {
  addLoader();
  makeGallery();
}
