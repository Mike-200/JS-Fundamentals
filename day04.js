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
  itemsOrdered(order, itemType) {
    let costOfItemsOrdered = 0;
    let receipt = "*** R e c e i p t ***\n---------------------\n";
    const itemsOrdered = []; // athough this is not used here, it will be needed for the baristers
    for (let i = 0; i < order.length; i++) {
      if (order[i] in this[itemType]) {
        itemsOrdered.push(this[itemType][order[i]][0]);
        costOfItemsOrdered += this[itemType][order[i]][1];
        receipt += this[itemType][order[i]][0];
        // format the receipt so all the costs lin eup
        if (this[itemType][order[i]][0].length < 8) {
          receipt += "\t\t";
        } else if (this[itemType][order[i]][0].length < 16) {
          receipt += "\t";
        }
        receipt += "£" + this[itemType][order[i]][1].toFixed(2) + "\n";
      }
    }
    // add the total at the bottom of the receipt
    receipt += `---------------------\nTotal Cost\t£${costOfItemsOrdered.toFixed(
      2
    )}\n---------------------`;
    return receipt;
  },
  drinksOrdered(order) {
    itemType = "drinks";
    return this.itemsOrdered(order, itemType);
  },
  foodOrdered(order) {
    itemType = "food";
    return this.itemsOrdered(order, itemType);
  },
};

const myOrder = ["latte", "flatWhite", "scone", "carrotCake"];
console.log(coffeeShop.drinksOrdered(myOrder));
console.log(coffeeShop.foodOrdered(myOrder));
