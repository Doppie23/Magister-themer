
var hoofdkleur = document.getElementById("hoofdkleur");
hoofdkleur.addEventListener("change", watchHoofdkleur, false);

var titel = document.getElementById("titel");
titel.addEventListener("change", watchTitel, false);

var tekst = document.getElementById("tekst");
tekst.addEventListener("change", watchTekst, false);


function watchHoofdkleur(event) {
  console.log(event.target.value)
  chrome.storage.sync.set({ hoofdkleur: event.target.value })


/*
event target opslaan in chrome storage en daar dan naar luisteren in script.js
kan dan ook weer ophalen bij reload en dus dan bij verandering
*/

}

// chrome.storage.onChanged.addListener(function(changes) {
//   var action = changes['hoofdkleur'];
//   console.log(action.newValue)
// });

function watchTitel(event) {chrome.storage.sync.set({ titel: event.target.value })}
function watchTekst(event) {chrome.storage.sync.set({ tekst: event.target.value })}

document.addEventListener('DOMContentLoaded', restore_options);

function restore_options() {
  chrome.storage.sync.get(['hoofdkleur'], function(hoofdkleur) {
    document.getElementById('hoofdkleur').value = hoofdkleur.hoofdkleur
  });

  // chrome.storage.sync.get(['seckleur'], function(seckleur) {
    // document.getElementById('seckleur').value = seckleur.seckleur
  // });
  
  chrome.storage.sync.get(['titel'], function(titel) {
    document.getElementById('titel').value = titel.titel
  });

  chrome.storage.sync.get(['tekst'], function(tekst) {
    document.getElementById('tekst').value = tekst.tekst
  });

  }