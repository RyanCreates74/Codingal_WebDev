const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the last number: ", (num) => {
    let n = Number(num);
    for (let i = 1; i <= n; i++) {
        console.log(i);
        rl.close();
    }
});