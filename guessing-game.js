// function guessingGame() {
//     let target = Math.floor(Math.random() * 99);
//     let gameOver = false;
//     let count = 0
    
//     return function guess(num) {
//       if (gameOver) {
//         return "Game Over!"  
//       }
//       if (num === target) {
//         gameOver = true;
//         return `You win! you found ${target} in ${count} guesses.`  
//       }
//       if (num > target) {
//         count++
//         return `${num} is too high`
//       }
//       if (num > target) {
//         count++
//         return `${num} is too low`  
//       }
//     }
//   }
function guessingGame() {
    const ANSWER = Math.floor(Math.random() * 100);
    let isOver = false;
    let numGuesses = 0;
  
    return function guess(num) {
      if (isOver) return "The game is over, you already won!";
      numGuesses++;
      if (num === ANSWER) {
        isOver = true;
        const guess = numGuesses === 1 ? "guess" : "guesses";
        return `You win! You found ${num} in ${numGuesses} ${guess}.`;
      }
      if (num < ANSWER) return `${num} is too low!`;
      if (num > ANSWER) return `${num} is too high!`;
    };
  }
module.exports = { guessingGame };
