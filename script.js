const hoofdkleurget = chrome.storage.sync.get('hoofdkleur')
const seckleurget = chrome.storage.sync.get('seckleur')
const titelget = chrome.storage.sync.get('titel')
const tekstget = chrome.storage.sync.get('tekst')

addEventListener('hashchange', (event) => {
    console.log(event.currentTarget.location.hash)

    if(event.currentTarget.location.hash === "#/vandaag"){
        mainpage()
    }
});

window.onload = function(event) {
    console.log(event.currentTarget.location.hash)

    if(event.currentTarget.location.hash === "#/vandaag"){
        mainpage()
    }    
};

chrome.storage.onChanged.addListener(function(changes) {
    mainpage()
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

function mainpage(){
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function(mutations, observer) {    
    const target = mutations[0].target
    if (target.matches('.ng-scope')){
        chrome.storage.sync.get(['titel'], function(titel) {
            waitForElm('.dialog-overlay').then(() => {
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
            
            var x = document.getElementsByTagName('b');
            for (let i = 0; i < x.length; i++){
                x[i].style.color = titel.titel;
            }
        });

        chrome.storage.sync.get(['thirdkleur'], function(thirdkleur) {
            //blokken
            waitForElm('.block').then(() => {
                var x = document.getElementsByClassName('block')
                for (let i = 0; i < x.length; i++){
                    x[i].style.backgroundColor = thirdkleur.thirdkleur;

                    x[i].getElementsByClassName('content')[0].style.backgroundColor = thirdkleur.thirdkleur;

                    var li = x[i].getElementsByTagName('li')
                    for (let u = 0; u < li.length; u++){
                        li[u].style.backgroundColor = thirdkleur.thirdkleur;
                    }

                    x[i].getElementsByClassName('endlink')[0].style.backgroundColor = thirdkleur.thirdkleur;


                    //cijfers bg
                    var bg = x[i].getElementsByClassName('arrow-list');
                    if (bg.length != 0){
                        bg[0].style.backgroundColor = thirdkleur.thirdkleur;
                    }

                    //cijfer kleur
                    var bgcijfer = x[i].getElementsByClassName('last-grade');
                    console.log(bgcijfer.length)
                    if(bgcijfer.length != 0){
                        console.log('test')
                        console.log(bgcijfer[0])
                        chrome.storage.sync.get(['seckleur'], function(seckleur) {
                            
                        });
                    }
                }
            });
        });

        chrome.storage.sync.get(['seckleur'], function(seckleur) {
            var x = document.getElementsByClassName('block')
            for (let i = 0; i < x.length; i++){
                var bgcijfer = x[i].getElementsByClassName('last-grade');
                    console.log(bgcijfer.length)
                    if(bgcijfer.length != 0){
                        console.log('test')
                        console.log(bgcijfer[0])
                        bgcijfer[0].style.backgroundColor = seckleur.seckleur;
                    }
            }
        });


        chrome.storage.sync.get(['tekst'], function(tekst) {
            waitForElm('.block').then(() => {
                var x = document.getElementsByClassName('block')
                for (let i = 0; i < x.length; i++){
                    //link
                    var link = x[i].getElementsByClassName('endlink')[0].getElementsByTagName('a')[0]
                    if (typeof link === 'undefined'){
                    }
                    else{
                        link.style.color = tekst.tekst;
                    }                    

                    //tekst in blok agenda
                    var li1 = x[i].getElementsByTagName('li')

                    if (li1.length !== 0){
                        for (let u = 0; u < li1.length; u++){
                            var txt = li1[u].getElementsByTagName('em')                            
                                txt[0].style.color = tekst.tekst;                       
                            }
                    }
                }                
            });
        });
    };
    });
    
    chrome.storage.sync.get(['hoofdkleur'], function(hoofdkleur) {
        //bg en balk
        document.body.style.backgroundColor = hoofdkleur.hoofdkleur;
        document.documentElement.style.setProperty('--secondary-background', hoofdkleur.hoofdkleur);
        waitForElm('.menu-footer').then(() => {
        document.getElementsByClassName('menu-footer')[0].style.backgroundColor = hoofdkleur.hoofdkleur;
        });
    });

    chrome.storage.sync.get(['seckleur'], function(seckleur) {
        //balk
        document.documentElement.style.setProperty('--primary-background', seckleur.seckleur);
        document.documentElement.style.setProperty('--background-1', seckleur.seckleur);
    });

    observer.observe(document, {
        subtree: true,
        attributes: true
        });    
}