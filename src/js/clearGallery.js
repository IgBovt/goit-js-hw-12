import { getRefs } from './refs';

export function clearGallery() {
  const refs = getRefs();
  return (refs.container.innerHTML = '');
}
