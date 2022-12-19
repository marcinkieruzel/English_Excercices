let name = "Marcin";
let lastName = "Kieruzel"
const age = 38;

{
    let name = "Paweł"
    const age = "very young"
    lastName = "X"

    console.log("Inside block", name, lastName, age)
}

console.log("Outside block", name, lastName, age)



for(var i = 0 ; i < 10 ; i++) {
    console.log(i)
}

console.log("Whats the value of i now", i)

