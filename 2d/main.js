const user = {
    name: "ada",
    age: 36,
    active: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString)
console.log(typeof jsonString)

const parsed = JSON.parse(jsonString);
console.log(parsed)
console.log(typeof parsed)
console.log(parsed.name)

localStorage.setItem("user", JSON.stringify(user));
const loadedUser = JSON.parse(localStorage.getItem("user"));
console.log(loadedUser.name);






const colors = ["röd", "grön", "blå"];
localStorage.setItem("colors", colors);
console.log(localStorage.getItem("colors"));
console.log(typeof "colors")

