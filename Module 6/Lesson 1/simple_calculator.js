const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the first number: ", (firstInput) => {
    rl.question("Enter the second number: ", (secondInput) => {
        let firstNumber = Number(firstInput)
        let secondNumber = Number(secondInput)

        console.log("Addition:", firstNumber + secondNumber);
        console.log("Subtraction:", firstNumber - secondNumber);
        console.log("Multiplication:", firstNumber * secondNumber);
        console.log("Division:", firstNumber / secondNumber);

        rl.close();
    });
});