'use strict';

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetchPages();
  fetchMovies(1);
}



const fetchPages = function(){
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=fc06e9e299594b46cfefa735a41c07b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=&with_cast=51576`;

  const options = {
    method:'get'
  };

  fetchFunc(url, options, showPages)
}

const showPages = function(json){
  let moviesLength = json.total_pages;
  for (let i = 0; i < moviesLength; i++){
    let link = document.createElement('a');
    link.setAttribute('href', "#")
    link.setAttribute('id', `${i+1}`);
    link.setAttribute('class', "scroll-button")
    link.innerHTML = `${i+1}`;

    document.getElementById("scroll-buttons").appendChild(link);
  }
  let pages = document.getElementsByClassName("scroll-button");
  for (let i = 0; i < pages.length; i++){
    pages[i].addEventListener('click', getIdFromScrollButton);
  }
}

const getIdFromScrollButton = function(e){
  document.getElementById("movies-from-chuck").innerHTML = "";
  fetchMovies(this.id);
}


const fetchMovies = function(integer) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=fc06e9e299594b46cfefa735a41c07b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${integer}&with_cast=51576`;

  const options = {
    method: 'get'
  };

  fetchFunc(url, options, showMovies)
}

const showMovies = function(json) {
  for (let i = 0; i < json.results.length; i++) {
    let list = document.createElement("li");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");

    figcaption.innerHTML = json.results[i].title;

    if (json.results[i].poster_path === null) {
      img.src = "assets/media/chuck.png"
    } else {
      img.src = `http://image.tmdb.org/t/p/w185//${json.results[i].poster_path}`
      img.alt = `image for ${json.results[i].title}`;
      img.title = `image for ${json.results[i].title}`
    }

    list.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    document.getElementById("movies-from-chuck").appendChild(list);
  }
}
