let player = 0;
let computer = Math.floor(Math.random() * 1);

const rock = 0;
const paper = 1;
const scissors = 2;

console.log("Player picked: " + player);
console.log("Computer picked: " + computer);

if (player === rock && computer === scissors) {
    console.log("Player wins!");
} else if (player === paper && computer === rock) {
    console.log("Player wins!");
} else if (player === scissors && computer === paper) {
    console.log("Player wins!");
} else if (player === computer) {
    console.log("It's a tie!");
} else {
    console.log("Computer wins!");
}