import React, {useState, useEffect} from 'react'
import './MegaGame.css'
import Game from './Game'
import Tile from './Tile'
const MegaGame = () => {


  const[turn, setTurn] = useState('X');
  const[megaBoard, setMegaBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [gameKey, setGameKey] = useState(0);
  const [activeGame, setActiveGame] = useState(null);


  const resetGame = () => {
    setMegaBoard(Array(9).fill(null));
    setTurn('X');
    setWinner(null);
    setGameKey(prev => prev + 1);
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
      console.log(board[a]);
        return board[a];
      
    }
  }

  return null;
  };


  
    useEffect(() => {
    const victor = checkWinner(megaBoard);

    if (victor) {
        setWinner(victor);
    }
    }, [megaBoard]);


  return (
    <>
    <div className="mega_game">
                {megaBoard.map((_, index) => (
                   <Game key={`${gameKey}-${index}`} turn={turn} setTurn={setTurn} game_num={index} megaBoard={megaBoard} setMegaBoard={setMegaBoard} activeGame={activeGame} setActiveGame={setActiveGame}/>
                ))}
            </div>
    <button onClick={resetGame}>Reset Game</button>
    </>
  )
}

export default MegaGame