var Personnage = {
    name : 'fakeName',
    vie: 20,
    force: 5,
    forceSpecial: 3,
    iterationAS: 1,
    whoAmI: function() {
        console.log(this);
      console.log('Je suis ' + this.name +  'ma force est ' +  this.vie);
    },
    attaquer: function(adversaire) {
        valeurAttaque = Math.floor(Math.random() * (this.force + 1));
        adversaire.vie -= valeurAttaque;
        console.log(this);
        console.log(`
            -------------------------
            ${this.name} a attaqué et a infligé ${valeurAttaque} dégats à ${adversaire.name}
            -------------------------
            `);
    },
    attaqueSpecial: function(adversaire) {
        valeurAttaque = Math.floor(Math.random() * (this.force + 1));
        valeurAttaqueSpeciale = valeurAttaque * this.forceSpecial;
        adversaire.vie -= valeurAttaqueSpeciale;
        console.log(`
            -------------------------
            ${this.name} a effectué son attaque spéciale et a infligé ${valeurAttaqueSpeciale}
             dégats à ${adversaire.name}
            -------------------------
            `);
    },
    combattre: function(adversaire) {
        i = 1;
        console.log('Début Combat');
        this.whoAmI();
        console.log(this);
        var that = this;
        debutJeu = setInterval(
             () => {
                 that.whoAmI();
                if (i != that.iterationAS) {
                    that.attaquer(adversaire);
                } else {
                    that.attaqueSpecial(adversaire);
                }
                if (i != adversaire.iterationAS) {
                    adversaire.attaquer(that);
                } else {
                    adversaire.attaqueSpecial(that);
                }
                if (that.vie <= 0 || adversaire.vie <=0) {
                    if (that.vie > adversaire.vie) {
                        console.log(`${that.name} a remporté le combat`);
                    } else if (that.vie === adversaire.vie){
                        console.log('Vous êtes a égalité');
                    } else {
                        console.log(`${adversaire.name} a remporté le combat`);
                    }
                    clearInterval(debutJeu);
                }
                i++;
                }, 2000
        );

    },
    etatIteration() {

    }
};

function combat(personnage1, personnage2) {
        i = 1;
        console.log('Début Combat');
        console.log(personnage1);
        console.log(personnage2);
        debutJeu = setInterval(
            () => {
                if (i != personnage1.iterationAS) {
                    personnage1.attaquer(personnage2);
                } else {
                    personnage1.attaqueSpecial(personnage2);
                }
                if (i != personnage2.iterationAS) {
                    personnage2.attaquer(personnage1);
                } else {
                    personnage2.attaqueSpecial(personnage1);
                }
                if (personnage1.vie <= 0 || personnage2.vie <=0) {
                    if (personnage1.vie > personnage2.vie) {
                        console.log(`${personnage1.name} a remporté le combat`);
                    } else if (personnage1.vie === personnage2.vie){
                        console.log('Vous êtes a égalité');
                    } else {
                        console.log(`${personnage2.name} a remporté le combat`);
                    }
                    clearInterval(debutJeu);
                }
                i++;
            }, 2000
        );
}
var skander = Object.create(Personnage);
var ghailen = Object.create(Personnage);

skander.iterationAS = Math.floor(Math.random()*10);
ghailen.iterationAS = Math.floor(Math.random()*10);
skander.name = 'Aymen';
ghailen.name = 'Yasser';
ghailen.combattre(skander);
//combat(skander, ghailen);
