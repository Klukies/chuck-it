'use strict';

const fetchFunc = function (url, options, cb) {
  fetch(url, options)
    .then(response => response.json())
    .then(json => cb(json))
    .catch(error => console.log(error));
};

const goBackToIndex = function(){
  window.location = `index.html`;
}

document.getElementById("go-back-to-index").addEventListener('click', goBackToIndex);
