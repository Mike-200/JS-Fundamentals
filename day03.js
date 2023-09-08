// Ticket Price Calculator
// determine the ticket price based on age

const age = 60;
let ticketPrice = 0;
if (age < 18) {
  ticketPrice = 8;
} else if (age >= 18 && age < 60) {
  ticketPrice = 10.95;
} else if (age >= 60) {
  ticketPrice = 7.5;
}
console.log(
  `Since you age is ${age}, your ticket price is £${ticketPrice.toFixed(2)}`
);

// Functions

// Activity 1
// take the code and turn it into an arrow function

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(33));

// Activity 2
// pizza toppings and order counts

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
  // increase the order number each time a new order is received
  orderCount++;
  console.log(
    `Your pizza with ${topping1} and ${topping2} is being prepared. Your order number is ${orderCount}.`
  );
};

takeOrder("ham", "pinapple");
takeOrder("tuna", "cheese");
takeOrder("chicken", "sweetcorn");

// Activity 3
// Cash Machine - check if pin is correct and if then if funds are available

const users = [
  // name, pin number, balance
  ["Mike", 1234, 500],
  ["Paul", 5678, 1000],
  ["John", 3579, 1500],
];

const withdrawCash = (client, pinNumber, withdrawalAmount) => {
  // first find the user out the array using the function findUserID
  let userID = findUserID(client);
  if (userID == -1) {
    console.log(`Sorry ${client}. You do not have an account with us"`);
    return;
  }
  // now check the user has entered the correct pin
  if (checkIfPinIsCorrect(userID, pinNumber)) {
    // now check if there are enough funds using the checkIfFundsAreAvailable function
    if (checkIfFundsAvailable(userID, withdrawalAmount)) {
      // now withdraw the funds using the fucntion withdrawFunds, if they are available
      withdrawFunds(userID, withdrawalAmount);
      console.log(
        `${users[userID][0]}: You have withdrawn £${withdrawalAmount.toFixed(
          2
        )}. Your remaining balance is £${users[userID][2].toFixed(2)}`
      );
    } else {
      // let the user know they do not have enough funds
      console.log(`Sorry ${users[userID][0]}, you do not have enough funds.`);
    }
  } else {
    // let the user know they have entered an incorrect pin
    console.log(
      `Sorry ${users[userID][0]}, you have entered an incorrect pin.`
    );
  }
};

const findUserID = (client) => {
  for (let i = 0; i < users.length; i++) {
    if (client === users[i][0]) {
      return i;
    }
  }
  return -1;
};

const checkIfPinIsCorrect = (userID, pinNumber) => {
  if (pinNumber === users[userID][1]) {
    return true;
  }
  return false;
};

const checkIfFundsAvailable = (userID, withdrawalAmount) => {
  if (withdrawalAmount <= users[userID][2]) {
    return true;
  }
  return false;
};

const withdrawFunds = (userID, withdrawalAmount) => {
  users[userID][2] -= withdrawalAmount;
};

withdrawCash("Mike", 1234, 50);
withdrawCash("Paul", 5678, 1000);
withdrawCash("Mike", 5678, 1000);
withdrawCash("Mike", 1234, 1000);
withdrawCash("Mike", 1234, 75);
