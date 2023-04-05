"use strict";
let users = [
    {
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
let AddFirst = (uesrs, temp) => {
    return [...temp, ...users];
};
let temp = [{
        id: 4,
        name: "Shyam",
        from: "India"
    }];
let UpdatedFirst = AddFirst(users, temp);
console.log(UpdatedFirst);
