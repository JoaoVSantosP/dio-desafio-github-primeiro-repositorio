var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function incrementar() {
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'blue'
        currentNumber++
        currentNumberWrapper.innerHTML = currentNumber
    } else {
        currentNumber++
        currentNumberWrapper.innerHTML = currentNumber
    }  
}
function decrementar() {
    if (currentNumber <= 0) {
        currentNumberWrapper.style.color = 'red'
        currentNumber--
        currentNumberWrapper.innerHTML = currentNumber
    } else {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
    }
}
function incrementarP() {
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'blue'
        currentNumber = currentNumber + 10
        currentNumberWrapper.innerHTML = currentNumber
    } else {
        currentNumber = currentNumber + 10
        currentNumberWrapper.innerHTML = currentNumber
    }    
}
function decrementarP() {
    if (currentNumber <= 0) {
        currentNumberWrapper.style.color = 'red'
        currentNumber = currentNumber - 10
        currentNumberWrapper.innerHTML = currentNumber
    } else {
        currentNumber = currentNumber - 10
        currentNumberWrapper.innerHTML = currentNumber
    }
}