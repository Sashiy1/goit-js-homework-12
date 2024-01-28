import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const elementsContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('.loading-button');
const BASE_URL = 'https://pixabay.com/api/';
const queryParams = {
  query: '',
  apiKey: '41967229-af64f083e47c21f795887158a',
  orientation: 'horizontal',
  image_type: 'photo',
  safesearch: 'true',
  per_page: 3,
  page: 1,
};
const lightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  elementsContainer.innerHTML = '';
  queryParams.page = 1;
  queryParams.query = event.currentTarget.elements.serching.value.trim();
  loader.classList.remove('hidden');
  if (!queryParams.query && queryParams.query !== '') {
    return;

  }
  try {
    const { hits, totalHits } = await searchPictures(queryParams);
    queryParams.maxPage = Math.ceil(totalHits / queryParams.per_page);
    createMarkup(hits, totalHits);
    
    loader.classList.add('hidden');

    if (hits.length > 0 && hits.length !== totalHits) {
      show(loadButton);
      loadButton.addEventListener("click", handleLoading);

    } else {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
      });
      hide(loadButton);

    }
  } catch (error) {
    console.log(error);

  
  } finally {
    form.reset();

  }
}

async function searchPictures({ query, page = 1, per_page }) {
  return await axios
    .get(`${BASE_URL}`, {
      params: {
        key: '41967229-af64f083e47c21f795887158a',
        q: query,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: 'true',
        per_page,
        page,
      },
    })
    .then(({ data }) => data);

}

function createMarkup(hits) {
  const markup = hits.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) =>
      `<li class="gallery-item">
         <a class="gallery-link" href="${largeImageURL}">
         <img class="gallery-image"
         src="${webformatURL}"
         alt="${tags}" /></a>
         <container class="details-container">
         <div class="details">
         <h3 class="details-title">Likes</h3>
         <p class="details-text">${likes}</p>
         </div>
         <div class="details">
         <h3 class="details-title">Views</h3>
         <p class="details-text">${views}</p>
         </div>
         <div class="details">
         <h3 class="details-title">Comments</h3>
        <p class="details-text">${comments}</p>
        </div>
        <div class="details">
        <h3 class="details-title">Downloads</h3>
        <p class="details-text">${downloads}</p>
        </div></container> 
        </li>`
  );
  elementsContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
  
}

async function handleLoading() {
  queryParams.page += 1;
  disable();

  try {
    const { hits } = await searchPictures(queryParams); // робимо запит на наступну сторінку новин
    createMarkup(hits)

  } catch (err) {
    console.log(err);
  } finally {
    enable()
    if (queryParams.page === queryParams.maxPage) {
      hide();
      loadButton.removeEventListener("click", handleLoading);
    }
  }

}

function hide() {
  loadButton.classList.add('hidden');
}

function show() {
  loadButton.classList.remove('hidden');
}

function enable() {
  loader.classList.add('hidden');
  loadButton.disabled = false;
}

function disable() {
  loader.classList.remove('hidden');
  loadButton.disabled = true;
}
