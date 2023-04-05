// Q1. Write a function to add a new record at the end of array users using spread operator,
// functions : addLast(users,temp)


interface User{
    id : number,
    name : string,
    from :string
}



let users : User[] = [{
    id : 1,
    name : "Krishna",
    from : "India"
},
{
    id : 2,
    name : "Shyam",
    from : "India"
},
{
    id : 3,
    name : "Satyam",
    from : "India"
}
]

const addLast = (users : User[] , temp:User[]):User[] =>{
    return [...users , ...temp];
}

let temp:User[] = [{
    id : 4,
    name : "Shyam",
    from : "India"
}]

let updatedLast:User[] = addLast(users , temp)

console.log(updatedLast);




