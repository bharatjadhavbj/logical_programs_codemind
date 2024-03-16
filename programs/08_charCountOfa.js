// 8. Program to count character ‘a’: Define a function charCount( ) with one argument and 
// call this function by passing below strings one by one. This function must return the 
// char count.
// o “JavaScript”
// o “Do or Die”
// o “Learn with us, Job with us”
// o “Empowering Dreams, Guaranteeing Futures”
// o “Anny, My favorite fruit is Apple”

//=>Ans

const charCount=(str)=>{
    const str1 =str.toLowerCase();
    console.log(`\nGiven String is : '${str}'`);
    let count=0;
    for(let ch=0; ch<str1.length; ch++){
        if(str1.charAt(ch)=='a'){
            count++;
        }
    }
    return count;
}

let result;
result = charCount('JavaScript');
console.log(`count of character ‘a’ in Given string: ${result}`);

result = charCount('Do or Die');
console.log(`count of character ‘a’ in Given string: ${result}`); 

result = charCount('Learn with us, Job with us');
console.log(`count of character ‘a’ in Given string: ${result}`); 

result = charCount('Empowering Dreams, Guaranteeing Futures');
console.log(`count of character ‘a’ in Given string: ${result}`); 

result = charCount('Anny, My favorite fruit is Apple');
console.log(`count of character ‘a’ in Given string: ${result}`); 