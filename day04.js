// Activity 1

const person = {
  name: "Mike",
  age: 21,
  address: "Buckshaw",
  sayHi() {
    return `Hello my name is ${this.name}`;
  },
};

console.log(person.name);
console.log(person.sayHi());

// Activity 2

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

const coffeeShop = {
  branch: "Chorley",
  drinks: {
    latte: ["Latte", 3.2],
    cappuccino: ["Cappaccino", 3.15],
    flatWhite: ["Flat White", 3.5],
    americano: ["Americano", 2.85],
  },
  food: {
    croissant: ["Croissant", 1.25],
    scone: ["Scone", 0.85],
    blt: ["BLT sandwich", 3.45],
    chickenWrap: ["Chicken Wrap", 4.0],
    carrotCake: ["Carrot Cake", 1.85],
  },
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

// the array from the till
const myOrder = ["latte", "flatWhite", "scone", "carrotCake"];
// Only test one at a time as there is a clear screen in the function

// console.log(coffeeShop.drinksOrdered(myOrder));
// console.log(coffeeShop.foodOrdered(myOrder));
console.log(coffeeShop.foodAndDrinksOrdered(myOrder));
