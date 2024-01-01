import { getRefs } from './refs';

const refs = getRefs();

export function addLoader() {
  return refs.span.classList.add('loader');
}
export function removeLoader() {
  return refs.span.classList.remove('loader');
}
