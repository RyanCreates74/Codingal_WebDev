const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter marks for maths: ", (mathInput) => {
    rl.question("Enter marks for english: ", (englishInput) => {
        rl.question("Enter marks for science: ", (scienceInput) => {
            let math = Number(mathInput);
            let english = Number(englishInput);
            let science = Number(scienceInput);

            let average = (math + english + science) / 3;

            console.log("\nAverage Marks:", average);

            if (math >= 40 && english >= 40 && science >= 40) {
                console.log("Result: PASS");
                if (average >= 80) {
                    console.log("Grade: A+");

                    if (average >= 90) {
                        console.log("Achievement: Outstanding");
                    }
                }
                else if (average >= 70) {
                    console.log("Grade: A")
                }
                else if (average >= 60) {
                    console.log("Grade: B")
                }
                else if (average >= 50) {
                    console.log("Grade: C")
                }
                else {
                    console.log("Grade: D");
                }
            }
            else {
                console.log("Result: FAIL");

                if (math < 40) {
                    console.log("Failed in math");
                }
                if (english < 40) {
                    console.log("Failed in english");
                }
                if (science < 40) {
                    console.log("Failed in science");
                }
            }

            rl.close();
        })
    })
})