//déclaration tableau 2 dimensions
var tdm = [];
var col1 = [];
var col2 = [];
var col3 = [];
var col4 = [];
var col5 = [];

tdm[0] = col1;
tdm[1] = col2;
tdm[2] = col3;
tdm[3] = col4;
tdm[4] = col5;

var sommes = [];
//on rempli le tableau
for (var i=0; i<tdm.length; i++) {
  for (var j=0; j<tdm.length; j++) {
    tdm[i][j] = Math.floor( Math.random() * 100 + 1 );
  };
};
//on l'affiche
console.log("Tableau deux dimensions:");
console.log(tdm);

//on parcours le tableau et on ajoute la première valeur de chaque tableau pour calculer la somme
for (var i=0; i<tdm.length; i++) {
  var temp = 0;
  for (var j=0; j<tdm.length; j++) {
    temp += tdm[j][i]; //c'est ici qu'on sélectionne la case correspondante
  };
  sommes[i] = temp;
};

//on affiche la somme
console.log("Les sommes des colonnes: " + sommes);
