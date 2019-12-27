// Your code goes here
let n = 0;
let game = confirm("Do you want to play a game?");
if (game === false) {
  alert("You did not become a billionaire, but can.");
} else {
  while  (game === true) do {
    let n = 0;
    let randomNumber = Math.random(8 + 4*n);
    let attempt1 = prompt(
      "Choose a roulette pocket number from 0 to "+(8 + 4*n)+ 
      "Attempts left 3"+
      "Total prize:  $"+
      "Posible prize on current attempt "+100*(n + 1)+"$"
    );

    if (attempt1 === randomNumber) {
      alert(
        "Congratulation, you won!   Your prize is: " +
          100*(n + 1) +
          "$. Do you want to continue?"
      );
    } else {
      let attempt2 = prompt(
        "Choose a roulette pocket number from 0 to "+(8+4*n)+ 
        "Attempts left 2"+
        "Total prize:  $"+
        "Posible prize on current attempt "+50*(n + 1)+"$"
      );
      if (attempt2 === randomNumber) {
        alert(
          "Congratulation, you won!   Your prize is: " +
            50*(n + 1) +
            "$. Do you want to continue?"
        );
      } else {
        let attempt3 = prompt(
          "Choose a roulette pocket number from 0 to "+(8 + 4*n)+ 
          "Attempts left 1"+
          "Total prize:  $"+
          "Posible prize on current attempt "+25*(n + 1)+"$"
        );
        if (attempt3 === randomNumber) {
          alert(
            "Congratulation, you won!   Your prize is: " +
              25*(n + 1) +
              "$. Do you want to continue?"
          );
        } else {
          alert("Thank you for your participation. Your prize is: … $");
        }
      }
    }
  }
}
