const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

function dogFunction(array) {
    let dogArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].species == "dog") {
            dogArray.push(array[i].name)
        }
    }
    return dogArray

}
var dogs = dogFunction(Animals);
console.log(dogs);
