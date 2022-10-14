const hoofdkleur = chrome.storage.sync.get('hoofdkleur')
const seckleur = chrome.storage.sync.get('seckleur')
const titel = chrome.storage.sync.get('titel')
const tekst = chrome.storage.sync.get('tekst')


addEventListener('hashchange', (event) => {
    console.log(event.currentTarget.location.hash)

    if(event.currentTarget.location.hash === "#/vandaag"){
        mainpage();
    }

});

window.onload = function(event) {
    console.log(event.currentTarget.location.hash)
    
};

function mainpage(hoofdkleur, seckleur, titel, tekst){
    
}