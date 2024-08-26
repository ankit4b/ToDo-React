import styles from "./todoItem.module.css";

export default function TodoItem({ todoItem, todos, setTodos }) {
  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo !== todoItem));
  };

  const handleSubmission = () => {
    const newArr = todos.map((todo) => {
      return todo === todoItem
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo;
    });
    newArr.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    setTodos(newArr);
  };

  const classname = todoItem.isCompleted ? styles.completed : "";
  return (
    <>
      <div className={styles.todoItemContainer}>
        <h3 onClick={handleSubmission} className={classname}>
          {todoItem.name}
        </h3>
        {/* todoItem.isCompleted */}
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </>
  );
}
