// 14. Remove character from the string: Define a function removeChar( ) with two 
// arguments and call this function for below strings. This function must return the string 
// after character removal. Note: arg2 is the char that needs to remove
// o arg1: “Java@Script”, arg2: ‘@’ Expected String: JavaScript
// o arg1: “Softyware”, arg2: ‘y’ Expected String: Software
// o arg1: “Code mind”, arg2: ‘ ’ Expected String: Codemind

//=>Ans

const removeChar=(arg1,arg2)=>{
    console.log(`\nArg1 : '${arg1}' , Arg2 : '${arg2}'`);
    const str1 = arg1.split('');
    const indexToremove = arg1.indexOf(arg2)
    str1.splice(indexToremove,1);
    const result = str1.join('');
   return result;
}

let finalResult = removeChar('Java@script','@');
console.log(`Result is : ${finalResult}`);

finalResult = removeChar('Softyware','y');
console.log(`Result is : ${finalResult}`);

finalResult = removeChar('code mind',' ');
console.log(`Result is : ${finalResult}`);