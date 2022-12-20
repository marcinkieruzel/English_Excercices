function checkTheContex() {
    console.log("I'm executing")
}

export function sayMyName(name) {
    alert(name)
}

export default function sayMyAge(yearOfBith) {
    alert(new Date().getFullYear() - yearOfBith)
}

checkTheContex()