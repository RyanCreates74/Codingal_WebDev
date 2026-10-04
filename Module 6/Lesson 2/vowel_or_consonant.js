const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter a letter: ", (character) => {
    if (character.length != 1) {
        console.log("Enter only onne letter!");
    }
    else {
        switch (character.toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                console.log("Vowel");
                break;
            default:
                console.log("Consonant");
        }
    }
    rl.close();
})