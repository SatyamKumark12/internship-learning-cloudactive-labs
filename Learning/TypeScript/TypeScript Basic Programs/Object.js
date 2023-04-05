"use strict";
let peintPerson = (pinfo) => {
    console.log(`Hello Person id is ${pinfo.id} and Perosn name is ${pinfo.empName} and Person From is ${pinfo.from}`);
};
const satu = {
    id: 1,
    empName: "Satyam",
    from: "India"
};
peintPerson(satu);
