import React from "react";


export const IncompleteTodos = (props) => {
  const {todo,onComplete,onDelete} = props;
  return(
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li> {todo} </li>
              <button onClick={() => onComplete(index)}>完了</button>
              <button onClick={() => onDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  )
};