const gallery = document.querySelector('.gallery-js');

export function galleryFn (ImgInfo) {
    
    return `<li class="card">
    <a class="lagre-foto" href="${ImgInfo.largeImageURL}">
    <img class="photo" src='${ImgInfo.webformatURL}' alt='${ImgInfo.tags}' width='360' height='160'>
    </a>
    <div class="text">
    <p class="tags"><svg class="icon icon-heart" width="20" heigth="20"><use href="../icon/symbol-defs.svg#icon-heart"></use></svg><span class="text-card">Likes</span><span class="positions">${ImgInfo.likes}</span></p>
    <p class="views"><svg class="icon icon-visibility" width="20" heigth="20"><use href="../icon/symbol-defs.svg#icon-visibility"></use></svg><span class="text-card">Views</span><span class="positions">${ImgInfo.views}</span></p>
    <p class="comments"><svg class="icon icon-comment" width="20" heigth="20"><use href="../icon/symbol-defs.svg#icon-comment"></use></svg><span class="text-card">Comments</span><span class="positions">${ImgInfo.comments}</span></p>
    <p class="downloads"><svg class="icon icon-cloud-download" width="20" heigth="20"><use href="../icon/symbol-defs.svg#icon-cloud-download"></use></svg><span class="text-card">Downloads</span><span class="positions">${ImgInfo.downloads}</span></p>
    </div>
    </li>`
};


