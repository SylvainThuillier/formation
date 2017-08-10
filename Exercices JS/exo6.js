//jeu de mise à 1 joueur sur pile ou face.
var money = 100, piece, bid, choice;

while (money>0){
  console.log("vous avez: " + money);
  bid = Math.floor( Math.random() * money + 1 );
  console.log("Vous misez: " + bid);
  choice = Math.floor( Math.random() * 2 );
  console.log("Sur: ");
  if (choice==0) {
    console.log("Pile");
  } else {
    console.log("Face");
  };
  piece = Math.floor( Math.random() * 2 );
  console.log("La pièce est tombée sur: ");
  if (piece==0) {
    console.log("Pile");
  } else {
    console.log("Face");
  };
  if (piece==choice){
    console.log("Bravo vous gagnez la mise!");
    money += bid;
  } else {
    console.log("Oups vous perdez votre mise!");
    money -= bid;
  };
};
console.log("Vous avez tout perdu désolé...");
