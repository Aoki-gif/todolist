import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./comp/Input_Todo";
import { IncompleteTodos } from "./comp/IncompleteTodos";

//ReactでTODOリスト柵瀬作成
export const App = () => {
  const [todoText, setTodoText] = useState("");

  //未完了用配列
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDel = (index) => {
    const newTodos = [...incompleteTodos];
    //indexを１つ削除する
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  const onClickComp = (index) => {
    const newIncompTodos = [...incompleteTodos];
    //indexを１つ削除する
    newIncompTodos.splice(index, 1);

    const newTodos = [...completeTodos, incompleteTodos[index]];
    setincompleteTodos(newIncompTodos);
    setcompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...completeTodos];
    newCompTodos.splice(index, 1);

    const newTodos = [...incompleteTodos, completeTodos[index]];

    setcompleteTodos(newCompTodos);
    setincompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todo={incompleteTodos}
        onComplete={onClickComp}
        onDelete={onClickDel}
      />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li> {todo} </li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
