// Random number between 0 and 9
console.log(Math.floor(Math.random() * 10));

// Randowm number between 1 and 10
console.log(Math.ceil(Math.random() * 10));

// Randow number between 0 and 10
console.log(Math.round(Math.random() * 10));

// Around the World

console.log("All Around the World".charAt(7).toUpperCase());
console.log("All Around the World"[7].toUpperCase());

const sentence = "All Around the World";
console.log(sentence.charAt(7).toUpperCase());
console.log(sentence[7].toUpperCase());

// dot notation

console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");

for (let j = 0; j < 3; j++) {
  for (let i = 0; i < 3; i++) {
    console.log("   |   |   ");
  }
  if (j < 2) {
    console.log("-----------");
  }
}

// Activity 1

let name = "Mike";
let age = 30; // I wish;
let favouriteColour = "red";

// Using Concatenation
console.log(
  "My name is " +
    name +
    ". I am " +
    age +
    " and my favourite colour is " +
    favouriteColour +
    "."
);
// Using Template Literals
console.log(
  `My name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}.`
);

// Change the variables
name = "Paul";
age = 35;
favouriteColour = "blue";

console.log(
  "My name is " +
    name +
    ". I am " +
    age +
    " and my favourite colour is " +
    favouriteColour +
    "."
);
console.log(
  `My name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}.`
);

// Activity 2

let breakfast = "omelette";
let lunch = "biscuits";
let dinner = "stir fry";

console.log(`Breakfast: ${breakfast}`);
console.log(`Lunch: ${lunch}`);
console.log(`Dinner: ${dinner}`);

breakfast = "yoghurt";
lunch = "peanuts";
dinner = "fish and stir fry veg";

console.log(`Breakfast: ${breakfast}`);
console.log(`Lunch: ${lunch}`);
console.log(`Dinner: ${dinner}`);

// Activity 3

const birthday = new Date("1969-04-07");
const dateToday = new Date();
const timeDifference = dateToday.getTime() - birthday.getTime();
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log("Birthday: ", birthday);
console.log("Today's date: ", dateToday);
console.log(`I have been alive for ${daysDifference} days`);

// Activity 04

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

console.log(`   |   |   `);
console.log(` ${space1} | ${space2} | ${space3} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`   |   |   `);
