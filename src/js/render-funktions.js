const gallery = document.querySelector('.gallery-js');

export function galleryFn (ImgInfo) {
    
    return `<li class="card">
    <a class="lagre-foto" href="${ImgInfo.largeImageURL}">
    <img class="photo" src='${ImgInfo.webformatURL}' alt='${ImgInfo.tags}' width='360' height='160'>
    </a>
    <div class="text">
    <p class="tags"><span class="text-card">Likes</span><span class="positions">${ImgInfo.likes}</span></p>
    <p class="views"><span class="text-card">Views</span><span class="positions">${ImgInfo.views}</span></p>
    <p class="comments"><span class="text-card">Comments</span><span class="positions">${ImgInfo.comments}</span></p>
    <p class="downloads"><span class="text-card">Downloads</span><span class="positions">${ImgInfo.downloads}</span></p>
    </div>
    </li>`
};


