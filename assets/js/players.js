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

p = document.querySelector('p');
p.addEventListener(
    'mouseover',
    function(e) {
         p.style.fontSize = '150%';
         p.style.color = 'gold'
    }
    );
p.addEventListener(
    'mouseout',
    function(e) {
        p.style.fontSize = '100%';
        p.style.color = 'red'
    }
);
function getRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
const div = document.querySelector('div');
i = 0;

div.addEventListener('click', function () {
    div.classList.toggle('ouvert');
    div.classList.toggle('ferme');
    // if(!(i % 2)) {
    //     div.style.backgroundColor = 'black';
    // } else {
    //     div.style.backgroundColor = 'red';
    // }
    // i++;
});


