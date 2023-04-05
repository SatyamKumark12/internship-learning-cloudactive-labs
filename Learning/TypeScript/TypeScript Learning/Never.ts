function apiError(meg , code):never{
    throw {meg , code}
}

console.log(apiError("This is a Error" , 500));
