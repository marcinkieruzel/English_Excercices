// function Specimen(species) {
//     this.species = species;
// }


// function Person(name) {
//     this.name = name;
// }


// Object.setPrototypeOf(
//   Person.prototype,
//   Specimen.prototype,
// );

// const me = new Person();

// console.log(me, Object.getPrototypeOf(me));


class Specimen {
  constructor(name) {
    this.name = name;

  }
}

class Person extends Specimen {
  constructor(name, species) {
    super(name)
    this.species = species
  }
}


const human = new Person("Marcin", "HomoSapiens")

console.log(human)