/*
Exo 8
Remplir un tableau de 7 cases avec des mots (1 par case)
Parcourir les 5 cases du milieu du tableau à l’envers et en afficher le contenu
*/
var mots = [];
var phrase = "";
mots[0] = "Hello";
mots[1] = "friend";
mots[2] = "old";
mots[3] = "my";
mots[4] = "darkness";
mots[5] = "hello";
mots[6] = "World!";

for (var i=5; i>0; i--) {
  phrase += mots[i] + " ";
};
console.log(phrase);
