// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// *** ООП ***
const employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage() {
        return this.baseSalary + this.overtime * this.rate;
    },
};


console.log(employee.getWage());

//*** КЛАС ***//
class User {
    constructor(params) {
        this.name = params.name;
        this.email = params.email;
    }
}

const mango = new User({
    name: "Mango",
    email: "mango@mail.com",
});

console.log(mango);
// { name: "Mango", email: "mango@mail.com" }


// ***  ПОДІЇ КЛАВІАТУРИ *** //
// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
// });

