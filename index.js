/*
Complete this function using a for loop

You should not use the reverse method and you should not use the reverse method or convert the input to an array.

The function should return a NEW string as the output. 
*/
function reverseString(str) {
    let revString = '';
    for (let i = str.length-1; i > -1; i--) {
        revString += str[i];
    }
    return revString;
}

// Test the function
console.log(reverseString("Hello")); // Output: "olleH"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
