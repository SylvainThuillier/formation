//jeu de mise à deux joueurs sur 2 dés. Sur 7 ils perdent.
var player1 = player2 = 100,
    dice1,
    dice2,
    choiceDices1,
    choiceDices2,
    bid1,
    bid2,
    endGame=false;

while (!endGame) {
  if (player1 > 0) {
    console.log("Le joueur 1 à: " + player1);
    bid1 = Math.floor( Math.random() * player1 + 1 );
    choiceDices1 = Math.floor( Math.random() * 12 + 1 );
    while (choiceDices1==7) {
      choiceDices1 = Math.floor( Math.random() * 12 + 1 );
    };
    console.log("Le joueur 1 à misé: " + bid1 + " sur le: " + choiceDices1);
  } else {
    bid1 = 0;
  };

  if (player2 > 0) {
    console.log("Le joueur 2 à: " + player2);
    bid2 = Math.floor( Math.random() * player2 + 1 );
    choiceDices2 = Math.floor( Math.random() * 12 + 1 );
    while (choiceDices2==7) {
      choiceDices2 = Math.floor( Math.random() * 12 + 1 );
    };
    console.log("Le joueur 2 à misé: " + bid2 + " sur le: " + choiceDices2);
  } else {
    bid2 = 0;
  };

  dice1 = Math.floor( Math.random() * 6 + 1 );
  dice2 = Math.floor( Math.random() * 6 + 1 );
  console.log("Dé 1: " + dice1 + ", Dé 2: " + dice2 + ", Total: " + (dice1+dice2));
  if ( (dice1+dice2) == 7 ){
    console.log("Le total des dés étant de 7 les deux joueurs perdent leurs mises");
    player1 -= bid1;
    player2 -= bid2;
  } else {
    if (choiceDices1 == (dice1+dice2) && (bid1!=0)) {
      player1 += bid1;
      console.log("Le joueur 1 à gagné sa mise!");
    } else {
      if (bid1 != 0) {
        console.log("Le joueur 1 ne gagne rien...");
      };
    };
    if (choiceDices2 == (dice1+dice2) && (bid2!=0)) {
      player2 += bid2;
      console.log("Le joueur 1 à gagné sa mise!");
    } else {
      if (bid2 != 0) {
        console.log("Le joueur 2 ne gagne rien...");
      };
    };
  };

  if ( (player1 == 0) && (player2 == 0) ) {
    console.log("Les deux joueurs ont perdus");
    endGame = true;
  };
};
