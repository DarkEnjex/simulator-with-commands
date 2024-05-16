'use strict'

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// console.log(greeting.length) // 39

// console.log(greeting[0]) // W

// // console.log(greeting[greeting.length - 1]); // "!"

// const lastElementIndex = greeting.length - 1;
// console.log(greeting[lastElementIndex]);

// let usename = "Love";
// console.log(usename);
// usename = "Void";
// console.log(usename)

// let age = 18;
// const isAdult = 18 >= age;
// console.log(isAdult)

// //* parseInt -
// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseInt("5.5")); // 5
// console.log(Number.parseInt("5cm")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("cm5")); // NaN
// console.log(Number.parseInt("")); // NaN
// console.log(Number.parseInt("qweqwe")); // NaN

// //* parseFloat з плаваючаю крапкою
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12.46qwe79")); // 12.46


// const value = "24.5px";
// const numerical = parseFloat(value);
// console.log(numerical)

// const numberS = Math.random(10)
// console.log(numberS)

// function sayHi() {
//     console.log("Hello, this is my first function!")
// }

// sayHi()


// // Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//     console.log(`Result: ${x * y * z}`);
// }

// // Передача аргументів
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"


// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// function multiply(x, y, z) {
//     const product = x * y * z;
//     // Повертаємо результат виразу множення
//     return product;
// }

// // Результат роботи функції можна зберегти у змінну
// const result = multiply(2, 3, 5);
// console.log(result); // 30


// // Глобальна змінна
// const value = "I'm a global variable";

// function foo() {
//     // Можна звернутися до глобальної змінної
//     console.log(value); // "I'm a global variable"
// }

// foo();
// // Можна звернутися до глобальної змінної
// console.log(value);
// // "I'm a global variable"



const value = "You picked ${name}, price per item is ${price} credits";

function makeMessage(name, price) {


    console.log(value);


};

makeMessage('Radar', 6150)
makeMessage('Scanner', 3500)
makeMessage('Reactor', 8000)
makeMessage('Engine', 4070)


//! Fira code