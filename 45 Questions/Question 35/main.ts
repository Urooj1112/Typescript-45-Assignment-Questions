let animal = ["Dog", "Cat", "Rabbit"]
console.log(animal)
for(let animals of animal)
{
console.log(animals)
}
console.log("Statement about each animal")

for(let animals of animal){
    console.log(`A ${animals.toLowerCase()} would make a great pet.`);
}
console.log("\nCommon characteristic:");
console.log("Any of these animals would make a great pet!");