"use strict";
// enum employees {
//     Krishna,
//     Ram,
//     Satyam
// }
// console.log(employees);
var employees;
(function (employees) {
    employees["Krishna"] = "Krishna";
    employees["Ram"] = "RAM";
    employees["Satyam"] = "SATYAM";
})(employees || (employees = {}));
console.log(employees['Satyam']);
