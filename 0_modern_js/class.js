function Specimen(species) {
    this.species = species;
}


function Person(name) {
    this.name = name;
}


Object.setPrototypeOf(
  Person.prototype,
  Specimen.prototype,
);

const me = new Person();

console.log(me, Object.getPrototypeOf(me));
