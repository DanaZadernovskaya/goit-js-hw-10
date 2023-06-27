import { showError } from './ux';

export async function fetchBreeds() {
  return fetch(
    'https://api.thecatapi.com/v1/breeds?api_key=live_ZVicieLEy4HcRqObQEb2BO2VkG9UifclM8wHG7MTX2MpeTn4QXVlTsBbmrNteMAs'
  )
    .catch(er => showError())
    .then(res => res.json());
}
export async function fetchCatByBreed(id) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=live_ZVicieLEy4HcRqObQEb2BO2VkG9UifclM8wHG7MTX2MpeTn4QXVlTsBbmrNteMAs&breed_ids=${id}`
  )
    .catch(er => showError())
    .then(res => res.json());
}
