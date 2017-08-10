//trier un tableau de 10 valeurs random en décroissant
var valeurs = [];

for (var i=0; i<5; i++){
  valeurs[i] = Math.floor( Math.random() * 100 + 1 );
};

console.log(valeurs);

for (var i=0; i<valeurs.length; i++) {
  for (var j=(i+1); j<valeurs.length; j++ ){
    //console.log("i: " + i + ", j:" + j + " " + valeurs);
    var temp = 0;
    if (valeurs[j] > valeurs[i]) {
      temp = valeurs[i];
      valeurs[i] = valeurs[j];
      valeurs[j] = temp;
    };
  };
};
console.log(valeurs);
