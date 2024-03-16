// 18. Find the numeric digits: Write a program with function name digitCount() to count the 
// total number of numeric digits from the below strings. This function accepts the one 
// argument as a string.
// o Codemind2019
// o Twenty24
// o Bharath1947India

//=>Ans

const digitCount=(str)=>{
    console.log(`\nGiven String is : ${str}`);
    let dcount=0;
    for (const ch of str) {
        if(!isNaN(ch)){
            dcount++;
        }        
    }
    console.log(`Digit count in Given string : ${dcount}`);
}

digitCount(`Codemind2019`);
digitCount(`Twenty24`);
digitCount(`Bharath1947India`);