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
