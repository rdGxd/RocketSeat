// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("node.js")
// adicionar no começo
techs.unshift("sql")
// remover no fim
techs.pop()
// remover no começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento do array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)