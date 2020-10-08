const display = document.querySelector('#display')
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput =document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')
const displayResponsibility = document.querySelector('#display-responsibility')

billInput.addEventListener('input', doMath)
tipInput.addEventListener('input', doMath)
peopleInput.addEventListener('input', doMath) //function(e){ //why do i add function e to this?
    
function doMath() {
    const percent = parseInt(tipInput.value)
    const bill = parseFloat(billInput.value)
    const people = parseInt(peopleInput.value)
    
    let tipTotal = bill * (percent / 100)
    let tip = tipTotal / people
    let total = bill + (tipTotal)
    let split = total / people

    displayTip.innerHTML = tip
    displayTotal.innerHTML = total
    displayResponsibility.innerHTML = split
    
    console.log(tip)
    console.log(total)
    console.log(split)
}
console.log(display.innerHTML) // prints the text inside the tags
console.log(billInput.value) // prints the value entered into the input

billInput.value = 20.00
tipInput.value = 15
peopleInput.value = 1