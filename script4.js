const prompt=require("prompt-sync")();
const answer=prompt("Would you like to play(y/n)?");
if(answer.toLowerCase()==="y")
{
    const answer2=prompt("would you like to go to left or right(left/right)");
    if(answer2.toLowerCase()==="left")
    {
        console.log("you go left and fall off a bridge. You lost!");
    }
    else{
        //right
        console.log("Nice you go right and approach a bridge");
        const answer3=prompt("Would you like to cross the bridge or turn around and find another way(cross/turn)?");
        if(answer3.toLowerCase()==="cross")
        {
            console.log("You cross the bridge and reach the end of the game:");
        }
        else{
            console.log("You turn back and trip on a log and hurt your leg.You lost");
        }
    }
}
else{
    console.log("That's too bad!");
}
