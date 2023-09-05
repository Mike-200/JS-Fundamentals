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
