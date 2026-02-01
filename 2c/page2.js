const savedAnimal = localStorage.getItem("animal");
console.log(savedAnimal)

document.getElementById("button").addEventListener("click", function() {
    localStorage.removeItem("animal")
    console.log("sparat djur är borta")
})