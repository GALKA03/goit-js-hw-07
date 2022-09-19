import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(createGalaryMarcup(galleryItems));

const imgConteiner = document.querySelector('.gallery');
const galleryMarcup = createGalaryMarcup(galleryItems);
console.log(imgConteiner)
imgConteiner.insertAdjacentHTML('beforeend', galleryMarcup)


//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
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

// const bigIMG = document.querySelector('[data-source="original"]')
// console.log('я большая картинка', bigIMG)

imgConteiner.addEventListener('click', onPicturesClick)
function onPicturesClick(event){
  event.preventDefault();

 const noEventGallary = event.target.nodeName;
     //если действие происходит не в нашем диве == ничего не происходит 
  if (noEventGallary !== 'IMG'){
        return;
    }

//     const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
// `)
//  }
// С этой функцией все равно не получается.!!!
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