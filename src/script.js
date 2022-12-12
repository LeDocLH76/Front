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

const L_Image = 150;
const H_Image = 222;
const MediaQueryForPhone = 600;
const MediaQueryForTablet = 720;

const elementContainerDescription = document.getElementById('containerDescription');
const elementBestMovieButton = document.getElementById('BestMovieButton');
const elementBestMovieDescription = document.getElementById('BestMovieDescription');
const elementBestMovieImage = document.getElementById('containerBestMovieImage');
elementBestMovieButton.addEventListener('click', (e) => onClickButton(e));
elementBestMovieImage.addEventListener('click', (e) => onClickPicture(e));

const elementsSliders = document.querySelectorAll('section.slider');
const elementSliderBestMovies = document.querySelector('section#sliderBestMovies');
const elementSliderCategory1 = document.querySelector('section#sliderCategory1');
const elementSliderCategory2 = document.querySelector('section#sliderCategory2');
const elementSliderCategory3 = document.querySelector('section#sliderCategory3');

elementsSliders.forEach(function (node) {
   node.querySelector('span.arrowLeft').addEventListener('click', (e) => onclickLeft(e));
   node.querySelector('span.arrowRight').addEventListener('click', (e) => onclickRight(e));
   elementPicture = node.querySelectorAll('img');
   elementPicture.forEach(function (node) {
      node.addEventListener('click', (e) => onClickPicture(e));
   });
});

function onClickButton(e) {
   console.log('Click button', e);
   // console.log(elementBestMovieDescription.getAttribute('style'));
   if (elementBestMovieDescription.getAttribute('style') == 'display:none') {
      elementBestMovieDescription.setAttribute('style', 'display:bloc');
      elementBestMovieButton.innerHTML = 'Voir moins';
   } else {
      elementBestMovieDescription.setAttribute('style', 'display:none');
      elementBestMovieButton.innerHTML = 'Voir plus';
   }
   if (elementContainerDescription.getAttribute('style') == 'overflow:hidden') {
      elementContainerDescription.setAttribute('style', 'overflow:scroll');
   } else {
      elementContainerDescription.setAttribute('style', 'overflow:hidden');
   }
}

function onclickRight(e) {
   console.log('Click droit');
   if (window.innerWidth <= MediaQueryForPhone) {
      HpositionSliderBestMovies = 0;
      HpositionSliderCategory1 = 0;
      HpositionSliderCategory2 = 0;
      HpositionSliderCategory3 = 0;
      // console.log('Téléphone');
   } else {
      VpositionSliderBestMovies = 0;
      VpositionSliderCategory1 = 0;
      VpositionSliderCategory2 = 0;
      VpositionSliderCategory3 = 0;
      // console.log('Pas téléphone');
   }
   if (window.innerWidth > MediaQueryForPhone && window.innerWidth <= MediaQueryForTablet) {
      HpositionslidersMax = 3;
   } else {
      HpositionslidersMax = 2;
   }
   slider_id = e.target.parentElement.parentElement.id;
   switch (slider_id) {
      case 'sliderBestMovies':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderBestMovies <= VpositionslidersMax) {
               VpositionSliderBestMovies++;
               offset = VpositionSliderBestMovies * -H_Image;
               transformString = 'translateY(' + offset.toString() + 'px)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         } else {
            // Not Phone
            if (HpositionSliderBestMovies <= HpositionslidersMax) {
               HpositionSliderBestMovies++;
               offset = HpositionSliderBestMovies * -L_Image;
               transformString = 'translateX(' + offset.toString() + 'px)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         }
         break;
      case 'sliderCategory1':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory1 <= VpositionslidersMax) {
               VpositionSliderCategory1++;
               offset = VpositionSliderCategory1 * -H_Image;
               transformString = 'translateY(' + offset.toString() + 'px)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory1 <= HpositionslidersMax) {
               HpositionSliderCategory1++;
               offset = HpositionSliderCategory1 * -L_Image;
               transformString = 'translateX(' + offset.toString() + 'px)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         }
         break;
      case 'sliderCategory2':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory2 <= VpositionslidersMax) {
               VpositionSliderCategory2++;
               offset = VpositionSliderCategory2 * -H_Image;
               transformString = 'translateY(' + offset.toString() + 'px)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory2 <= HpositionslidersMax) {
               HpositionSliderCategory2++;
               offset = HpositionSliderCategory2 * -L_Image;
               transformString = 'translateX(' + offset.toString() + 'px)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         }
         break;
      case 'sliderCategory3':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory3 <= VpositionslidersMax) {
               VpositionSliderCategory3++;
               offset = VpositionSliderCategory3 * -H_Image;
               transformString = 'translateY(' + offset.toString() + 'px)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory3 <= HpositionslidersMax) {
               HpositionSliderCategory3++;
               offset = HpositionSliderCategory3 * -L_Image;
               transformString = 'translateX(' + offset.toString() + 'px)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         }
         break;
   }
}

function onclickLeft(e) {
   console.log('Click gauche');
   if (window.innerWidth <= MediaQueryForPhone) {
      HpositionSliderBestMovies = 0;
      HpositionSliderCategory1 = 0;
      HpositionSliderCategory2 = 0;
      HpositionSliderCategory3 = 0;
      // console.log('Téléphone');
   } else {
      VpositionSliderBestMovies = 0;
      VpositionSliderCategory1 = 0;
      VpositionSliderCategory2 = 0;
      VpositionSliderCategory3 = 0;
      // console.log('Pas téléphone');
   }
   if (window.innerWidth > MediaQueryForPhone && window.innerWidth <= MediaQueryForTablet) {
      HpositionslidersMax = 3;
   } else {
      HpositionslidersMax = 2;
   }
   slider_id = e.target.parentElement.parentElement.id;
   switch (slider_id) {
      case 'sliderBestMovies':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderBestMovies > 0) {
               VpositionSliderBestMovies--;
               offset = VpositionSliderBestMovies * -H_Image;
               transformString = 'translateY(' + offset.toString() + 'px)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         } else {
            // Not Phone
            if (HpositionSliderBestMovies > 0) {
               HpositionSliderBestMovies--;
               offset = HpositionSliderBestMovies * -L_Image;
               transformString = 'translateX(' + offset.toString() + 'px)';
               elementSliderBestMovies.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         }
         break;
      case 'sliderCategory1':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory1 > 0) {
               VpositionSliderCategory1--;
               offset = VpositionSliderCategory1 * -H_Image;
               transformString = 'translateY(' + offset.toString() + 'px)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory1 > 0) {
               HpositionSliderCategory1--;
               offset = HpositionSliderCategory1 * -L_Image;
               transformString = 'translateX(' + offset.toString() + 'px)';
               elementSliderCategory1.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         }
         break;
      case 'sliderCategory2':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory2 > 0) {
               VpositionSliderCategory2--;
               offset = VpositionSliderCategory2 * -H_Image;
               transformString = 'translateY(' + offset.toString() + 'px)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory2 > 0) {
               HpositionSliderCategory2--;
               offset = HpositionSliderCategory2 * -L_Image;
               transformString = 'translateX(' + offset.toString() + 'px)';
               elementSliderCategory2.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         }
         break;
      case 'sliderCategory3':
         if (window.innerWidth <= MediaQueryForPhone) {
            // Phone
            if (VpositionSliderCategory3 > 0) {
               VpositionSliderCategory3--;
               offset = VpositionSliderCategory3 * -H_Image;
               transformString = 'translateY(' + offset.toString() + 'px)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         } else {
            // Not Phone
            if (HpositionSliderCategory3 > 0) {
               HpositionSliderCategory3--;
               offset = HpositionSliderCategory3 * -L_Image;
               transformString = 'translateX(' + offset.toString() + 'px)';
               elementSliderCategory3.querySelector('div.containerImagesSlider').style.transform = transformString;
            }
         }
         break;
   }
}

function onClickPicture(e) {
   const elementModal = document.getElementById('modal1');
   id = e.target.dataset.id;
   console.log(e.target.dataset.id);
   const modalContent = `<div class="containerModal">
               <div class="containerModal0">
                  <div class="containerModal1">
                     <div class="containerModal1-1">
                        <div id="modalTitle">123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789</div>
                        <div id="modalYear">Année de sortie</div>
                     </div>
                     <div class="containerModal1-2">
                        <img
                           class="modalPicture"
                           id="574"
                           src="https://m.media-amazon.com/images/M/MV5BNTY4ZDk5MzYtNjk2Zi00ZWY3LTgwZjUtNDc5MWEzMWFlOTQzXkEyXkFqcGdeQXVyNjU1MTEwMjI@._V1_UY268_CR1,0,182,268_AL_.jpg"
                           alt="The Story of the Kelly Gang"
                        />
                     </div>
                  </div>
                  <div class="containerModal2">
                     <div class="containerModal2-1">
                        <div id="modalGenres">[Genre]89012 [Genre]89012 [Genre]89012 </div>
                        <div id="modalDuration">Durée6789 123456789</div>
                        <div id="modalRating">Rating789 123456789</div>
                     </div>
                     <div id="modalSynopsis">Résumé789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 </div>
                  </div>
               </div>
               <div class="containerModal3">
                  <div class="containerModal3-1">
                     <div class="modalDirectors">[Réalisateur]3456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 </div>
                     <div id="modalActors">[Acteur]9 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 </div>
                  </div>
                  <div class="containerModal3-2">
                     <div id="modalCountry">Pays d'origine56789 123456789 </div>
                     <div class="containerModal3-2-1">
                        <div id="modalScore">Score6789 123456789 </div>
                        <div id="modalResult">Résultat9 123456789 </div>
                     </div>
                  </div>
               </div>
               <button id="modalClose">X</button>
               <div>Id du film = ${id}</div>
            </div>`;

   makeModal(elementModal, modalContent);
}

function makeModal(elementModal, modalContent) {
   elementModal.innerHTML = modalContent;
   elementModal.showModal();
   elementModal.querySelector('button').addEventListener('click', function () {
      elementModal.close();
      elementModal.innerHTML = '';
   });
}
