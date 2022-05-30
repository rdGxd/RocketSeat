/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
 */

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "está andando"
    }

}

const rodrigo = new Person("Rodrigo")
const joao = new Person("João")
console.log(rodrigo)
console.log(joao)
