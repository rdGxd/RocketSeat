// Estrutura de repetição
// for...in

let person = {
    name: 'Rodrigo',
    age: 24,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}