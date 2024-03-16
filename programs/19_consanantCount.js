// 19. Program to count consonants: Define a function consonantsCount( ) with one 
// argument and call this function by passing below strings one by one. This function must 
// return the consonants count that’s been passed as an argument.
// o “JavaScript”
// o “HTML and CSS”
// o “Language Of Internet”
// o “I am UI Developer”
// o “Do or Die”
//  Note: Please consider the lower & upper-case consonants as well

//=>Ans

const consonantsCount=(str)=>{
    let consoCount = 0;
    for (const ch of str) {
        if(!/[aeiouAEIOU]/.test(ch)&& ch!=" "){
            consoCount++;
        }
    }
    return consoCount;
}

let result = consonantsCount(`JavaScript`);
console.log(`Consonants in 'JavaScript' : ${result}`);

result = consonantsCount(`HTML and CSS`);
console.log(`Consonants in 'HTML and CSS' : ${result}`);

result = consonantsCount(`Language Of Internet`);
console.log(`Consonants in 'Language Of Internet' : ${result}`);

result = consonantsCount(`I am UI Developer`);
console.log(`Consonants in 'I am UI Developer' : ${result}`);

result = consonantsCount(`Do or Die`);
console.log(`Consonants in 'Do or Die' : ${result}`);