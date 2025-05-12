const playersDisplay = document.getElementById('playersDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const choices = ["rock", "paper", "scissors"];

function playGame(playersChoice) {
            const computersChoice = choices[Math.floor(Math.random() * 3)];
            let result = "";

            if (playersChoice === computersChoice) {
                result = "IT'S A TIE";
            } else {
                switch(playersChoice) {
                    case 'rock':
                        result = computersChoice === "scissors" ? "YOU WIN" : "YOU LOSE";
                        break;
                    case 'paper':
                        result = computersChoice === "rock" ? "YOU WIN" : "YOU LOSE";
                        break;
                    case 'scissors':
                        result = computersChoice === "paper" ? "YOU WIN" : "YOU LOSE";
                        break;
                }
            }

            playersDisplay.textContent = `PLAYER: ${playersChoice.toUpperCase()}`;
            computerDisplay.textContent = `COMPUTER: ${computersChoice.toUpperCase()}`;
            resultDisplay.textContent = result;
        }