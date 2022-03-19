const myMap = new Map()

myMap.set('apple' , 'fruit')
// myMap(1) {"apple" => "fruit"}
console.log(myMap.get('apple') + ' (apple existe e é uma fruta)')
// fruit
myMap.delete('apple')
// delete apple
console.log(myMap.get('apple') + ' (não existe mais apple)')
// undefined

/** MAP VS OBJECT
 * 
 * - maps podem ter chave do mesmo tipo
 * - possuem propriedade length
 * - fáceis de iterar
 * - utilizado quando o valor das chaves pe desconhecido
 * - valores do mesmo tipo * 
 */




const mySet = new Set()

mySet.add(1)
mySet.add(5)

console.log(mySet.has(1) + ' (contém 1)')
//true
console.log(mySet.has(3) + ' (não possui 3)')
//false
mySet.delete(5)
console.log(mySet.has(5) + ' (não possui mais o 5)')
//false

/** SET VS ARRAY
 * 
 * - Estruturas que armazenam apenas valores únicos
 * 
 * - Possui valores únicos
 * - ao inve´s de length, usa size
 * - não possui métodos map, filter, reduce, etc
 * 
 */