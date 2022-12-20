import { getCategories } from './api.js';
import { getLocalStorage } from './dom.js';

const LS_categories_obj = getLocalStorage();
const categories = await getCategories();
const elementButton = document.getElementById('submit');
const elementCategory_1 = document.getElementById('category_1');
const elementCategory_2 = document.getElementById('category_2');
const elementCategory_3 = document.getElementById('category_3');
elementButton.addEventListener('click', (e) => onsubmit(e));

for (const category of categories) {
   let element_option = document.createElement('option');
   elementCategory_1.appendChild(element_option);
   let current_option = elementCategory_1.lastElementChild;
   current_option.setAttribute('value', category);
   current_option.innerHTML = category;
   if (LS_categories_obj.category_1 == category) {
      current_option.selected = true;
   }
   element_option = document.createElement('option');
   elementCategory_2.appendChild(element_option);
   current_option = elementCategory_2.lastElementChild;
   current_option.setAttribute('value', category);
   current_option.innerHTML = category;
   if (LS_categories_obj.category_2 == category) {
      current_option.selected = true;
   }
   element_option = document.createElement('option');
   elementCategory_3.appendChild(element_option);
   current_option = elementCategory_3.lastElementChild;
   current_option.setAttribute('value', category);
   current_option.innerHTML = category;
   if (LS_categories_obj.category_3 == category) {
      current_option.selected = true;
   }
}

function onsubmit(e) {
   e.preventDefault();
   console.log(e);
   console.log(e.target.parentElement[0].value);
   const category_1 = e.target.parentElement[0].value;
   const category_2 = e.target.parentElement[1].value;
   const category_3 = e.target.parentElement[2].value;
   const LS_categories = JSON.stringify({
      category_1: category_1,
      category_2: category_2,
      category_3: category_3,
   });
   localStorage.setItem('LS_categories', LS_categories);
   window.location.href = 'http://localhost:5500/html/index.html';
}
