// Activity 1

const age = 30;
const country = "UK";

if (age > 17 && country == "UK") {
  console.log("Yes I can serve you");
} else {
  console.log("You aren't old enough");
}

// Activity 2

const topping = "celery";
switch (topping) {
  // These are my favourite ingredients:-
  case "ham":
  case "cheese":
  case "chicken":
  case "pork":
    console.log("These are important ingredients for my pizza.");
    break;
  // I don't mind these ingredients
  case "tomatoes":
  case "onions":
    console.log(`I don’t mind having ${topping} on my pizza`);
    break;
  default:
    console.log(`${topping} should not be on a pizza.`);
}

// Activity 3

const password = "mypassword";
if (password.length < 8) {
  console.log("Your password is too short");
} else {
  console.log(`Your password is ${password}`);
}

// Using 'let' because num will be reused in the next activity
let num = 21;
if (num % 3 == 0 || num % 5 == 0) {
  console.log("This number is divisible by 3 or 5");
} else {
  console.log("This number is NOT divisible by 3 or 5");
}

// Activity 4

// The variable 'num' has already been used in the previous activity
num = 15;
switch (true) {
  case num % 3 == 0 && num % 5 == 0:
    console.log("fizz buzz");
    break;
  case num % 3 == 0:
    console.log("fizz");
    break;
  case num % 5 == 0:
    console.log("buzz");
    break;
  default:
    console.log(num);
}

// Activity 5

num = 1221;
const stringOfNum = num.toString();
let reverseOfNum = "";
for (let i = stringOfNum.length - 1; i >= 0; i--) {
  reverseOfNum += stringOfNum[i];
}
if (stringOfNum == reverseOfNum) {
  console.log("Number is a palindrome");
} else {
  console.log("Number is NOT a palindrome");
}

// Activity 6

const time = 9;
const placeOfWork = "Chorley";
const townOfHome = "Buckshaw";

switch (time) {
  case 7:
    console.log(`I'm at home in ${townOfHome}`);
    break;

  case 8:
    console.log(`I'm commuting between ${townOfHome} and ${placeOfWork}`);
    break;
  case 9:
    console.log(`I'm at work in ${placeOfWork}`);
    break;
  default:
    console.log("You have entered an invalid time.");
}

// Activity 7

const string =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
for (let i = string.length - 1; i >= 0; i--) {
  if (
    string[i] == "a" ||
    string[i] == "e" ||
    string[i] == "i" ||
    string[i] == "o" ||
    string[i] == "u"
  ) {
    console.log(
      `The last vowel in the string is ${string[i]} and it is at index ${i}`
    );
    break;
  } else {
    console.log("There is no vowel in the string.");
  }
}
