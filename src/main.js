import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchImages} from './js/pixabay-api.js';
import { galleryFn } from './js/render-funktions.js';

const form = document.querySelector('form');
const input = document.querySelector('.input-form');
const loader = document.querySelector('.loader');
const gallery =  document.querySelector('.gallery');
const galleryList = document.querySelector('.gallery-js');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
let searchQuery = '';
let totalHits = 0;

const simplebox = new SimpleLightbox('.gallery a', {
    captionsData: "alt", // встановлює підпис
    captionDelay: 250, // встановлює затримку
    doubleTapZoom: 0, // вбирає зум з подвійним кліком
    maxZoom: 0, // вбирає зум
    scrollZoom: false, //вбирає скрол мишою
});


loadMoreBtn.classList.add('is-hidden');


async function generalFunktion (event) {

    loadMoreBtn.classList.add('is-hidden');

    loadMoreBtn.addEventListener('click', clickLoadMore);

    page = 1;

    try {
        event.preventDefault();
        searchQuery = input.value.trim();


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
            loader.classList.add('is-hidden');
            loadMoreBtn.classList.add('is-hidden');
            return;
        }

    loader.classList.remove('is-hidden');

    const response = await fetchImages(searchQuery,page);

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
        return;
    }


    totalHits = response.data.totalHits;
    const markup = response.data.hits.map(el => galleryFn(el)).join('');
    galleryList.innerHTML = markup;
    loader.classList.add('is-hidden');
    simplebox.refresh();

    if(page * 15 >= response.data.totalHits){
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            iconUrl: 'https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp',
            messageSize: '16',
            messageColor: 'white',
            backgroundColor: '#EF4040',
            position: 'topRight',
            width: '302',
            color: 'white',
        });
        loadMoreBtn.classList.add('is-hidden');
        return;
    }
        loadMoreBtn.classList.remove('is-hidden');
        loader.remove('is-hidden');
    

    } catch(error){
        console.log(error);
        }   
        finally{
            form.reset();
            loader.classList.add('is-hidden');
        }
        };

        form.addEventListener('submit', generalFunktion);  


        async function clickLoadMore(event) {
            page++;

            loader.classList.remove('is-hidden');

            try{
                const response2 =  await fetchImages(searchQuery,page);
                loader.classList.add('is-hidden');
                const markup2 = response2.data.hits.map(el => galleryFn(el)).join('');
                galleryList.insertAdjacentHTML( 'beforeend', markup2);

        
                simplebox.refresh();
                form.reset();

            if(page * 15 >= response2.data.totalHits){
                iziToast.info({
                    message: "We're sorry, but you've reached the end of search results.",
                    iconUrl: 'https://symbl-world.akamaized.net/i/webp/c1/d9d88630432cf61ad335df98ce37d6.webp',
                    messageSize: '16',
                    messageColor: 'white',
                    backgroundColor: '#EF4040',
                    position: 'topRight',
                    width: '302',
                    color: 'white',
                    });
                        loadMoreBtn.classList.add('is-hidden');
                    }
                        loadMoreBtn.addEventListener('click', clickLoadMore);
                        smoothScroll();
                            }catch(error){
                                console.log(error);
                        }
                    };

            const smoothScroll = () => {
                const { height: cardHeight } = gallery.getBoundingClientRect();
                window.scrollBy({
                top: cardHeight * 2,
                behavior: 'smooth',
            });
            };

                   
                         
           