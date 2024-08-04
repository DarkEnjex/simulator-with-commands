'use strict';

// function checkAge(age) {
//     if (age >= 18) {
//         return `You are an adult`;
//     }
// }

// console.log(checkAge(20));

//? if, else if, else
// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "There are no products in the order!"
//     } else if (ordered > available) {
//         return "Your order is too large, there are not enought items in stock!"
//     } else {
//         return "There order is accepted, our mannager will contact you"
//     }
// }

// console.log(checkStorage(500, 100))

//? тернарний оператор
// const age = 8;
// const type = age >= 18 ? "abult" : "child";
// console.log(type)

// const price = 200;
// const yourMoney = price >= 120 ? "enought" : "not enought"
// console.log(yourMoney)


//? оператор switch, перевіряє тільки на сувору рівність
// function getSubscriptionPrice(type) {
//     switch (type) {
//         case 'starter':
//             return 0;
//             break;
//         case 'professional':
//             return 20;
//             break;
//         case 'organization':
//             return 50;
//             break;
//         default:
//             return `Ivalid subscription type!`;
//     }
// }

// console.log(getSubscriptionPrice("pro"));

// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false

// console.log(null && true);

// function isNumberInRange(start, end, number) {
//     return Boolean(number >= start && number <= end);
// }

// console.log(isNumberInRange(10, 30, 5))

// function checkAccess(subType) {
//* 1 спосіб
// return subType === "pro" || subType === "vip";

//* 2 спосіб
// if (subType === "pro" || subType === "vip") {
//     return Boolean(true);
// } else {
//     return Boolean(false);
// }
// }

// console.log(checkAccess("vip"))
// console.log(checkAccess("start"))
// console.log(checkAccess("pro"))

// function toogleModalVisibility(isVisible) {
//     return !isVisible

//* другий спосіб
// if (isVisible === true) {
//     return !true;
// } else {
//     return !false;
// }

// }

// console.log(toogleModalVisibility(true));
// console.log(toogleModalVisibility(false));


//? Методи .toUpperCase(), .trim(), .length, .toLowerCase, .slice(), .includes(), .startsWith(), .endsWith(), .indexOf()
// const message = "     Lorem ipsum dolor Sit, amEt consectetur adipisicing elit.";
// console.log(message.toUpperCase())
// console.log(message.length)
// console.log(message.trim())
// console.log(message.length)
// console.log(message.toLowerCase())

// console.log(message.includes("lorem"))

// console.log(message.trim().slice(0, 15))
// console.log(message.slice(10))

// const sliceMessage = message.trim().toUpperCase().slice(0, 20)
// console.log(sliceMessage)
// console.log(sliceMessage.length)

// console.log(message.startsWith("Lorem"))
// console.log(message.trim().startsWith("Lorem"))

// console.log(message.endsWith("."))
// console.log(message.endsWith("no"))

// console.log(message.indexOf("it"))
// console.log(message.indexOf("morem"))


//? тест
// function getSubstring(string, length) {
//     return string.slice(0, length);
// }

// console.log(getSubstring("Hello world", 11))

// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     } else {
//         return input.toLowerCase();
//     }
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"))
// console.log(normalizeInput("This ISN'T SpaM", "upper"))
// console.log(normalizeInput("Big SALE", "lower"))

// function checkForName(fullName, firstName) {
//     if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkForName("Jason Neis", "Jason"))
// console.log(checkForName("Jason Neis", "jAsOn"))
// console.log(checkForName("Jason Neis", "jsOn"))

// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//         return "File extension matches"
//     } else {
//         return "File extension does not match"
//     }
// }


// console.log(checkFileExtension("styles.css", ".css"))
// console.log(checkFileExtension("app.js", ".html"))

// function getFileName(file) {
//     const doIndex = file.indexOf(".");
//     if (doIndex === -1) {
//         return file;
//     } else {
//         return file.slice(0, doIndex);
//     }
// }

// console.log(getFileName("app.js"))
// console.log(getFileName("app"))

// function createFileName(name, ext) {
//     return name.trim(name) + "." + ext;
// }

// console.log(createFileName(" order ", "txt"))
// console.log(createFileName("report ", "csv"))
// console.log(createFileName(" presentation", "xml"))


// function calculateTotal(number) {
//     let total = 0;
//     let current = 1;
//     while (current <= number) {
//         total += current;
//         current += 1;
//     }
//     return total;
// }

// console.log(calculateTotal(2))

//! Task 1 modul 2
// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     if (totalPrice > customerCredits) {
//         return "Insufficient funds!";
//     } else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"


//! Task 2 modul 2
// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message;
//     } else {
//         return message.slice(0, maxLength) + "...";
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


//! Task 3 modul 2
// function checkForSpam(message) {
//     const toLowerMessage = message.toLowerCase();
//     if (toLowerMessage.includes("spam") || toLowerMessage.includes("sale")) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


//! Task 4 modul 2
// function getShippingCost(country) {
//     let price;
//     switch (country) {
//         case 'China':
//             price = 100;
//             break;
//         case 'Chile':
//             price = 250;
//             break;
//         case 'Australia':
//             price = 170;
//             break;
//         case 'Jamaica':
//             price = 120;
//             break;

//         default:
//             return "Sorry, there is no delivery to your country";
//     }
//     return `Shipping to ${country} will cost ${price} credits`
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
