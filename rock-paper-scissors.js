let player = 0;
let computer = Math.floor(Math.random() * 1);

if (player === 0 || computer === 0) {
    console.log("Rock");
}
else if (player === 1 || computer === 1) {
    console.log("Paper");
}
else if (player === 2 || computer === 2) {
    console.log("Scissors");
}
else {
    console.log("TIE!")
}