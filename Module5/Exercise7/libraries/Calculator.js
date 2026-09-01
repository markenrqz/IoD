const Logger = require("./Logger");

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1_000_000);
    this.logger = new Logger();
  }

  #log = (value) => {
    // private method
    this.logger.log(`[Calculator :${this.id}]:${value}`);
  };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value); // public method calling private method
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
}

module.exports = Calculator;
