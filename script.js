const choices= document.querySelectorAll(".sign");
const output= document.getElementById("outputBox");
const userScore = document.getElementById("userscore");
const compScore = document.getElementById("compscore");
let scoreOfUser=0;
let scoreOfComp=0;

const genCompChoice= ()=>{
    const signs=["rock","paper","scissor"];
    const choice= Math.floor(Math.random()*3);
    return signs[choice];
}

const gameDraw=()=>{
    console.log("draw");
}
const playGame= (userChoice)=>{
    const compChoice=genCompChoice();
    console.log("userchoice", userChoice);
    console.log("comp choice=", compChoice);
    let userWin;
    if(userChoice===compChoice) {
        output.innerText="It's a draw";
        output.style.backgroundColor="blue";
        return gameDraw();
    }
    if(userChoice==="rock"){
        userWin= compChoice==="paper" ? false:true;
    }else if(userChoice==="paper"){
        userWin= compChoice==="scissor" ? false:true;
    }else{
        userWin= compChoice==="rock" ? false:true;
    }
    printDecision(userWin);
}

const printDecision = (userWin)=>{
    if(userWin){
        output.innerText="You Won !";
        output.style.backgroundColor="green";
        scoreOfUser+=1;
        userScore.innerText=scoreOfUser;
    }else{
        output.innerText="You lost";
        output.style.backgroundColor="red";
        scoreOfComp+=1;
        compScore.innerText=scoreOfComp;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        //pasing choice for play
        playGame(userChoice);
    })
});
