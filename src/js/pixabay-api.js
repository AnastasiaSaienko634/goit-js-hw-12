import axios from 'axios';
// const ul = document.querySelector('.gallery-js');
// const key = '47906574-737e3153d4e9e6f9b55134ae6';
// const url = 'https://pixabay.com/api/';





export function fetchImages(searchQuery, currentPage){
    const axiousParams = {
        params: {
            key: '47906574-737e3153d4e9e6f9b55134ae6',
            q: searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: currentPage,
        },
    };
     return axios.get('https://pixabay.com/api/',axiousParams);
    }
    


