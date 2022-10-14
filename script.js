addEventListener('hashchange', (event) => {
    console.log(event.newURL)

});

window.onload = function(event) {
    console.log(event.currentTarget.location.href)
    
};