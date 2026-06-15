/* 1. Create a function that takes a string as a parameter and returns the string with the first
   character of each word changed into a capital letter, as in the example below. Test it with
   different strings.*/
// const ucFirstLetters = (str) => {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// console.log(ucFirstLetters("los angeles")); // Los Angeles
// console.log(ucFirstLetters("Let's try multiple words"));

/* 2. Create a function truncate(str, max) that truncates a given string of text if its total
    length is greater than the max length. It should return either the truncated text, with an
    ellipsis (...) added to the end if it was too long, or the original text otherwise.
    b) Write another variant of the truncate function that uses a conditional operator.
 */
// const truncate = (str, max) => {
//   if (str.length > max) {
//     return str.slice(0, max) + "...";
//   } else {
//     return str;
//   }
// };

// const truncate2 = (str, max) => {
//   return str.length > max ? str.slice(0, max) + "..." : str;
// };
// console.log(truncate("This text will be truncated if it is too long", 25)); // This text will be truncat...
// console.log(truncate2("This text will be truncated if it is too long", 25));
// console.log(truncate("Less than 25 texts", 25));
// console.log(truncate2("Intermediate Javascript", 12));

/*3. Use the following animals array for the below tasks. Test each one by printing the result to
     the console. Review the following link for tips: 
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    a) Add 2 new values to the end
    b) Add 2 new values to the beginning
    c) Sort the values alphabetically
    d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
    e) Write a function findMatchingAnimals(beginsWith) that returns a new array
    containing all the animals that begin with the beginsWith string. Try to make it work
    regardless of upper/lower case.
 */
// const animals = ["Tiger", "Giraffe"];
// console.log(animals);

// animals.push("Eagle");
// animals.push("Monkey");
// console.log(animals);

// animals.unshift("Elephant");
// animals.unshift("Penguin");
// console.log(animals);

// animals.sort();
// console.log("Sorted:", animals);

// const replaceMiddleAnimal = (newValue) => {
//   const middleIndex = Math.floor(animals.length / 2);
//   animals[middleIndex] = newValue;
// };

// replaceMiddleAnimal("Koala");
// console.log("Replace middle:", animals);

// const findMatchingAnimals = (beginsWith) => {
//   return animals.filter((animal) =>
//     animal.toLowerCase().startsWith(beginsWith.toLowerCase())
//   );
// };
// console.log(findMatchingAnimals("t"));
// console.log(findMatchingAnimals("e"));
// console.log(findMatchingAnimals("E"));

/* 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
      'margin-left' into camel-cased 'marginLeft'.
      The function should remove all dashes, and uppercase the first letter of each word after a dash.
      b) Create variants of the camelCase function that use different types of for loops, and
      c) with and without the conditional operator.
 */

// const camelCase1 = (cssProp) => {
//   let splittedTexts = cssProp.split("-");
//   let finalText = splittedTexts[0];
//   for (const splittedText of splittedTexts.slice(1)) {
//     finalText += splittedText.charAt(0).toUpperCase() + splittedText.slice(1);
//   }
//   return finalText;
// };

// const camelCase2 = (cssProp) => {
//   let splittedTexts = cssProp.split("-");

//   for (let i = 1; i < splittedTexts.length; i++) {
//     splittedTexts[i] =
//       splittedTexts[i].charAt(0).toUpperCase() + splittedTexts[i].slice(1);
//   }

//   return splittedTexts.join("");
// };

// const camelCase3 = (cssProp) => {
//   let splittedTexts = cssProp.split("-");
//   return splittedTexts.map((text, index) => {
//     index === 0 ? text : text.charAt(0).toUpperCase + text.slice(1);
//   });
// };
// console.log("Camel Case 1: " + camelCase1("margin-left"));
// console.log("Camel Case 1: " + camelCase1("font-weight"));
// console.log("Camel Case 1: " + camelCase1("top"));
// console.log("Camel Case 2: " + camelCase1("margin-left"));
// console.log("Camel Case 2: " + camelCase1("font-family"));
// console.log("Camel Case 2: " + camelCase1("right"));
// console.log("Camel Case 3: " + camelCase1("margin-left"));
// console.log("Camel Case 3: " + camelCase1("background-image"));
// console.log("Camel Case 3: " + camelCase1("left"));

/* 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
      We can sometimes avoid this using the toFixed function to force the number of decimal 
      places as below, but it’s not always useful:
      a) Explain why the above code returns the wrong answer
      b) Create a function currencyAddition(float1, float2) which safely adds the two
      decimal numbers float1 and float2 and returns the correct float result.
      c) Create a function currencyOperation(float1, float2, operation) which
      safely performs the given operation (either +, -, / or *) on the two numbers and returns
      the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
      d) (Extension) Extend the above function to include a fourth argument numDecimals
      which allows the operation to support different amounts of decimal places from 1 to 10.
      HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
      different values as well as the below:
*/
// let twentyCents = 0.2;
// let tenCents = 0.1;

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`); // 0.2 + 0.1 = 0.30000000000000004 Because floating point numbers can't be accurately represented in binary

// const currencyAddition = (float1, float2) => {
//   return (float1 * 100 + float2 * 100) / 100;
// };

// console.log(currencyAddition(twentyCents, tenCents));
// console.log(0.3 === currencyAddition(0.1, 0.2)); // true

// const currencyOperation = (float1, float2, operation) => {
//   let factor = 100;

//   switch (operation) {
//     case "+":
//       return (float1 * factor + float2 * factor) / factor;
//     case "-":
//       return (float1 * factor - float2 * factor) / factor;
//     case "*":
//       return (float1 * factor * (float2 * factor)) / (factor * factor);
//     case "/":
//       return (float1 * factor) / (float2 * factor);
//     default:
//       return "Invalid Operation";
//   }
// };

// console.log("CurrencyOperation(+): " + currencyOperation(0.2, 0.1, "+"));
// console.log("CurrencyOperation(-): " + currencyOperation(0.3, 0.1, "-"));
// console.log("CurrencyOperation(*): " + currencyOperation(0.2, 0.1, "*"));
// console.log("CurrencyOperation(/): " + currencyOperation(0.3, 0.1, "/"));
// console.log("CurrencyOperation(%): " + currencyOperation(0.3, 0.1, "%"));

// const currencyOperationWithNumDecimal = (
//   float1,
//   float2,
//   operation,
//   numDecimals
// ) => {
//   let factor = 10 ** numDecimals;

//   switch (operation) {
//     case "+":
//       return (float1 * factor + float2 * factor) / factor;
//     case "-":
//       return (float1 * factor - float2 * factor) / factor;
//     case "*":
//       return (float1 * factor * (float2 * factor)) / (factor * factor);
//     case "/":
//       return (float1 * factor) / (float2 * factor);
//     default:
//       return "Invalid Operation";
//   }
// };

// console.log(
//   "CurrencyOperationWithDecimal(+): " +
//     currencyOperationWithNumDecimal(0.001, 0.002, "+", 3)
// );

/* 6. Create a function unique(duplicatesArray) which takes an array parameter that may
   include duplicates. Your function should return an array containing only the unique values from duplicatesArray.
   Test with the following arrays and create another one of your own. */
// const colours = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "orange",
//   "red",
//   "blue",
//   "yellow",
// ];
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

// const unique = (duplicatesArray) => {
//   return [...new Set(duplicatesArray)];
// };

// console.log(unique(colours));
// console.log(unique(testScores));

// // My own test array
// const f1Teams = [
//   "McLaren",
//   "Ferrari",
//   "Red Bull",
//   "Mercedes",
//   "McLaren",
//   "Ferrari",
//   "Williams",
//   "Aston Martin",
//   "Red Bull",
// ];
// console.log(unique(f1Teams));

/* 7. Use the following array of book objects to practice the array functions for map, find and
   filter. Test each of your answers to the below tasks.
   a) Write a function getBookTitle(bookId) that uses the find function to return the
      title of the book object with the matching id.
   b) Write a function getOldBooks() that uses the filter function to return all book
      objects written before 1950.
   c) Write a function addGenre() that uses the map function to add a new genre property
      to all of the above books, with the value ‘classic’.
   d) (Extension) Write a function getTitles(authorInitial) that uses map and
      filter together to return an array of book titles for books written by authors whose
      names start with authorInitial.
   e) (Extension) Write a function latestBook() that uses find and forEach to get the
      book with the most recent publication date.
 */
// const books = [
//   {
//     id: 1,
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//   },
//   { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//   { id: 3, title: "1984", author: "George Orwell", year: 1949 },
//   { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
//   {
//     id: 5,
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     year: 1951,
//   },
// ];

// const getBookTitle = (bookId) => {
//   return books.find((book) => book.id === bookId).title;
// };
// console.log(getBookTitle(1));
// console.log(getBookTitle(4));

// const getOldBooks = () => {
//   return books.filter((book) => book.year < 1950);
// };
// console.log(getOldBooks());

// const addGenre = () => {
//   return books.map((book) => ({
//     ...book,
//     genre: "classic",
//   }));
// };
// console.log(addGenre());

// const getTitles = (authorInitial) => {
//   return books
//     .filter((book) =>
//       book.author.toLowerCase().startsWith(authorInitial.toLowerCase())
//     )
//     .map((book) => book.title);
// };
// console.log(getTitles("G"));
// console.log(getTitles("H"));

// const latestBook = () => {
//   let newestBook = books[0];

//   books.forEach((book) => {
//     if (book.year > newestBook.year) {
//       newestBook = book;
//     }
//   });

//   return newestBook;
// };
// console.log(latestBook());

/* 8. The following code creates a new Map object for storing names beginning with A, B, or C
    with their phone numbers.
    a) Create a new phoneBookDEF Map to store names beginning with D, E or F
    b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
    c) Update the phone number for Caroline
    d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
    e) Combine the contents of the two individual Maps into a single phoneBook Map
    f) Print out the full list of names in the combined phone book
 */
// const phoneBookABC = new Map(); //an empty map to begin with
// phoneBookABC.set("Annabelle", "0412312343");
// phoneBookABC.set("Barry", "0433221117");
// phoneBookABC.set("Caroline", "0455221182");

// const phoneBookDEF = new Map([
//   ["Damian", "021111111"],
//   ["Eapeisi", "022222222"],
//   ["Fin", "023333333"],
// ]);
// console.log(phoneBookDEF);

// phoneBookABC.set("Caroline", "0444444444");
// console.log(phoneBookABC);

// const printPhoneBook = (contacts, namesOnly = false) => {
//   for (let [name, phoneNumber] of contacts) {
//     if (namesOnly) {
//       console.log(`${name}`);
//     } else {
//       console.log(`${name}: ${phoneNumber}`);
//     }
//   }
// };

// printPhoneBook(phoneBookABC);
// printPhoneBook(phoneBookDEF);

// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
// printPhoneBook(phoneBook, true);

/* 9. Given the below salaries object, perform the following tasks.
   a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
   b) Write a function topEarner(salaries) that calculates and returns the name of the person 
   earning the highest salary
*/
// let salaries = {
//   Timothy: 35000,
//   David: 25000,
//   Mary: 55000,
//   Christina: 75000,
//   James: 43000,
// };
// const sumSalaries = (salaries) => {
//   let total = 0;
//   for (let person in salaries) {
//     total += salaries[person];
//   }
//   return total;
// };
// console.log(`Total Salaries: ${sumSalaries(salaries)}`);

// const topEarner = (salaries) => {
//   let highestSalary = 0;
//   let highestEarner = "";
//   for (let person in salaries) {
//     if (salaries[person] > highestSalary) {
//       highestSalary = salaries[person];
//       highestEarner = person;
//     }
//   }
//   return highestEarner;
// };
// console.log(`Highest Earner: ${topEarner(salaries)}`);

/* 10.The following code uses the Date object to print the current time and the number of hours
   that have passed today so far. Extend the code to do the following:
   a) Print the total number of minutes that have passed so far today
   b) Print the total number of seconds that have passed so far today
   c) Calculate and print your age as: 'I am x years, y months and z days old'
   d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
   of days in between the two given dates.
*/
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

let minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(`${minutesPassed} minutes have passed so far today `);

let secondsPassed =
  today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(`${secondsPassed} seconds have passed so far today `);

const birthDate = new Date("1998-12-27");
let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

// console.log(new Date(2026, 1, 0).getDate()); // 31 (January)
// console.log(new Date(2026, 2, 0).getDate()); // 28 (February)
// console.log(new Date(2024, 2, 0).getDate()); // 29 (Leap Year February)
// console.log(new Date(2026, 4, 0).getDate()); // 30 (April)

if (days < 0) {
  months--;
  days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
}

if (months < 0) {
  years--;
  months += 12;
}
console.log(`I am ${years} years, ${months} months and ${days} days old`);

const daysInBetween = (date1, date2) => {
  // console.log(date1.getTime());
  // console.log(date2.getTime());
  // console.log(date2 - date1);

  let millisecondsPerDay = 1000 * 60 * 60 * 24;

  return Math.abs(date2 - date1) / millisecondsPerDay;
};

console.log(daysInBetween(new Date("2025-06-12"), new Date("2025-12-27")));
