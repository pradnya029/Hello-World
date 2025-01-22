// Existing code
console.log("Hello, World!");

// Function to greet a user
function greetUser(username) {
    console.log(`Hello, ${username}! Welcome to the app.`);
}

// Call the greetUser function
greetUser("Alice");

// Import readline module for user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// New function to perform addition with user input
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Prompt user for input and call the addNumbers function
readline.question('Enter the first number: ', (num1) => {
    readline.question('Enter the second number: ', (num2) => {
        const result = addNumbers(parseInt(num1), parseInt(num2));
        console.log(`The result of adding ${num1} and ${num2} is: ${result}`);
        readline.close();
    });
});
