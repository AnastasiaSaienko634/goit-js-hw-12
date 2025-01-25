import axios from 'axios';
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import { galleryFn } from './js/render-funktions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {fetchImages} from './js/pixabay-api.js';
const form = document.querySelector('form');
const input = form.querySelector('.input-form');
const loader = document.querySelector('.loader');
const gallery =  document.querySelector('.gallery');
const ul = document.querySelector('.gallery-js');
const loadMoreBtn = document.querySelector('.load-more');


let page = 1;
loadMoreBtn.classList.add('is-hidden');

const generalFunktion = async (event) => {
    loadMoreBtn.classList.add('is-hidden');

try {
    event.preventDefault();
    let searchQuery = input.value.trim();
    console.log(searchQuery);

    if(searchQuery === '') {
        iziToast.show({
            message: 'Please fill in the field',
            iconUrl: 'https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp',
            messageSize: '16',
            messageColor: 'white',
            backgroundColor: '#EF4040',
            position: 'topRight',
            width: '302',
            color: 'white',
        });
        gallery.innerHTML = '';
        searchQuery.reset();
        loader.classList.add('is-hidden');
        loadMoreBtn.classList.add('is-hidden');
        return;
    }


    page = 1;
    loadMoreBtn.classList.add('is-hidden');
    const response = await fetchImages(searchQuery,page);
    loader.classList.remove('is-hidden');

  
    

            if(response.data.hits.length === 0){
                loader.classList.add('is-hidden');
                iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    iconUrl: 'https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp',
                    messageSize: '16',
                    messageColor: 'white',
                    backgroundColor: '#EF4040',
                    position: 'topRight',
                    width: '302',
                    color: 'white',
                });
                gallery.innerHTML = '';
                searchQuery.reset();
                return;
            }
            const markup = response.data.hits.map(el => galleryFn(el)).join('');
            ul.innerHTML = markup;
            loader.classList.add('is-hidden');
            page = 1;
            const simplebox = new SimpleLightbox('.gallery a', {
                captionsData: "alt", // встановлює підпис
                captionDelay: 250, // встановлює затримку
                doubleTapZoom: 0, // вбирає зум з подвійним кліком
                maxZoom: 0, // вбирає зум
                scrollZoom: false, //вбирає скрол мишою
            });
            simplebox.refresh();

            function clickLoadMore() {
            }

                if(!page > 0){
                return;
            }
            loadMoreBtn.classList.remove('is-hidden');
            loadMoreBtn.addEventListener('click', clickLoadMore);
        

            


        } catch (err) {
            console.log(err);
          }
        }
    //         if(data.total_pages > 1){
    //             loadMoreBtn.classList.remove('is-hidden');
    //             loadMoreBtn.addEventListener('click', clickLoadMore);
    //         }

           
    //         ul.innerHTML = markup;
        
    
         
       
       
    //         loader.style.display = 'none';
    //         iziToast.error({
    //             message: 'Error fetching images. Please try again later.',
    //             position: 'topRight',
    //           });
    //           console.error(error);
        
       
    //         loader.classList.add('is-hidden');
        
    //     form.reset();
    //     gallery.innerHTML = '';
    // }


    form.addEventListener('submit', generalFunktion);