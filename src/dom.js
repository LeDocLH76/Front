import { find_one_movie_by_id } from './api.js';

export function fill_title_sliders(category_1, category_2, category_3) {
   const elementSliderBestMoviesTitle = document
      .querySelector('section#sliderBestMovies')
      .querySelector('div.categoryTitle');
   elementSliderBestMoviesTitle.innerHTML = 'Films les mieux notés';

   const elementSliderCategory1Title = document
      .querySelector('section#sliderCategory1')
      .querySelector('div.categoryTitle');
   elementSliderCategory1Title.innerHTML = `Categorie ${category_1}`;

   const elementSliderCategory2Title = document
      .querySelector('section#sliderCategory2')
      .querySelector('div.categoryTitle');
   elementSliderCategory2Title.innerHTML = `Categorie ${category_2}`;

   const elementSliderCategory3Title = document
      .querySelector('section#sliderCategory3')
      .querySelector('div.categoryTitle');
   elementSliderCategory3Title.innerHTML = `Categorie ${category_3}`;
}

export async function fill_best_movie_and_slider(best_movies_data) {
   const best_movie = best_movies_data[0];
   const best_movies_slider = best_movies_data.slice(1);
   // console.log(best_movie);
   // console.log(best_movies_slider);
   // -----------------------
   // fill best movie section
   // -----------------------
   const movie_id = best_movie.id;
   const movie_title = best_movie.title;
   const movie_image_url = best_movie.image_url;

   const best_movie_data = await find_one_movie_by_id(movie_id);
   const best_movie_description = best_movie_data.description;

   const movie_bloc_image = `<img
      id=${movie_id.toString()}
      src=${movie_image_url}
      alt="image du film ${movie_title}"
      />`;

   const element_best_movie_title = document.querySelector('div#BestMovieTitle');
   element_best_movie_title.innerHTML = movie_title;
   const element_best_movie_bloc_image = document.querySelector('div#containerBestMovieImage');
   element_best_movie_bloc_image.innerHTML = movie_bloc_image;
   const element_best_movie_description = document.querySelector('div#BestMovieDescription');
   element_best_movie_description.innerHTML = best_movie_description;
   // -----------------------
   // fill best movies slider
   // -----------------------
   const element_container_slider_best_movies = document.querySelector('div#containerSliderBestMovies');
   best_movies_slider.forEach((movie) => {
      fill_one_image_slider(movie, element_container_slider_best_movies);
   });
}

export async function fill_category_slider(movies_data, index) {
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
      fill_one_image_slider(movie, element_container_slider);
   }
}

function fill_one_image_slider(movie, element_container_slider) {
   // console.log(movie);
   const movie_id = movie.id;
   const movie_title = movie.title;
   const movie_image_url = movie.image_url;
   const element_image = document.createElement('img');
   // console.log('element image = ', element_image);
   element_container_slider.appendChild(element_image);
   const current_child = element_container_slider.lastElementChild;
   current_child.setAttribute('data-id', movie_id);
   current_child.setAttribute('alt', 'image du film ' + movie_title);
   current_child.setAttribute('src', movie_image_url);
}
