const escola = "cod3r"

console.log(escola.charAt(4).toUpperCase()) //retornando uma elemento dada a posição
console.log(escola.charCodeAt(3))// retorna o codico unicode do elementa dada a posição
console.log(escola.indexOf('c')) //retorna a posição
console.log(escola.substring(1))// partindo da posição 1

console.log(escola.substring(0, 3).toLocaleUpperCase()) //partindo da posição 0 até 3

console.log('Escola '.concat(escola).concat(" !")) //concatenando   PODE USAR O + também!
console.log(escola.replace(3, 'e')) //substituir um elemonto 
console.log(escola.replace(/\w/g, 'e')) // /\w/g substitui tudo pra 'e' se for /\d/ será todos os digitos
console.log('ana,maria,pedro'.split(',')) //Criando array e separando a partir de um elemento dado (virgula)

const nome = "Joseph"
const template = `
  Hey,
      ${nome}!`

console.log(template)

console.log(`1 + 1 = ${1 + 1} !`)

const up = texto => texto.toUpperCase()
console.log(`Ei, ${up('CUIDADO')}!!`)


const texto = 'life is not a problem to be solved'
console.log(texto.substring(0, 15).toUpperCase())