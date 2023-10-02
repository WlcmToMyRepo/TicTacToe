const buttons = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const player = document.querySelector(".player");
let xWinConditions = [false];
let oWinConditions = [false];

let board = [
                null,null,null,
                null,null,null,
                null,null,null,
            ]

resetBtn.addEventListener('click',resetGame)

console.log(typeof buttons)



// function to reset the game
function resetGame() {
    buttons.forEach(btn => {
        btn.textContent = "";
        btn.disabled = false;
    })
    player.textContent = 'X TURN';
    board = [
            null,null,null,
            null,null,null,
            null,null,null,
        ]
}


buttons.forEach((btn,index) => {
    btn.addEventListener('click',() => {
        btn.textContent = player.textContent.slice(0,1);
        board[index] = player.textContent.slice(0,1);
        btn.disabled = true;
        if (player.textContent.slice(0,1) === 'X') {
            player.textContent = 'O TURN';
            btn.style.color = "aqua";
        }
        else {
            player.textContent = 'X TURN';
            btn.style.color = "yellow";
        }
        checkWinner();
    });
});



function checkWinner() {
    console.log("check winner called");
/*

take an array of 9 elements indicating poisitions in board

0 1 2 
3 4 5 
6 7 8 

winning conditions 

rows are equal
0 == 1 == 2
3 == 4 == 5
6 == 7 == 8

columns are equal
0 == 3 == 6
1 == 4 == 7
2 == 5 == 8

diagonals equal
0 == 4 == 8
2 == 4 == 6


*/

// take an array of winning condition 
// if (board[0] == 'X') {
//     console.log("x wins");
// }


    console.log(typeof board[0])
    xWinConditions = [
        board[0] === 'X' && board[1] === 'X' && board[2] === 'X',
        board[3] === 'X' && board[4] === 'X' && board[5] === 'X',
        board[6] === 'X' && board[7] === 'X' && board[8] === 'X',
        board[0] === 'X' && board[3] === 'X' && board[6] === 'X',
        board[1] === 'X' && board[4] === 'X' && board[7] === 'X',
        board[2] === 'X' && board[5] === 'X' && board[8] === 'X',
        board[0] === 'X' && board[4] === 'X' && board[8] === 'X',
        board[2] === 'X' && board[4] === 'X' && board[6] === 'X'
    ];

    oWinConditions = [
        board[0] === 'O' &&board[1] === 'O' && board[2] === 'O',
        board[3] === 'O' &&board[4] === 'O' && board[5] === 'O',
        board[6] === 'O' &&board[7] === 'O' && board[8] === 'O',
        board[0] === 'O' &&board[3] === 'O' && board[6] === 'O',
        board[1] === 'O' &&board[4] === 'O' && board[7] === 'O',
        board[2] === 'O' &&board[5] === 'O' && board[8] === 'O',
        board[0] === 'O' &&board[4] === 'O' && board[8] === 'O',
        board[2] === 'O' &&board[4] === 'O' && board[6] === 'O'
    ];

    if(xWinConditions.some(condition => condition == true)){
        showBanner("X wins the game");
        resetGame();
    } else if(oWinConditions.some(condition => condition == true)) {
        showBanner("O wins the game");
        resetGame();
    } else {
        if(!board.some(ele=> ele === null)) {
            showBanner("Match Drawn");
            resetGame();
        }
    }
}

let banner = document.querySelector(".result-banner");

function showBanner(text) {
    banner.querySelector(".msg").textContent = text;
    banner.style.position = "absolute";
    banner.style.display = "flex";
}

function closeBanner() {
    banner.style.position = "none";
    banner.style.display = "none";
}