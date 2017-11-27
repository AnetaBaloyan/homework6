// Diamond with recursion

const diamond = function(n, char) {
    if(n%2===0){
      n+=1;
    };
     const printLine = function(char, n) {
        if(n===0) {
        return'';
        }
        return (char + printLine(char, n-1));
    };
   
   const checkAndPrint = function(i) {
       if(i<=n){
            if(i>((n+1)/2)) {
                console.log(printLine(" ", i - (n+1)/2) + printLine(char, (n-i+1)*2-1)); 
            } else {
                console.log(printLine(" ", (n+1)/2 - i) + printLine(char, i*2-1));
            };
            checkAndPrint(i+1);
        }
        
        return;
   };
   
   checkAndPrint(1);
};

diamond(4, "@");


// Diamond with for() loop

const diamond = function(n, char) {
    if(n%2===0){
      n+=1;
    };
    const printLine = function(char, n) {
        let str = '';
        for(let i=1; i<=n; i++) {
            str+= char;
        }
        return str;
        };
   
    for(let i=1; i<=n; i++) {
        if(i>((n+1)/2)) {
           console.log(printLine(" ", i - (n+1)/2) + printLine(char, (n-i+1)*2-1)); 
        } else
        console.log(printLine(" ", (n+1)/2 - i) + printLine(char, i*2-1));
    }
};

diamond(4, "@");

//Tic-Tac-Toe Simulation

gameInfo = {
    board: [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
    ],
    isX: true,
    playeresMove: true
};

const nextMove = function(board, isX) {
    const rand = function(num) {
	return Math.floor(Math.random() * num) - 1;
    };
    const i = rand(4);
    const j = rand(4);
    return loc = [i, j];
    
};

const findWinner = function(board) {
    
    for(let i=0; i<=2; i++) {
        if(board[i][0] !== ' ' && board[i][0] === board[i][1] 
                && board[i][1] === board[i][2]) {
            return {
                winner: board[i][0],
                winningLocations: [[i, 0], [i, 1], [i, 2]]
            }; 
        }
    };
    
    for(let j=0; j<=2; j++) {
        if(board[0][j] !== ' ' && board[0][j] === board[1][j] 
                && board[1][j] === board[2][j]) {
            return {
                winner: board[0][j],
                winningLocations: [[0, j], [1, j], [2, j]]
            }; 
        }
    };
    
    if(board[0][0] !== ' ' && board[0][0] === board[1][1] 
            && board[2][2] === board[1][1]) {
        return {
            winner: board[1][1],
            winningLocations: [[0, 0], [1, 1], [2, 2]]
        }; 
    }
    if(board[0][2] !== ' ' && board[0][2] === board[1][1] 
            && board[1][1] === board[2][0]) {
        return {
            winner: board[1][1],
            winningLocations: [[0, 2], [1, 1], [2, 0]]
        }; 
    }
    
    let spaces = 0;
    for(let i=0; i<=2; i++) {
        for(let j=0; j<=2; j++) {
            if(board[i][j] === " ") {
                spaces++;
            }
        }; 
    };
    if(spaces === 0) {
        return {
            winner: 'none' 
        };
    };
};



const makeMove = function(board, loc, isX) {
    
    const i=loc[0];
    const j=loc[1];
    if(i>=0 && j>=0 && i<=2 && j<=2 && board[i][j]=== " ") {
        if(isX) {
            board[i][j]="X";
            //findWinner(board);
            document.getElementById(JSON.stringify(i)+
                    JSON.stringify(j)).innerHTML = "X";
            gameInfo.isX=!isX;
            return 0;
        } else {
            board[i][j]="O";
            //findWinner(board);
            document.getElementById(JSON.stringify(i)+
                    JSON.stringify(j)).innerHTML = "O";
            gameInfo.isX=!isX;
            return 0;
        }
    } else {
        makeMove(board, nextMove(gameInfo.board, gameInfo.isX), isX);
        return -1;
    }
};



const gameLoop = function() {
    
    const check = function() {
        if(typeof(winnerInfo) !== 'undefined') {
            if(winnerInfo.winner === 'none') {
                window.alert("Tie!");
                location.reload();
            } else if (winnerInfo.winner === 'X') {
                window.alert( "X won!!!");
                location.reload();
            } else if (winnerInfo.winner === 'O') {
                window.alert("O won!!!");
                location.reload();
            };
        }
    };
    
    let winnerInfo = findWinner(gameInfo.board);
    
    
    //auto-move
    
    if(typeof(winnerInfo) === 'undefined') {
        makeMove(gameInfo.board, nextMove(gameInfo.board, gameInfo.isX),
        gameInfo.isX);
       
        setTimeout(gameLoop, 100);

    } else {
        check();
    };
};

gameLoop();







//Not intelligent Tic-Tac-Toe

gameInfo = {
    board: [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
    ],
    isX: true,
    playeresMove: true
};
const nextMove = function(board, isX) {
    const rand = function(num) {
	return Math.floor(Math.random() * num) - 1;
    };
    const i = rand(4);
    const j = rand(4);
    return loc = [i, j];
    
};

const findWinner = function(board) {
    
    for(let i=0; i<=2; i++) {
        if(board[i][0] !== ' ' && board[i][0] === board[i][1] 
                && board[i][1] === board[i][2]) {
            return {
                winner: board[i][0],
                winningLocations: [[i, 0], [i, 1], [i, 2]]
            }; 
        }
    };
    
    for(let j=0; j<=2; j++) {
        if(board[0][j] !== ' ' && board[0][j] === board[1][j] 
                && board[1][j] === board[2][j]) {
            return {
                winner: board[0][j],
                winningLocations: [[0, j], [1, j], [2, j]]
            }; 
        }
    };
    
    if(board[0][0] !== ' ' && board[0][0] === board[1][1] 
            && board[2][2] === board[1][1]) {
        return {
            winner: board[1][1],
            winningLocations: [[0, 0], [1, 1], [2, 2]]
        }; 
    }
    if(board[0][2] !== ' ' && board[0][2] === board[1][1] 
            && board[1][1] === board[2][0]) {
        return {
            winner: board[1][1],
            winningLocations: [[0, 2], [1, 1], [2, 0]]
        }; 
    }
    
    let spaces = 0;
    for(let i=0; i<=2; i++) {
        for(let j=0; j<=2; j++) {
            if(board[i][j] === " ") {
                spaces++;
            }
        }; 
    };
    if(spaces === 0) {
        return {
            winner: 'none' 
        };
    };
};



const makeMove = function(board, loc, isX) {
    
    const i=loc[0];
    const j=loc[1];
    if(board[i][j]=== " " && i>=0 && j>=0 && i<=2 && j<=2) {
        if(isX) {
            board[i][j]="X";
            //findWinner(board);
            document.getElementById(JSON.stringify(i)+
                    JSON.stringify(j)).innerHTML = "X";
            gameInfo.isX=!isX;
            return 0;
        } else {
            board[i][j]="O";
            //findWinner(board);
            document.getElementById(JSON.stringify(i)+
                    JSON.stringify(j)).innerHTML = "O";
            gameInfo.isX=!isX;
            return 0;
        }
    } else {
        makeMove(board, nextMove(gameInfo.board, gameInfo.isX), isX);
        return -1;
    }
};



const gameLoop = function(tile) {
    
    const check = function(winnerInfo) {
        if(typeof(winnerInfo) !== 'undefined') {
            if(winnerInfo.winner === 'none') {
                window.alert("Tie!");
                location.reload();
            } else if (winnerInfo.winner === 'X') {
                window.alert( "X won!!!");
                location.reload();
            } else if (winnerInfo.winner === 'O') {
                window.alert("O won!!!");
                location.reload();
            };
        }
    };
    
    const drawOnBoard = function(isX) {
        if(isX) {
        tile.target.innerHTML = "X";
        } else 
            tile.target.innerHTML = "O";
    };
    
    let winnerInfo = findWinner(gameInfo.board);
    
    const autoMoveWinnerInfo = findWinner(gameInfo.board);
    
    if(gameInfo.board[tile.target.id[0]][tile.target.id[1]] === ' ') {
        if(gameInfo.isX) {
            gameInfo.board[tile.target.id[0]][tile.target.id[1]] = 'X';
            drawOnBoard(gameInfo.isX);
            gameInfo.isX = !gameInfo.isX;
            winnerInfo = findWinner(gameInfo.board);
            check(winnerInfo);
        } else {
            gameInfo.board[tile.target.id[0]][tile.target.id[1]] = 'O';
            drawOnBoard(gameInfo.isX);
            gameInfo.isX = !gameInfo.isX;
            winnerInfo = findWinner(gameInfo.board);
            check(winnerInfo);
        }
        
    };
    
    //auto-move
    
    if(typeof(winnerInfo) === 'undefined') {
        makeMove(gameInfo.board, nextMove(gameInfo.board, gameInfo.isX),
        gameInfo.isX);
        
        //console.log(gameInfo.board);
        
        winnerInfo = findWinner(gameInfo.board);
        
        check(winnerInfo);

    } else {
        check(autoMoveWinnerInfo);
    };
};


const cells = document.querySelectorAll('.tile');

for(let i = 0; i< cells.length; i++){
    cells[i].addEventListener('click', gameLoop, false);
}



