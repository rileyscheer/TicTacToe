const playerTurn = document.querySelector('.turn');
const reset = document.querySelector('.button');
let turn = 0;
let xList = [];
let oList = [];
let winner = '';


const game = (() => {

    const makeBoard = () => {
        const board = document.createElement('div');
        board.classList.add('board')
        for (i = 0; i < 9; i++) {
            const boxes = document.createElement('div');
            boxes.classList.add('boxes')
            board.appendChild(boxes)
            
            if (i === 6 || i === 7 || i === 8) {
                boxes.style.borderRight = 'none';
            } 
            if (i === 2 || i === 5 || i === 8) {
                boxes.style.borderBottom = 'none';
            }
            gameFunction(boxes, i, board)
        }
        const addBoard = document.querySelector('.board');
        document.body.insertBefore(board, addBoard)
        
        const clearBoard = () => {
            board.parentNode.removeChild(board);
            xList = [];
            oList = [];
            winner = '';
            makeBoard()
        }
        
        reset.addEventListener('click', clearBoard)
    } 


    const gameFunction = (boxes, i, board) => {
        // Play Game
        boxes.addEventListener('click', function(){
            if (boxes.textContent === 'X' || boxes.textContent === 'O') {
                boxes.style.color = 'red';
            }   else {
                turn += 1;
                if (turn % 2) {
                    boxes.textContent = 'X';
                    playerTurn.textContent = 'Player 2';
                    xList.push(i)
                }   else {
                    boxes.textContent ='O';
                    playerTurn.textContent = 'Player 1';
                    oList.push(i)
                }
            }
            checkWinner(oList, xList, board)
        })
    }


    const checkWinner = (oList, xList, board) => {
        // Check for winner with x's
        if (xList.includes(0) && xList.includes(1) && xList.includes(2)) {
            winner = 'first';
        }   if (xList.includes(0) && xList.includes(3) && xList.includes(6)) {
            winner = 'first';
        }   if (xList.includes(3) && xList.includes(4) && xList.includes(5)) {
            winner = 'first';
        }   if (xList.includes(6) && xList.includes(7) && xList.includes(8)) {
            winner = 'first';
        }   if (xList.includes(1) && xList.includes(4) && xList.includes(7)) {
            winner = 'first';
        }   if (xList.includes(2) && xList.includes(4) && xList.includes(6)) {
            winner = 'first';
        }   if (xList.includes(2) && xList.includes(5) && xList.includes(8)) {
            winner = 'first';
        }   if (xList.includes(0) && xList.includes(4) && xList.includes(8)) {
            winner = 'first';
        }

        // Check for winner with o's
        if (oList.includes(0) && oList.includes(1) && oList.includes(2)) {
            winner = 'second';
        }   if (oList.includes(0) && oList.includes(3) && oList.includes(6)) {
            winner = 'second';
        }   if (oList.includes(3) && oList.includes(4) && oList.includes(5)) {
            winner = 'second';
        }   if (oList.includes(6) && oList.includes(7) && oList.includes(8)) {
            winner = 'second';
        }   if (oList.includes(1) && oList.includes(4) && oList.includes(7)) {
            winner = 'second';
        }   if (oList.includes(2) && oList.includes(4) && oList.includes(6)) {
            winner = 'second';
        }   if (oList.includes(2) && oList.includes(5) && oList.includes(8)) {
            winner = 'second';
        }   if (oList.includes(0) && oList.includes(4) && oList.includes(8)) {
            winner = 'second';
        }

        if (winner === 'first') {
            timeout = setTimeout(function(){ oneWins(board)}, 1000);
        }     

        if (winner === 'second') {
            timeout = setTimeout(function(){ twoWins(board)}, 1000);
        }     

        const oneWins = (board) => {
            board.textContent = 'Player 1 Wins!'
            board.style.alignContent = 'center';
            board.style.justifyContent = 'center';
            board.style.fontSize = '56px';
            board.style.background = 'green';
            board.style.color = 'white';
        }

        const twoWins = (board) => {
            board.textContent = 'Player 2 Wins!'
            board.style.alignContent = 'center';
            board.style.justifyContent = 'center';
            board.style.fontSize = '56px';
            board.style.background = 'green';
            board.style.color = 'white';
        }
    }

    return {makeBoard};
  })();

game.makeBoard()

