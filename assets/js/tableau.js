var t = [1,2,'test', [1,2,3]];
var t2 = ['l1math', 20, new Date()];
t3 = t.concat(t2);
// console.log(t3);

function showTab(valeur, indice) {
    console.log(`t[${indice}] = ${valeur}`);
}
function afficheTab(t) {
    t.forEach(showTab);
}

afficheTab(t.concat(t2));
