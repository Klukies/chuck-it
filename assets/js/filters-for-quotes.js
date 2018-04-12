'use strict';

document.addEventListener("DOMContentLoaded", init);

function init(){
  getCategories();
}

const getIdFromCategory = function(){
  sessionStorage.setItem("category", this.id);
  window.location = "filtered-quote.html";
}


const getCategories = function (){
  const url = `https://api.chucknorris.io/jokes/categories`;

  const options = {
    method: 'get'
  };

  fetchFunc(url, options, showCategories)
}
const showCategories = function(json){
  let cLength = json.length;
  for (let i = 0; i < cLength; i++){
    let list = document.createElement("li");
    list.setAttribute('id', json[i]);
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");

    img.src = `assets/media/${json[i]}.png`;
    img.alt = `image for ${json[i]}`;
    img.title = `image for ${json[i]}`;

    figcaption.innerHTML = `${json[i]}`;

    list.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    document.getElementById("categories").appendChild(list);
  }
  let categories = document.getElementsByTagName("li");
  for (let i = 0; i < categories.length; i++){
    categories[i].addEventListener('click', getIdFromCategory);
  }
}
