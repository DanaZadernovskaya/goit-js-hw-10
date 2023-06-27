import { accessObjects } from './access-objects';
import { showError } from './ux';

export const fillCatInfo = info => {
  if (info) {
    accessObjects.catInfo.style.display = 'flex';
    accessObjects.catInfo.innerHTML = `
             <img src=https://cdn2.thecatapi.com/images/${info.reference_image_id}.jpg class="cat-image" alt="">
    <div>
      <h3 class="cat-name">${info.name}</h3>
      <p class="cat-details">${info.description}</p>
      <p> <b> Temperament: </b> <span class="cat-temperament">${info.temperament}</span></p>
`;
  } else {
    accessObjects.catInfo.style.display = 'none';
    showError();
  }
};
