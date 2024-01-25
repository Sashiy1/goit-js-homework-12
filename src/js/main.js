// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

const form = document.querySelector('.form');
const elementsContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader')



form.addEventListener('submit', handleSubmit);

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41967229-af64f083e47c21f795887158a';
const ORIENTATION = 'horizontal';
const IMAGE_TYPE = 'photo';
const SAFESEARCH = 'true';


function fetchPictures(searchingItem) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchingItem}&orientation=${ORIENTATION}&image_type=${IMAGE_TYPE}&safesearch=${SAFESEARCH}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}


function handleSubmit(event) {
  event.preventDefault();
  loader.classList.remove('hidden')

  const inputValue = event.currentTarget.elements.serching.value;

  fetchPictures(inputValue)
    .then(createMarkup)
    .catch(onFetchError)
    .finally(() => {
      loader.classList.add('hidden')
      form.reset()
    });
}

function createMarkup({ hits }) {
  const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  if (hits.length === 0) {
    onFetchError();
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
        ` <li class="gallery-item">
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
    //!!!! Oter data form {hits}  !!!!
    // 


    elementsContainer.innerHTML = markup.join('');
    lightbox.refresh();
  }

 
}

function onFetchError(error) {
  console.log(error)
  iziToast.show({
       message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          titleColor: '#FFFFFF',
          messageColor: '#FFFFFF',
  });
}
