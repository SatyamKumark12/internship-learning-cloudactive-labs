"use strict";
function apiError(meg, code) {
    throw { meg, code };
}
console.log(apiError("This is a Error", 500));
