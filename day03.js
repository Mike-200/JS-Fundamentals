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
