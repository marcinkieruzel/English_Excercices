function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

sumAll(1,2,3,4)


const arrayA = [1,2,3,4];
const arrayB = [5,6,7,8];

console.log([...arrayA, ...arrayB])
