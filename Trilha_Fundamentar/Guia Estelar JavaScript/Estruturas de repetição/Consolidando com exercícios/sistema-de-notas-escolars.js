/* ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em Caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 -  F

*/

// let nota = 70
// let A = nota >= 90
// let B = nota >= 80 && nota <= 89
// let C = nota >= 70 && nota <= 79
// let D = nota >= 60 && nota <= 69

// if (A) {
//     console.log('a sua nota foi um A')
// } else if (B) {
//     console.log('a sua nota foi um B')
// } else if (C) {
//     console.log('a sua nota foi um C')
// }  else if (D) {
//     console.log('a sua nota foi um D')
// } else {
//     console.log('a sua nota foi um F')
// }

// if (nota >= 90) {
//     console.log('a sua nota foi um A')
// } else if (nota >= 80 && nota <= 89) {
//     console.log('a sua nota foi um B')
// } else if (nota >= 70 && nota <= 79) {
//     console.log('a sua nota foi um C')
// } else if (nota >= 60 && nota <= 69) {
//     console.log('a sua nota foi um D')
// } else {
//     console.log('a sua nota foi um F')
// }

function pegueNota(nota) {
    let A = nota >= 90 && nota <= 100
    let B = nota >= 80 && nota <= 89
    let C = nota >= 70 && nota <= 79
    let D = nota >= 60 && nota <= 69
    let F = nota < 60 && nota >= 0

    let notaFinal;

    if (A) {
        notaFinal = "A"
    } else if (B) {
        notaFinal = "B"
    } else if (C) {
        notaFinal = "C"
    } else if (D) {
        notaFinal = "D"
    } else if (F) {
        notaFinal = "F"
    } else {
        notaFinal = "Nota inválida"
    }

    return notaFinal
}

console.log(pegueNota(5))