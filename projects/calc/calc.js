const sixthRow = document.getElementsByClassName("sixth-row");
const fifthRow = document.getElementsByClassName("fifth-row");
const fourthRow = document.getElementsByClassName("fourth-row");
const thirdRow = document.getElementsByClassName("third-row");
const secondRow = document.getElementsByClassName("second-row");

const zero = sixthRow[0].childNodes[1].childNodes[1];
const one = fifthRow[0].childNodes[1].childNodes[1];
const two = fifthRow[0].childNodes[1].childNodes[3];
const three = fifthRow[0].childNodes[1].childNodes[5];
const four = fourthRow[0].childNodes[1].childNodes[1];
const five = fourthRow[0].childNodes[1].childNodes[3];
const six = fourthRow[0].childNodes[1].childNodes[5];
const seven = thirdRow[0].childNodes[1].childNodes[1];
const eight = thirdRow[0].childNodes[1].childNodes[3];
const nine = thirdRow[0].childNodes[1].childNodes[5];

const equalsOperator = sixthRow[0].childNodes[1].childNodes[7];
const additionOperator = fifthRow[0].childNodes[1].childNodes[7];
const subtractionOperator = fourthRow[0].childNodes[1].childNodes[7];
const multiplicationOperator = thirdRow[0].childNodes[1].childNodes[7];
const divisionOperator = secondRow[0].childNodes[1].childNodes[7];

const allClear = secondRow[0].childNodes[1].childNodes[1];

let totalNum = document.getElementsByClassName("first-row")[0];

const allNums = [zero, one, two, three, four, five, six, seven, eight, nine];
const allOperators = [additionOperator, multiplicationOperator, subtractionOperator, divisionOperator];

let current = 0;
let previous = 0;

allNums.forEach((i) => {
    i.addEventListener("click", () => {
        current = parseInt(i.childNodes[1].childNodes[0].nodeValue);
        if (previous != 0) {
            totalNum.innerHTML = previous + current;
            current = parseInt(totalNum.innerHTML);
        } else {
            totalNum.innerHTML = current;
        }
    })
})

allOperators.forEach((i) => {
    i.addEventListener("click", () => {
        let operand = i.childNodes[1].childNodes[0].nodeValue;
        switch(operand) {
            case "+":
                totalNum.innerHTML = previous + current;
                break;
            case "-":
                totalNum.innerHTML = previous - current;
                break;
            case "*":
                totalNum.innerHTML = previous * current;
                break;
            case "/":
                totalNum.innerHTML = previous / current;
                break;
            default:
                console.log("error");
        }
        previous = current;
        current = 0;
    })
})

allClear.addEventListener("click", () => {
    previous = 0;
    current = 0;
    totalNum.innerHTML = current;
})

