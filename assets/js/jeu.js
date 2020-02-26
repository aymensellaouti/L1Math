var Personnage = {
    vie: 100,
    force: 5,
    forceSpecial: 3,
    iterationAS: 1,
    attaquer: function (adversaire) {
        valeurAttaque = Math.floor(Math.random() * (this.force + 1));
        adversaire.vie -= valeurAttaque;
        return(valeurAttaque);
    },
    attaqueSpecial: function (adversaire) {

    },
    combatre: function(adversaire) {

    },
    etatIteration() {

    }
};
