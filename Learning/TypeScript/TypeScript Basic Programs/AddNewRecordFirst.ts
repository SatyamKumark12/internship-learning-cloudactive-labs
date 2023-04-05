

interface User{
    id : number,
    name : string,
    from : string
}

let users : User[] = [
    {
        id : 1,
        name :"Krishna",
        from : "India"
    },
    {
        id : 2,
        name :"Shyam",
        from : "India"
    },
    {
        id : 3,
        name :"Satyam",
        from : "India"
    }
]

let AddFirst = (uesrs:User[] , temp : User[]) : User[] =>{
    return [...temp , ...users];
}

let temp : User[] = [{
    id : 4,
    name : "Shyam",
    from : "India"
}]

 let UpdatedFirst: User[] = AddFirst(users, temp);
 console.log(UpdatedFirst);
  


