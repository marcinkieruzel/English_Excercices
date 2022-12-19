const poet = {
  name: {
    first: "Adam",
    last: "Mickiewicz",
  },
  birth: 1798
};

console.log("My name is " + poet.name.first + " " + poet.name.last + "." + "If I were still alive. I would be " + (new Date().getFullYear() - poet.birth))