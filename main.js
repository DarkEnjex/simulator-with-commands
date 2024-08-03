'use strict';

// console.log(age); //! ReferenceError: Cannot access 'age' before initialization

const age = 20;
console.log(age);

// age = 25;
// console.log(age); //! TypeError: Assignment to constant variable.

const username = "Mick";
console.log(username);

console.log(2000);
console.log("Ice");

let words;
console.log(words);
console.log(typeof words);

words = 'Kai';
console.log(words);

// console.log(user); //! ReferenceError: user is not defined at

// const sallary = 3560,5;  //! SyntaxError: Unexpected number  
// console.log(sallary);    //? Якщо замість крапки у дробовий числах поставити кому між цілим та дробовим числом - це викличе синтаксичну помилку

const trueSallary = 48566.246;  //* Number (Число)
console.log(trueSallary);
console.log(typeof trueSallary);


const isLightOn = true;  //* Boolean (Логічний тип данних)
console.log(isLightOn);
console.log(typeof isLightOn);

const isRainNow = false; //* Boolean (Логічний тип данних)
console.log(isRainNow);

const stringBoolean = "'false'";  //* String (Рядок)
console.log(stringBoolean);
console.log(typeof stringBoolean);

console.log(null);
console.log(typeof null); //? null насправді є примітивним значенням, а не об'єктом.

console.log("------------------------------");

const x = 8;
const y = 5;
console.log(x + y); // 13

console.log(x - y); // 3

console.log(x * y); // 40

console.log(x / y); // 1.6

console.log(x % y); //? 3 Оператор (%) повертає остачу від ділення одного числа на інше.

console.log(x ** y); //? 32768 Оператор (**) використовується для піднесення числа до степеня.

