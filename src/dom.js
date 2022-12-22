import { find_one_movie_by_id, find_best_movie_data } from './api.js';

export async function fill_dom(LS_categories_obj) {
   let category_array = [];
   const best_movies_data = await find_best_movie_data(9);
   await fill_best_movie_and_slider(best_movies_data);
   fill_title_sliders(LS_categories_obj.category_1, LS_categories_obj.category_2, LS_categories_obj.category_3);
   category_array.push(LS_categories_obj.category_1);
   category_array.push(LS_categories_obj.category_2);
   category_array.push(LS_categories_obj.category_3);
   for (let index = 0; index < 3; index++) {
      const category = category_array[index];
      let movies_data = await find_best_movie_data(8, category);
      await fill_category_slider(movies_data, index);
   }
}

export async function makeModal1(movie_id) {
   const movie_data = await find_one_movie_by_id(movie_id);
   const image_exist = await getImage(movie_data.image_url);
   const image = image_exist == 0 ? movie_data.image_url : '../pictures/image-indisponible.jpg';
   const rated = isNaN(parseInt(movie_data.rated, 10)) ? 'Inconnu' : movie_data.rated;
   const worldwide_gross_income = isNaN(parseInt(movie_data.worldwide_gross_income, 10))
      ? 'Inconnu'
      : movie_data.worldwide_gross_income + ' ' + movie_data.budget_currency;
   return `<div class="containerModal">
               <div class="containerModal0">
                  <div class="containerModal1">
                     <div class="containerModal1-1">
                        <h2 id="modalTitle">${movie_data.title}</h2>
                        <div id="modalYear">Année de sortie ${movie_data.year}</div>
                     </div>
                     <div class="containerModal1-2">
                        <img
                           class="modalPicture"
                           src="${image}"
                           alt="image de ${movie_data.title}"
                        />
                     </div>
                  </div>
                  <div class="containerModal2">
                     <div class="containerModalText containerModal2-1">
                        <div>
                           <div id="modalGenresTitle">Categorie</div>
                           <div id="modalGenres">${movie_data.genres}</div>
                        </div>
                        <div id="modalDuration">Durée: ${movie_data.duration} mn</div>
                        <div id="modalRating">Rating: ${rated}</div>
                     </div>
                     <div class="containerModalText">
                        <div id="modalSynopsisTitle">Résumé</div>
                        <div id="modalSynopsis">${movie_data.description}</div>
                     </div>
                  </div>
               </div>
               <div class="containerModal3">
                  <div class="containerModal3-1">
                     <div class="containerModalText">
                        <div class="modalDirectorsTitle">Réalisateur</div>
                        <div class="modalDirectors">${movie_data.directors}</div>
                     </div>
                     <div class="containerModalText">
                        <div class="modalActorsTitle">Acteurs</div>
                        <div class="modalActors">${movie_data.actors}</div>
                     </div>
                  </div>
                  <div class="containerModal3-2">
                     <div class="containerModalText" id="modalCountry">Pays d'origine: ${movie_data.countries}</div>
                     <div class="containerModalText containerModal3-2-1">
                        <div id="modalScore">Score: ${movie_data.imdb_score}</div>
                        <div id="modalResult">Résultat: ${worldwide_gross_income}</div>
                     </div>
                  </div>
               </div>
               <button id="modalClose">X</button>
            </div>`;
}

export function getLocalStorage() {
   let LS_categories_obj = {};
   if (localStorage.getItem('LS_categories')) {
      LS_categories_obj = JSON.parse(localStorage.getItem('LS_categories'));
   } else {
      const LS_categories = JSON.stringify({
         category_1: 'Action',
         category_2: 'Animation',
         category_3: 'Fantasy',
      });
      localStorage.setItem('LS_categories', LS_categories);
      LS_categories_obj = JSON.parse(LS_categories);
   }
   return LS_categories_obj;
}

function fill_title_sliders(category_1, category_2, category_3) {
   const elementSliderBestMoviesTitle = document
      .querySelector('section#sliderBestMovies')
      .querySelector('h2.categoryTitle');
   elementSliderBestMoviesTitle.innerHTML = 'Films les mieux notés';
   const elementSliderCategory1Title = document
      .querySelector('section#sliderCategory1')
      .querySelector('h2.categoryTitle');
   elementSliderCategory1Title.innerHTML = `Categorie ${category_1}`;
   const elementSliderCategory2Title = document
      .querySelector('section#sliderCategory2')
      .querySelector('h2.categoryTitle');
   elementSliderCategory2Title.innerHTML = `Categorie ${category_2}`;
   const elementSliderCategory3Title = document
      .querySelector('section#sliderCategory3')
      .querySelector('h2.categoryTitle');
   elementSliderCategory3Title.innerHTML = `Categorie ${category_3}`;
}

async function fill_best_movie_and_slider(best_movies_data) {
   const best_movie = best_movies_data[0];
   const best_movies_slider = best_movies_data.slice(1);
   // -----------------------
   // fill best movie section
   // -----------------------
   const movie_id = best_movie.id;
   const movie_title = best_movie.title;
   const image = best_movie.image_url ? best_movie.image_url : '../pictures/image-indisponible.jpg';
   const best_movie_data = await find_one_movie_by_id(movie_id);
   const best_movie_description = best_movie_data.description;
   const movie_bloc_image = `<img
      data-id=${movie_id.toString()}
      src=${image}
      alt="image du film ${movie_title}"
      />`;
   const element_best_movie_title = document.querySelector('h2#BestMovieTitle');
   element_best_movie_title.innerHTML = movie_title;
   const element_best_movie_bloc_image = document.querySelector('div#containerBestMovieImage');
   element_best_movie_bloc_image.innerHTML = movie_bloc_image;
   const element_best_movie_description = document.querySelector('div#BestMovieDescription');
   element_best_movie_description.innerHTML = best_movie_description;
   document.getElementById('BestMovieButton').setAttribute('data-id', movie_id);
   // -----------------------
   // fill best movies slider
   // -----------------------
   const element_container_slider_best_movies = document.querySelector('div#containerSliderBestMovies');
   for (let index = 0; index < best_movies_slider.length; index++) {
      const movie = best_movies_slider[index];
      await fill_one_image_slider(movie, element_container_slider_best_movies);
   }
}

async function fill_category_slider(movies_data, index) {
   let element_container_slider;
   switch (index) {
      case 0:
         element_container_slider = document.querySelector('div#containerSliderCategory1');
         break;
      case 1:
         element_container_slider = document.querySelector('div#containerSliderCategory2');
         break;
      case 2:
         element_container_slider = document.querySelector('div#containerSliderCategory3');
         break;
   }
   for (let index = 0; index < movies_data.length; index++) {
      const movie = movies_data[index];
      await fill_one_image_slider(movie, element_container_slider);
   }
}

async function fill_one_image_slider(movie, element_container_slider) {
   const movie_id = movie.id;
   const movie_title = movie.title;
   const image_exist = await getImage(movie.image_url);
   const image = image_exist == 0 ? movie.image_url : '../pictures/image-indisponible.jpg';
   const element_div = document.createElement('div');
   const element_image = document.createElement('img');
   element_container_slider.appendChild(element_div);
   const current_div = element_container_slider.lastElementChild;
   current_div.setAttribute('class', 'containerImage');
   current_div.appendChild(element_image);
   const current_img = current_div.lastElementChild;
   current_img.setAttribute('data-id', movie_id);
   if (image_exist == 0) {
      current_img.setAttribute('alt', 'image du film ' + movie_title);
   } else {
      current_img.setAttribute('alt', 'image du film indisponible');
   }
   current_img.setAttribute('src', image);
}

async function getImage(url) {
   try {
      const response = await fetch(url);
      if (!response.ok) {
         console.log(`Une erreur est survenue: ${response.status}`);
         return -1;
      }
      return 0;
   } catch (error) {
      console.log('Image indisponible', error.message);
      return -1;
   }
}
