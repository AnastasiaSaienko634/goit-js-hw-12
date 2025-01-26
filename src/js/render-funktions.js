// // Описаний у документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery-js');

export const galleryFn = ImgInfo => {
    
    return `<li class="card">
    <a class="lagre-foto" href="${ImgInfo.largeImageURL}">
    <img class="photo" src='${ImgInfo.webformatURL}' alt='${ImgInfo.tags}' width='360' height='160'>
    </a>
    <div class="text">
    <p class="tags">Likes<span class="positions">${ImgInfo.likes}</span></p>
    <p class="views">Views<span class="positions">${ImgInfo.views}</span></p>
    <p class="comments">Comments<span class="positions">${ImgInfo.comments}</span></p>
    <p class="downloads">Downloads<span class="positions">${ImgInfo.downloads}</span></p>
    </div>
    </li>`
};


export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
  }

// webformatURL,largeImageURL,tags,likes,views,comments,downloads