function jouer(bsup = 20,
    nombreTentative = 3) {
    nombreAleatoire = Math.floor(Math.random() * bsup + 1);
    while(nombreTentative > 0) {
        tentative = prompt(`Vous avez ${nombreTentative} tentatives veuillez renseigner un chiffre entre 1 et ${bsup}`);
        if (tentative == nombreAleatoire) {
            alert(`Vous avez gagné `);
            break;
        } else if (tentative > nombreAleatoire) {
            alert('Le nombre est plus petit');
        } else {
            alert('Le nombre est plus grand');
        }
        nombreTentative --;
    }
    if(nombreTentative == 0) {
        alert('Vous avez perdu');
    }
}

jeu = true;

while(jeu) {
    jouer();
    jeu = confirm('Voulez vous rejouer');
}
lien = document.querySelector('a');
isHidden = true;
setInterval(
    function(){
        lien.setAttribute('hidden', isHidden);
        isHidden = !isHidden;
        console.log(isHidden)
    },1000);
