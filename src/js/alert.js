import err from '../img/2.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function getAlert() {
  return iziToast.warning({
    backgroundColor: '#EF4040',
    titleColor: '#fff',
    messageColor: '#fff',
    iconUrl: `${err}`,
    position: 'topRight',
    title: 'SORRY',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

export function getErrorAlert() {
  return iziToast.warning({
    backgroundColor: '#EF4040',
    titleColor: '#fff',
    messageColor: '#fff',
    iconUrl: `${err}`,
    position: 'center',
    title: 'ERROR',
    message: 'SERVER REQUEST IS WRONG',
  });
}

export function getWarningAlert() {
  iziToast.warning({
    title: 'Caution',
    message: 'You forgot important data',
    position: 'center',
  });
}
