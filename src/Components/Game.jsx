import React, {useState} from 'react'
import './Game.css'
import Tile from './Tile'
const Game = ({turn, setTurn, game_num, megaBoard, setMegaBoard}) => {

  const[board, setBoard] = useState(Array(9).fill(null));
  const[winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if(board[index] !== null) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    
    const victor = checkWinner(newBoard);
    if (victor) {
      setWinner(victor);
      setMegaBoard(prevMegaBoard => {
        const newMegaBoard = [...prevMegaBoard];
        newMegaBoard[game_num] = victor;
        return newMegaBoard;
      });
      
    }
    setTurn(turn === 'X' ? 'O' : 'X');
    
  };
  const checkWinner = (board) => {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const [a, b, c] of combinations) {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a];
    }
  }

  return null;
  };

  return (
    <>
        {
            winner ? ( <Tile className="megaTile" value={winner} onClick={() => {}} /> 
        ):(
            <div className="game">
                {board.map((_, index) => (
                    <Tile key={index} value={board[index]} onClick={() => handleClick(index)}/>
                ))}
            </div>
        )}
        
        
    </>
  )
}

export default Game