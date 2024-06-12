/*Convert this code to promise*/

function divisionAPI (number, divider, successCallback, errorCallback) {
    if (divider == 0) {
        return errorCallback( new Error("Division by zero") )
    }
    successCallback( number / divider )
}
/* converted code is like */

function divisionAPI(number, divider) {
    return new Promise((resolve, reject) => {
        if (divider == 0) {
            reject(new Error("Division by zero"));
        } else {
            resolve(number / divider);
        }
    });
}

// Example usage:
divisionAPI(10, 2)
    .then(result => {
        console.log("Result:", result); // Output: Result: 5
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

divisionAPI(10, 0)
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.error("Error:", error.message); // Output: Error: Division by zero
    });
