'use strict';

document.addEventListener("DOMContentLoaded", init);

function init(){
  getCategoryFromSessionStorage();
}

const getCategoryFromSessionStorage = function (){
  let category = sessionStorage.getItem("category");
  getFilteredQuote(category);
  injectCategory(category);
};

const getFilteredQuote = function (givenCategory){
  const url = `https://api.chucknorris.io/jokes/random?category=${givenCategory}`;

  const options = {
    method:'get'
  };

  fetchFunc(url, options, insertFilteredQuote);
};

const insertFilteredQuote = function(json){
  document.getElementById("fetched-filtered-quote").innerHTML = json.value;
};

const injectCategory = function (givenCategory){
  document.getElementById("category-displayed").innerHTML += givenCategory;
}
