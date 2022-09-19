import { galleryItems } from './gallery-items.js';


const imgConteiner = document.querySelector('.gallery');
const galleryMarcup = createGalaryMarcup(galleryItems);
console.log(imgConteiner)
imgConteiner.insertAdjacentHTML('beforeend', galleryMarcup)

imgConteiner.addEventListener('click', onPicturesClick)

function createGalaryMarcup(galleryItems){
    return galleryItems
    .map(({ preview, original, description }) => {
      return` 
<div class="gallery__item">
  <a class="gallery__link" href="${ original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${ original}"
      alt="${description}"
    />
  </a>
</div>
`
}).join('')

}



function onPicturesClick(event){
  event.preventDefault();

 const noEventGallary = event.target.nodeName;
    
  if (noEventGallary !== 'IMG'){
        return;
    }

//     const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
// `)
//  }

 const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
   `, { onShow: () => { document.addEventListener('keydown',onInstanceclik)},
   onClose:()=> {document.removeEventListener('keydown',onInstanceclik)}   }
   )
   instance.show()
      function onInstanceclik(event){
if(event.code === "Escape"){
instance.close()
}
}}