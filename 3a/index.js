const double = (n) => n * 2; //implicit return, funkar bara när det är ett enda uttryck i funktionen

const isEven = (n) => {
    return n % 2 === 0;
}

const sum = (a, b) => {
    return a + b;
}

console.log(double(5))


const square = x => x * x;//måste inte skriva (x) med parametrar
console.log(square(3))

const sayHello = () => "Hej"; //parameter måste skrivas om det är noll parametrar
console.log(sayHello())

const multiply = (a, b) => a * b; //parameter måste skrivas om det är två eller fler parametrar

const incriment = n => n + 1; //en parameter så behöver inte skrivas

console.log(incriment(4))