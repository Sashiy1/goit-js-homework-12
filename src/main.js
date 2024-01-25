// Описаний у документації
import axios from 'axios';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';



const form = document.querySelector('.form');
const elementsContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '41967229-af64f083e47c21f795887158a',
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: 'true',
  },
});




async function handleSubmit(event) {
  event.preventDefault();
  loader.classList.remove('hidden');

  const inputValue = event.currentTarget.elements.serching.value;

  try {
    const data = await searchPictures(inputValue);
    createMarkup(data);
  } catch {
    onError();
  } finally {
    loader.classList.add('hidden');
    form.reset();
  }
}

async function searchPictures(searchingItem) {
  try {

    const resp = await instance.get('/', {
      params: {
        q: searchingItem,
      },
    });

    return resp.data;
    
  } catch (error) {
    console.error(error);
    
  }
  
}

function createMarkup({ hits }) {
  const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  if (hits.length === 0) {
    onError();
  } else {
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

    elementsContainer.innerHTML = markup.join('');
    lightbox.refresh();
  }
}

function onError(error) {
  console.log(error);
  elementsContainer.innerHTML = '';
  iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    backgroundColor: '#EF4040',
    titleColor: '#FFFFFF',
    messageColor: '#FFFFFF',
  });
}
