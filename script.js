const yearsInput = document.querySelector(".years");
const savingInput = document.querySelector(".saving");
const interestInput = document.querySelector(".interest");
const form = document.querySelector("form");
const output = document.querySelector(".output");
const difference = document.querySelector(".difference");
const message = document.querySelector(".message");

form.onsubmit = () => {
    const saving = Number(savingInput.value);
    const years = Number(yearsInput.value);
    const interest = Number(interestInput.value);

    let currentMoney = saving;
    for (let index = 0; index < years-1; index++) {
        currentMoney *= 1 + interest/100;
        currentMoney += saving;   
    }

    output.innerText = String(currentMoney);
    difference.innerText = String(currentMoney - saving*years);
    message.innerText = `Free Money after ${years} years`;
};