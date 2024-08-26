import TodoItem from "./TodoItem";
import styles from "./todoLists.module.css";

export default function TodoLists({ todos, setTodos }) {
  return (
    <>
      <div className={styles.todolistContainer}>
        {todos.map((todoItem) => {
          return (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.name}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </>
  );
}
