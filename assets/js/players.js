function cretaeImage(src, width=50, heigth=50) {
    const image = document.createElement('img');
    image.src = src;
    image.height = heigth;
    image.width;
    return image;
}
images = [
    'maldini.jpeg',
    'zizou.jpeg',
    'messi.jpeg',
    'ronaldo.jpeg'
];
const ol = document.querySelector('ol');
let li = ol.firstElementChild;
let i = 0;
indice = setInterval(
    function () {
        let playerImage = cretaeImage('assets/images/'+images[i]);
        li.appendChild(playerImage);
        i++;
        li = li.nextElementSibling;
        if (!li) {clearInterval(indice);}
    },1500
);
