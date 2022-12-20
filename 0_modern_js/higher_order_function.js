const arr = [1,2,3,4,5,9,7,8,9];

// 1. map – make a copy of array, multiply each element by 2

console.log(

    arr.map((x,i) => {
        return x * 2
    })

)

// 2. sum the elements of a given array with reduce method


console.log(

    arr.reduce((p,n) => {
        return p + n
    })

)

// 3. find the first element that is greater than 5


console.log(

    arr.find((e) => {
        return e > 5
    })

)

// 4. Find all elements greater than 5