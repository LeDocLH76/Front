main();

async function main() {
   console.log('Avant');
   category_array = await getCategory(6);
   console.log(category_array);
   for (let category of category_array) {
      data = await find_best_film_data(1, category);
      display_film(data);
   }
   // data = await find_best_film_data(6);
   // data = await find_best_film_data(6, 'Action');
   // display_film(data);
   // find_stats_all_film(10);
   console.log('A la fin');
}

async function getCategory(item_quantity) {
   page_quantity = find_page_quantity(item_quantity);
   console.log('nombre de page = ', page_quantity);
   const url = 'http://localhost:8000/api/v1/genres/';
   page_txt = '';
   let data = [];
   for (let page = 1; page <= page_quantity; page++) {
      if (page != 1) {
         page_txt = `?page=${page}`;
      }
      let page_data = await getData(url + page_txt);
      for (let category of page_data.results) {
         data.push(category.name);
      }
   }
   data = data.slice(0, item_quantity);
   return data;
}

async function find_best_film_data(item_quantity, filter) {
   if (!filter) {
      filter = '';
   }
   let url1 = 'http://localhost:8000/api/v1/titles/';
   let sort = 'sort_by=-imdb_score,-votes,title';

   let data = await findData(url1, sort, filter, item_quantity);
   return data;
}

function find_page_quantity(item_quantity) {
   if (!item_quantity || item_quantity <= 0) {
      item_quantity = 1;
   }
   page_quantity = Math.floor(item_quantity / 5);
   partialy_full_page_quantity = item_quantity % 5;
   if (partialy_full_page_quantity != 0) {
      page_quantity++;
   }
   return page_quantity;
}

async function findData(url1, sort, filter, item_quantity) {
   if (filter) {
      filter = 'genre=' + filter;
   }
   page_quantity = find_page_quantity(item_quantity);
   // console.log('nombre de page = ', page_quantity);
   let page_txt = '';
   let question_mark = '';
   let ampersand_1 = '';
   let ampersand_2 = '';
   if ((filter && sort) || (filter && item_quantity > 5)) {
      ampersand_1 = '&';
   }
   if (sort || filter || item_quantity > 5) {
      question_mark = '?';
   }
   let data = [];
   for (let page = 1; page <= page_quantity; page++) {
      if (page != 1) {
         page_txt = `page=${page}`;
      }
      if (page != 1 && sort) {
         ampersand_2 = '&';
      }
      // console.log(url1 + question_mark + filter + ampersand_1 + page_txt + ampersand_2 + sort);
      let page_data = await getData(url1 + question_mark + filter + ampersand_1 + page_txt + ampersand_2 + sort);
      data = data.concat(page_data.results);
      data = data.slice(0, item_quantity);
   }
   return data;
}

function display_film(data) {
   for (const film of data) {
      // console.log(film);
      console.log('Id: ', film.id);
      // console.log('Titre: ', film.title);
      // console.log('Longueur Titre: ', film.title.length);
      // console.log('Date: ', film.year);
      // console.log('Score: ', film.imdb_score);
      // console.log('Image Url: ', film.image_url);
      console.log('Categories: ', film.genres);
      // console.log('Réalisateurs: ', film.directors);
      // console.log('acteurs: ', film.actors);
   }
}

async function getData(url) {
   // console.log('Dedant');
   try {
      const response = await fetch(url);
      if (!response.ok) {
         const message = `An error has occured: ${response.status}`;
         throw new Error(message);
      }
      const res_json = await response.json();
      return res_json;
   } catch (error) {
      console.log('En erreur');
      console.log(error);
      return error;
   }
}

async function find_stats_all_film(page_quantity) {
   if (!page_quantity || page_quantity < 1) {
      page_quantity = 1;
   }
   if (page_quantity > 17171) {
      page_quantity = 17171;
   }
   let url1 = 'http://localhost:8000/api/v1/titles/';
   let actors = 0;
   let actor_length = 0;
   let directors = 0;
   let director_length = 0;
   let genres = 0;
   let image_url = 0;
   // let imdb_score = 0
   let title = 0;

   let page_txt = '';
   for (let page = 1; page <= page_quantity; page++) {
      // 62 minutes de 1 à 17171
      if (page != 1) {
         page_txt = `?page=${page}`;
      }
      let data = await getData(url1 + page_txt);
      for (const film of data.results) {
         // console.log('Id: ', film.id);
         // console.log('Titre: ', film.title);
         // console.log('Date: ', film.year);
         // console.log('Score: ', film.imdb_score);
         // console.log('Image Url: ', film.image_url);
         // console.log('Categories: ', film.genres);
         // console.log('Réalisateurs: ', film.directors);
         // console.log('acteurs: ', film.actors);
         for (const actor of film.actors) {
            if (actor.length > actor_length) {
               actor_length = actor.length;
            }
         }
         for (const director of film.directors) {
            if (director.length > director_length) {
               director_length = director.length;
            }
         }
         if (film.title.length > title) {
            title = film.title.length;
         }
         if (film.image_url == null) {
            image_url++;
         }
         if (film.genres.length > genres) {
            genres = film.genres.length;
         }
         if (film.directors.length > directors) {
            directors = film.directors.length;
         }
         if (film.actors.length > actors) {
            actors = film.actors.length;
         }
      }
   }
   console.log("Longueur max d'un titre = ", title);
   console.log("Longueur max d'un acteur = ", actor_length);
   console.log("Longueur max d'un réalisateur = ", director_length);
   console.log('Images manquantes = ', image_url);
   console.log('Nombre max de genre = ', genres);
   console.log('Nombre max de réalisateurs = ', directors);
   console.log("Nombre max d'acteurs = ", actors);
}
