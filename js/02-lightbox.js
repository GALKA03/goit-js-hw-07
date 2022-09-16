import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const imgConteiner = document.querySelector('ul');
const galleryMarcup = createGalaryMarcup(galleryItems);
console.log(imgConteiner)
imgConteiner.insertAdjacentHTML('beforeend', galleryMarcup)

// //Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
function createGalaryMarcup(galleryItems){
    return galleryItems
    .map(({ preview, original, description }) => {
      return` 
      <a class="gallery__item" href="${ original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title= ${description}/>
</a>
`}).join();
}
const clickLinck = document.querySelector('.gallery__image')
console.log(clickLinck.src)

imgConteiner.addEventListener('click', onPicturesClick)
function onPicturesClick(event){
  event.preventDefault();

 const noEventGallary = event.target.nodeName;
     //если действие происходит не в нашем диве == ничего не происходит 
  if (noEventGallary !== 'IMG'){
        return;
    }
console.log(noEventGallary)

var lightbox = new SimpleLightbox('.gallery a', { animationSpeed:250 });
console.log(lightbox)
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
        // do something…
    });
}

    //let lightbox = new SimpleLightbox('.gallery a', {captionDelay:250});
    
    //lightbox.on('shown.simplelightbox', function () {
    //   console.log(lightbox)  


    // });
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





