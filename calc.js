function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(o,a,b){
    switch (o) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    
        default:
            alert("Error. Invalid input")
            break;
    }
}

let digits = document.querySelector('.digits');

for(let i = 0; i<10; i++){
    let temp = document.createElement('button');
    temp.setAttribute('class', 'digit ' + i)
    temp.textContent = " " + i + " ";
    temp.addEventListener('click', () => {displayValue = i;
        updateDisplay();
    })
    digits.appendChild(temp);
}

let display = document.querySelector('.display');
let displayValue = 0;
function updateDisplay(){
    display.textContent = displayValue.toString();
}
updateDisplay();

let c = document.querySelector('.clear');
    c.addEventListener('click', () => {
        displayValue = 0;
        updateDisplay();})