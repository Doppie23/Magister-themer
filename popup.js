
var hoofdkleur = document.getElementById("hoofdkleur");
hoofdkleur.addEventListener("change", watchHoofdkleur, false);

var seckleur = document.getElementById("seckleur");
seckleur.addEventListener("change", watchSeckleur, false);

var thirdkleur = document.getElementById("thirdkleur");
thirdkleur.addEventListener("change", watchThirdkleur, false);

var titel = document.getElementById("titel");
titel.addEventListener("change", watchTitel, false);

var tekst = document.getElementById("tekst");
tekst.addEventListener("change", watchTekst, false);

function watchHoofdkleur(event) {chrome.storage.sync.set({ hoofdkleur: event.target.value })}
function watchSeckleur(event) {chrome.storage.sync.set({ seckleur: event.target.value })}
function watchThirdkleur(event) {chrome.storage.sync.set({ thirdkleur: event.target.value })}
function watchTitel(event) {chrome.storage.sync.set({ titel: event.target.value })}
function watchTekst(event) {chrome.storage.sync.set({ tekst: event.target.value })}

document.addEventListener('DOMContentLoaded', restore_options);

function restore_options() {
  chrome.storage.sync.get(['hoofdkleur'], function(hoofdkleur) {
    document.getElementById('hoofdkleur').value = hoofdkleur.hoofdkleur
  });

  chrome.storage.sync.get(['seckleur'], function(seckleur) {
    document.getElementById('seckleur').value = seckleur.seckleur
  });

  chrome.storage.sync.get(['thirdkleur'], function(thirdkleur) {
    document.getElementById('thirdkleur').value = thirdkleur.thirdkleur
  });
  
  chrome.storage.sync.get(['titel'], function(titel) {
    document.getElementById('titel').value = titel.titel
  });

  chrome.storage.sync.get(['tekst'], function(tekst) {
    document.getElementById('tekst').value = tekst.tekst
  });

  }