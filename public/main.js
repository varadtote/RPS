
function Play() {

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
    let ComputerScore = 0;
    let UserScore = 0;

    // while (ComputerScore || UserScore == 5)
    while (ComputerScore < 5 && UserScore < 5 || ComputerScore == 5 && UserScore == 5) {
        let rUserGuess = UserGuess[Math.floor(Math.random() * ComputerGuess.length)];
        var rComputerGuess = ComputerGuess[Math.floor(Math.random() * ComputerGuess.length)];

        // conditions 
        switch (rUserGuess) {
            case rUserGuess = "Rock":
                if (rUserGuess == "Rock" && rComputerGuess == "Rock") {
                    { }
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
    }

    if (UserScore == 5) {
        console.log("User is Winner");
    }
    else {
        console.log("Computer is Winner");
    }
}

Play()