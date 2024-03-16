// 9. Program to count vowels: Define a function vowelsCount( ) with one argument and 
// call this function by passing below strings one by one. This function must return the 
// vowels count that’s been passed as an argument.
// o “JavaScript”
// o “HTML and CSS”
// o “Language Of Internet”
// o “I am UI Developer”
// o “Do or Die”
//  Note: While counting vowel, consider the lower & upper-case vowels as well

//=>Ans

const vowelsCount=(str)=>{
console.log(`\nGiven String is : ${str}`);
// const updatedStr = str.toUpperCase();
let count = 0;
for(let ch=0; ch<str.length;ch++){
//  if(updatedStr.charAt(ch)=='A'||updatedStr.charAt(ch)=='E'||updatedStr.charAt(ch)=='I'||updatedStr.charAt(ch)=='O'||updatedStr.charAt(ch)=='U'){
   if(/[aeiouAEIOU]/.test(str.charAt(ch))){ 
   count++;
 }
}
return count;
}

let result 
result= vowelsCount('JavaScript');
console.log(`Vowels in Given String : ${result}`); 

result= vowelsCount('HTML and CSS');
console.log(`Vowels in Given String : ${result}`); 

result= vowelsCount('Language Of Internet');
console.log(`Vowels in Given String : ${result}`); 

result= vowelsCount('I am UI Developer');
console.log(`Vowels in Given String : ${result}`);

result= vowelsCount('Do or Die');
console.log(`Vowels in Given String : ${result}`);