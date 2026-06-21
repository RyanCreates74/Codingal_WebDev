function displayResult(interest) {

    const display = document.getElementById('resultDisplay');

    display.innerHTML = `Simple Interest: $${interest.toFixed(2)}`;

}

function calculateInterest() {

    const p = parseFloat(document.getElementById('principal').value);

    const r = parseFloat(document.getElementById('rate').value);

    const t = parseFloat(document.getElementById('time').value);


    // Simple Interest Formula

    const si = (p * r * t) / 100;


    displayResult(si);

}

function calculateInterestCompound() {

    const p = parseFloat(document.getElementById('principal').value);

    const r = parseFloat(document.getElementById('rate').value);

    const t = parseFloat(document.getElementById('time').value);


    // Simple Interest Formula

    const si = p*((r/100)**t)


    displayResult(si);
}