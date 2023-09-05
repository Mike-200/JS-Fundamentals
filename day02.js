// If, else and switch

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

// Activity 8

const word = "testing";
if (word[0] === word[word.length - 1]) {
  console.log(true);
} else {
  console.log(false);
}

// Activity 9

const num1 = 6;
const num2 = 7;
const sum = num1 + num2;
if (sum % 2 == 0) {
  console.log(
    `The sume of the numbers is divisible by 2. The sum of the numbers is ${sum}`
  );
} else {
  console.log(
    `The sume of the numbers is NOT divisible by 2. The multiple of the numbers is ${
      num1 * num2
    }`
  );
}


// Arrays

// Activity 1

const favouriteSongs = [
  "P!nk - Trustfall",
  "P!nk - Never Gonna Not Dance Again",
  "Disturbed - The Sound of Silence",
];
console.log(favouriteSongs);

// Adding 2 more items to the array
favouriteSongs.push("Mike Oldfield - Moonlight Shadow");
favouriteSongs.push("Tensnake - See Right Through");
console.log(favouriteSongs);

// Removing the last item off the array
favouriteSongs.pop();
console.log(favouriteSongs);

// Activity 2

// map() method to do a direct copy of an array
const arrToCopy = [1, 2, 3, 4, 5];
const copiedArr = arrToCopy.map((x) => x);
console.log("Original Array ", arrToCopy);
console.log("New array ", copiedArr);

// map() method to multipy all numbers in the array by 5 and put them in a new array
const arrOfNums = [1, 2, 3, 4, 5];
const newArrOfNums = arrOfNums.map((x) => x * 5);
console.log("Original Array ", arrOfNums);
console.log("New Array ", newArrOfNums);

// shift() to remove the first item from the array
const food = ["chicken", "lamb", "beef"];
console.log("Food array before shift() ", food);
food.shift();
console.log("Food array after shift() ", food);

// unshift() to add an item to the front of an array
const drinks = ["beer", "wine", "vodka"];
console.log("Drinks array before unshift() ", drinks);
drinks.unshift("cocktails");
console.log("Drinks array after unshift() ", drinks);

// splice() to add items in a specific position in the array
const furniture = ["desk", "chair", "laptop"];
console.log("Furniture array before splice() ", furniture);
// at position 2, add the item listed
furniture.splice(2, 0, "desk fan");
console.log(
  "Furniture array after adding an item at position 2 using splice() ",
  furniture
);
// at position 2, remove the item listed
furniture.splice(1, 1);
console.log(
  "Furniture array after removing item 1 (chair) using splice() ",
  furniture
);

// slice() to selct certain elements of an array and put them in a new array
const snacks = [
  "crisps",
  "peanuts",
  "pringles",
  "chocolate biscuits",
  "jammy dodgers",
];
console.log("Snacks array ", snacks);
// select the 2nd and 3rd items form the list
const selectedSnacks = snacks.slice(1, 3); // first parameter is the index of the first item to pick. Second number is where to stop
console.log("Selected snacks array ", selectedSnacks);


// Loops

// Activity 1

const favouriteFilms = [
  "The Invasion of the Body Snathers",
  "Fast and Furious",
  "Mission Impossible",
  "Jack Reacher",
  "War of the Worlds",
];
console.log("Favourire films ", favouriteFilms);
favouriteFilms.push("Pulp Fiction");
favouriteFilms.push("Raiders of the Lost Ark");
for (let i = 0; i < favouriteFilms.length; i++) {
  console.log(`Film ${i + 1} is ${favouriteFilms[i]}`);
}

// Activity 2

let randomNumber = 0;
for (let i = 1; i <= 6; i++) {
  randomNumber = Math.ceil(Math.random() * 50);
  console.log(`Random number ${i} is ${randomNumber}`);
}

// Activity 3

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// Activity 4

const films = [
  "The Invasion of the Body Snathers",
  "Fast and Furious",
  "Mission Impossible",
  "Jack Reacher",
];
for (let i = 0; i < films.length; i++) {
  console.log(`Film number ${i + 1} is ${films[i]}`);
}
if (films[2] == "Ghostbusters") {
  console.log("Yay its Ghostbusters”.");
} else {
  console.group("Boo! We want Ghostbusters");
}

// Activity 5

randomNumber = 0; // re-using this varioable from before
for (let i = 1; i <= 6; i++) {
  randomNumber = Math.ceil(Math.random() * 30);
  console.log(`Random number ${i} is ${randomNumber}`);
  if (randomNumber % 7 == 0) {
    console.log(`${randomNumber} IS divisible by 7`);
  } else {
    console.log(`${randomNumber} is NOT divisible by 7`);
  }
}

// Activity 6

const bobsFollowers = ["Mike", "John", "Paul", "Ringo"];
const hannahsFollowers = ["Justine", "Janet", "Elaine", "Ringo"];
console.log("Matching Followers:-");
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < hannahsFollowers.length; j++) {
    if (bobsFollowers[i] == hannahsFollowers[j]) {
      console.log(bobsFollowers[i]);
    }
  }
}

// Activity 7

// a for loop
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// a while loop
let whileLoopCount = 0;
while (whileLoopCount < 6) {
  console.log(whileLoopCount);
  whileLoopCount++;
} // a do while loop

let doWhileLoopCount = 0;
do {
  console.log(doWhileLoopCount);
  doWhileLoopCount++;
} while (doWhileLoopCount < 6);

// The above yields the same results, however, the do while and the while loops
// can be used more easily for variable lengths of loops

// A for loop is for executing statements a known number of times
// A while loop can end without executing a statement and can execute statements an unknown number of times
// A do while loop will always execute a statement at least once and can execute statements an unknown number of times

// The following example demonstrates a better example of the use of a while loop
// The loop could keep executing until the condition becomes true / false

let condition = false;
let counter = 0;
while (condition == false) {
  counter++;
  if (counter == 50) {
    condition = true;
  }
}
console.log(`Count reached. Counter is now at ${counter}`);
