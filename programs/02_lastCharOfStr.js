// 2 . WAP to log the last character of the given strings using length property
// o “Hey, my friend, Programming Language”
// o “I am learning logical programs”
// o “Angular”

//=>Ans
 
const findLastChar=(str)=>{
    console.log(`last character of the '${str}' string is : ${str.charAt(str.length-1)}`);
}
findLastChar("Hey, my friend, Programming Language");
findLastChar("I am learning logical programs");
findLastChar("Angular");