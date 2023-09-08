// Activity - Alarm
// deterine alarm type based on day

const alarmType = (day) => {
  const alarmType = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
  };
  let alarm = "";
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      alarm = alarmType.weekdayAlarm;
      break;
    case "Saturday":
    case "Sunday":
      alarm = alarmType.weekendAlarm;
  }
  return alarm;
};

const day = "Saturday";
console.log(alarmType(day));

// Activity 1
// object functions and the 'this' command

const person = {
  name: "Mike",
  age: 21,
  address: "Buckshaw",
  sayHi() {
    // use this.name to call on the person object that sayHi() and name are both in
    return `Hello my name is ${this.name}`;
  },
};

console.log(person.name);
console.log(person.sayHi());

// Activity 2
// object functions and the 'this' command

const pet = {
  name: "Donald",
  charAttypeOfPet: "duck",
  age: 2,
  colour: "yellow",
  eat() {
    return `${this.name} is eating`;
  },
  drink() {
    return `${this.name} is drinking`;
  },
};

console.log(pet.name);
console.log(pet.eat());
console.log(pet.drink());

// Activity 3
// create various methods for drinks orders and food orders

const coffeeShop = {
  branch: "Chorley",
  drinks: {
    // key: [friendly output for the receipt, price]
    latte: ["Latte", 3.2],
    cappuccino: ["Cappaccino", 3.15],
    flatWhite: ["Flat White", 3.5],
    americano: ["Americano", 2.85],
  },
  food: {
    // key: [friendly output for the receipt, price]
    croissant: ["Croissant", 1.25],
    scone: ["Scone", 0.85],
    blt: ["BLT sandwich", 3.45],
    chickenWrap: ["Chicken Wrap", 4.0],
    carrotCake: ["Carrot Cake", 1.85],
  },
  // use one function that can take a parameter itemType so the same function can be reused for food and drinks, or both
  itemsOrdered(order, itemTypes) {
    const itemsOrdered = []; // athough this is not used here, it will be needed for the baristers
    let costOfItemsOrdered = 0;
    // Clear the screen and print the reciept header
    console.clear();
    let receipt = "*** R e c e i p t ***\n---------------------\n";
    // Loop through the array of item types
    itemTypes.forEach((itemType) => {
      for (let i = 0; i < order.length; i++) {
        if (order[i] in this[itemType]) {
          // add the items ordered to the barister's list
          itemsOrdered.push(this[itemType][order[i]][0]);
          // update the total cost of the order
          costOfItemsOrdered += this[itemType][order[i]][1];
          // add the item ordered to the receipt
          receipt += this[itemType][order[i]][0];
          // format the receipt so all the costs line up
          if (this[itemType][order[i]][0].length < 8) {
            receipt += "\t\t";
          } else if (this[itemType][order[i]][0].length < 16) {
            receipt += "\t";
          }
          // add the cost of the item ordered to the receipt
          receipt += "£" + this[itemType][order[i]][1].toFixed(2) + "\n";
        }
      }
    });
    // add the total cost at the bottom of the receipt
    receipt += `---------------------\nTotal Cost\t£${costOfItemsOrdered.toFixed(
      2
    )}\n---------------------`;
    return receipt;
  },
  // the following 3 functions all use the main itemsOrdered function and pass in which items to check against
  drinksOrdered(order) {
    itemTypes = ["drinks"];
    return this.itemsOrdered(order, itemTypes);
  },
  foodOrdered(order) {
    itemTypes = ["food"];
    return this.itemsOrdered(order, itemTypes);
  },
  foodAndDrinksOrdered(order) {
    itemTypes = ["food", "drinks"];
    return this.itemsOrdered(order, itemTypes);
  },
};

// the array received from the person taking the order at the till
const myOrder = ["latte", "flatWhite", "scone", "carrotCake"];

// Only test one at a time as there is a clear screen in the function
// console.log(coffeeShop.drinksOrdered(myOrder));
// console.log(coffeeShop.foodOrdered(myOrder));
console.log(coffeeShop.foodAndDrinksOrdered(myOrder));
