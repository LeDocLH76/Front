export async function getCategories() {
   const url = 'http://localhost:8000/api/v1/genres/';
   const category_data = await getData(url);
   const item_quantity = category_data.count;
   let page_quantity = find_page_quantity(item_quantity);
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
      let page_data = await getData(url1 + question_mark + filter + ampersand_1 + page_txt + ampersand_2 + sort);
      data = data.concat(page_data.results);
      const count = page_data.count;
      const max_page = find_page_quantity(count);
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
