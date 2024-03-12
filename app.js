let userWin=true
let userScore=0
let compScore=0
let choices=document.querySelectorAll(".choice")
let scoreBoard=document.querySelector("#msg")
let userScoreBoard=document.querySelector("#user-score")
let compScoreBoard=document.querySelector("#comp-score")
let restart=document.querySelector(".newgame")
//moduler way of program-->brak codes into parts

restart.addEventListener("click",()=>{
    userScore=0
    compScore=0
    userScoreBoard.innerText=userScore
    compScoreBoard.innerText=compScore
    scoreBoard.innerText="Play Your Move"
    scoreBoard.style.backgroundColor=black
})

// const restartGame=()=>{
//     userScore=0
//     compScore=0
// }

//gen random computer choices
const genCompchoice=()=>{
    const options=["rock","paper","scissor"]
    const temp=Math.floor(Math.random()*3)
    return options[temp]
}

const drawGame=()=>{
    console.log("Draw")
    scoreBoard.innerText="Game Draw"
    scoreBoard.style.backgroundColor="black"
}

const showWinner=(userWin)=>{
    if(userWin===true)
    {
        userScore++
        userScoreBoard.innerText=userScore
        console.log("You Win")
        scoreBoard.innerText="You Win"
        scoreBoard.style.backgroundColor="green"
    }
    else{
        compScore++
        compScoreBoard.innerText=compScore
        scoreBoard.innerText="You Lose"
        console.log("You Lose")
        scoreBoard.style.backgroundColor="red"
    }
}

const playgame=(userChoice)=>{
    //console.log(userChoice)
    const comChoice=genCompchoice()
    console.log("computer choice",comChoice)

    //who win
    if (userChoice===comChoice) {
        drawGame();
    }
    else{
        if(userChoice==="rock"){
            userWin=comChoice==="paper"?false:true
        }
        else if (userChoice=="paper") {
            userWin=comChoice==="scissor"?false:true  
        } 
        else{
            userWin=comChoice==="rock"?false:true  
        }
        showWinner(userWin)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        console.log("user clicked",userChoice)
        playgame(userChoice)
    })
})