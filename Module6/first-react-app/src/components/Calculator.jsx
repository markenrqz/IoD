import { useState } from "react";

// ==========================================
// Exercise 6 - Calculator Component
// ==========================================

// This component allows the user to enter two numbers,
// select an operator, and display the calculated result.

function Calculator() {
  // Store the first number in state.
  const [num1, setNum1] = useState("");

  // Store the second number in state.
  const [num2, setNum2] = useState("");

  // Store the selected mathematical operator in state.
  const [operator, setOperator] = useState("+");

  // Calculate the result based on the entered numbers
  // and the selected operator.
  function calculateResult() {
    // If either input is empty, do not calculate yet.
    if (num1 === "" || num2 === "") {
      return "Please enter both numbers";
    }

    // Convert the input values from strings to numbers.
    const number1 = Number(num1);
    const number2 = Number(num2);

    // Perform the selected mathematical operation.
    switch (operator) {
      case "+":
        return number1 + number2;

      case "-":
        return number1 - number2;

      case "*":
        return number1 * number2;

      case "/":
        // Prevent division by zero.
        if (number2 === 0) {
          return "Cannot divide by zero";
        }
        return number1 / number2;

      default:
        return "Invalid operator";
    }
  }

  return (
    <div className="Calculator componentBox">
      <h2>Calculator</h2>

      <div className="calculatorForm">
        {/* Controlled input for the first number. */}
        <label htmlFor="num1">First Number:</label>
        <input
          type="number"
          id="num1"
          value={num1}
          onChange={(event) => setNum1(event.target.value)}
          placeholder="Enter first number"
        />

        {/* Dropdown to select the mathematical operator. */}
        <label htmlFor="operator">Operator:</label>
        <select
          id="operator"
          value={operator}
          onChange={(event) => setOperator(event.target.value)}
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>

        {/* Controlled input for the second number. */}
        <label htmlFor="num2">Second Number:</label>
        <input
          type="number"
          id="num2"
          value={num2}
          onChange={(event) => setNum2(event.target.value)}
          placeholder="Enter second number"
        />

        {/* Display the calculated result. */}
        <div className="calculatorResult">
          <h3>Result: {calculateResult()}</h3>
        </div>
      </div>
    </div>
  );
}

// Export the Calculator component.
export default Calculator;
