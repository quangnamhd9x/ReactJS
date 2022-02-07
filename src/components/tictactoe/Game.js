import React, { useReducer, useState } from "react";
import { calulateWinner } from "../../helper";
import Board from "./Board";
import "./GameStyles.css";

const initialState = {
  board: Array(16).fill(null),
  xIsNext: true
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'CLICK': {
      const {board, xIsNext} = state;
      const {index, winner} = action.payload;
      if(winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      console.log(nextState);
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case 'RESET': {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(16).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
}

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calulateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    dispatch({
      type: 'CLICK',
      payload: {
        index,
        winner
      },
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    })
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        ResetGame
      </button>
    </div>
  );
};

export default Game;
