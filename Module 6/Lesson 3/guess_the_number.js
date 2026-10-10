const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function guessTheNumber() {
    console.log("=".repeat(30));
    console.log("      GUESS THE NUMBER GAME");
    console.log("=".repeat(30));
    console.log("\nI have selected a number between 1 and 10.");
    console.log("Try to guess the correct number!\n");

    while (true) {
        const target = getRandomInt(1, 10);
        let attempts = 0;

        console.log("A new number has been selected.");
        while (true) {
            const input = await askQuestion("Enter your guess (1-10): ");
            const guess = parseInt(input, 10);

            if (isNaN(guess) || guess < 1 || guess > 10) {
                console.log("Please enter a valid number between 1 and 10.")
                continue;
            }

            attempts++;
            if (guess < target) {
                console.log("Your guess is too low. Try again.");
            } else if (guess > target) {
                console.log("Your guess is too high. Try again.");
            } else {
                console.log("\nCongratulations!");
                console.log(`You guessed the correct number: ${target}`);
                console.log(`You needed ${attempts} attempt(s) to win!`);
                break;
            }
        }

        const playAgainInput = await askQuestion("\nWould you like to play again? (yes/no): ");
        const playAgain = playAgainInput.trim().toLowerCase();

        if (playAgain === "no" || playAgain === "n") {
            console.log("\nThank you for playing!");
            console.log("Game ended. See you next time!");
            rl.close();
            break;
        }

        console.log("\nStarting new round...\n");

    }
}

guessTheNumber();