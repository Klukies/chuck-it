'use strict';

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetchRandomQuote();
}

const fetchRandomQuote = function(){
  const url = `https://api.chucknorris.io/jokes/random`;

  const options = {
    method:'get'
  };

  fetchFunc(url, options, showRandomQuote);
};

const showRandomQuote = function(json){
  let quote = json.value;
  document.getElementById("fetched-quote").innerText = quote;
};
