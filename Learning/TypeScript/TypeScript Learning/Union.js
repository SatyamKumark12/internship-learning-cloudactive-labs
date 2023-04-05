"use strict";
// let data:string|number = 10;
let combine = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
};
let c = combine(10, 20);
let d = combine("Satyam", "Kumar");
console.log(c);
console.log(d);
