
villes = ['Tunis', 'Djerba', 'Sousse', 'Sfax', 'Sidibouzid'];
const ol = document.querySelector('#listeVilles');
i = 0;

indiceInterval = setInterval(
    function () {
        if(i==villes.length){
            i=0;
            ol.innerHTML = '';
        }
        ol.innerHTML += `<li>${villes[i]}</li>`;
        i++;
    },1000
);
