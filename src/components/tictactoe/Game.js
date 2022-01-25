import React, { useState } from 'react';
import { calulateWinner } from '../../helper';
import Board from './Board';
import "./GameStyles.css";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calulateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const handleResetGame = () => {
        setBoard(Array(9).fill(null));   // if you want orther player win start game 
        //setXIsNext(true);    // if you want set alaway first X
    }

    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <button onClick={handleResetGame}>ResetGame</button>
        </div>
    );
};

export default Game;