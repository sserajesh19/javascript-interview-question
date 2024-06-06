To count duplicate characters in a string using JavaScript, you can follow these steps:

Create an empty object to store character counts.
Iterate over the string and update the character counts in the object.
Filter out characters that have a count of 1 to get only the duplicates.

///Code 

var str = 'Rajesh Kumar';
function countDuplicateCharacters(str) {
    var count = {};
    var duplicates = {};

    // Iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Ignore spaces
        if (char !== ' ') {
            // Initialize or increment the count for the character
            if (count[char] === undefined) {
                count[char] = 1;
            } else {
                count[char] += 1;
            }
        }
    }

    // Filter out the characters with a count greater than 1
    for (let char in count) {
        if (count[char] > 1) {
            duplicates[char] = count[char];
        }
    }

    return duplicates;
}

// Example usage:

var duplicateCharacters = countDuplicateCharacters(str);
console.log(duplicateCharacters);   
