// Your task is to add interactivity to the Calculator UI given. 
// User Story
// The user will enter numeric values in the input elements of type number.
// To have the result, the user would click on any of the five buttons *, -, +, /, %
// Based on the button clicked, your app should perform the expected calculation and display the answer in the input element of type text.
// Best of luck!
let calcResult = document.getElementById("calcResult");
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

function sum(){
    let valOfFirstNo =parseInt(firstNumber.value);
    let valOfSecondNo =parseInt(secondNumber.value);
    calcResult.value = valOfFirstNo + valOfSecondNo;
}
function product(){
    let valOfFirstNo =parseInt(firstNumber.value);
    let valOfSecondNo =parseInt(secondNumber.value);
    calcResult.value = valOfFirstNo * valOfSecondNo;
}
function subtract(){
    let valOfFirstNo =parseInt(firstNumber.value);
    let valOfSecondNo =parseInt(secondNumber.value);
    calcResult.value = valOfFirstNo - valOfSecondNo;
}
function divide(){
    let valOfFirstNo =parseInt(firstNumber.value);
    let valOfSecondNo =parseInt(secondNumber.value);
    calcResult.value = parseInt(valOfFirstNo / valOfSecondNo);
}
function mod(){
    let valOfFirstNo =parseInt(firstNumber.value);
    let valOfSecondNo =parseInt(secondNumber.value);
    calcResult.value = valOfFirstNo % valOfSecondNo;
}

