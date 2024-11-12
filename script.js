const yearsInput = document.querySelector(".years");
const savingInput = document.querySelector(".saving");
const interestInput = document.querySelector(".interest");
const form = document.querySelector("form");
const output = document.querySelector(".output");
const difference = document.querySelector(".difference");
const message = document.querySelector(".message");

// Function to format numbers in Indian numbering format
function formatIndianNumber(num) {
    // Round to two decimal places and convert to string
    let x = Math.floor(num).toString();
    let lastThree = x.slice(-3);
    let otherNumbers = x.slice(0, -3);
    if (otherNumbers !== "") {
        lastThree = "," + lastThree;
    }
    // Insert commas every two digits in the other part of the number
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

form.onsubmit = (event) => {
    event.preventDefault(); // Prevent form submission to avoid page refresh

    const saving = Number(savingInput.value);
    const years = Number(yearsInput.value);
    const interest = Number(interestInput.value);

    let currentMoney = saving;
    for (let index = 0; index < years - 1; index++) {
        currentMoney *= 1 + interest / 100;
        currentMoney += saving;
    }

    output.innerText = formatIndianNumber(currentMoney);
    difference.innerText = formatIndianNumber(currentMoney - saving * years);
    message.innerText = `Free Money after ${years} years`;
};
