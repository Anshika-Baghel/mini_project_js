const prompt=require("prompt-sync")();
let wins=0;
let losses=0;
let ties=0;
while(true){
const playerChoice=prompt("Enter rock,paper,scissors or q(to quit):");
if(playerChoice.toLowerCase()==="q")
{
    break;
}

if(playerChoice!=="rock"&&playerChoice!=="paper"&&playerChoice!=="scissors")
{
    console.log("Please enter a valid playerChoice");
    continue;
}
const choices=["rock","paper","scissors"];
const randomIndex=Math.round(Math.random()*2);
const computerChoice=choices[randomIndex];

console.log("The computer chose:",computerChoice);
//console.log(computerChoice);
if(computerChoice===playerChoice)
{
    console.log("Draw!");
    ties++;
}
else if((playerChoice==="paper"&&computerChoice==="rock")||(playerChoice==="scissors"&&computerChoice==="paper")
||(playerChoice==="rock"&&computerChoice==="scissors"))
{
    console.log("Won");
    wins++;
}
else{
    console.log("Lost!");
    losses++;
}
}
console.log("Wins:",wins);
console.log("Losses:",losses);
console.log("Draw:",ties);