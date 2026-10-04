const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the buying price: ", (buyingInput) => {
    rl.question("Enter the selling price: ", (sellingInput) => {
        let buyingPrice = Number(buyingInput);
        let sellingPrice = Number(sellingInput);

        if (sellingPrice > buyingPrice) {
            let profit = sellingPrice - buyingPrice;
            console.log("Profit:", profit);
        }
        else if (sellingPrice < buyingPrice) {
            let loss = buyingPrice - sellingPrice;
            console.log("Loss:", loss);
        }
        else {
            console.log("No Profit, No Loss");
        }

        rl.close()
    })
})