//relancer un random jusqu'à obtenir une valeur entre 1 et 10
var v1 = Math.floor( Math.random() * 100 + 1 );
console.log(v1);
while (v1>10) {

  v1 = Math.floor( Math.random() * 100 + 1 );
  console.log(v1);
  // if (v1>10) {
  //   console.log(v1);
  // };
};
