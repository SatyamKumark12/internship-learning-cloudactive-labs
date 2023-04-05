type Person = {
    id : number,
    empName : string,
    from : string
}
let peintPerson = (pinfo:Person) : void =>{
    console.log(`Hello Person id is ${pinfo.id} and Perosn name is ${pinfo.empName} and Person From is ${pinfo.from}`);
    
}

const satu : Person = {
    id : 1,
    empName : "Satyam",
    from : "India"
}


peintPerson(satu)