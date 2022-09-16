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
`;

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
console.log(noEventGallary)
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
console.log(instance.show());

  //  instance.close(() => {
  //   console.log('lightbox not visible anymore')

  //  })
}

window.addEventListener('keydown', onClosePictores);

function onClosePictores(event){
  const instance = basicLightbox.create()
if (event.code === "Escape"){
instance.close();
 }
}
//
// imgConteiner.addEventListener('keydown', (event) => {
//   if(event.code === "Escape"){ 
//     }
//   })
 
 


//imgConteiner.addEventListener('keydown', onClosePictores);




// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)
// instance.show()


// const functionEl = event.target;
// const parantGalary = functionEl.clousest('.gallery__image');
// console.log(parantGalary)
//  myBigImg.classList.remove(myBigImg)

// if(myBigImg){
   
// }
// parantGalary.classList.add(myBigImg)

 




//     bigIMG.addEventListener('click', onBigpictures)
    
// function offPictures(event){
    
    


// }