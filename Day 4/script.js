// // 1-  print odd numbers using anonimous function - 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// oddNumbers.forEach((number) => {
//   console.log(number);
// });


// // 2 - convert all the string to little caps using anonumious function -

// const stringArray = ["Hello", "WORLD", "JavaScript", "Example"];

// const lowercaseArray = stringArray.map((str) => str.toLowerCase());

// console.log(lowercaseArray);


// // 3 - calculate the sum of all elements present in an array -

// const number = [1, 2, 3, 4, 5];

// const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); 

// //  4 - return all the prime numbers in an array -

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function findPrimeNumbers(arr) {
//   return arr.filter(num => isPrime(num));
// }

// const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const primeNumbers = findPrimeNumbers(number2);

// console.log(primeNumbers); 

let n = prompt("Enter the value of n");
n = Number.parseInt(n);
let i = 0;
while (i < n) {
  console.log(i);
  i++;
}  