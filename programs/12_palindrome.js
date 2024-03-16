// 12. Palindrome: If the string is similar from the starting as well as the ending, then we can say 
// that the string is a palindrome.
// Define a function isPalindrome( ) with one argument and call this function by passing 
// below strings one by one. This function must return true if given argument string is 
// palindrome else, false in case not palindrome.
// o “madam”
// o “banana”
// o “radar”
// o “civil”
// o “noon”
// o “stats”

//=>Ans 

const isPalindrome=(str)=>{
    console.log(`\nGiven string '${str}' is palindrome :`);
    const revStr = str.split('').reverse().join('');
    if (str===revStr) {
        return true;
    }
    else{
        return false;
    }
}

let result;
result = isPalindrome('madam');
console.log(result);

result = isPalindrome('banana');
console.log(result);

result = isPalindrome('radar');
console.log(result);

result = isPalindrome('civil');
console.log(result);

result = isPalindrome('noon');
console.log(result);

result = isPalindrome('stats');
console.log(result);
