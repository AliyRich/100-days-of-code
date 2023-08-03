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

const deposit = () => {

    // while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
    const userDeposit = parseFloat(depositAmount);

    if (isNaN(userDeposit) || userDeposit <= 0) {
        console.log ("Invalid deposit amount, try again");
    }
    else {
        return userDeposit;
    }
}

deposit();

