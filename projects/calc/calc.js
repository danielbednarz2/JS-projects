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
let sym = '';

allNums.forEach((i) => {
    i.addEventListener("click", () => {
        current = parseInt(i.childNodes[1].childNodes[0].nodeValue);
        if (sym !== '') {
            totalNum.innerHTML = current;
            sym = '';
        } else if (parseInt(totalNum.innerHTML) == 0) {
                totalNum.innerHTML = current;
        } else {
                totalNum.innerHTML = totalNum.innerHTML.concat(current);
        }
    })
})

allOperators.forEach((i) => {
    i.addEventListener("click", () => {
        let operand = i.childNodes[1].childNodes[0].nodeValue;
        switch(operand) {
            case "+":
                if (previous != 0) {
                    totalNum.innerHTML = previous + parseInt(totalNum.innerHTML);
                }
                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
            case "=":
                switch(operand) {
                    case "+":
                        totalNum.innerHTML = previous + parseInt(totalNum.innerHTML);
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        previous = parseInt(totalNum.innerHTML);
        sym = operand;
    })
})

allClear.addEventListener("click", () => {
    previous = 0;
    current = 0;
    sym = '';
    totalNum.innerHTML = current;
})

