import Notiflix from "notiflix";
import SlimSelect from 'slim-select'
function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds?api_key=live_ZVicieLEy4HcRqObQEb2BO2VkG9UifclM8wHG7MTX2MpeTn4QXVlTsBbmrNteMAs')

}

function fetchCatByBreed (id) {
    return fetch('https://api.thecatapi.com/v1/images/search?api_key=live_ZVicieLEy4HcRqObQEb2BO2VkG9UifclM8wHG7MTX2MpeTn4QXVlTsBbmrNteMAs&breed_ids='+id)

}

 function showLoader() {
      const loader = document.querySelector('.loader');
      loader.style.display = 'block';
    }

    function hideLoader() {
      const loader = document.querySelector('.loader');
      loader.style.display = 'none';
} 
    function showError() {
      Notiflix.Notify.error("Error");
    }

addEventListener("DOMContentLoaded", (event) => { 
    
    const select = document.getElementById("select");
    console.log(select)
    select.addEventListener("change", (event) => {

        showLoader();
        fetchCatByBreed(event.target.value).catch(er => showError()).then(res => res.json()).then(res => {
            hideLoader();
            const info = res[0].breeds[0];

            document.getElementsByClassName("cat-info")[0].style.display = "flex";
            const img = document.getElementsByClassName("cat-image")[0];
            const name = document.getElementsByClassName("cat-name")[0];
            const details = document.getElementsByClassName("cat-details")[0];
            const temperament = document.getElementsByClassName("cat-temperament")[0]; console.log(res);

            img.src = `https://cdn2.thecatapi.com/images/${info.reference_image_id}.jpg`;
            name.textContent = info.name;
            details.textContent = info.description;
            temperament.textContent = info.temperament;
        });
    });
    showLoader(); 
    fetchBreeds().catch(er => showError()).then(res => res.json())
        .then(res => {
            select.append(...res.map(el => {
                hideLoader();
                const option = document.createElement("option")
                option.value = el.id;
                option.textContent = el.name;
                return option
            }))
         new SlimSelect({
        select: '#select',
      });}  );});

