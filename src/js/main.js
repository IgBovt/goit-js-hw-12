import { getRefs } from './refs';
import { addLoader, removeLoader } from './loaders';
import { clearGallery } from './clearGallery';
import { NewApiService } from './backend-service';
import { createMarkup, removePaginationBtn } from './createMarkup';
import { getWarningAlert } from './alert';

const refs = getRefs();
refs.form.addEventListener('submit', onSearch);
refs.pagBtn.addEventListener('click', onLoadMore);

const newApiService = new NewApiService();

function onSearch(e) {
  e.preventDefault();
  addLoader();
  clearGallery();
  newApiService.resetPage();
  newApiService.query = e.currentTarget.elements.delay.value.trim();
  if (newApiService.query === '') {
    return getWarningAlert(), removeLoader(), removePaginationBtn();
  }
  newApiService.getPhoto().then(images => createMarkup(images));
  e.currentTarget.reset();
}

function onLoadMore() {
  addLoader();
  newApiService.getPhoto().then(images => createMarkup(images));
}
