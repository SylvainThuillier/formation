//somme de 5 random
var valeurs = [];
var somme = 0;
for (var i=0; i<5; i++){
  valeurs[i] = Math.floor( Math.random() * 100 + 1 );
  console.log("Valeurs[" + i + "]: " + valeurs[i]);
  somme = somme + valeurs[i];
  //console.log("Somme: " + somme);
};
console.log("Somme finale:" + somme);
