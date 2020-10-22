const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')
const display = calculator.querySelector('.calculator-display')


keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const { type } = key.dataset
    const { previousKeyType } = calculator.dataset

    if (type === 'number') {
        if (displayValue === '0') {
            display.textContent = keyValue
        } else if (previousKeyType === 'operator') {
            display.textContent = keyValue
        } else {
            display.textContent = displayValue + keyValue
        }
    }

    if (type === 'operator') {

        const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(el => { el.dataset.state = '' })
        key.dataset.state = 'selected'

        calculator.dataset.firstNumber = displayValue
        calculator.dataset.operator = key.dataset.key
    }

    if (type === 'equal') {
        const firstNumber = calculator.dataset.firstNumber
        const operator = calculator.dataset.operator
        const secondNumber = displayValue
        console.log(firstNumber, operator, secondNumber);

        let result = ''
        if (operator === 'plus') result = firstNumber + secondNumber
        if (operator === 'minus') result = firstNumber - secondNumber
        if (operator === 'times') result = firstNumber * secondNumber
        if (operator === 'divide') result = firstNumber / secondNumber

        display.textContent = calculate(firstNumber, operator, secondNumber)
    }

    if (type === 'clear') {
        display.textContent = '0'
        delete calculator.dataset.firstNumber
        delete calculator.dataset.operator
    }


    calculator.dataset.previousKeyType = type
})

function calculate(firstNumber, operator, secondNumber) {

    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
    let result = ''
    if (operator === 'plus') return firstNumber + secondNumber
    if (operator === 'minus') return firstNumber - secondNumber
    if (operator === 'times') return firstNumber * secondNumber
    if (operator === 'divide') return firstNumber / secondNumber
}


let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelector('button')
let btnSpread = [...btns]
let allBtnSpread = [...allBtns];

allBtnSpread.forEach((button, i) => {
    button.addEventListener('click', () => {
        let element = allBtns[i];
        element.style.boxShadow = 'inset -6px -6px 16px 0 rgba(255, 255, 255, .5), inset 6px 6px 16px 0 rgba(209, 205, 199, .5)';

        setTimeout(function () {
            element.style.boxShadow = " 6px 6px 16px 0 rgba(209, 205, 199, .5),-6px -6px 16px 0 rgba(255, 255, 255, .5)"
        }, 0300);

    })

})