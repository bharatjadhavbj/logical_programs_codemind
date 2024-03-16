// 13. Anagram: An anagram of a string is another string that contains the same characters, only the 
// order of characters can be different.
// Define a function isAnagram ( ) with two argument and call this function by passing 
// below strings. This function must return true if given strings is anagram else, false in 
// case not anagram.
// o “listen”, “silent”
// o “heart”, “earth”
// o “debit card”, “credit card”

//=>Ans

const isAnagram=(str1,str2)=>{
    console.log(`\n'${str1}' , '${str2}' isAnagram : `);
    const updatedStr1 = str1.split("").sort().join('');
    const updatedStr2 = str2.split("").sort().join('');
    return updatedStr1===updatedStr2?true:false;
}

let result;
result = isAnagram('listen','silent');
console.log(result);

result = isAnagram('heart','earth');
console.log(result);

result = isAnagram('debit card','credit card');
console.log(result);

