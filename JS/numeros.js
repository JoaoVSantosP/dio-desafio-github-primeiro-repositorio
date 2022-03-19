const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(' ')

const peso11 = 1.1
console.log(Number.isInteger(peso11))
console.log(' ')

const avaliacao1 = 9.12
const avaliacao2 = 6.89

const mediaTotal = (avaliacao1 * peso1 + avaliacao2 * peso2) / (peso1 + peso2)
console.log(mediaTotal)
console.log(mediaTotal.toFixed(2)) //arruma as casa decimal de acordo. Nesse caso, 2 casas decimais
console.log(mediaTotal.toString()) //demonstração original
console.log(mediaTotal.toString(2)) //demonstração em binário
console.log(typeof Number) // provando que é uma função