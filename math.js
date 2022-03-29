const calcBox = document.getElementById("calc-box");
let displayNumber = 0;
let number1 = 0;
let number2 = 0;
let operator = -1;
let answer = 1;

document.getElementById("0").addEventListener("click", calcAction);
document.getElementById("1").addEventListener("click", calcAction);
document.getElementById("2").addEventListener("click", calcAction);
document.getElementById("3").addEventListener("click", calcAction);
document.getElementById("4").addEventListener("click", calcAction);
document.getElementById("5").addEventListener("click", calcAction);
document.getElementById("6").addEventListener("click", calcAction);
document.getElementById("7").addEventListener("click", calcAction);
document.getElementById("8").addEventListener("click", calcAction);
document.getElementById("9").addEventListener("click", calcAction);

document.getElementById("+").addEventListener("click", calcAction);
document.getElementById("/").addEventListener("click", calcAction);
document.getElementById("-").addEventListener("click", calcAction);
document.getElementById("*").addEventListener("click", calcAction);

document.getElementById("=").addEventListener("click", calcAction);

function calcAction(e) {
    if(e.target.id>="0" && e.target.id<="9") {
        if(displayNumber==0) {
        displayNumber = e.target.id;
    }else {
        displayNumber += e.target.id;
    }
   }else if(e.target.id==="+" && operator===-1) {
       number1 = displayNumber;
       operator = "+";
       displayNumber = displayNumber + "+";
   }else if(e.target.id==="/" && operator==-1) {
       number1 = displayNumber;
       operator = "/";
       displayNumber = displayNumber + " \u00f7 ";
   }else if(e.target.id==="*" && operator==-1) {
       number1 = displayNumber;
       operator = "*";
       displayNumber = displayNumber + " \u00d7 ";
   }else if(e.target.id==="-" && operator==-1) {
       number1 = displayNumber;
       operator = "-";
       displayNumber = displayNumber + " \u2212 ";
    }else if(e.target.id=="=" && operator!=-1) {
       if(operator==="+") {
           let item = displayNumber.indexOf("+");
           let start = item + 1;
           number2 = displayNumber.substring(start);
           number1 = Number(number1);
           number2 = Number(number2);
           answer = number1 + number2;
           displayNumber = answer;
    }else if(e.target.id=="=" && operator!=-1) {
       if(operator==="-") {
           let item = displayNumber.indexOf("-");
           let start = item + 1;
           number2 = displayNumber.substring(start);
           number1 = Number(number1);
           number2 = Number(number2);
           answer = number1 - number2;
           displayNumber = answer;
            }
       }
}
    calcBox.value = displayNumber;
}