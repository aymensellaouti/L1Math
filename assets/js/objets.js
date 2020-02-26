var Rectangle = {
    longeur: 0,
    largeur: 0,
    surface: function () {
        return (this.largeur * this.longeur);
    },
    perimetre: function () {
        return ((this.longeur + this.largeur)*2);
    }
};
