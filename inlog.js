//Hoofdkleur
chrome.storage.onChanged.addListener(function(changes) {
    var hoofdkleur = changes['hoofdkleur'];
    console.log(hoofdkleur.newValue);

    // Background
    document.body.style.backgroundColor = hoofdkleur.newValue;

  });

//titel
chrome.storage.onChanged.addListener(function(changes) {
    var titel = changes['titel'];
    console.log(titel.newValue);
    document.getElementsByTagName('h1')[0].style.color = titel.newValue;

    document.getElementsByTagName('path')[1].style.fill = titel.newValue;

    document.getElementsByClassName('dna-btn-primary')[0].style.backgroundColor = titel.newValue;
});
//tekst
chrome.storage.onChanged.addListener(function(changes) {
  var tekst = changes['tekst'];
  console.log(tekst.newValue);
  document.getElementsByTagName('h2')[0].style.color = tekst.newValue
});
  