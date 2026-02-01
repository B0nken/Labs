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
console.log(loadedUser.name + " är " + loadedUser.age + " gammal");






const colors = ["röd", "grön", "blå"];
localStorage.setItem("colors", colors);
console.log(localStorage.getItem("colors"));
console.log(typeof "colors")

const student = {
    name: "Stellan Benckert",
    courses: ["webbtaknik 3", "interaktiv design"]
};

const jsonStudent = JSON.stringify(student);
console.log(jsonStudent)

const parsedStudent = JSON.parse(jsonStudent);
console.log(parsedStudent.name)
console.log(parsedStudent.courses);

function saveStudent(studentData) {
    const json = JSON.stringify(studentData);
    localStorage.setItem("student", json);
}

function loadStudent() {
    const saved = localStorage.getItem("student");
    return JSON.parse(saved);
}

