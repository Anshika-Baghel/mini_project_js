// nodejs is a client side application that allows us to run javascript directly in our terminal.
//console.log("Hello Anshika Baghel this side")
//--------------------------------------------------
// Here I am going to make a simple quiz game.

const prompt=require("prompt-sync")();
console.log("Welcome to the Computer Hardware Quiz!");
let correctAnswer=0;
const totalquestions=3;
let answer1=prompt("What is the brain of the computer?");
let correct_answer="CPU";
if(answer1.toUpperCase()===correct_answer)
{
    console.log("You got it correct!");
    correctAnswer++;
}
else{
    console.log("You got it wrong!");
}
let answer2=prompt("Which is better a 3090ti or 4060?");
let correct_answer2="3090ti";
if(answer2.toLowerCase()===correct_answer2)
{
    console.log("You got it correct!");
    correctAnswer++;
}
else{
    console.log("You got it wrong!");
}
let answer3=prompt("Whst is the recommended amount of RAM in 2024?");
let correct_answer3="16GB";
if(answer3.toUpperCase()===correct_answer3)
{
    console.log("You got it correct!");
    correctAnswer++;
}
else{
    console.log("You got it wrong!");
}
console.log("You got "+correctAnswer+" questions correct!");
//we can also use , in the above console statement to embed a variable value in between the string.

console.log("You scored", Math.round((correctAnswer/totalquestions)*100), "percent!");
