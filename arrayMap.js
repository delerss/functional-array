const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

function nameFunction(array) {
    let nameArray = []
    for (i = 0; i < array.length; i++) {
        nameArray.push(array[i].name)
    }
    return nameArray
}
var names = nameFunction(Animals);
console.log(names);


function arrayMap(array) {
    let animals = array.map(x => x.name)
    return animals
}

var animalNames = arrayMap(Animals);
console.log(animalNames);


//combine map and filter to return the name of cat

function nameCats(array) {
    let cats = array.filter(animal => animal.species == "cat")
        .map(name => name.name)
    console.log(cats);
}

nameCats(Animals);
