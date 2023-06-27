import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from '../src/js/cat-api';
import { accessObjects } from '../src/js/access-objects';
import { fillCatInfo } from './js/fill-cat-info';
import { showLoader, hideLoader } from './js/ux';

addEventListener('DOMContentLoaded', event => {
  accessObjects.select.addEventListener('change', event => {
    showLoader();
    fetchCatByBreed(event.target.value).then(res => {
      hideLoader();
      fillCatInfo(res[0]?.breeds[0]);
    });
  });
  showLoader();
  fetchBreeds().then(res => {
    select.append(
      ...res.map(el => {
        hideLoader();
        const option = document.createElement('option');
        option.value = el.id;
        option.textContent = el.name;
        return option;
      })
    );
    new SlimSelect({
      select: '#select',
    });
  });
});
