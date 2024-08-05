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
//     }
// ];


// for (const book of books) {
//     console.log(book); // Об'єкт книги
//     console.log(book.title); // Назва
//     console.log(book.author); // Автор
//     console.log(book.rating); // Рейтинг
// }


// const fruits = [
//     { name: 'Apple', color: 'Red' },
//     { name: 'Banana', color: 'Yellow' },
//     { name: 'Grape', color: 'Purple' },
//     { name: 'Orange', color: 'Orange' },
//     { name: 'Lemon', color: 'Yellow' }
// ];

// const fruitNames = [];
// const fruitColors = [];

// // Твій код тут
// for (const fruit of fruits) {
//     fruitNames.push(fruit.name);
//     fruitColors.push(fruit.color);
// }

// console.log(fruitNames)
// console.log(fruitColors)

// console.log("-----------------------------")

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell" },
//     { title: "Beside Still Waters", author: "Robert Sheckley" },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
//     if (book.author === authorToSearchFor) {
//         console.log(book);
//         console.log(book.title)
//         console.log(book.rating)
//     }
// }


// console.log("---------------------------------")

// function getProductPrice(productName) {
//     const products = [
//         { name: 'Laptop', price: 1000, quantity: 5 },
//         { name: 'Phone', price: 500, quantity: 10 },
//         { name: 'Tablet', price: 300, quantity: 7 },
//         { name: 'Headphones', price: 100, quantity: 15 }
//     ];

//     // Твій код тут
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
//     return null;

// }

// console.log(getProductPrice('Phone')); // 500
// console.log(getProductPrice('Laptop')); // 1000
// console.log(getProductPrice('Camera')); // null

// console.log("------------------")

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
//     titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]


//---------------------------------
// function getAllPropValues(propName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     const values = [];
//     for (const product of products) {

//     }
// }

// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all avalible potions"
//     },
//     addPotions(potionName) {
//         return `Adding ${potionName}`;
//     }
// }

// console.log(atTheOldToad.getPotions())
// console.log(atTheOldToad.addPotions("Invisibility"))
// console.log(atTheOldToad.addPotions("Power potion"))

// const bookShelf = {
//     books: ["The Last Kingdom", "The Mist"],
//     getBooks() {
//         console.log(this);
//     },
// };

// console.log(bookShelf.getBooks()); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// const bookShelf = {
//     books: ["The Last Kingdom", "The Mist"],
//     getBooks() {
//         return this.books;
//     }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//         return this.potions
//     }
// }

// console.log(atTheOldToad.getPotions())

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         this.potions.push(potionName)
//     }
// }

// console.log(atTheOldToad.getPotions())
// atTheOldToad.addPotion("Invisibility")
// atTheOldToad.addPotion("Power potion")
// console.log(atTheOldToad.getPotions())

//! Modul 4 task 1
// function isEnoughCapacity(products, containerSize) {
//     let totalProducts = 0;
//     for (const product in products) {
//         totalProducts += products[product];
//     }
//     return totalProducts <= containerSize;
// }

// console.log(
//     isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//     isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//     isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//     isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false


//! Modul 4 task 2
// function calcAverageCalories(days) {
//     if (days.length === 0) {
//         return 0;
//     }

//     let totalCalories = 0;
//     for (let day of days) {
//         totalCalories += day.calories;
//     }
//     let averageTotalCalories = totalCalories / days.length;
//     return averageTotalCalories;
// }

// console.log(
//     calcAverageCalories([
//         { day: "monday", calories: 3010 },
//         { day: "tuesday", calories: 3200 },
//         { day: "wednesday", calories: 3120 },
//         { day: "thursday", calories: 2900 },
//         { day: "friday", calories: 3450 },
//         { day: "saturday", calories: 3280 },
//         { day: "sunday", calories: 3300 }
//     ])
// ); // 3180

// console.log(
//     calcAverageCalories([
//         { day: "monday", calories: 2040 },
//         { day: "tuesday", calories: 2270 },
//         { day: "wednesday", calories: 2420 },
//         { day: "thursday", calories: 1900 },
//         { day: "friday", calories: 2370 },
//         { day: "saturday", calories: 2280 },
//         { day: "sunday", calories: 2610 }
//     ])
// ); // 2270

// console.log(
//     calcAverageCalories([])
// ); // 0

//! Modul 4 task 3
// const profile = {
//     username: "Jacob",
//     playTime: 300,

//     changeUsername(newName) {
//         this.username = newName;
//     },

//     updatePlayTime(hours) {
//         this.playTime += hours;
//     },

//     getInfo() {
//         return `${this.username} has ${this.playTime} active hours!`
//     }
// };


// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"