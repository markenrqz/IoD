//1. What are the results of these expressions? (answer first, then use console.log() to check)
// console.log("" + 1 + 0); // "10" because "" + 1 becomes "1", then + 0 becomes "10"
// console.log("" - 1 + 0); // -1 because "" converts to 0, then 0 - 1 + 0 = -1
// console.log(true + false); // 1 because true converts to 1 and false converts to 0
// console.log(!true); // false because ! means NOT
// console.log(6 / "3"); // 2 because "3" converts to number 3
// console.log("2" * "3"); // 6 because both strings convert to numbers
// console.log(4 + 5 + "px"); // "9px" because 4 + 5 = 9, then joins with "px"
// console.log("$" + 4 + 5); // "$45" because "$" is a string, so 4 and 5 are joined
// console.log("4" - 2); // 2 because "4" converts to number 4
// console.log("4px" - 2); // NaN because "4px" cannot convert to a valid number
// console.log(" -9 " + 5); // " -9 5" because + joins with the string
// console.log(" -9 " - 5); // -14 because " -9 " converts to number -9
// console.log(null + 1); // 1 because null converts to 0
// console.log(undefined + 1); // NaN because undefined converts to NaN
// console.log(undefined == null); // true because == allows type conversion
// console.log(undefined === null); // false because === checks type and value
// console.log(" \t \n" - 2); // -2 because whitespace string converts to 0

//2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
// let three = "3";
// let four = "4";
// let thirty = "30";

//what is the value of the following expressions?
// let addition = three + four;
// let multiplication = three * four;
// let division = three / four;
// let subtraction = three - four;
// let lessThan1 = three < four;
// let lessThan2 = thirty < four;

// console.log("addition:", addition); // "34" because + joins strings
// console.log("multiplication:", multiplication); // 12 because * converts strings to numbers
// console.log("division:", division); // 0.75 because / converts strings to numbers
// console.log("subtraction:", subtraction); // -1 because - converts strings to numbers
// console.log("lessThan1:", lessThan1); // true because "3" is less than "4"
// console.log("lessThan2:", lessThan2); // true because strings compare character by character

// Fixed
// let fixedAddition = Number(three) + Number(four);
// let fixedLessThan2 = Number(thirty) < Number(four);
// console.log("fixedAddition:", fixedAddition); // 7
// console.log("fixedLessThan2:", fixedLessThan2); // false

//3. Which of the following console.log messages will print? Why?
// if (0) console.log("#1 zero is true"); // Does not print because JavaScript treats 0 as false
// if ("0") console.log("#2 zero is true"); // Prints because JavaScript treats non-empty strings as true
// if (null) console.log("null is true"); // Does not print because JavaScript treats null as false
// if (-1) console.log("negative is true"); // Prints because JavaScript treats non-zero numbers as true
// if (1) console.log("positive is true"); // Prints because JavaScript treats non-zero numbers as true

//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
// let a = 2,
//   b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }
// result += a + b < 10 ? "less than 10" : "greater than 10"; //The += operator means add to the existing value.
// console.log(result);

//5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
// function getGreeting(name) {
//   return "Hello " + name + "!";
// }
// const getGreetingExpression = function (name) {
//   return `Hello ${name}!`;
// };
// const getGreetingArrow = (name) => {
//   return `Hello ${name}!`;
// };
// console.log(getGreeting("Mark"));
// console.log(getGreetingExpression("Mark"));
// console.log(getGreetingArrow("Mark"));

/*6. a) Complete the inigo object by adding a lastName property and including it in the greeting.
     b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
        prints his famous catch phrase to the console. HINT: see
        https://www.imdb.com/title/tt0093779/characters/nm0001597.
     c) Update getCatchPhrase to use arrow function syntax and a conditional operator.*/
// const westley = {
//   name: "Westley",
//   numFingers: 5,
// };
// const rugen = {
//   name: "Count Rugen",
//   numFingers: 6,
// };
// const inigo = {
//   firstName: "Inigo",
//   lastName: "Montoya",
//   greeting(person) {
//     let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
//     console.log(greeting + this.getCatchPhrase(person));
//   },
//   getCatchPhrase: (person) => {
//     return person.numFingers === 6
//       ? "You killed my father. Prepare to die."
//       : "Nice to meet you.";
//   },
// };
// inigo.greeting(westley);
// inigo.greeting(rugen);

/* 7.  The following object represents a basketball game and keeps track of the score as the game progresses.
    a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
    b) Add a new method to print the full time final score
    c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but 
    separate to the score. Include the foul count in the half time and full time console messages
    d) Test your object by chaining all the method calls together in different combinations.*/
// const basketballGame = {
//   score: 0,
//   fouls: 0,
//   freeThrow() {
//     this.score++;
//     return this;
//   },
//   basket() {
//     this.score += 2;
//     return this;
//   },
//   threePointer() {
//     this.score += 3;
//     return this;
//   },
//   foul() {
//     this.fouls += 1;
//     return this;
//   },
//   halfTime() {
//     console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
//     return this;
//   },
//   fullTime() {
//     console.log(`Full time final score is ${this.score}. Fouls: ${this.fouls}`);
//     return this;
//   },
// };
//modify each of the above object methods to enable function chaining as below:
// basketballGame
//   .basket()
//   .freeThrow()
//   .freeThrow()
//   .basket()
//   .threePointer()
//   .foul()
//   .halfTime()
//   .basket()
//   .foul()
//   .fullTime();

/* 8. The object below represents a single city.
      a) Write a function that takes an object as an argument and uses a for...in loop to access
      and print to the console each of those object properties and their values. Test it using the sydney object below.
      b) Create a new object for a different city with different properties and call your function
      again with the new object.*/

// const sydney = {
//   name: "Sydney",
//   population: 5_121_000,
//   state: "NSW",
//   founded: "26 January 1788",
//   timezone: "Australia/Sydney",
// };
// const wellington = {
//   name: "Wellington",
//   population: 215000,
//   country: "New Zealand",
//   founded: "1840",
//   timezone: "Pacific/Auckland",
//   randomprops: "random property",
// };
// function printObjectProperties(obj) {
//   for (let props in obj) {
//     console.log(`${props}: ${obj[props]}`);
//   }
// }

// printObjectProperties(sydney);
// printObjectProperties(wellington);

/* 9. Use the following variables to understand how JavaScript stores objects by reference.
      a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
      b) Create a new dog2 variable equal to dog1 and give it a new value
      c) Create a new cat2 variable equal to cat1 and change its name property
      d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
      e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent*/
// let teamSports = ["Hockey", "Cricket", "Volleyball"];
// let moreSports = teamSports;
// moreSports.push("Basketball");
// moreSports.unshift("Football");
// console.log(moreSports);

// let dog1 = "Bingo";
// let dog2 = dog1;
// dog2 = "Rex";
// console.log(dog2);

// let cat1 = { name: "Fluffy", breed: "Siberian" };
// let cat2 = cat1;
// cat2.name = "Mittens";
// console.log(cat2);

// console.log("teamSports:", teamSports); //teamSports changed because arrays are stored by reference
// console.log("dog1:", dog1); //dog1 did not change because strings are primitive values and are copied by value.
// console.log("cat1:", cat1); //cat1 changed because objects are stored by reference.

// let moreSports2 = [...teamSports];
// moreSports2.push("Rugby");

// let cat3 = { ...cat1 };
// cat3.name = "Garfield";

// console.log("Original teamSports:", teamSports);
// console.log("More Sports2:", moreSports2);

// console.log("Original cat1:", cat1);
// console.log("Cat3:", cat3);

/*10. The following constructor function creates a new Person object with the given name and age values.
      a) Create a new person using the constructor function and store it in a variable
      b) Create a second person using different name and age values and store it in a separate variable
      c) Print out the properties of each person object to the console
      d) Rewrite the constructor function as a class called PersonClass and use it to create a
      third person using different name and age values. Print it to the console as well.
      e) Add a canDrive method to both the constructor function and the class that returns true 
      if the person is old enough to drive.
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  this.canDrive = () => {
    return this.age >= 16;
  };
}
let person1 = new Person("Mark", 26);
let person2 = new Person("Peisi", 18);

const people = [person1, person2];

const printPersonProperty = (people) => {
  for (let person of people) {
    console.log(
      `Name: ${person.name}, Age: ${person.age}, Human: ${person.human}`
    );
  }
};

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive = () => {
    return this.age >= 16;
  };
}

let person3 = new PersonClass("Jade", 12);
people.push(person3);
printPersonProperty(people);
console.log(person1.name + " can drive: " + person1.canDrive());
console.log(person2.name + " can drive: " + person2.canDrive());
console.log(person3.name + " can drive: " + person3.canDrive());
