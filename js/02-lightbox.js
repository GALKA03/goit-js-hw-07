import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const imgConteiner = document.querySelector('ul');
  const galleryMarcup = createListGaleryMarcup(galleryItems);
 console.log(imgConteiner)
 imgConteiner.insertAdjacentHTML('beforeend', galleryMarcup)
 imgConteiner.addEventListener('click', onClick)

// //Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
function createListGaleryMarcup (galleryItems){
    return galleryItems
    .map(({ preview, original, description }) => { 
    return ` 
  <a class="gallery__item" href="${ original}">
<img class="gallery__image" src="${preview}" alt="${description}" title ="${description}"/>
</a>
`}).join('')
}


const clickLinck = document.querySelector('.gallery__image')
console.log(clickLinck.href)
clickLinck.addEventListener('click',onClick);

function onClick (event){
    event.preventDefault();
    const clickFunctions = event.target.nodeName;
 
    if(clickFunctions !== 'IMG'){
        return
        
    }
    let lightbox = new SimpleLightbox('.gallery a', {captionDelay:250});
    console.log(lightbox)
    lightbox.on('shown.simplelightbox', function () {});
    //gallery.close;;
//     let gallery = new SimpleLightbox('.gallery a',{docClose:true});
// gallery.on('error.simplelightbox', function () {
//     gallery.close// do something…
// });
    
// ;
   


//     let gallery = $('.gallery a').simpleLightbox();
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });

}
