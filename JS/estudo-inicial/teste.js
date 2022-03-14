function soma(a, b) { //a,b são denominados parâmetros, assim como qualquer outra LP
    return a + b
}

c = soma(1,2)

console.log(c)

function numerosPar(array) {
    let arrayAux = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayAux.push(array[i])
        } else {
            console.log(`${array[i]} não é par`)
        }
    }

    console.log("os números pares desse array, são: " + arrayAux)
}

let vetor = [1,2,3,4,5,6,7,8]
numerosPar(vetor)