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
    digits.appendChild(temp);
}