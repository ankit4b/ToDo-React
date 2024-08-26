import { useState } from "react";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoLists from "./TodoLists";
import style from "./todo.module.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className={style.todoContainer}>
        <TodoHeader />
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoLists todos={todos} setTodos={setTodos} />
        <TodoFooter todos={todos} />
      </div>
    </>
  );
}
