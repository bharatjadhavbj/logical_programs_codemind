// 10. Program to count words: Define a function wordCount( ) with one argument and call 
// this function by passing below strings one by one. This function must return the word
// count that’s been passed as an argument.
// o “JavaScript The language of Internet”
// o “Enhance Your Learning Journey with Exclusive Add-ons”
// o “Beyond frameworks, Beyond Imagination”
// o “I am passionate software developer”

//=>Ans

const wordCount=(str)=>{
    console.log(`\nGiven String is : '${str}'`);
const count=str.split(" ").length;
return count;
}

let result ;

result = wordCount('JavaScript The language of Internet');
console.log(`Word count in given string : ${result}`);

result = wordCount('Enhance Your Learning Journey with Exclusive Add-ons');
console.log(`Word count in given string : ${result}`);

result = wordCount('Beyond frameworks, Beyond Imagination');
console.log(`Word count in given string : ${result}`);

result = wordCount('I am passionate software developer');
console.log(`Word count in given string : ${result}`);
