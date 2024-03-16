// 7. Reverse String: Recommended to use define the functions
// o Reverse the string using any existing methods that you know
// § "Software";
// § “UI Developer”;
// o Reverse the string without using predefined methods.
// § "Web Developer";
// § “Billion Dollar”;
// § “Java”

//=>Ans
// 1=> using PreDefined methods 
const reversedStrPre=(str)=>{
    console.log(`\nGiven String is : ${str}`);
    const reverseStr = str.split('').reverse().join("");
    console.log(`Reversed String is using predefined Method : ${reverseStr}`);
}

reversedStrPre("Software");
reversedStrPre("UI Developer");

const reversedStrWithoutPre=(str1)=>{
console.log(`\nGiven String is : ${str1}`);
let reversedStr1='';
for( let i=str1.length-1;i>=0;i--){
    reversedStr1+=str1.charAt(i);
}
console.log(`Reversed String is without using predefined Method : ${reversedStr1}`);
}

reversedStrWithoutPre("Web Developer");
reversedStrWithoutPre("Billion Dollar");
reversedStrWithoutPre("Java");
