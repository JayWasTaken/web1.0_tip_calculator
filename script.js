// javaScript Code written here! 
// console.log('Hello World')
const display = document.querySelector('#display')
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput =document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')

billInput.addEventListener('input', function(e){
    const percent = parseInt(tipInput.value)
    const bill = parseFloat(billInput.value)
    const people = parseInt(peopleInput.value)
    
    const tip = bill * (percent / 100)
    const total = bill + tip
})


// console.log(display.innerHTML) // prints the text inside the tags
// console.log(billInput.value) // prints the value entered into the input

billInput.value = 25.06
tipInput.value = 15
peopleInput.value = 3

displayTip.innerHTML = tip
displayTotal.innerHTML = total

console.log(tip)
console.log(total)