let positionSliderBestMovies = 0;
let positionSliderCategory1 = 0;
let positionSliderCategory2 = 0;
let positionSliderCategory3 = 0;
const positionslidersMax = 2;

const elementSliderBestMovies = document.querySelector('section.sliderBestMovies');
const elementAllContainerImagesSliderBestMovies = elementSliderBestMovies.querySelectorAll('img');
const elementSliderCategory1 = document.querySelector('section.sliderCategory1');
const elementAllContainerImagesSliderCategory1 = elementSliderCategory1.querySelectorAll('img');
const elementSliderCategory2 = document.querySelector('section.sliderCategory2');
const elementAllContainerImagesSliderCategory2 = elementSliderCategory2.querySelectorAll('img');
const elementSliderCategory3 = document.querySelector('section.sliderCategory3');
const elementAllContainerImagesSliderCategory3 = elementSliderCategory3.querySelectorAll('img');
const elementModal = document.getElementById('modal1');

for (let index = 0; index < elementAllContainerImagesSliderBestMovies.length; index++) {
   elementAllContainerImagesSliderBestMovies[index].addEventListener('click', (e) => openModal(e));
}
for (let index = 0; index < elementAllContainerImagesSliderCategory1.length; index++) {
   elementAllContainerImagesSliderCategory1[index].addEventListener('click', (e) => openModal(e));
}
for (let index = 0; index < elementAllContainerImagesSliderCategory2.length; index++) {
   elementAllContainerImagesSliderCategory2[index].addEventListener('click', (e) => openModal(e));
}
for (let index = 0; index < elementAllContainerImagesSliderCategory3.length; index++) {
   elementAllContainerImagesSliderCategory3[index].addEventListener('click', (e) => openModal(e));
}

elementSliderBestMovies.querySelector('span.arrowLeft').addEventListener('click', (e) => onclickLeft(e));
elementSliderBestMovies.querySelector('span.arrowRight').addEventListener('click', (e) => onclickRight(e));
elementSliderCategory1.querySelector('span.arrowLeft').addEventListener('click', (e) => onclickLeft(e));
elementSliderCategory1.querySelector('span.arrowRight').addEventListener('click', (e) => onclickRight(e));
elementSliderCategory2.querySelector('span.arrowLeft').addEventListener('click', (e) => onclickLeft(e));
elementSliderCategory2.querySelector('span.arrowRight').addEventListener('click', (e) => onclickRight(e));
elementSliderCategory3.querySelector('span.arrowLeft').addEventListener('click', (e) => onclickLeft(e));
elementSliderCategory3.querySelector('span.arrowRight').addEventListener('click', (e) => onclickRight(e));

function onclickRight(e) {
   console.log('Click gauche');
   console.log(e);
   slider = e['path'][2]['className'];
   console.log(slider);
   switch (slider) {
      case 'sliderBestMovies':
         if (positionSliderBestMovies <= positionslidersMax) {
            positionSliderBestMovies++;
            offset = positionSliderBestMovies * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderBestMovies.querySelector('div.container0').style.transform = transformString;
         }
         break;
      case 'sliderCategory1':
         if (positionSliderCategory1 <= positionslidersMax) {
            positionSliderCategory1++;
            offset = positionSliderCategory1 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory1.querySelector('div.container1').style.transform = transformString;
         }
         break;
      case 'sliderCategory2':
         if (positionSliderCategory2 <= positionslidersMax) {
            positionSliderCategory2++;
            offset = positionSliderCategory2 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory2.querySelector('div.container2').style.transform = transformString;
         }
         break;
      case 'sliderCategory3':
         if (positionSliderCategory3 <= positionslidersMax) {
            positionSliderCategory3++;
            offset = positionSliderCategory3 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory3.querySelector('div.container3').style.transform = transformString;
         }
         break;
   }
}

function onclickLeft(e) {
   console.log('Click droit');
   slider = e['path'][2]['className'];
   switch (slider) {
      case 'sliderBestMovies':
         if (positionSliderBestMovies > 0) {
            positionSliderBestMovies--;
            offset = positionSliderBestMovies * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
         }
         break;
      case 'sliderCategory1':
         if (positionSliderCategory1 > 0) {
            positionSliderCategory1--;
            offset = positionSliderCategory1 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
         }
         break;
      case 'sliderCategory2':
         if (positionSliderCategory2 > 0) {
            positionSliderCategory2--;
            offset = positionSliderCategory2 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
         }
         break;
      case 'sliderCategory3':
         if (positionSliderCategory3 > 0) {
            positionSliderCategory3--;
            offset = positionSliderCategory3 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
         }
         break;
   }
}

function openModal(e) {
   console.log(e['path'][0]['id']);
   console.log(e);
   id = e['path'][0]['id'].toString();
   pagePositionY = e['pageY'];
   clientPositionY = e['clientY'];
   heightOfWindow = window.innerHeight;
   modalePositionY = pagePositionY - clientPositionY + heightOfWindow / 2;
   modalePositionYString = modalePositionY.toString() + 'px';
   elementModal.style.top = modalePositionYString;
   elementModal.querySelector('#modaleMovieId').innerHTML = id;
   elementModal.showModal();
   elementModal.querySelector('button').addEventListener('click', () => closeModale());
}

function closeModale() {
   elementModal.close();
}
