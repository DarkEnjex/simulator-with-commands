'use strict'

// function getLastElementMeta(array) {
//     const lastIndex = array.length - 1;
//     const lastElement = array[lastIndex];
//     return [lastIndex, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]))


// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//     console.log(planets[i]);
// }


// function getCommonElements(array1, array2) {
//     const commonElements = [];
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             commonElements.push(array1[i]);
//         }
//     }
//     return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//     console.log(planet);
// }

// function foo() {
//     // У змінній args буде повноцінний масив з усіх аргументів
//     const args = Array.from(arguments);
//     return args.join("-");
// }

// console.log(foo(1, 2, 3)); // Поверне "1-2-3"

//! modul 3 task 1
function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//! modul 3 task 2
function makeArray(firstArray, secondArray, maxLength) {
    let allArray = firstArray.concat(secondArray);
    if (allArray.length > maxLength) {
        return allArray.slice(0, maxLength)
    } else {
        return allArray
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


//! modul 3 task 3
function filterArray(numbers, value) {
    const newArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            newArray.push(numbers[i])
        }

    }
    return newArray;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
