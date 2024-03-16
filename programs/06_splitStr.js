// 6. How do you split a string into an array of substrings with comma separator?
// o "apple,orange,banana";
// o “Stew,Bill,Jenny,Elon”;
// o “Rupees,Dollar,Krone,Pound,Dinar”

//=>Ans  

const splitString=(str)=>{
    const arrayStr = str.split(",");
    console.log(`\nGiven string is : ${str}`);
    console.log(`Splited Array is : [${arrayStr}]`);
}

splitString("apple,orange,banana");
splitString("Stew,Bill,Jenny,Elon");
splitString("Rupees,Dollar,Krone,Pound,Dinar");