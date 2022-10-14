addEventListener('hashchange', (event) => {
    console.log(event.currentTarget.location.hash)

    if(event.currentTarget.location.hash === "#/vandaag"){
        console.log('epicly')
    }

});

window.onload = function(event) {
    console.log(event.currentTarget.location.hash)
    
};

function mainpage(hoofdkleur, seckleur, titel, tekst){
    
}