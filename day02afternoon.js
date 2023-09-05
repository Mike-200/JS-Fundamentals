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
  "Fast and Durious",
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
