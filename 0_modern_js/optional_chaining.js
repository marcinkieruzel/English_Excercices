const poet = {
  x: {
    first: "Adam",
    last: "Mickiewicz",
  },
};

console.log("My name is " + poet.name.first + " " + poet.name.last);

delete poet.x;

poet.name = {
  first: "Adam",
  last: "Mickiewicz",
};

console.log("My name is " + poet.name.first + " " + poet.name.last);
