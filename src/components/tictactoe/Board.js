import React from "react";
import { calulateWinner } from "../../helper";
import Cell from "./Cell";

const Board = (props) => {
  console.log(props);
  const cells = [null, null, null, null, null, "X", "X", "X", "X", "X", null, null, null, null, null];
  console.log(calulateWinner(cells));
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell> // tạo ra nhiều phần tử giống nhau
      ))}
    </div>
  );
};

export default Board;
