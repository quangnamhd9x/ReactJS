import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, onCheckBtnClick }) {
  return (
    <>
      <div className="w-1/3 mx-auto">
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick}/>
        ))}
      </div>
    </>
  );
}
