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

    //inlog pagina
    document.getElementsByTagName('h1')[0].style.color = titel.newValue
});

  