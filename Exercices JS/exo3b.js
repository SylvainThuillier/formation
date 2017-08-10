//déterminé laquelle de 2 valeurs random est la plus haute
var v1 = Math.floor( Math.random() * 100 + 1 );
console.log("v1: " + v1);
var v2 = Math.floor( Math.random() * 100 + 1 );
console.log("v2: " + v2);

if (v1>v2){
  console.log("v1 supérieure");
} else if (v2>v1) {
  console.log("v2 supérieure");
} else {
  console.log("Égalité");
};

//opérateur ternaire (comme un if)
var result;
v1>v2 ? result = "v1 supérieure" : (v2>v1 ? result = "v2 supérieure" : result = "Égalité");
console.log(result);
