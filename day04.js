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
