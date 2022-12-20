function multiply(a, b) {
    return a * b;
}

function sum(c,d) {
    return c + d
}

function multiplyAndSum(a,b,c,d) {
    return multiply(a,b) + sum(c,d)
}


function multiply(a,b,c) {
    const multiply = a * b;
    return function(c) {
        return multiply * c
    }
}

console.log(

    multiply(2,3)(2)


)





const equasion = multiplyAndSum(1,2,3,4)

console.log(equasion);