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
  document.getElementsByTagName('h2')[0].style.color = tekst.newValue;
  document.getElementsByClassName('dna-btn-primary')[0].style.color = tekst.newValue;
});
 

const hoofdkleur = chrome.storage.sync.get('hoofdkleur')
const titel = chrome.storage.sync.get('titel')
const tekst = chrome.storage.sync.get('tekst')



waitForElm('.challenge-actions').then(() => {
  hoofdkleur.then((hoofdkleur) => {
    document.body.style.backgroundColor = hoofdkleur.hoofdkleur;
  })

  titel.then((titel) => {
    document.getElementsByTagName('h1')[0].style.color = titel.titel;
    document.getElementsByTagName('path')[1].style.fill = titel.titel;
    document.getElementsByClassName('dna-btn-primary')[0].style.backgroundColor = titel.titel;
  })

  tekst.then((tekst) => {
    document.getElementsByTagName('h2')[0].style.color = tekst.tekst;
    document.getElementsByClassName('dna-btn-primary')[0].style.color = tekst.tekst;
  })
});



MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
  hoofdkleur.then((hoofdkleur) => {
    document.body.style.backgroundColor = hoofdkleur.hoofdkleur;
  })

  titel.then((titel) => {
    document.getElementsByTagName('h1')[0].style.color = titel.titel;
    document.getElementsByTagName('path')[1].style.fill = titel.titel;
    document.getElementsByClassName('dna-btn-primary')[0].style.backgroundColor = titel.titel;
  })

  tekst.then((tekst) => {
    document.getElementsByTagName('h2')[0].style.color = tekst.tekst;
    document.getElementsByClassName('dna-btn-primary')[0].style.color = tekst.tekst;
  })

});


observer.observe(document, {
  subtree: true,
  attributes: true
});


waitForElm('#forgot_password_link').then(() => {
  tekst.then((tekst) => {
    document.getElementById('forgot_password_link').style.color = tekst.tekst;
  })
});


function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}