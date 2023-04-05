"use strict";
// let data:string|number = 10;
let combine = (a, b, type) => {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
};
let c = combine(10, 20, "as-number");
let d = combine("Satyam", "Kumar", "as-string");
console.log(c);
console.log(d);
