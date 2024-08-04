'use strict'

//? user
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     },
//     hobbies: ["swimming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]
// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"
// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

//? book
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log("book rating: " + book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "uk"];
// book.price = {
//     hardcover: 39,
//     softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log("original Language: " + book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "uk"]

//? noame
// const name = "Henry Sibola";
// const age = 25;

// const user = {
//     name,
//     age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

//? book for...in
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// for (const key in book) {
//     console.log(key); // Ключ
//     console.log(book[key]);  // Значення властивості з таким ключем
// }

//? apartment for...in
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

//? Object.keys()
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

//? Object.values()
// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

//? Object.keys()
// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//     console.log(key); // Ключ
//     console.log(book[key]); // Значення властивості
// }

