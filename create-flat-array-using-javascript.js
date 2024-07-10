let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [11, 12]]]];
let copyArr = [];
console.log(arr.flat(3));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]

let newArray = arr;
for (let i = 0; i < newArray.length; i++) {
    console.log(typeof newArray[i]);
    if (typeof newArray[i] === 'object' && newArray[i] !== null) {
        newArray = newArray[i];
        i = -1;  // Set i to -1 because it will be incremented to 0 at the start of the next loop iteration
    } else {
        copyArr.push(newArray[i]);
    }
}
console.log(copyArr);
