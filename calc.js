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
    if(b == 0){
        alert('You cat do that :)')
    }
    return a / b;
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
let leftOperand = 0;
let rightOperand = 0;
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
function updateLeft(){
    leftOperand = parseInt(display.textContent,10);
}
function updateRight(){
    rightOperand = parseInt(display.textContent,10);
}
let display = document.querySelector('.display');
let displayValue = '';
function updateDisplay(){
    display.textContent += displayValue.toString();
}
updateDisplay();

let c = document.querySelector('.clear');
    c.addEventListener('click', () => {
        display.textContent = '';
        leftOperand = 0;
        rightOperand = 0;
        })
 
let addition = document.querySelector('.add')
let multiplication = document.querySelector('.multiply');
let subtraction = document.querySelector('.subtract');
let division = document.querySelector('.divide');
let equate = document.querySelector('.equal button');
let addClicked = false;
let subtractClicked = false;
let divisionClicked = false;
let multiplicationClicked = false;

addition.addEventListener('click',() => {
    updateLeft();
    console.log("left: " + leftOperand)
    display.textContent = '';
   addClicked = true;
    
      
});
subtraction.addEventListener('click',() => {
    updateLeft();
    console.log("left: " + leftOperand)
    display.textContent = '';
   subtractClicked = true;
    
      
});multiplication.addEventListener('click',() => {
    updateLeft();
    console.log("left: " + leftOperand)
    display.textContent = '';
   multiplicationClicked = true;
    
      
});division.addEventListener('click',() => {
    updateLeft();
    console.log("left: " + leftOperand)
    display.textContent = '';
   divisionClicked = true;
    
      
});

equate.addEventListener('click', () => {
    updateRight();
    console.log("right: " + rightOperand);
    if(addClicked){
        let  answer = operate('+',leftOperand,rightOperand);
        leftOperand = answer;
        rightOperand = 0;
        display.textContent = answer;
        addClicked = false;}
    if(subtractClicked){
        let  answer = operate('-',leftOperand,rightOperand);
        leftOperand = answer;
        rightOperand = 0;
        display.textContent = answer;
        subtractClicked = false;}
    if(multiplicationClicked){
        let  answer = operate('*',leftOperand,rightOperand);
        leftOperand = answer;
        rightOperand = 0;
        display.textContent = answer;
        multiplicationClicked = false;}
    if(divisionClicked){
        let  answer = operate('/',leftOperand,rightOperand);
        leftOperand = answer;
        rightOperand = 0;
        display.textContent = answer;
        divisionClicked = false;}

})



