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

