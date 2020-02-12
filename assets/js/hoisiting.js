function f() {
    console.log(c);
    c = 3;
}
function compare(a, b) {
    return a - b;
}
tab =  [1, 11, 3, 2, 21, 4];

console.log(tab.sort(compare));
