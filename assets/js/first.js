//
// i = 10;
// function sayHello() {
//     console.log(i--);
//     if(i == 0) {
//         clearInterval(code);
//     }
// }
// code = setInterval(sayHello,1000);
//
// setTimeout(sayHello,2000);

console.log('après la fonction timeout');

function allApparition(s, sc) {
    indice = 0;
    while(indice >= 0) {
        indice = s.indexOf(sc, indice);
        if (indice >= 0 ) {
            console.log(indice);
            indice += sc.length;
        }
    }
}
allApparition('Bonjour le monde', 'o');

