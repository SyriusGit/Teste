/*let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c. ', array.length) //11

let i = 0 //Índice
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

const frase = prompt("Digite algo")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

let nome = prompt("Qual o seu nome? ")
let email = prompt("Qual o seu email? ")

console.log(`O email ${email} foi cadastrado com sucesso! \nSeja bem vinda(o), ${nome}!`)*/

//Exercício 1
/*
let listaDeTarefas = []
let tarefa1 = prompt("Cite uma tarefa que você deve realizar no seu dia: ")
listaDeTarefas.push(tarefa1)

let tarefa2 = prompt("Cite uma segunda tarefa que você deve realizar no seu dia: ")
listaDeTarefas.push(tarefa2)

let tarefa3 = prompt("Cite uma terceira tarefa que você deve realizar no seu dia: ")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indice = prompt("Digite o índice de uma das tarefas que você já realizou: 0, 1 ou 2")

listaDeTarefas.pop(indice, 1)
console.log(listaDeTarefas)
*/
//Exercício 2

let frase = prompt("Diga uma frase: ")
frase.trim()

let array = frase.split(" ")
console.log(array)

const novaArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
novaArray.prototype.indexOf("Abacaxi")