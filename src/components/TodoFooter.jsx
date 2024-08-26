import { useEffect, useState } from "react";
import styles from "./todoFooter.module.css";

export default function TodoFooter({ todos }) {
  const [completedTodos, setCompletedTodos] = useState(0);
  useEffect(() => {
    const len = todos.filter((todo) => todo.isCompleted === true).length;
    setCompletedTodos(len);
  }, [todos]);

  return (
    <>
      <div className={styles.todoFooterContainer}>
        <h3>Total todos : {todos.length}</h3>
        <h3>Completed todos : {completedTodos}</h3>
      </div>
    </>
  );
}
