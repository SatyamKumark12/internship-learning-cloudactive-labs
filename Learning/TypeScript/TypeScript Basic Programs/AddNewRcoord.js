"use strict";
// Q1. Write a function to add a new record at the end of array users using spread operator,
// functions : addLast(users,temp)
let users = [{
        id: 1,
        name: "Krishna",
        from: "India"
    },
    {
        id: 2,
        name: "Shyam",
        from: "India"
    },
    {
        id: 3,
        name: "Satyam",
        from: "India"
    }
];
const addLast = (users, temp) => {
    return [...users, ...temp];
};
let temp = [{
        id: 4,
        name: "Shyam",
        from: "India"
    }];
let updatedLast = addLast(users, temp);
console.log(updatedLast);
