import { fill_dom, makeModal1 } from './dom.js';

await fill_dom();

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
// For desktop
const L_Image = 20;

// For phone
const H_Image = 58;

const MediaQueryForPhone = 600;
const MediaQueryForTablet = 720;
const elementBestMovieButton = document.getElementById('BestMovieButton');
const elementBestMovieImage = document.getElementById('containerBestMovieImage');
const elementsSliders = document.querySelectorAll('section.slider');
const elementsContainerImageSlider = document.querySelectorAll('div.containerImagesSlider');
const elementsContainernoFilm = document.querySelectorAll('div.containerNoFilm');
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
      // console.log('Téléphone', e.currentTarget.innerWidth);
      // translateY = current
      // translateX = 0
      elementsContainerImageSlider.forEach(function (node) {
         if (node.hasAttribute('style')) {
            resetTranslateY(node);
         }
      });
      elementsContainernoFilm.forEach(function (node) {
         if (node.hasAttribute('style')) {
            resetTranslateY(node);
         }
      });
   } else {
      // console.log('Pas téléphone', e.currentTarget.innerWidth);
      // translateY = 0
      // translateX = current
      elementsContainerImageSlider.forEach(function (node) {
         if (node.hasAttribute('style')) {
            resetTranslateX(node);
         }
      });
      elementsContainernoFilm.forEach(function (node) {
         if (node.hasAttribute('style')) {
            resetTranslateX(node);
         }
      });

      if (window.innerWidth <= MediaQueryForPhone) {
         // console.log('Téléphone');
      } else {
         // console.log('Pas téléphone');
      }
   }

   function resetTranslateY(node) {
      resetHpositionSliders();
      resetDisplayArrowsH();
      const styleStr = node.getAttribute('style');
      const currentTranslate = styleStr.split('transform: translate(')[1].split(')')[0];
      // console.log('currentTranslate', currentTranslate);
      const currentTranslateY = currentTranslate.split(', ')[1];
      // console.log('currentTranslateY', currentTranslateY);
      node.style.transform = 'translate(0px, ' + currentTranslateY + ')';
      // console.log(node.getAttribute('style'));
   }

   function resetTranslateX(node) {
      resetVpositionSliders();
      resetDisplayArrowsV();
      const styleStr = node.getAttribute('style');
      const currentTranslate = styleStr.split('transform: translate(')[1].split(')')[0];
      // console.log('currentTranslate', currentTranslate);
      const currentTranslateX = currentTranslate.split(', ')[0];
      // console.log('currentTranslateX', currentTranslateX);
      node.style.transform = 'translate(' + currentTranslateX + ', 0px)';
      // console.log(node.getAttribute('style'));
   }
});

elementBestMovieButton.addEventListener('click', (e) => onClickMyButton(e));
elementBestMovieImage.addEventListener('click', (e) => onClickPicture(e));

elementsSliders.forEach(function (node) {
   node.querySelector('span.arrowLeft').addEventListener('click', (e) => onclickLeft(e));
   node.querySelector('span.arrowRight').addEventListener('click', (e) => onclickRight(e));
   const elementPicture = node.querySelectorAll('img');
   // console.log(node);
   elementPicture.forEach(function (node) {
      node.addEventListener('click', (e) => onClickPicture(e));
   });
});

window.innerWidth <= MediaQueryForPhone ? resetDisplayArrowsV() : resetDisplayArrowsH();

function onClickMyButton(e) {
   onClickPicture(e);
}

function onclickRight(e) {
   console.log('Click droit');
   if (window.innerWidth <= MediaQueryForPhone) {
      resetHpositionSliders();
      // console.log('Téléphone');
   } else {
      resetVpositionSliders();
      // console.log('Pas téléphone');
   }
   if (window.innerWidth > MediaQueryForPhone && window.innerWidth <= MediaQueryForTablet) {
      HpositionslidersMax = 3;
   } else {
      HpositionslidersMax = 2;
   }
   const slider_id = e.target.parentElement.parentElement.id;
   switch (slider_id) {
      case 'sliderBestMovies':
         console.log('elementArrowRightSliderBestMovies = ', elementArrowRightSliderBestMovies);
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderBestMovies <= VpositionslidersMax) {
               VpositionSliderBestMovies++;
               const offset = VpositionSliderBestMovies * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderBestMovies.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsVBestMovies();
            }
         } else {
            // Not Phone
            if (HpositionSliderBestMovies <= HpositionslidersMax) {
               // elementArrowRightSliderBestMovies.style.display = 'block';
               HpositionSliderBestMovies++;
               const offset = HpositionSliderBestMovies * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderBestMovies.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsHBestMovies();
            }
         }
         break;
      case 'sliderCategory1':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory1 <= VpositionslidersMax) {
               VpositionSliderCategory1++;
               const offset = VpositionSliderCategory1 * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory1.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsVCategory1();
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory1 <= HpositionslidersMax) {
               HpositionSliderCategory1++;
               const offset = HpositionSliderCategory1 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory1.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsHCategory1();
            }
         }
         break;
      case 'sliderCategory2':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory2 <= VpositionslidersMax) {
               VpositionSliderCategory2++;
               const offset = VpositionSliderCategory2 * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory2.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsVCategory2();
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory2 <= HpositionslidersMax) {
               HpositionSliderCategory2++;
               const offset = HpositionSliderCategory2 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory2.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsHCategory2();
            }
         }
         break;
      case 'sliderCategory3':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory3 <= VpositionslidersMax) {
               VpositionSliderCategory3++;
               const offset = VpositionSliderCategory3 * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory3.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsVCategory3();
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory3 <= HpositionslidersMax) {
               HpositionSliderCategory3++;
               const offset = HpositionSliderCategory3 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory3.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsHCategory3();
            }
         }
         break;
   }
}

function onclickLeft(e) {
   console.log('Click gauche');
   if (window.innerWidth <= MediaQueryForPhone) {
      resetHpositionSliders();
      // console.log('Téléphone');
   } else {
      resetVpositionSliders();
      // console.log('Pas téléphone');
   }
   if (window.innerWidth > MediaQueryForPhone && window.innerWidth <= MediaQueryForTablet) {
      HpositionslidersMax = 3;
   } else {
      HpositionslidersMax = 2;
   }
   const slider_id = e.target.parentElement.parentElement.id;
   switch (slider_id) {
      case 'sliderBestMovies':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderBestMovies > 0) {
               VpositionSliderBestMovies--;
               const offset = VpositionSliderBestMovies * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderBestMovies.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsVBestMovies();
            }
         } else {
            // Not Phone
            if (HpositionSliderBestMovies > 0) {
               HpositionSliderBestMovies--;
               const offset = HpositionSliderBestMovies * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderBestMovies.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsHBestMovies();
            }
         }
         break;
      case 'sliderCategory1':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory1 > 0) {
               VpositionSliderCategory1--;
               const offset = VpositionSliderCategory1 * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory1.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsVCategory1();
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory1 > 0) {
               HpositionSliderCategory1--;
               const offset = HpositionSliderCategory1 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory1.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsHCategory1();
            }
         }
         break;
      case 'sliderCategory2':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory2 > 0) {
               VpositionSliderCategory2--;
               const offset = VpositionSliderCategory2 * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory2.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsVCategory2();
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory2 > 0) {
               HpositionSliderCategory2--;
               const offset = HpositionSliderCategory2 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory2.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsHCategory2();
            }
         }
         break;
      case 'sliderCategory3':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory3 > 0) {
               VpositionSliderCategory3--;
               const offset = VpositionSliderCategory3 * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory3.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsVCategory3();
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory3 > 0) {
               HpositionSliderCategory3--;
               const offset = HpositionSliderCategory3 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory3.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsHCategory3();
            }
         }
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

function displayModal(elementModal, modalContent) {
   elementModal.innerHTML = modalContent;
   elementModal.showModal();
   elementModal.querySelector('button').addEventListener('click', function () {
      elementModal.close();
      elementModal.innerHTML = '';
   });
}

function resetDisplayArrowsH() {
   displayArrowsHBestMovies();
   displayArrowsHCategory1();
   displayArrowsHCategory2();
   displayArrowsHCategory3();
}

function resetDisplayArrowsV() {
   displayArrowsVBestMovies();
   displayArrowsVCategory1();
   displayArrowsVCategory2();
   displayArrowsVCategory3();
}

function displayArrowsHBestMovies() {
   HpositionSliderBestMovies <= HpositionslidersMax
      ? (elementArrowRightSliderBestMovies.style.display = 'block')
      : (elementArrowRightSliderBestMovies.style.display = 'none');
   HpositionSliderBestMovies > 0
      ? (elementArrowLeftSliderBestMovies.style.display = 'block')
      : (elementArrowLeftSliderBestMovies.style.display = 'none');
}

function displayArrowsVBestMovies() {
   VpositionSliderBestMovies <= VpositionslidersMax
      ? (elementArrowRightSliderBestMovies.style.display = 'block')
      : (elementArrowRightSliderBestMovies.style.display = 'none');
   VpositionSliderBestMovies > 0
      ? (elementArrowLeftSliderBestMovies.style.display = 'block')
      : (elementArrowLeftSliderBestMovies.style.display = 'none');
}

function displayArrowsHCategory1() {
   HpositionSliderCategory1 <= HpositionslidersMax
      ? (elementArrowRightSliderCategory1.style.display = 'block')
      : (elementArrowRightSliderCategory1.style.display = 'none');
   HpositionSliderCategory1 > 0
      ? (elementArrowLeftSliderCategory1.style.display = 'block')
      : (elementArrowLeftSliderCategory1.style.display = 'none');
}

function displayArrowsVCategory1() {
   VpositionSliderCategory1 <= VpositionslidersMax
      ? (elementArrowRightSliderCategory1.style.display = 'block')
      : (elementArrowRightSliderCategory1.style.display = 'none');
   VpositionSliderCategory1 > 0
      ? (elementArrowLeftSliderCategory1.style.display = 'block')
      : (elementArrowLeftSliderCategory1.style.display = 'none');
}

function displayArrowsHCategory2() {
   HpositionSliderCategory2 <= HpositionslidersMax
      ? (elementArrowRightSliderCategory2.style.display = 'block')
      : (elementArrowRightSliderCategory2.style.display = 'none');
   HpositionSliderCategory2 > 0
      ? (elementArrowLeftSliderCategory2.style.display = 'block')
      : (elementArrowLeftSliderCategory2.style.display = 'none');
}

function displayArrowsVCategory2() {
   VpositionSliderCategory2 <= VpositionslidersMax
      ? (elementArrowRightSliderCategory2.style.display = 'block')
      : (elementArrowRightSliderCategory2.style.display = 'none');
   VpositionSliderCategory2 > 0
      ? (elementArrowLeftSliderCategory2.style.display = 'block')
      : (elementArrowLeftSliderCategory2.style.display = 'none');
}

function displayArrowsHCategory3() {
   HpositionSliderCategory3 <= HpositionslidersMax
      ? (elementArrowRightSliderCategory3.style.display = 'block')
      : (elementArrowRightSliderCategory3.style.display = 'none');
   HpositionSliderCategory3 > 0
      ? (elementArrowLeftSliderCategory3.style.display = 'block')
      : (elementArrowLeftSliderCategory3.style.display = 'none');
}

function displayArrowsVCategory3() {
   VpositionSliderCategory3 <= VpositionslidersMax
      ? (elementArrowRightSliderCategory3.style.display = 'block')
      : (elementArrowRightSliderCategory3.style.display = 'none');
   VpositionSliderCategory3 > 0
      ? (elementArrowLeftSliderCategory3.style.display = 'block')
      : (elementArrowLeftSliderCategory3.style.display = 'none');
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
