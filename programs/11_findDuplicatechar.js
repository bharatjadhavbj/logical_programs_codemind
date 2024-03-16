// 11. Program to find duplicate characters: Define a function duplicateCharCount( ) with 
// one argument and call this function by passing below strings one by one. This is void 
// function which will print the character and it’s count as shown below
// o “Banana” Expected output => a – 3, n – 2
// o “Apple” Expected output => p – 2
// o “Software Developer” Expected output => o – 2, r – 2, e – 4

//=> Ans

function duplicateCharCount(str) {
    const charCount = {};
    console.log(`\nGiven string is : ${str}`);    
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char in charCount) {
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
        }
    }
}

duplicateCharCount("Banana");
duplicateCharCount("Apple");
duplicateCharCount("Software Developer");
