const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

const calculate = () => {
  const firstNumber = Number(num1.value);
  const secondNumber = Number(num2.value);
  const selectedOperator = operator.value;

  let answer;

  if (num1.value === "" || num2.value === "") {
    result.textContent = "Please enter both numbers";
    return;
  }

  if (selectedOperator === "+") {
    answer = firstNumber + secondNumber;
  } else if (selectedOperator === "-") {
    answer = firstNumber - secondNumber;
  } else if (selectedOperator === "x") {
    answer = firstNumber * secondNumber;
  } else if (selectedOperator === "/") {
    if (secondNumber === 0) {
      result.textContent = "Cannot divide by zero";
      return;
    }

    answer = firstNumber / secondNumber;
  }

  result.textContent = "Result: " + answer;
};
const clearScreen = () => {
  num1.value = "";
  num2.value = "";
  operator.value = "+";
  result.textContent = "Result:";
};

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearScreen);
