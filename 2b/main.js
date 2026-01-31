const person = {
    firstName: "Stellan",
    lastName: "Benckert",

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    introduce() {
        console.log(`Hej, jag heter ${this.firstName}!`);
    }
};

console.log(person.getFullName());
person.introduce();



const car = {
    brand: "volvo",
    model: "v40",
    year: 2018,

    getDescription() {
        return `${this.year} ${this.brand} ${this.model} `;
    },

    honk() {
        console.log("tut tut!");
    }
};

console.log(car.getDescription());
car.honk();


const counter = {
    value: 0,

    increment() {
        this.value++;
    },

    decrement() {
        this.value--;
    },

    reset() {
        this.value = 0;
    }
};

console.log("värdet initialt: ", counter.value);
counter.increment();
console.log("värde efter ökning ", counter.value)
counter.increment();
console.log("värde efter ännu en ökning", counter.value);

counter.decrement();
console.log("värde efter minskning", counter.value);
counter.reset();
console.log("värde efter återställning", counter.value);