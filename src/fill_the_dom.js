fill_empty_dom();

function fill_empty_dom() {
   const injection_point = document.getElementById('main');
   const bloc_1 = `<section id="bestMovie">
         <div id="containerBestMovie">
            <div id="containerBestMovieText">
               <div id="BestMovieTitle"></div>
               <div>
                  <button>Voir plus</button>
                  <div id="BestMovieDescription"></div>
               </div>
            </div>
               <div id="containerBestMovieImage">
                  <!-- image id, src and alt -->
               </div>
            </div>
      </section>
               <section class="slider" id="sliderBestMovies">
            <div class="categoryTitle">Films les mieux notés</div>
            <div class="containerArrows">
               <span class="arrowLeft">G</span>
               <span class="arrowRight">D</span>
               <div class="windowSlider">
                  <div class="containerImagesSlider" id="containerSliderBestMovies">
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                  </div>
               </div>
            </div>
         </section>
         <section class="slider" id="sliderCategory1">
            <div class="categoryTitle">
               <!-- category name -->
            </div>
            <div class="containerArrows">
               <span class="arrowLeft">G</span>
               <span class="arrowRight">D</span>
               <div class="windowSlider">
                  <div class="containerImagesSlider" id="containerSliderCategory1">
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                  </div>
               </div>
            </div>
         </section>
         <section class="slider" id="sliderCategory2">
            <div class="categoryTitle">
               <!-- category name -->
            </div>
            <div class="containerArrows">
               <span class="arrowLeft">G</span>
               <span class="arrowRight">D</span>
               <div class="windowSlider">
                  <div class="containerImagesSlider" id="containerSliderCategory2">
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                  </div>
               </div>
            </div>
         </section>
         <section class="slider" id="sliderCategory3">
            <div class="categoryTitle">
               <!-- category name -->
            </div>
            <div class="containerArrows">
               <span class="arrowLeft">G</span>
               <span class="arrowRight">D</span>
               <div class="windowSlider">
                  <div class="containerImagesSlider" id="containerSliderCategory3">
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                     <!-- image id, src and alt -->
                  </div>
               </div>
            </div>
         </section>
         <dialog class="modal" id="modal1">
            <div class="containerModale">
               <div class="containerModal0">
                  <div class="containerModal1">
                     <div class="containerModale1-1">
                        <div id="modalTitle">Titre du film</div>
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
                        <div id="modalGenres">List[Genre]</div>
                        <div id="modalDuration">Durée</div>
                        <div id="modalRating">Rating</div>
                     </div>
                     <div id="modalSynopsis">Résumé</div>
                  </div>
               </div>
               <div class="containerModal3">
                  <div class="containerModal3-1">
                     <div class="modalDirectors">List[Réalisateur]</div>
                     <div id="modalActors">List[Acteur]</div>
                  </div>
                  <div class="containerModal3-2">
                     <div id="modalCountry">Pays d'origine</div>
                     <div class="containerModal3-2-1">
                        <div id="modalScore">Score</div>
                        <div id="modalResult">Résultat</div>
                     </div>
                  </div>
               </div>
               <div id="modalMovieId">Id</div>
               <button id="modalClose">X</button>
            </div>
         </dialog>
`;
   injection_point.innerHTML = bloc_1;
}
