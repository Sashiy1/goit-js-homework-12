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
  per_page: 40,
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
  queryParams.query =
    event.currentTarget.elements.serching.value.trim();
  
  if (!queryParams.query) {
    return;
  }
  try {
    const {hits, totalHits} = await searchPictures(queryParams);
  
   console.log({hits, totalHits})
  
   console.log("ayay")

   queryParams.maxPage = Math.ceil(totalHits / queryParams.per_page);

   console.log("bbbb")
   console.log(queryParams)
  

  } catch (error) {
    console.log(error)
  }

  
}

async function searchPictures({ query, page = 1, per_page }) {
 
    return await axios.get(`${BASE_URL}`, {
      params: {
        
        key: '41967229-af64f083e47c21f795887158a',
        q: query,
        orientation: 'horizontal',
        image_type: 'photo',
        safesearch: 'true',
        per_page,
        page,
        
      },
    }).then(({ data }) => data);
    
}

// function onError() {
//   loader.classList.add('hidden');
//   elementsContainer.innerHTML = '';
//   iziToast.show({
//     message:
//       'Sorry, there are no images matching your search query. Please try again!',
//     position: 'topRight',
//     backgroundColor: '#EF4040',
//     titleColor: '#FFFFFF',
//     messageColor: '#FFFFFF',
//   });
// }
