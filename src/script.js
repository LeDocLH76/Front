import { fill_dom, makeModal1, getLocalStorage } from './dom.js';

const LS_categories_obj = getLocalStorage();

await fill_dom(LS_categories_obj);

let HpositionSliderBestMovies = 0;
let HpositionSliderCategory1 = 0;
let HpositionSliderCategory2 = 0;
let HpositionSliderCategory3 = 0;
let HpositionslidersMax = 2;
let VpositionSliderBestMovies = 0;
let VpositionSliderCategory1 = 0;
let VpositionSliderCategory2 = 0;
let VpositionSliderCategory3 = 0;
const VpositionslidersMax = 2;
// For translate desktop and tablet
const L_Image_desktop = 20;
const L_Image_Tablet = 26.66;
// For translate phone
const H_Image = 58;

const MediaQueryForPhone = 600;
const MediaQueryForTablet = 720;
const elementBestMovieButton = document.getElementById('BestMovieButton');
const elementBestMovieImage = document.getElementById('containerBestMovieImage');
const elementsSliders = document.querySelectorAll('section.slider');
const elementsContainerImageSlider = document.querySelectorAll('div.containerImagesSlider');
const elementSliderBestMovies = document.querySelector('section#sliderBestMovies');
const elementSliderCategory1 = document.querySelector('section#sliderCategory1');
const elementSliderCategory2 = document.querySelector('section#sliderCategory2');
const elementSliderCategory3 = document.querySelector('section#sliderCategory3');
const elementArrowRightSliderBestMovies = elementSliderBestMovies.getElementsByClassName('arrowRight')[0];
const elementArrowLeftSliderBestMovies = elementSliderBestMovies.getElementsByClassName('arrowLeft')[0];
const elementArrowRightSliderCategory1 = elementSliderCategory1.getElementsByClassName('arrowRight')[0];
const elementArrowLeftSliderCategory1 = elementSliderCategory1.getElementsByClassName('arrowLeft')[0];
const elementArrowRightSliderCategory2 = elementSliderCategory2.getElementsByClassName('arrowRight')[0];
const elementArrowLeftSliderCategory2 = elementSliderCategory2.getElementsByClassName('arrowLeft')[0];
const elementArrowRightSliderCategory3 = elementSliderCategory3.getElementsByClassName('arrowRight')[0];
const elementArrowLeftSliderCategory3 = elementSliderCategory3.getElementsByClassName('arrowLeft')[0];

window.addEventListener('resize', (e) => {
   if (e.currentTarget.innerWidth <= MediaQueryForPhone) {
      // Phone translateY = current translateX = 0
      elementsContainerImageSlider.forEach(function (node) {
         let currentPositionSlider = 0;
         switch (node.id) {
            case 'containerSliderBestMovies':
               currentPositionSlider = VpositionSliderBestMovies;
               break;
            case 'containerSliderCategory1':
               currentPositionSlider = VpositionSliderCategory1;
               break;
            case 'containerSliderCategory2':
               currentPositionSlider = VpositionSliderCategory2;
               break;
            case 'containerSliderCategory3':
               currentPositionSlider = VpositionSliderCategory3;
               break;
         }
         const currentTranslateY = currentPositionSlider * -H_Image;
         resetHpositionSliders();
         resetDisplayArrowsV();
         node.style.transform = 'translate(0px, ' + currentTranslateY + ')';
         node.nextElementSibling.style.transform = 'translate(0px, ' + currentTranslateY + ')';
      });
   } else {
      // Not phone translateY = 0 translateX = current
      elementsContainerImageSlider.forEach(function (node) {
         let currentPositionSlider = 0;
         switch (node.id) {
            case 'containerSliderBestMovies':
               currentPositionSlider = HpositionSliderBestMovies;
               break;
            case 'containerSliderCategory1':
               currentPositionSlider = HpositionSliderCategory1;
               break;
            case 'containerSliderCategory2':
               currentPositionSlider = HpositionSliderCategory2;
               break;
            case 'containerSliderCategory3':
               currentPositionSlider = HpositionSliderCategory3;
               break;
         }
         const currentTranslateX =
            window.innerWidth <= MediaQueryForTablet
               ? currentPositionSlider * -L_Image_Tablet
               : currentPositionSlider * -L_Image_desktop;
         resetVpositionSliders();
         resetDisplayArrowsH();
         node.style.transform = 'translate(' + currentTranslateX + 'vw, 0px)';
         node.nextElementSibling.style.transform = 'translate(' + currentTranslateX + 'vw, 0px)';
      });
   }
});

elementBestMovieButton.addEventListener('click', (e) => onClickMyButton(e));
elementBestMovieImage.addEventListener('click', (e) => onClickPicture(e));
elementsSliders.forEach(function (node) {
   node.querySelector('span.arrowLeft').addEventListener('click', (e) => onclickLeft(e));
   node.querySelector('span.arrowRight').addEventListener('click', (e) => onclickRight(e));
   const elementPicture = node.querySelectorAll('img');
   elementPicture.forEach(function (node) {
      node.addEventListener('click', (e) => onClickPicture(e));
   });
});

window.innerWidth <= MediaQueryForPhone ? resetDisplayArrowsV() : resetDisplayArrowsH();

function onClickMyButton(e) {
   onClickPicture(e);
}

function onclickRight(e) {
   let L_Image = onclickPositionsResets();
   const slider_id = e.target.parentElement.parentElement.id;
   let positions = [];
   switch (slider_id) {
      case 'sliderBestMovies':
         positions = translateLeftOrTop(
            HpositionSliderBestMovies,
            VpositionSliderBestMovies,
            elementSliderBestMovies,
            elementArrowLeftSliderBestMovies,
            elementArrowRightSliderBestMovies,
            L_Image
         );
         HpositionSliderBestMovies = positions[0];
         VpositionSliderBestMovies = positions[1];
         break;
      case 'sliderCategory1':
         positions = translateLeftOrTop(
            HpositionSliderCategory1,
            VpositionSliderCategory1,
            elementSliderCategory1,
            elementArrowLeftSliderCategory1,
            elementArrowRightSliderCategory1,
            L_Image
         );
         HpositionSliderCategory1 = positions[0];
         VpositionSliderCategory1 = positions[1];
         break;
      case 'sliderCategory2':
         positions = translateLeftOrTop(
            HpositionSliderCategory2,
            VpositionSliderCategory2,
            elementSliderCategory2,
            elementArrowLeftSliderCategory2,
            elementArrowRightSliderCategory2,
            L_Image
         );
         HpositionSliderCategory2 = positions[0];
         VpositionSliderCategory2 = positions[1];
         break;
      case 'sliderCategory3':
         positions = translateLeftOrTop(
            HpositionSliderCategory3,
            VpositionSliderCategory3,
            elementSliderCategory3,
            elementArrowLeftSliderCategory3,
            elementArrowRightSliderCategory3,
            L_Image
         );
         HpositionSliderCategory3 = positions[0];
         VpositionSliderCategory3 = positions[1];
         break;
   }
}

function onclickLeft(e) {
   let L_Image = onclickPositionsResets();
   const slider_id = e.target.parentElement.parentElement.id;
   let positions = [];
   switch (slider_id) {
      case 'sliderBestMovies':
         positions = translateRightOrBottom(
            HpositionSliderBestMovies,
            VpositionSliderBestMovies,
            elementSliderBestMovies,
            elementArrowLeftSliderBestMovies,
            elementArrowRightSliderBestMovies,
            L_Image
         );
         HpositionSliderBestMovies = positions[0];
         VpositionSliderBestMovies = positions[1];
         break;
      case 'sliderCategory1':
         positions = translateRightOrBottom(
            HpositionSliderCategory1,
            VpositionSliderCategory1,
            elementSliderCategory1,
            elementArrowLeftSliderCategory1,
            elementArrowRightSliderCategory1,
            L_Image
         );
         HpositionSliderCategory1 = positions[0];
         VpositionSliderCategory1 = positions[1];
         break;
      case 'sliderCategory2':
         positions = translateRightOrBottom(
            HpositionSliderCategory2,
            VpositionSliderCategory2,
            elementSliderCategory2,
            elementArrowLeftSliderCategory2,
            elementArrowRightSliderCategory2,
            L_Image
         );
         HpositionSliderCategory2 = positions[0];
         VpositionSliderCategory2 = positions[1];
         break;
      case 'sliderCategory3':
         positions = translateRightOrBottom(
            HpositionSliderCategory3,
            VpositionSliderCategory3,
            elementSliderCategory3,
            elementArrowLeftSliderCategory3,
            elementArrowRightSliderCategory3,
            L_Image
         );
         HpositionSliderCategory3 = positions[0];
         VpositionSliderCategory3 = positions[1];
         break;
   }
}

async function onClickPicture(e) {
   const elementModal = document.getElementById('modal1');
   const movie_id = e.target.dataset.id;
   console.log(e.target.dataset.id);
   const modalContent = await makeModal1(movie_id);
   displayModal(elementModal, modalContent);
}

function translateLeftOrTop(
   HpositionSlider,
   VpositionSlider,
   elementSlider,
   elementArrowLeftSlider,
   elementArrowRightSlider,
   L_Image
) {
   if (window.innerWidth <= MediaQueryForPhone) {
      // Phone
      if (VpositionSlider <= VpositionslidersMax) {
         VpositionSlider++;
         const offset = VpositionSlider * -H_Image;
         const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
         elementSlider.querySelector('div.containerImagesSlider').style.transform = transformString;
         elementSlider.querySelector('div.containerNoFilm').style.transform = transformString;
         displayArrowsV(elementArrowLeftSlider, elementArrowRightSlider, VpositionSlider);
      }
   } else {
      // Not Phone
      if (HpositionSlider <= HpositionslidersMax) {
         HpositionSlider++;
         const offset = HpositionSlider * -L_Image;
         const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
         elementSlider.querySelector('div.containerImagesSlider').style.transform = transformString;
         elementSlider.querySelector('div.containerNoFilm').style.transform = transformString;
         displayArrowsH(elementArrowLeftSlider, elementArrowRightSlider, HpositionSlider);
      }
   }
   return [HpositionSlider, VpositionSlider];
}

function translateRightOrBottom(
   HpositionSlider,
   VpositionSlider,
   elementSlider,
   elementArrowLeftSlider,
   elementArrowRightSlider,
   L_Image
) {
   if (window.innerWidth <= MediaQueryForPhone) {
      // Phone
      if (VpositionSlider > 0) {
         VpositionSlider--;
         const offset = VpositionSlider * -H_Image;
         const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
         elementSlider.querySelector('div.containerImagesSlider').style.transform = transformString;
         elementSlider.querySelector('div.containerNoFilm').style.transform = transformString;
         displayArrowsV(elementArrowLeftSlider, elementArrowRightSlider, VpositionSlider);
      }
   } else {
      // Not Phone
      if (HpositionSlider > 0) {
         HpositionSlider--;
         const offset = HpositionSlider * -L_Image;
         const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
         elementSlider.querySelector('div.containerImagesSlider').style.transform = transformString;
         elementSlider.querySelector('div.containerNoFilm').style.transform = transformString;
         displayArrowsH(elementArrowLeftSlider, elementArrowRightSlider, HpositionSlider);
      }
   }

   return [HpositionSlider, VpositionSlider];
}

function onclickPositionsResets() {
   if (window.innerWidth <= MediaQueryForPhone) {
      resetHpositionSliders();
      // Phone
   } else {
      resetVpositionSliders();
      // Not phone
   }
   let L_Image = 0;
   if (window.innerWidth > MediaQueryForPhone && window.innerWidth <= MediaQueryForTablet) {
      HpositionslidersMax = 3;
      L_Image = L_Image_Tablet;
   } else {
      HpositionslidersMax = 2;
      L_Image = L_Image_desktop;
   }
   return L_Image;
}

function displayModal(elementModal, modalContent) {
   elementModal.innerHTML = modalContent;
   elementModal.showModal();
   elementModal.querySelector('button').addEventListener('click', function () {
      elementModal.close();
      elementModal.innerHTML = '';
   });
}

function resetDisplayArrowsH() {
   displayArrowsH(elementArrowLeftSliderBestMovies, elementArrowRightSliderBestMovies, HpositionSliderBestMovies);
   displayArrowsH(elementArrowLeftSliderCategory1, elementArrowRightSliderCategory1, HpositionSliderCategory1);
   displayArrowsH(elementArrowLeftSliderCategory2, elementArrowRightSliderCategory2, HpositionSliderCategory2);
   displayArrowsH(elementArrowLeftSliderCategory3, elementArrowRightSliderCategory3, HpositionSliderCategory3);
}

function resetDisplayArrowsV() {
   displayArrowsV(elementArrowLeftSliderBestMovies, elementArrowRightSliderBestMovies, VpositionSliderBestMovies);
   displayArrowsV(elementArrowLeftSliderCategory1, elementArrowRightSliderCategory1, VpositionSliderCategory1);
   displayArrowsV(elementArrowLeftSliderCategory2, elementArrowRightSliderCategory2, VpositionSliderCategory2);
   displayArrowsV(elementArrowLeftSliderCategory3, elementArrowRightSliderCategory3, VpositionSliderCategory3);
}

function displayArrowsH(elementArrowLeftSlider, elementArrowRightSlider, HpositionSlider) {
   HpositionSlider <= HpositionslidersMax
      ? (elementArrowRightSlider.style.display = 'block')
      : (elementArrowRightSlider.style.display = 'none');
   HpositionSlider > 0
      ? (elementArrowLeftSlider.style.display = 'block')
      : (elementArrowLeftSlider.style.display = 'none');
}

function displayArrowsV(elementArrowLeftSlider, elementArrowRightSlider, VpositionSlider) {
   VpositionSlider <= VpositionslidersMax
      ? (elementArrowRightSlider.style.display = 'block')
      : (elementArrowRightSlider.style.display = 'none');
   VpositionSlider > 0
      ? (elementArrowLeftSlider.style.display = 'block')
      : (elementArrowLeftSlider.style.display = 'none');
}

function resetVpositionSliders() {
   VpositionSliderBestMovies = 0;
   VpositionSliderCategory1 = 0;
   VpositionSliderCategory2 = 0;
   VpositionSliderCategory3 = 0;
}

function resetHpositionSliders() {
   HpositionSliderBestMovies = 0;
   HpositionSliderCategory1 = 0;
   HpositionSliderCategory2 = 0;
   HpositionSliderCategory3 = 0;
}
