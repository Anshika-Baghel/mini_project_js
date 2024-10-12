//project 2 -> Random Number Guesser
const prompt=require("prompt-sync")();
const target=Math.round(Math.random()*100);
console.log(target);
let guesses =0;

// hello->NaN

while(true)
{
    const guess=Number(prompt("Guess the number (0-100): "));
    console.log(guess);


    if(guess>target)
    {
    console.log("Your guess is too high.");
    }
    else if(guess<target){
    console.log("Your guess is too low.");
    }
    else{
    console.log("Your guessed it");
    break;
    }
}