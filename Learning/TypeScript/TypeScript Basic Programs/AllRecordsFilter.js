"use strict";
// Q4. Write a function which will display all records with name ==='krishna'
// function Name ---> findNameEquals(users)
// HINT : Use filter.
let users = [
    {
        id: 1,
        name: 'krishna',
        from: 'India'
    },
    {
        id: 2,
        name: 'Shyam',
        from: 'India'
    },
    {
        id: 3,
        name: 'krishna',
        from: 'India'
    },
    {
        id: 4,
        name: 'Satyam',
        from: 'India'
    },
];
let findNameEquals = (users) => {
    return users.filter((user) => (user.name === 'krishna'));
};
let UpdatedFilterName = findNameEquals(users);
console.log(UpdatedFilterName);
