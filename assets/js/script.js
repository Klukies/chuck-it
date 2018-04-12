'use strict';

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("open-quote-modal").addEventListener('click', openModal);
}

const openModal = function(e){
  e.preventDefault();
  document.getElementById("modal-quote-options").classList.remove('hidden');
  document.getElementById("close-modal").addEventListener('click', closeModal);
}

const closeModal = function(){
  document.getElementById("modal-quote-options").classList.add('hidden');
}
