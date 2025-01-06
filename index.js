const choices=["rock","paper","scissor"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let computerScore=0;
let playerScore=0;
function playGame(playerChoice)
{
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(computerChoice===playerChoice)
    {
        result="ITS TIE!";
    }
    else{

        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissore")?"YOU WIN!": "YOU LOSS!";
                break;
            case "paper":
                result=(computerChoice==="rock")?"YOU WIN!": "YOU LOSS!";
                break;
            case "scissor":
                result=(computerChoice==="paper")?"YOU WIN!": "YOU LOSS!";
                break;        

        }
    }

    playerDisplay.textContent=`player:${playerChoice}`;
    computerDisplay.textContent=`computer:${computerChoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "YOU LOSS!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break;  
    }
}