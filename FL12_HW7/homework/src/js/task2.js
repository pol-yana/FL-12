// Your code goes here
let n = 1;
let totalPrize = 0;
let game = confirm("Do you want to play a game?");
if (!game) {
  alert("You did not become a billionaire, but can.");
} else {
  while (game) {
    let prize = 100 * Math.pow(2, n - 1);
    let randomNumber =
      Math.floor(Math.random() * (Math.floor(4 + 4 * n) - Math.ceil(0) + 1)) +
      Math.ceil(0);
    let attempt1 = prompt(
      "Choose a roulette pocket number from 0 to " +
        (4 + 4 * n) +
        "\nAttempts left 3\nTotal prize: " +
        totalPrize +
        " $\nPosible prize on current attempt " +
        prize +
        "$"
    );

    if (attempt1 === randomNumber) {
      alert("Congratulation, you won!   Your prize is: " + prize + "$.");
      game = confirm("Do you want to continue?");
      totalPrize = totalPrize + prize;
    } else {
      let prize = 50 * Math.pow(2, n - 1);
      let attempt2 = prompt(
        "Choose a roulette pocket number from 0 to " +
          (4 + 4 * n) +
          "\nAttempts left 3\nTotal prize: " +
          totalPrize +
          " $\nPosible prize on current attempt " +
          prize +
          "$"
      );
      if (attempt2 === randomNumber) {
        alert("Congratulation, you won!   Your prize is: " + prize + "$.");
        game = confirm("Do you want to continue?");
        totalPrize = totalPrize + prize;
      } else {
        let prize = 25 * Math.pow(2, n - 1);
        let attempt3 = prompt(
          "Choose a roulette pocket number from 0 to " +
            (4 + 4 * n) +
            "\nAttempts left 3\nTotal prize: " +
            totalPrize +
            " $\nPosible prize on current attempt " +
            prize +
            "$"
        );
        if (attempt3 === randomNumber) {
          alert("Congratulation, you won!   Your prize is: " + prize + "$.");
          game = confirm("Do you want to continue?");
          totalPrize = totalPrize + prize;
        } else {
          alert(
            "Thank you for your participation. Your prize is: " +
              totalPrize +
              " $"
          );
          game = confirm("Do you want to continue?");
        }
      }
    }
    n++;
  }
}
