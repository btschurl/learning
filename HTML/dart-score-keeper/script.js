const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");
const p1ScoreTitle = document.querySelector(".p1-score-title");
const p2ScoreTitle = document.querySelector(".p2-score-title");
const input = document.querySelector(".input");
const btnPlayer1 = document.querySelector(".btnPlayer1");
const btnPlayer2 = document.querySelector(".btnPlayer2");
const btnReset = document.querySelector(".btnReset");

const players = {
    player1: {
        score: 501,
        name: "Player 1",
    },
    player2: {
        score: 501,
        name: "Player 2",
    },
};

function resetPoints() {
    players.player1.score = 501;
    players.player2.score = 501;
    p1Score.textContent = players.player1.score;
    p2Score.textContent = players.player2.score;
    input.value = "";
}

function addPoints(player, event) {
    event.preventDefault();
    let points = parseInt(input.value);
    if (points > 0 && points <= 60) {
        player.score -= points;
        if (player.score < 0) {
            player.score += points;
        }
        if (player.name == players.player1.name) {
            p1Score.textContent = player.score;
        } else {
            p2Score.textContent = player.score;
        }
    }
    input.value = "";
}

function playersNames() {
    const player1Name = prompt("Enter player 1 name");
    const player2Name = prompt("Enter player 2 name");
    players.player1.name = player1Name;
    players.player2.name = player2Name;
    p1ScoreTitle.textContent = players.player1.name;
    p2ScoreTitle.textContent = players.player2.name;
}

function checkScore() {
    if (players.player1.score == 0) {
        alert(`${players.player1.name} wins!`);
        resetPoints();
    } else if (players.player2.score == 0) {
        alert(`${players.player2.name} wins!`);
        resetPoints();
    }
}

playersNames();

btnPlayer1.addEventListener("click", (e) => {
    addPoints(players.player1, e);
    e.preventDefault();
    checkScore()
});
btnPlayer2.addEventListener("click", (e) => {
    addPoints(players.player2, e);
    e.preventDefault();
    checkScore()
});

btnReset.addEventListener("click", resetPoints);