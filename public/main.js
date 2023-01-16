// Main Function Logic
let ComputerGuess = [
    "Rock",
    "Paper",
    "Scissor"
]

let UserGuess = [
    "Rock",
    "Paper",
    "Scissor"
]
// let rUserGuess = UserGuess[Math.floor(Math.random() * ComputerGuess.length)];
let rComputerGuess = 0;
let rUserGuess = 0;

let ComputerScore = 0;
let UserScore = 0;

// let result = "";
let result = document.querySelector('#result');
let resultsDiv = document.querySelector('#results');
function Play() {
    // while (ComputerScore || UserScore == 5)
    // while (ComputerScore < 5 && UserScore < 5 || ComputerScore == 5 && UserScore == 5) {


    // conditions 
    switch (rUserGuess) {
        case rUserGuess = "Rock":
            if (rUserGuess == "Rock" && rComputerGuess == "Rock") {
                // { }
                // result = "";
                // result.innerHTML = "User -> Rock Computer -> Rock";
                result =document.getElementById('#result').innerHTML = "User -> Rock Computer -> Rock";
            }
            else if (rUserGuess == "Rock" && rComputerGuess == "Scissor") {
                UserScore += 1;

            }
            else if (rUserGuess == "Rock" && rComputerGuess == "Paper") {
                ComputerScore += 1;
            }

        case rUserGuess = "Paper":
            if (rUserGuess == "Paper" && rComputerGuess == "Rock") {
                UserScore += 1;
            }
            else if (rUserGuess == "Paper" && rComputerGuess == "Scissor") {
                ComputerScore += 1;
            }
            else if (rUserGuess == "Paper" && rComputerGuess == "Paper") {
                { }
            }

        case rUserGuess = "Scissor":
            if (rUserGuess == "Scissor" && rComputerGuess == "Rock") {
                ComputerScore += 1;
            }
            else if (rUserGuess == "Scissor" && rComputerGuess == "Scissor") {
                { }
            }
            else if (rUserGuess == "Scissor" && rComputerGuess == "Paper") {
                UserScore += 1;
            }
    }
    console.log(rUserGuess, rComputerGuess);
    console.log(`User -> ${UserScore} , Computer -> ${ComputerScore}`);
    //}


}
function ScoreUpdate() {
    ComputerScore = document.querySelector('#compSc').innerHTML = ComputerScore;
    console.log(ComputerScore)
    UserScore = document.querySelector('#userSc').innerHTML = UserScore;
    // UserScore.document.querySelector('user-score');
}
function CheckWinner() {
    if (UserScore == 5) {
        console.log("User is Winner");
        alert('You are Winner');
        UserScore = document.querySelector('#userSc').innerHTML = 0;
        ComputerScore = document.querySelector('#compSc').innerHTML = 0;
    }
    else if (ComputerScore == 5) {
        console.log("Computer is Winner");
        alert('Computer is Winner');
        UserScore = document.querySelector('#userSc').innerHTML = 0;
        ComputerScore = document.querySelector('#compSc').innerHTML = 0;
    }
}

function ComputerGuessEffects() {

}

// Play()

// Button Event Listners
let stone = document.querySelector('.stone');
stone.addEventListener('click', () => {
    rUserGuess = UserGuess[0];
    rComputerGuess = ComputerGuess[Math.floor(Math.random() * ComputerGuess.length)];
    Play();
    ScoreUpdate();
    CheckWinner();
    // alert("Hello");
})
let paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    rUserGuess = UserGuess[1];
    rComputerGuess = ComputerGuess[Math.floor(Math.random() * ComputerGuess.length)];
    Play();
    ScoreUpdate();
    CheckWinner();
})
let scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
    rUserGuess = UserGuess[2];
    rComputerGuess = ComputerGuess[Math.floor(Math.random() * ComputerGuess.length)];
    Play();
    ScoreUpdate();
    CheckWinner();
    // alert('H');
})



// Logic To Hover 