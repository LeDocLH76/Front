import { find_one_movie_by_id, find_best_movie_data } from './api.js';
import { getCategory } from './api.js';

export async function fill_dom() {
   console.log('Avant');
   const category_array_all = await getCategory(25);
   let category_array = category_array_all.slice(0, 3);
   category_array = category_array_all.slice(3, 6);
   category_array = category_array_all.slice(6, 9);
   category_array = category_array_all.slice(9, 12);
   category_array = category_array_all.slice(12, 15);
   category_array = category_array_all.slice(15, 18);
   category_array = category_array_all.slice(18, 21);
   category_array = category_array_all.slice(21, 24);
   category_array = category_array_all.slice(22);
   const best_movies_data = await find_best_movie_data(9);
   await fill_best_movie_and_slider(best_movies_data);

   const category_1 = category_array[0];
   const category_2 = category_array[1];
   const category_3 = category_array[2];
   fill_title_sliders(category_1, category_2, category_3);

   for (let index = 0; index < 3; index++) {
      const category = category_array[index];
      let movies_data = await find_best_movie_data(8, category);
      await fill_category_slider(movies_data, index);
   }
   console.log('A la fin');
}

export async function makeModal1(movie_id) {
   const movie_data = await find_one_movie_by_id(movie_id);
   // console.log(movie_data);
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
                     <div class="containerModal2-1">
                        <div id="modalGenres">Categorie: ${movie_data.genres}</div>
                        <div id="modalDuration">Durée: ${movie_data.duration} mn</div>
                        <div id="modalRating">Rating: ${rated}</div>
                     </div>
                     <div id="modalSynopsis">Résumé: ${movie_data.description}</div>
                  </div>
               </div>
               <div class="containerModal3">
                  <div class="containerModal3-1">
                     <div class="modalDirectors">Réalisateur:${movie_data.directors}</div>
                  </div>
                  <div class="containerModal3-2">
                     <div id="modalCountry">Pays d'origine: ${movie_data.countries}</div>
                     <div class="containerModal3-2-1">
                        <div id="modalScore">Score: ${movie_data.imdb_score}</div>
                        <div id="modalResult">Résultat: ${worldwide_gross_income}</div>
                     </div>
                  </div>
               </div>
               <button id="modalClose">X</button>
            </div>`;
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
   // console.log(best_movie);
   // console.log(best_movies_slider);
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
   // console.log(movies_data, index);
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
   // console.log(element_container_slider);
   for (let index = 0; index < movies_data.length; index++) {
      const movie = movies_data[index];
      await fill_one_image_slider(movie, element_container_slider);
   }
}

async function fill_one_image_slider(movie, element_container_slider) {
   // console.log(movie);
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
   current_img.setAttribute('alt', 'image du film ' + movie_title);
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
