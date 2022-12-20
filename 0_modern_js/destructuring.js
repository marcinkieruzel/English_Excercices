const adam = {
  name: "Adam",
  lastName: "Mickiewicz",
  sex: "man",
  age: 57,
  profession: "poet",
  _name: {
    last: "Mickiewicz",
    first: "Adam"
  }
};




let { name: x, lastName: y } = adam

const { first, last } =  adam.name

console.log(name, lastName)

console.log(adam.name, adam.lastName)

const _adam = ["Adam", "Mickiewicz", "man", 57, "poet"];

const [a,b] = _adam




