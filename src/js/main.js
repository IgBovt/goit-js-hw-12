import { getRefs } from './refs';
import {
  addLoader,
  removeLoader,
  addPaginationBtn,
  removePaginationBtn,
  addSearchText,
  removeSearchText,
} from './loaders&buttons';
import { clearGallery } from './clearGallery';
import { NewApiService } from './backend-service';
import { createMarkup } from './createMarkup';
import {
  getAlert,
  getWarningAlert,
  getInfoAlert,
  getErrorAlert,
} from './alert';
import { initializeLightbox } from './simpleLightBox';

const refs = getRefs();
const newApiService = new NewApiService();
refs.form.addEventListener('submit', onSearch);
refs.pagBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  removePaginationBtn();
  removeSearchText();
  addLoader();
  clearGallery();
  newApiService.resetPage();
  newApiService.resetTotal();
  newApiService.query = e.currentTarget.elements.delay.value.trim();

  if (newApiService.query === '') {
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

function makeGallery() {
  newApiService
    .getPhoto()
    .then(images => {
      createMarkup(images);
      removeLoader();
      initializeLightbox();
      refs.textRequest.textContent = `"${newApiService.searchQuery}"`;
      refs.totalCount.textContent = `"${newApiService.total}"`;

      if (newApiService.total > 40) {
        addPaginationBtn();
      }
      if (refs.container.childElementCount <= 0) {
        getAlert();
      }
      if (
        (newApiService.page - 1) * 40 >= newApiService.total &&
        refs.container.childElementCount > 1 &&
        newApiService.page > 2
      ) {
        removePaginationBtn();
        getInfoAlert();
      }
      if (newApiService.page > 2) {
        window.scrollBy({
          top:
            refs.container.firstElementChild.getBoundingClientRect().height * 2,
          behavior: 'smooth',
        });
      }
    })
    .catch(getErrorAlert);
}
