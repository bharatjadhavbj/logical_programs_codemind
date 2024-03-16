// 16. Swapping String: Write a function swapWords(), which should swap the two words 
// without using third variable. This is a function with no argument and no return value.
// o const wordOne = “Angular”
// o const wordTwo = “React”

//=>Ans

const swapWords=()=>{
 
    let wordOne = "Angular";
    let wordTwo = "React";

    console.log(`Given words are : \nWordOne : '${wordOne}'\nwordTwo : '${wordTwo}'`);

    wordOne = wordOne + wordTwo;
    wordTwo = wordOne.substring(0,wordOne.length-wordTwo.length)
    wordOne = wordOne.substring(wordTwo.length)
    
    console.log(`\nAfter swapping words are : \nWordOne : '${wordOne}'\nwordTwo : '${wordTwo}'`);
}


swapWords();