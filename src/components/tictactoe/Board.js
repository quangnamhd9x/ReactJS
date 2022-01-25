import React from "react";
import { calulateWinner } from "../../helper";
import Cell from "./Cell";

const Board = () => {
  const cells = [null, null, null, "X", "X", "X", null, null, null];
  console.log(calulateWinner(cells));
  return (
    <div className="game-board">
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index}></Cell> // tạo ra nhiều phần tử giống nhau
        ))}
    </div>
  );
};

export default Board;
