import Notiflix from 'notiflix';
import { accessObjects } from './access-objects';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function showLoader() {
  accessObjects.loader.style.display = 'block';
}

export function hideLoader() {
  accessObjects.loader.style.display = 'none';
}
export function showError() {
  Notiflix.Notify.failure('Error');
}
