function cretaeImage(src, width=50, heigth=50) {
    const image = document.createElement('img');
    image.src = src;
    image.height = heigth;
    image.width;
    return image;
}

const zizou = cretaeImage('assets/images/zizou.jpeg');
const body = document.querySelector('body');
setTimeout(
    function () {
        body.insertBefore(zizou,body.firstChild);
    },1500
);

