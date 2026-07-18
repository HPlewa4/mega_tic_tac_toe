import React, {useState, useEffect} from 'react'
import './MegaGame.css'
import ResetButton from './ResetButton'
import Game from './Game'
import Tile from './Tile'
import Winner from './Winner'
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
    setActiveGame(null);
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
      setWinner(board[a]);
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
    <h1>Mega Tic Tac Toe</h1>
    <div className="mega_game">
                {megaBoard.map((_, index) => (
                   <Game key={`${gameKey}-${index}`} turn={turn} setTurn={setTurn} game_num={index} megaBoard={megaBoard} setMegaBoard={setMegaBoard} activeGame={activeGame} setActiveGame={setActiveGame}/>
                ))}
            </div>
    <Winner winner={winner} />
    <ResetButton resetGame={resetGame} />
    
    </>
  )
}

export default MegaGame