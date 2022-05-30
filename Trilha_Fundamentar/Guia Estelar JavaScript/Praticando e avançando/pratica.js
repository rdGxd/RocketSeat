//1. Declare uma variável de nome weight
// let weight
// 2. que tipo dado é a variável acima ?
// console.log(typeof weight)
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name = String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
// var name = "Rodrigo"
// var age = "24"
// var stars = "12.2"
// isSubscribed = "true"

/* 4. A variável student abaixo é de que tipo de dados? 

    4.1 Atribua a ela as mesma propriedades e valores do exercício 3.

    4.2 Mostre no console a seguindo mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade
*/

let student = {
    name: "Rodrigo",
    age: 24,
    weight: 80,
    stars: 12.2,
    isSubscribed: true
};
//console.log(typeof student)
//console.log(student)
// console.log(`O aluno ${student.name} tem ${student.age} anos e pesa ${student.weight}kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja somente o array vazio
*/
// let students = []

/*
    6. Reatribua valor para variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/


// students = [
//     student
// ]
//console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
//console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

let aluno = {
    name: "Silva",
    age: 18,
    weight: 88.3,
}

// students = [
//     student,
//     aluno
// ]
students[1] = aluno
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que ? Após sua resposta, rode o código e veja se você acertou.
    
    console.log(a)
    var a = 1
*/