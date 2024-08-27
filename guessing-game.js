function guessingGame() {
    const target = Math.floor(Math.random()*101);
    let count = 0;
    let status = true;

    return function game(num){ 
        if (!status) return "The game is over, you already won!";

        if (typeof(num) !== 'number'){
            return `${num} is not a number!`;
        } else if (num > target){
            count++;
            return `${num} is too high!`;
        } else if (num < target){
            count++;
            return `${num} is too low!`;
        } else {
            count++;
            status = false;
            return `You win! You found ${num} in ${count} guesses.`
        }
    }
}

module.exports = { guessingGame };