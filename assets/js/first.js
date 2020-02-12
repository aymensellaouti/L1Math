
i = 10;
function sayHello() {
    console.log(i--);
    if(i == 0) {
        clearInterval(code);
    }
}
code = setInterval(sayHello,1000);

setTimeout(sayHello,2000);

console.log('après la fonction timeout');

function allApparition(s, sc) {

}

