'use strict'

// function greet(name) {
//     console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"


// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//     console.log(`Index ${index}, value ${number}`);
// });

////
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (item) {
//         totalPrice += item;
//     });

//     return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]))

////
// function filterArray(numbers, value) {

//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     return filteredNumbers;

// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 5))


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const ratings = books.map(book => book.rating);
// console.log(ratings)

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres)

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 == 0);
// const oddNumbers = numbers.filter(number => number % 2 != 0);

// console.log(evenNumbers)
// console.log(oddNumbers)
// console.log(numbers)


const students = [
    { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
    { name: "Poly", score: 59, courses: ["science", "mathematics"] },
    { name: "Ajax", score: 37, courses: ["physics", "biology"] },
    { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(sortedByAscendingScore)
console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
