import styles from "./todoHeader.module.css";

export default function TodoHeader({ todos }) {
  return (
    <>
      <div className={styles.headerContainer}>
        <h1>Todo List</h1>
      </div>
    </>
  );
}
