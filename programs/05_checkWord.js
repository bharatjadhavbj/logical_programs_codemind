// 5. WAP to check whether given strings contains word ‘UI’ or not?
// o “React - UI Developer”
// o “UI Developer”
// o “Front end and backend technologies”
// o “MEAN or MERN – UI Developer”

//=>Ans

const checkWord=(str1)=>{
   const str = str1.toUpperCase();
    if(str.includes('UI')){
        console.log(`\nGiven string : '${str1}'`);
        console.log(`=> Yes the given strings contains word 'UI'`);
    }else{
        console.log(`\nGiven string : '${str1}'`);
        console.log(`=> No given strings doesn't contains word 'UI'`);
    }
}

checkWord('React - UI Developer');
checkWord('UI Developer');
checkWord('Front end and backend technologies');
checkWord('MEAN or MERN – UI Developer');

