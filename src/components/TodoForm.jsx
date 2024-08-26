import { useState } from "react";
import styles from "./todoForm.module.css";

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", isCompleted: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Todo : ", todo);
    console.log("Todos : ", todos);
    setTodos([todo, ...todos]);
    setTodo({ name: "", isCompleted: false });
  };
  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={todo.name}
            onChange={(e) =>
              setTodo({ name: e.target.value, isCompleted: false })
            }
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
