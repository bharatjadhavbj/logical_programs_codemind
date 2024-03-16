// 20. Find longest word: Write a function logestWord( ) with one argument as a string and 
// this function must return the longest word from the given argument string.
//  Invoke the function longestWord( ) with below values by passing one by one value
// o “Learn with us, Job with us”
// o “Fail. Learn. Grow. Evolve. Succeed"
// o “Write Debug and Execute”
// o “Frontend Developer – Complete Web Development”

//=>Ans

const longestWord=(str)=>{
    console.log(`\nGiven String is : '${str}'`);
    let wordArray=str.split(' ');
    let maxLength =0;
    let longWord ='';
    for (const word of wordArray) {   
        const simpleWord=word.replace(/[.,!?]/g, "")
        if (simpleWord.length>maxLength) {
        maxLength=simpleWord.length;
        longWord =simpleWord;
       }
    }
    return longWord;
}

let result=longestWord('Learn.. with us, Job with us');
console.log(`Longest Word is : ${result}`);

result=longestWord('Fail. Learn. Grow. Evolve. Succeed');
console.log(`Longest Word is : ${result}`);

result=longestWord('Write Debug and Execute');
console.log(`Longest Word is : ${result}`);

result=longestWord('Frontend Developer - Complete Web Development');
console.log(`Longest Word is : ${result}`);