import React, { useState } from "react";
import { calulateWinner } from "../../helper";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  const [board, setBoard] = useState(Array(100).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calulateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(100).fill(null)); // if you want orther player win start game
    //setXIsNext(true);    // if you want set alaway first X
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        ResetGame
      </button>
    </div>
  );
};

export default Game;
