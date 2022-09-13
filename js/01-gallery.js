import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(createGalaryMarcup(galleryItems));

const imgConteiner = document.querySelector('.gallery');
const galleryMarcup = createGalaryMarcup(galleryItems);
console.log(imgConteiner)
imgConteiner.insertAdjacentHTML('beforeend', galleryMarcup)
imgConteiner.addEventListener('click', onPicturesClick)

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

function onPicturesClick(event){
    const noEventGallary = event.target.classList.contains('.gallery__item');
    //если действие происходит не в нашем диве == ничего не происходит
    if(!noEventGallary){
        return;
    }

const bigIMG = document.querySelector('.gallery__image')
    const myBigImg = bigIMG.dataset.source;

const functionEl = event.target;
const parantGalary = functionEl.clousest('.gallery__image');
console.log(parantGalary)
 myBigImg.classList.remove(myBigImg)

if(myBigImg){
   
}
parantGalary.classList.add(myBigImg)

}




    bigIMG.addEventListener('click', onBigpictures)
    
function onBigpictures(event){
    
    


}