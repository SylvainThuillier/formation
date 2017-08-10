//inverser deux valeurs avec 3 variables
var v1 = 'a';
var v2 = 'b';
var temp = '-';

console.log("v1: " + v1 + ", v2: " + v2 + ", temp: " + temp);

temp = v1;
//console.log(temp); //a
v1 = v2;
//console.log(v1); //b
v2 = temp;
//console.log(v2); //a

console.log("v1: " + v1 + ", v2: " + v2 + ", temp: " + temp);
