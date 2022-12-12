import { getCategory, find_best_movie_data, find_stats_all_movie, getData } from './api.js';
import { fill_title_sliders, fill_best_movie_and_slider, fill_category_slider } from './dom.js';

// main();

export async function main() {
   // console.log('Avant');
   let category_array = await getCategory(25);
   // console.log(category_array);
   // for (let category of category_array) {
   //    let data = await find_best_movie_data(1, category);
   //    display_movie(data);
   // }
   // let data = await find_best_movie_data(8);
   // let data = await find_best_movie_data(7, 'Adult');
   // let data = await find_best_movie_data(7, 'Action');
   // display_movie(data);
   // find_stats_all_movie(3);

   let best_movies_data = await find_best_movie_data(8);
   await fill_best_movie_and_slider(best_movies_data);

   let category_1 = category_array[0];
   let category_2 = category_array[1];
   let category_3 = category_array[2];
   fill_title_sliders(category_1, category_2, category_3);

   for (let index = 0; index < 3; index++) {
      const category = category_array[index];
      let movies_data = await find_best_movie_data(7, category);
      await fill_category_slider(movies_data, index);
   }

   // let categories = {};
   // const url1 = 'http://localhost:8000/api/v1/titles/?';
   // for (const category of category_array) {
   //    const filter = 'genre=' + category;
   //    let page_data = await getData(url1 + filter);
   //    console.log(category, page_data.count);
   //    categories[category] = page_data.count;
   // }
   // console.table(categories);

   console.log('A la fin');
}

function display_movie(data) {
   for (const film of data) {
      // console.log(film);
      console.log('Id: ', film.id);
      console.log('Titre: ', film.title);
      // console.log('Longueur Titre: ', film.title.length);
      // console.log('Date: ', film.year);
      // console.log('Score: ', film.imdb_score);
      // console.log('Image Url: ', film.image_url);
      // console.log('Categories: ', film.genres);
      // console.log('Réalisateurs: ', film.directors);
      // console.log('acteurs: ', film.actors);
   }
}
