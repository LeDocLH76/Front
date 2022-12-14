export async function getCategory(item_quantity) {
   let page_quantity = find_page_quantity(item_quantity);
   // console.log('nombre de page = ', page_quantity);
   const url = 'http://localhost:8000/api/v1/genres/';
   let page_txt = '';
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

export async function find_best_movie_data(item_quantity, filter) {
   if (!filter) {
      filter = '';
   }
   let url1 = 'http://localhost:8000/api/v1/titles/';
   let sort = 'sort_by=-imdb_score,-votes,title';
   let data = await findData(url1, sort, filter, item_quantity);
   return data;
}

export async function find_stats_all_movie(page_quantity) {
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
      for (const movie of data.results) {
         // console.log('Id: ', movie.id);
         // console.log('Titre: ', movie.title);
         // console.log('Date: ', movie.year);
         // console.log('Score: ', movie.imdb_score);
         // console.log('Image Url: ', movie.image_url);
         // console.log('Categories: ', movie.genres);
         // console.log('Réalisateurs: ', movie.directors);
         // console.log('acteurs: ', movie.actors);
         for (const actor of movie.actors) {
            if (actor.length > actor_length) {
               actor_length = actor.length;
            }
         }
         for (const director of movie.directors) {
            if (director.length > director_length) {
               director_length = director.length;
            }
         }
         if (movie.title.length > title) {
            title = movie.title.length;
         }
         if (movie.image_url == null) {
            image_url++;
         }
         if (movie.genres.length > genres) {
            genres = movie.genres.length;
         }
         if (movie.directors.length > directors) {
            directors = movie.directors.length;
         }
         if (movie.actors.length > actors) {
            actors = movie.actors.length;
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

export async function find_one_movie_by_id(movie_id) {
   const url = 'http://localhost:8000/api/v1/titles/' + movie_id.toString();
   const data = await getData(url);
   return data;
}

async function findData(url1, sort, filter, item_quantity) {
   if (filter) {
      filter = 'genre=' + filter;
   }
   let page_quantity = find_page_quantity(item_quantity);

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
      // console.log(data);
      const count = page_data.count;
      // console.log('count = ', count);
      const max_page = find_page_quantity(count);
      // console.log('max page = ', max_page);
      // console.log('page = ', page);
      if (page >= max_page) {
         console.log('Break');
         break;
      }
   }
   data = data.slice(0, item_quantity);
   return data;
}

function find_page_quantity(item_quantity) {
   if (!item_quantity || item_quantity <= 0) {
      item_quantity = 1;
   }
   let page_quantity = Math.floor(item_quantity / 5);
   let partialy_full_page_quantity = item_quantity % 5;
   if (partialy_full_page_quantity != 0) {
      page_quantity++;
   }
   return page_quantity;
}

export async function getData(url) {
   // console.log('Dedant');
   try {
      const response = await fetch(url);
      if (!response.ok) {
         const message = `Une erreur est survenue: ${response.status}`;
         throw new Error(message);
      }
      const res_json = await response.json();
      return res_json;
   } catch (error) {
      console.log('Impossible de contacter le serveur', error.message);
      window.location.replace(`./fail.html?error=${error.message}`);
   }
}
