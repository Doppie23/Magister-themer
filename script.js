const hoofdkleurget = chrome.storage.sync.get('hoofdkleur')
const seckleurget = chrome.storage.sync.get('seckleur')
const titelget = chrome.storage.sync.get('titel')
const tekstget = chrome.storage.sync.get('tekst')

addEventListener('hashchange', (event) => {
    console.log(event.currentTarget.location.hash)

    if(event.currentTarget.location.hash === "#/vandaag"){
        chrome.storage.sync.get(['hoofdkleur'], function(hoofdkleur) {
            //bg en balk
            document.body.style.backgroundColor = hoofdkleur.hoofdkleur;
            document.documentElement.style.setProperty('--secondary-background', hoofdkleur.hoofdkleur);
            document.getElementsByClassName('menu-footer')[0].style.backgroundColor = hoofdkleur.hoofdkleur;
        });

        chrome.storage.sync.get(['seckleur'], function(seckleur) {
            //balk
            document.documentElement.style.setProperty('--primary-background', seckleur.seckleur);
            document.documentElement.style.setProperty('--background-1', seckleur.seckleur);
        });

        chrome.storage.sync.get(['titel'], function(titel) {
            waitForElm('.title').then(() => {
                //dag titel
                var x = document.getElementsByClassName('view')
                var x = x[0].getElementsByClassName('container')[0].getElementsByTagName('dna-page-header')[0].shadowRoot;
                x.querySelector(".container").getElementsByClassName('title')[0].style.color = titel.titel;

                //pas schermindelding aan
                var x = document.getElementsByClassName('view')
                var x = x[0].getElementsByClassName('container')[0].getElementsByTagName('dna-page-header')[0];
                x.getElementsByTagName('dna-button-bar')[0].getElementsByTagName('dna-button')[0].style.color = titel.titel;
                x.getElementsByTagName('dna-button-bar')[0].getElementsByTagName('dna-button')[0].style.borderColor = titel.titel;
            });
            
        });


    }

});

window.onload = function(event) {
    console.log(event.currentTarget.location.hash)
    
};



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