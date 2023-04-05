"use strict";
// Q3. Write a function to display all records only 3 fields id,name,username.
// functions : display(users)
// HINT : map
let users = [
    {
        id: 1,
        name: "Krishna",
        username: "krishna@gmail.com",
        from: "India"
    },
    {
        id: 2,
        name: "Shyam",
        username: "shyam@gmail.com",
        from: "India"
    },
    {
        id: 3,
        name: "Satyam",
        username: "satyam@gmail.com",
        from: "India"
    },
];
const DisplayRecords = (users) => {
    return users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
        };
    });
};
const UpdatedRecords = DisplayRecords(users);
console.log(UpdatedRecords);
