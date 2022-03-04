const playerTurn = document.querySelector('.turn');
let turn = 0;

const game = (() => {
    const makeBoard = () => {
        const board = document.createElement('div');
        board.classList.add('board')
        makeBoxes(board)
    }

    const makeBoxes = (board) => {
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

            // Play Game
            boxes.addEventListener('click', function(){
                turn += 1;
                if (boxes.textContent === 'X' || boxes.textContent === 'O') {
                    boxes.style.color = 'red';
                }   else {
                    if (turn % 2) {
                        boxes.textContent = 'X';
                        playerTurn.textContent = 'Player 2';
                    }   else {
                        boxes.textContent ='O';
                        playerTurn.textContent = 'Player 1';
                    }
                }
            })


        }
        const addBoard = document.querySelector('.board');
        document.body.insertBefore(board, addBoard)
    }   

    return {makeBoard};
  })();



game.makeBoard()

