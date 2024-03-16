// 15. Reverse the words from given string: Define a function reverseWord( ) with one 
// argument and call this function by passing below strings one by one. 
// This function must return the string with reverse words.
// o Input String: "Arise! Awake! and stop not until the goal is reached";
//  Expected output: !esirA !ekawA dna pots ton litnu eht laog si dehcaer
// o Input String: “Learn with us, Job with us”
//  Expected output: nraeL htiw su, boJ htiw su

//=>Ans 

const reverseWord=(str)=>{
    console.log(`\nGiven String is : ${str}`);
    const splitedStr = str.split(" ");
    const finalArray = [];
    for (const word of splitedStr) {
        const reversedWord = word.split('').reverse().join('');
        finalArray.push(reversedWord)   
    }
    const finalResult= finalArray.join(' ');
    return finalResult;
}

let result = reverseWord('Arise! Awake! and stop not until the goal is reached');
console.log(`Reversed Str is : ${result}`);

result = reverseWord('Learn with us, Job with us');
console.log(`Reversed Str is : ${result}`);
 


