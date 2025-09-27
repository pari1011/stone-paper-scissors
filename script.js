let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userCount=document.querySelector("#user-score")
const compCount=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"]
    let index=Math.floor(Math.random() * 3)
    console.log(index)
    compChoice=options[index]
    return compChoice


}

const drawGame=()=>{
     msg.innerText="Game was draw. Play again."
     msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin)=>{
    if(userWin){
        msg.innerText= "You win!"
        msg.style.backgroundColor="green"
        userScore++
        userCount.innerText=userScore
    }else{
        compScore++
        compCount.innerText=compScore
        msg.innerText="You loose!"
        msg.style.backgroundColor="red"
    }

}
const playGame=( userChoice)=>{
    compChoice= genCompChoice()
    if(userChoice===compChoice){
        drawGame()
    }else{
        let userWin=true
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false: true
    
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false: true
    
        }else{
            userWin=compChoice==="rock"? false: true
    
        }
    showWinner(userWin)

    }
    
   


}


choices.forEach((choice)=>{
   
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id")
        
        
        playGame(userChoice)

    })
})


