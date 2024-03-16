// 17. Count spaces: Write a function spaceCount( ), which should count the total number 
// spaces that is available in the string. This function should accept the one argument and 
// return the total number of spaces.
// o “Revision is the mother of success”
// o “Java Script is the language of internate world"

//=>Ans

const spaceCount=(str)=>{
    console.log(`\nGiven string is : '${str}'`);
    let spCount=0;
    for (const ch of str) {
    if(ch==' ')
    {
        spCount++;
    }        
    }
    return spCount;
}

let result;
result = spaceCount(`Revision is the mother of success`);
console.log(`Total no spaces in given str : ${result}`);

result = spaceCount(`Java Script is the language of internate world`);
console.log(`Total no spaces in given str : ${result}`);