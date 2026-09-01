/* 1. makeCounter below is a decorator function which creates and returns a function that increments a counter.
      a) Create a second counter counter2 using the makeCounter function and test to see if 
      it remains independent to counter1
      b) Modify makeCounter so that it takes an argument startFrom specifying where the
      counter starts from (instead of always starting from 0)
      c) Modify makeCounter to take another argument incrementBy, which specifies how
      much each call to counter() should increase the counter value by.
*/
// function makeCounter(startFrom = 0, incrementBy = 1) {
//   let currentCount = startFrom;
//   return function () {
//     currentCount += incrementBy;
//     console.log(currentCount);
//     return currentCount;
//   };
// }
// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2

// let counter2 = makeCounter();
// counter2();
// counter2();

// let counter3 = makeCounter(5);
// counter3();
// counter3();

// let counter4 = makeCounter(10, 10);
// counter4();
// counter4();

/* 2. The following delayMsg function is intended to be used to delay printing a message until
   some time has passed.
   a) What order will the four tests below print in? Why?
   b) Rewrite delayMsg as an arrow function
   c) Add a fifth test which uses a large delay time (greater than 10 seconds)
   d) Use clearTimeout to prevent the fifth test from printing at all.
*/
// console.log(
//   "#4 runs first because there's no delay. setTimeout() schedules functions to run later and the shortest delay executes first."
// );
// const delayMsg = (msg) => {
//   console.log(`This message will be printed after a delay: ${msg}`);
// };
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");
// clearTimeout(setTimeout(delayMsg, 11000, "#5: Delayed by 11 seconds"));

/* 4. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
   similar requests until there's a brief pause, then only executing the most recent of those
   requests. See https://www.techtarget.com/whatis/definition/debouncing
   It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
   requests being initiated if a user clicks repeatedly on a button.
   Using the following code to test and start with:
   a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
   suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
   pause, the most recent call to func should be executed and any others ignored.
   b) Extend the debounce decorator function to take a second argument ms, which defines the
   length of the period of inactivity instead of hardcoding to 1000ms
   c) Extend debounce to allow the original debounced function printMe to take an argument
   msg which is included in the console.log statement.
*/
// const debounce = (func, ms = 1000) => {
//   let timeoutId;

//   return function () {
//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       func.apply(this, arguments);
//     }, ms);
//   };
// };
// function printMe(msg) {
//   console.log(`printing debounced message: ${msg}`);
// }
// printMe = debounce(printMe, 1000); //create this debounce function for a)
// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// setTimeout(() => printMe("First"), 100);
// setTimeout(() => printMe("Second"), 200);
// setTimeout(() => printMe("Third"), 300);

/* 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
   sequence is the sum of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
   a) Write a function printFibonacci() using setInterval that outputs a number in
   the Fibonacci sequence every second.
   b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
   calls to do the same thing
   c) Extend one of the above functions to accept a limit argument, which tells it how many
   numbers to print before stopping.
*/

// const printFibonacci = (limit) => {
//   let a = 1;
//   let b = 1;
//   let count = 2;

//   console.log(a);
//   if (limit > 1) {
//     console.log(b);
//   }

//   const interval = setInterval(() => {
//     if (count >= limit) {
//       clearInterval(interval);
//       return;
//     }
//     let next = a + b;
//     console.log(next);

//     a = b;
//     b = next;
//     count++;
//   }, 1000);
// };
// printFibonacci(10);

// const printFibonacciTimeouts = () => {
//   let a = 1;
//   let b = 1;

//   console.log(a);
//   console.log(b);

//   const printNext = () => {
//     let next = a + b;

//     console.log(next);

//     a = b;
//     b = next;

//     setTimeout(printNext, 1000);
//   };

//   setTimeout(printNext, 1000);
// };

// printFibonacciTimeouts();

/* 5. The following car object has several properties and a method which uses them to print a
   description. When calling the function normally this works as expected, but using it from
   within setTimeout fails. Why?
   a) Fix the setTimeout call by wrapping the call to car.description() inside a function
   b) Change the year for the car by creating a clone of the original and overriding it
   c) Does the delayed description() call use the original values or the new values from b)? Why? 
   d) Use bind to fix the description method so that it can be called from within
   setTimeout without a wrapper function
   e) Change another property of the car by creating a clone and overriding it, and test that
   setTimeout still uses the bound value from d)
*/

// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,

//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };
// let car2 = { ...car, year: 2026 };

// // The result depends on whether car or car2 calls description().
// // The "this" keyword refers to the object that calls the function, so it will use that object's values.
// car.description(); //works
// setTimeout(() => car2.description(), 200); //fails

// let car2Bind = car2.description.bind(car2);
// setTimeout(car2Bind, 600);

// let car3 = {
//   ...car,
//   make: "Mercedes",
// };
// car3.description = car2Bind;
// console.log(car3.make);
// console.log(car3.year);
// setTimeout(car3.description, 800);

/* 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
   be used to delay the call to that function by ms milliseconds.
   a) Use the example multiply function below to test it with, as above, and assume that all
   delayed functions will take two parameters
   b) Use apply to improve your solution so that delayed functions can take any number of parameters
   c) Modify multiply to take 4 parameters and multiply all of them, and test that your
   delay prototype function still works.
 */
// Function.prototype.delay = function (ms) {
//   let originalFunction = this;

//   return function () {
//     setTimeout(() => {
//       originalFunction.apply(this, arguments);
//     }, ms);
//   };
// };

// function multiply(a, b, c, d) {
//   console.log(a * b * c * d);
// }

// const delayedMultiply = multiply.delay(1000);
// delayedMultiply(2, 2, 2, 2);

/* 7. The following DigitalClock class uses an interval to print the time every second once
   started, until stopped.
   a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
   parameter precision – the number of ms between 'ticks'. This precision parameter
   should default to 1 second if not supplied.
   b) Create a new class AlarmClock that inherits from DigitalClock and adds the
   parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
   should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
   default to 07:00 if not supplied.
 */

// class DigitalClock {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }
//   display() {
//     let date = new Date();
//     //create 3 variables in one go using array destructuring
//     let [hours, mins, secs] = [
//       date.getHours(),
//       date.getMinutes(),
//       date.getSeconds(),
//     ];

//     if (hours < 10) hours = "0" + hours;
//     if (mins < 10) mins = "0" + mins;
//     if (secs < 10) secs = "0" + secs;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//   }
//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), 1000);
//   }
// }
// const myClock = new DigitalClock("my clock:");
// myClock.start();

// class PrecisionClock extends DigitalClock {
//   constructor(prefix, precision = 1000) {
//     super(prefix);
//     this.precision = precision;
//   }

//   start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), this.precision);
//   }
// }
// const precisionClock = new PrecisionClock("precision clock:", 500);
// precisionClock.start();

// class AlarmClock extends DigitalClock {
//   constructor(prefix, wakeupTime = "07:00") {
//     super(prefix);
//     this.wakeupTime = wakeupTime;
//   }

//   display() {
//     super.display();

//     let date = new Date();

//     let hours = date.getHours().toString().padStart(2, "0");
//     let mins = date.getMinutes().toString().padStart(2, "0");

//     let currentTime = `${hours}:${mins}`;

//     if (currentTime === this.wakeupTime) {
//       console.log("Wake Up");
//       this.stop();
//     }
//   }
// }

// const alarmClock = new AlarmClock("alarm clock:", "16:23");
// alarmClock.start();

/* 8. Using the following starter code, create a decorator function to validate function arguments
   as strings. Test it by decorating the given orderItems function below.
   a) Create a decorator function validateStringArg(fn) which will validate an
   argument passed to fn to ensure that it is a string, throwing an error if not
   b) Extend orderItems to use the ... rest operator, allowing multiple item name
   arguments, and include them all in the returned string
   c) Extend the decorator function to validate as strings all arguments passed to fn
   d) When testing the decorated function, use try-catch blocks to handle errors thrown for
   non-string arguments
*/
// function orderItems(...itemNames) {
//   // console.log(itemNames);
//   return `Order placed for: ${itemNames.join(", ")}`;
// }

// const validateStringArg = (fn) => {
//   return function (...args) {
//     for (let arg of args) {
//       if (typeof arg !== "string") {
//         throw new Error("All arguments must be strings.");
//       }
//     }

//     return fn(...args);
//   };
// };
// const validatedOrderItem = validateStringArg(orderItems);
// // create a decorated version of the original function
// try {
//   console.log(validatedOrderItem("Apple Watch, iPhone, MacBook, AirPods")); // should run the function
//   console.log(validatedOrderItem(123)); // should throw an error
// } catch (error) {
//   console.log(error.message);
// }

/* 9. We can delay execution of a function using setTimeout, where we need to provide both
   the callback function and the delay after which it should execute.
   a) Create a promise-based alternative randomDelay() that delays execution for a
   random amount of time (between 1 and 20 seconds) and returns a promise we can use
   via .then(), as in the starter code below
   b) If the random delay is even, consider this a successful delay and resolve the promise,
   and if the random number is odd, consider this a failure and reject it
   c) Update the testing code to catch rejected promises and print a different message
   d) Try to update the then and catch messages to include the random delay value
*/

// function randomDelay() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 20 + 1) * 1000;

//     setTimeout(() => {
//       if ((delay / 1000) % 2 === 0) {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });
// }
// randomDelay()
//   .then((delay) => {
//     console.log(
//       `Success! There appears to have been a delay of ${delay / 1000} seconds.`
//     );
//   })
//   .catch((delay) => {
//     console.log(`Failed! Random delay of ${delay / 1000} seconds is odd.`);
//   });

/* 10.Fetch is a browser-based function to send a request and receive a response from a server,
   which uses promises to handle the asynchronous response.
   The below fetchURLData uses fetch to check the response for a successful status
   code, and returns a promise containing the JSON sent by the remote server if successful
   or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
   comments before the function.)
    a) Write a new version of thi s function using async/await
    b) Test both functions with valid and invalid URLs
    c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
    using Promise.all to combine the results.
*/
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from "node-fetch";
globalThis.fetch = fetch;
// Original version using .then()
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });

  return fetchPromise;
}

// a) async/await version
const fetchURLDataAsync = async (url) => {
  const response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
};

// b) Test valid and invalid URLs
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Original valid:", data))
  .catch((error) => console.error("Original error:", error.message));

fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Async valid:", data))
  .catch((error) => console.error("Async error:", error.message));

fetchURLDataAsync("https://jsonplaceholder.typicode.com/invalid-url")
  .then((data) => console.log("Async invalid:", data))
  .catch((error) => console.error("Async invalid error:", error.message));

// c) Extension - fetch multiple URLs using Promise.all()
const fetchMultipleURLs = async (urls) => {
  const promises = urls.map((url) => fetchURLDataAsync(url));

  return Promise.all(promises);
};

fetchMultipleURLs([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
])
  .then((data) => console.log("Multiple results:", data))
  .catch((error) => console.error("Multiple error:", error.message));
