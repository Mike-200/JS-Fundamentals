// Ticket Price Calculator

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

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(33));

// Activity 2

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
  orderCount++;
  console.log(
    `Your pizza with ${topping1} and ${topping2} is being prepared. Your order number is ${orderCount}.`
  );
};

takeOrder("ham", "pinapple");
takeOrder("tuna", "cheese");
takeOrder("chicken", "sweetcorn");
