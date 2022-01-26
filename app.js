let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToLetter(parameter) {
    if (parameter == rock_div) return "r";
    if (parameter == paper_div) return "p";
    return "s";
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore.toString();
    computerScore_span.innerHTML = computerScore.toString();
    const smallUserWord = 'user'.fontsize(4).sub();
    const smallComputerWord = 'comp'.fontsize(4).sub();
    result_div.innerHTML = `${convertToWord(user)}(user) beats  ${convertToWord(computer)}(comp) . You win!"`;

}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore.toString();
    userScore_span.innerHTML = userScore.toString();
    const smallUserWord = 'user'.fontsize(4).sub();
    const smallComputerWord = 'comp'.fontsize(4).sub();
    result_div.innerHTML = `${convertToWord(computer)}(comp) beats  ${convertToWord(user)}(user) . You lose!`;
}

function draw(user, computer) {
    computerScore_span.innerHTML = computerScore.toString();
    userScore_span.innerHTML = userScore.toString();
    const smallUserWord = "user".fontsize(4).sub();
    const smallComputerWord = "computer".fontsize(4).sub();
    result_div.innerHTML = `${convertToWord(computer)}(comp)  won't beat  ${convertToWord(user)}(user) . It's a draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (computerChoice + userChoice) {
        case 'pr':
        case 'sp':
        case 'rs':
            win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose();
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw();
            break;  
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main();