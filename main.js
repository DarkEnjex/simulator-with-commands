// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// *** ООП ***
// const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     },
// };


// console.log(employee.getWage());

//*** КЛАС ***//
// class User {
//     constructor(params) {
//         this.name = params.name;
//         this.email = params.email;
//     }
// }

// const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
// });

// console.log(mango);
// { name: "Mango", email: "mango@mail.com" }


// ***  ПОДІЇ КЛАВІАТУРИ *** //
// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
// });

// *** АСИНХРОННІСТЬ ** //
// Виконується першою
// console.log("First log");

// setTimeout(() => {
//     // Виконується третьою, через 2000 мілісекунд (2 секунди)
//     console.log("Second log");
// }, 5000);

// // Виконується другою
// console.log("Third log");


// *** ДАТА **//
// const date = new Date();

// console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
// const date = new Date();


// const book = {
//     title: "Good Omens",
//     rating: 8.5,
// }

// const {
//     title,
//     rating: bookRating = 8.7,
// } = book;

// console.log(title);
// console.log(bookRating);

const user = {
    name: "Jack",
    stats: {
        follow: 2546,
        likes: 7562,
    },
};

const {
    name,
    stats: { follow = 0, likes: userLikes = 0 },
} = user;

console.log(name);
console.log(follow);
console.log(userLikes);
