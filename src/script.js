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
// 20 for desktop. could be change to 26.66 for tablet in onclick... function
let L_Image = 20;

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
      // Phone
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
      // Not phone
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
   }

   function resetTranslateY(node) {
      resetHpositionSliders();
      resetDisplayArrowsH();
      const styleStr = node.getAttribute('style');
      const currentTranslate = styleStr.split('transform: translate(')[1].split(')')[0];
      const currentTranslateY = currentTranslate.split(', ')[1];
      node.style.transform = 'translate(0px, ' + currentTranslateY + ')';
   }

   function resetTranslateX(node) {
      resetVpositionSliders();
      resetDisplayArrowsV();
      const styleStr = node.getAttribute('style');
      const currentTranslate = styleStr.split('transform: translate(')[1].split(')')[0];
      let currentTranslateX = currentTranslate.split(', ')[0];
      node.style.transform = 'translate(' + currentTranslateX + ', 0px)';
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
   if (window.innerWidth <= MediaQueryForPhone) {
      resetHpositionSliders();
      // Phone
   } else {
      resetVpositionSliders();
      // Not phone
   }
   if (window.innerWidth > MediaQueryForPhone && window.innerWidth <= MediaQueryForTablet) {
      // Tablet
      HpositionslidersMax = 3;
      L_Image = 26.66;
   } else {
      // Desktop or phone
      HpositionslidersMax = 2;
      L_Image = 20;
   }
   const slider_id = e.target.parentElement.parentElement.id;
   switch (slider_id) {
      case 'sliderBestMovies':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderBestMovies <= VpositionslidersMax) {
               VpositionSliderBestMovies++;
               const offset = VpositionSliderBestMovies * -H_Image;
               const transformString = 'translate(0vw, ' + offset.toString() + 'vw)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderBestMovies.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsV(
                  elementArrowLeftSliderBestMovies,
                  elementArrowRightSliderBestMovies,
                  VpositionSliderBestMovies
               );
            }
         } else {
            // Not Phone
            if (HpositionSliderBestMovies <= HpositionslidersMax) {
               HpositionSliderBestMovies++;
               const offset = HpositionSliderBestMovies * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderBestMovies.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsH(
                  elementArrowLeftSliderBestMovies,
                  elementArrowRightSliderBestMovies,
                  HpositionSliderBestMovies
               );
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
               displayArrowsV(
                  elementArrowLeftSliderCategory1,
                  elementArrowRightSliderCategory1,
                  VpositionSliderCategory1
               );
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory1 <= HpositionslidersMax) {
               HpositionSliderCategory1++;
               const offset = HpositionSliderCategory1 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory1.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsH(
                  elementArrowLeftSliderCategory1,
                  elementArrowRightSliderCategory1,
                  HpositionSliderCategory1
               );
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
               displayArrowsV(
                  elementArrowLeftSliderCategory2,
                  elementArrowRightSliderCategory2,
                  VpositionSliderCategory2
               );
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory2 <= HpositionslidersMax) {
               HpositionSliderCategory2++;
               const offset = HpositionSliderCategory2 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory2.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsH(
                  elementArrowLeftSliderCategory2,
                  elementArrowRightSliderCategory2,
                  HpositionSliderCategory2
               );
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
               displayArrowsV(
                  elementArrowLeftSliderCategory3,
                  elementArrowRightSliderCategory3,
                  VpositionSliderCategory3
               );
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory3 <= HpositionslidersMax) {
               HpositionSliderCategory3++;
               const offset = HpositionSliderCategory3 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory3.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsH(
                  elementArrowLeftSliderCategory3,
                  elementArrowRightSliderCategory3,
                  HpositionSliderCategory3
               );
            }
         }
         break;
   }
}

function onclickLeft(e) {
   if (window.innerWidth <= MediaQueryForPhone) {
      resetHpositionSliders();
      // Phone
   } else {
      resetVpositionSliders();
      // Not phone
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
               displayArrowsV(
                  elementArrowLeftSliderBestMovies,
                  elementArrowRightSliderBestMovies,
                  VpositionSliderBestMovies
               );
            }
         } else {
            // Not Phone
            if (HpositionSliderBestMovies > 0) {
               HpositionSliderBestMovies--;
               const offset = HpositionSliderBestMovies * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderBestMovies.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsH(
                  elementArrowLeftSliderBestMovies,
                  elementArrowRightSliderBestMovies,
                  HpositionSliderBestMovies
               );
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
               displayArrowsV(
                  elementArrowLeftSliderCategory1,
                  elementArrowRightSliderCategory1,
                  VpositionSliderCategory1
               );
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory1 > 0) {
               HpositionSliderCategory1--;
               const offset = HpositionSliderCategory1 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory1.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsH(
                  elementArrowLeftSliderCategory1,
                  elementArrowRightSliderCategory1,
                  HpositionSliderCategory1
               );
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
               displayArrowsV(
                  elementArrowLeftSliderCategory2,
                  elementArrowRightSliderCategory2,
                  VpositionSliderCategory2
               );
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory2 > 0) {
               HpositionSliderCategory2--;
               const offset = HpositionSliderCategory2 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory2.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsH(
                  elementArrowLeftSliderCategory2,
                  elementArrowRightSliderCategory2,
                  HpositionSliderCategory2
               );
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
               displayArrowsV(
                  elementArrowLeftSliderCategory3,
                  elementArrowRightSliderCategory3,
                  VpositionSliderCategory3
               );
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory3 > 0) {
               HpositionSliderCategory3--;
               const offset = HpositionSliderCategory3 * -L_Image;
               const transformString = 'translate(' + offset.toString() + 'vw, 0vw)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
               elementSliderCategory3.querySelector('div.containerNoFilm').style.transform = transformString;
               displayArrowsH(
                  elementArrowLeftSliderCategory3,
                  elementArrowRightSliderCategory3,
                  HpositionSliderCategory3
               );
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
