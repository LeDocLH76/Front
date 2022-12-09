let positionSliderBestMovies = 0;
let positionSliderCategory1 = 0;
let positionSliderCategory2 = 0;
let positionSliderCategory3 = 0;
const positionslidersMax = 2;

const elementSliderBestMovies = document.querySelector('section#sliderBestMovies');
const elementSliderCategory1 = document.querySelector('section#sliderCategory1');
const elementSliderCategory2 = document.querySelector('section#sliderCategory2');
const elementSliderCategory3 = document.querySelector('section#sliderCategory3');

const elementsSliders = document.querySelectorAll('section.slider');
// console.log(elementsSliders);
elementsSliders.forEach(function (node) {
   node.querySelector('span.arrowLeft').addEventListener('click', (e) => onclickLeft(e));
   node.querySelector('span.arrowRight').addEventListener('click', (e) => onclickRight(e));
   elementPicture = node.querySelectorAll('img');
   elementPicture.forEach(function (node) {
      node.addEventListener('click', (e) => onClickPicture(e));
   });
});

function onclickRight(e) {
   console.log('Click droit');
   console.log(e);
   slider_id = e.target.parentElement.parentElement.id;
   console.log(slider_id);
   switch (slider_id) {
      case 'sliderBestMovies':
         if (positionSliderBestMovies <= positionslidersMax) {
            positionSliderBestMovies++;
            offset = positionSliderBestMovies * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
         }
         break;
      case 'sliderCategory1':
         if (positionSliderCategory1 <= positionslidersMax) {
            positionSliderCategory1++;
            offset = positionSliderCategory1 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
         }
         break;
      case 'sliderCategory2':
         if (positionSliderCategory2 <= positionslidersMax) {
            positionSliderCategory2++;
            offset = positionSliderCategory2 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
         }
         break;
      case 'sliderCategory3':
         if (positionSliderCategory3 <= positionslidersMax) {
            positionSliderCategory3++;
            offset = positionSliderCategory3 * -150;
            transformString = 'translateX(' + offset.toString() + 'px)';
            elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
         }
         break;
   }
}

function onclickLeft(e) {
   console.log('Click gauche');
   slider_id = e.target.parentElement.parentElement.id;
   switch (slider_id) {
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

function onClickPicture(e) {
   const elementModal = document.getElementById('modal1');
   id = e.target.parentElement.parentElement.id.toString();
   makeModal(elementModal, e);
   elementModal.querySelector('#modalMovieId').innerHTML = id;
   elementModal.showModal();
   elementModal.querySelector('button').addEventListener('click', function () {
      elementModal.close();
   });
}

function makeModal(elementModal, e) {
   pagePositionY = e.pageY;
   clientPositionY = e.clientY;
   heightOfWindow = window.innerHeight;
   modalePositionY = pagePositionY - clientPositionY + heightOfWindow / 2;
   modalePositionYString = modalePositionY.toString() + 'px';
   elementModal.style.top = modalePositionYString;
}
