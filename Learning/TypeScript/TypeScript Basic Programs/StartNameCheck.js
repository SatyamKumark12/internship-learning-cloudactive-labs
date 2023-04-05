"use strict";
// Q5. Write a function which will display all the records starting with name 'k' or any character passed as parameter.
// function Name ---> findSpecificStartChar(users,'B')
// HINT : Use filter and string functions.
let users = [
    {
        id: 1,
        name: 'krishna',
        from: 'India',
        username: 'krishna@gmail.com'
    },
    {
        id: 2,
        name: 'Shyam',
        from: 'India',
        username: 'krishna@gmail.com'
    },
    {
        id: 3,
        name: 'krishna',
        from: 'India',
        username: 'krishna@gmail.com'
    },
    {
        id: 4,
        name: 'Satyam',
        from: 'India',
        username: 'krishna@gmail.com'
    },
];
let findSpecificStartChar = (users) => {
    return users.filter((user) => user.name.startsWith('k'));
};
let UpdatedFirstChar = findSpecificStartChar(users);
console.log(UpdatedFirstChar);
