function multiply(a, b) {
    return a * b;
}

function sum(c,d) {
    return c + d
}

function multiplyAndSum(a,b,c,d) {
    return multiply(a,b) + sum(c,d)
}

const equasion = multiplyAndSum(1,2,3,4)

console.log(equasion);