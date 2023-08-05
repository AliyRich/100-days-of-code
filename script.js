// ...100 days of javascript...

// -------- DAY-1-----------

// Working with javascript functions 

// function WELCOME_MESSAGE () {

//     let message = "Welcome to the console, i will be logging out my project here: ";
//     console.log(message);
    
//     // math = a + b;
//     // return math;

// }

// WELCOME_MESSAGE();
// console.log(result);

// console.log(message);


// ...100 days of javascript...

// -------- DAY-2-----------

// Working with javascript function that returns some results

// function myReturn (a,b) {
//     return a + b;
// }

// let result = myReturn(3,7);
// console.log(result);

// ...100 days of javascript...

// -------- DAY-3 -----------

// Lets build a slot machine

const prompt = require("prompt-sync")();


// Deposit some money

const deposit = () => {

    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
    const userDeposit = parseFloat(depositAmount);

    if (isNaN(userDeposit) || userDeposit <= 0) {
        console.log ("Invalid deposit amount, try again");
    }
    else {
        return userDeposit;
    }
}
}

// Determine number of lines to bet on

const getNumberOfLines = () => {
    while (true) {
        while (true) {
            const lines = prompt("Enter the number of lines to bet on (1-3): ");
            const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log ("Invalid number of lines, try again");
        }
        else {
            return numberOfLines;
        }
    }
}
}

// Collect a bet amount

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines) {
        console.log ("Invalid bet, try again");
    }
    else {
        return numberBet;
    }
 }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

