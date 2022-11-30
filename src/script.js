let positionSliderBestMovies = 0;
let positionSliderCategory1 = 0;
let positionSliderCategory2 = 0;
let positionSliderCategory3 = 0;
let positionslidersMax = 2;

let elementSliderBestMovies = document.querySelector('section.sliderBestMovies');
let elementAllContainerImagesSliderBestMovies = elementSliderBestMovies.querySelectorAll('img');
let elementSliderCategory1 = document.querySelector('section.sliderCategory1');
let elementAllContainerImagesSliderCategory1 = elementSliderCategory1.querySelectorAll('img');
let elementSliderCategory2 = document.querySelector('section.sliderCategory2');
let elementAllContainerImagesSliderCategory2 = elementSliderCategory2.querySelectorAll('img');
let elementSliderCategory3 = document.querySelector('section.sliderCategory3');
let elementAllContainerImagesSliderCategory3 = elementSliderCategory3.querySelectorAll('img');

for (let index = 0; index < elementAllContainerImagesSliderBestMovies.length; index++) {
   elementAllContainerImagesSliderBestMovies[index].addEventListener('click', (e) => console.log(e['path'][0]['id']));
}
for (let index = 0; index < elementAllContainerImagesSliderCategory1.length; index++) {
   elementAllContainerImagesSliderCategory1[index].addEventListener('click', (e) => console.log(e['path'][0]['id']));
}
for (let index = 0; index < elementAllContainerImagesSliderCategory2.length; index++) {
   elementAllContainerImagesSliderCategory2[index].addEventListener('click', (e) => console.log(e['path'][0]['id']));
}
for (let index = 0; index < elementAllContainerImagesSliderCategory3.length; index++) {
   elementAllContainerImagesSliderCategory3[index].addEventListener('click', (e) => console.log(e['path'][0]['id']));
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
