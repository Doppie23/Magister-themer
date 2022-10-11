
var hoofdkleur = document.getElementById("hoofdkleur");
hoofdkleur.addEventListener("change", watchHoofdkleur, false);

function watchHoofdkleur(event) {
    document.querySelectorAll("h1").forEach((p) => {
      p.style.color = event.target.value;
      console.log(event.target.value)


      /*
      event target opslaan in chrome storage en daar dan naar luisteren in script.js
      kan dan ook weer ophalen bij reload en dus dan bij verandering
      */
    });
  }

