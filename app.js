let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore
        msg.style.backgroundColor = 'green'
        msg.innerText = `you win your ${userChoice} beats ${compChoice}`

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = 'red';
        msg.innerText = `you lost! ${compChoice} beats your ${userChoice}`

    }
}

const genCompChoice = () => {
    const options = ["Rock", "Papper", "Scissors"];
    const randidx = Math.floor(Math.random() * 3)
    return options[randidx];
}
const drawGame = () => {
    console.log("game is draw");
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = '#081b31'
}

const playGame = (userChoice) => {
    console.log('user choice', userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //SCIssors,papper
            userWin = compChoice === "Papper" ? false : true
        } else if (userChoice === "Papper") {
            //rock,scissors
            userWin = compChoice === "Scissors" ? false : true
        } else {
            //rock,papper
            userWin = compChoice === "Rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})

