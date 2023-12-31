import { getRefs } from './refs';

const refs = getRefs();

export function addLoader() {
  return refs.span.classList.add('loader');
}
export function removeLoader() {
  return refs.span.classList.remove('loader');
}
export function addPaginationBtn() {
  refs.pagBtn.classList.add('btn-showed');
}

export function removePaginationBtn() {
  refs.pagBtn.classList.remove('btn-showed');
}
export function addSearchText() {
  refs.searchText.classList.add('is-showed');
}
export function removeSearchText() {
  refs.searchText.classList.remove('is-showed');
}
