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
  drinksOrdered(order) {
    const drinksOrder = [];
    let drinksCost = 0;
    let receipt = "*** R e c e i p t ***\n---------------------\n";

    // console.log(this.drinks.length);
    for (let i = 0; i < order.length; i++) {
      // console.log("order[i]: ", order[i]);
      if (order[i] in this.drinks) {
        //console.log(order[i]);
        drinksOrder.push(this.drinks[order[i]][0]);
        drinksCost += this.drinks[order[i]][1];
        receipt += this.drinks[order[i]][0];
        if (this.drinks[order[i]][0].length < 8) {
          receipt += "\t\t";
        } else if (this.drinks[order[i]][0].length < 16) {
          receipt += "\t";
        }
        receipt += "£" + this.drinks[order[i]][1].toFixed(2) + "\n";
      }
    }
    receipt += `---------------------\nTotal Cost\t£${drinksCost.toFixed(2)}\n---------------------`;
    return receipt;
  },
  foodOrdered() {
    return `Your food order is `;
  },
};

const myDrinksOrder = ["latte", "flatWhite", "scone", "carrotCake"];

console.log(coffeeShop.drinksOrdered(myDrinksOrder));
