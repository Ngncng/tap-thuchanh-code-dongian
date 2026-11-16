
let inputEl = document.getElementById('input')
let allNumbers = document.querySelectorAll('.numbers div')
let allOperators = document.querySelectorAll('.operators div')
let result = document.getElementById('result')
let isResultDisplayed = false
let clearAll = document.getElementById('clear-all')

// adding click handlers to number buttons
for (let i =0; i < allNumbers.length; i++) {
  // allNumbers[i].addEventListener('click', function(e) {}
  allNumbers[i].addEventListener('click', (e) => {
    let currentString = inputEl.innerHTML
    let lastChar = currentString[currentString.length -1]

    if (!isResultDisplayed) {
      inputEl.innerHTML += e.target.innerHTML
    } else if (isResultDisplayed && ['+', '-', '*', '/'].includes(lastChar)) {
      isResultDisplayed = false
      inputEl.innerHTML += e.target.innerHTML
    } else {
      isResultDisplayed = false
      inputEl.innerHTML = ''
      inputEl.innerHTML += e.target.innerHTML
    }
  })
}

// Adding click handlers to operator buttons
for (let i = 0; i < allOperators.length; i++) {
  allOperators[i].addEventListener('click', (e) => {
    let currentString = inputEl.innerHTML
    let lastChar = currentString[currentString.length - 1]

    if (['+', '-', '*', '/'].includes(lastChar)) {
      let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML
      inputEl.innerHTML = newString
    } else if (currentString.length === 0) {
      // if first key pressed is operator, just ignore it
      console.log('Please enter a number first!')
    } else {
      inputEl.innerHTML += e.target.innerHTML
    }
  })
}

// on click 'Equal button'
result?.addEventListener('click', () => {
  let inputString = inputEl.innerHTML

  // Splitting the input string into an array of numbers and operators
  let numbers = inputString.split(/\+|\-|\x|\//g) // regular expression
  let operators = inputString.replace(/[0-9]|\./g, '').split('')
  console.log('numbers: ', numbers) 
  console.log('operators: ', operators)
// ----------------------------------------------------------------
let divide = operators.indexOf('/')
while (divide !== -1) {
  numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1])
  operators.splice(divide, 1)
  divide = operators.indexOf('/')
}

// ----------------------------------------------------------------
let multiply = operators.indexOf('x')
while (multiply !== -1) {
  numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1])
  operators.splice(multiply, 1)
  multiply = operators.indexOf('x')
}

// ----------------------------------------------------------------
let subtract = operators.indexOf('-')
while(subtract !== -1) {
  numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1])
  operators.splice(subtract, 1)
    subtract = operators.indexOf('-')
  }
  
  // ----------------------------------------------------------------
  let add = operators.indexOf('+')
  while(add !== -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]))
    operators.splice(add, 1)
    add = operators.indexOf('+')
  }

  // Display the output
  inputEl.innerHTML = numbers[0]
  isResultDisplayed = true
})

// clearing the input on press of C (clear) button
clearAll?.addEventListener('click', () => {
  inputEl.innerHTML = ''
})