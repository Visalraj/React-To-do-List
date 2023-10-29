import { useState } from "react";
import styles from "./../assets/css/styles.module.css";
export default function TodoList({ name, currentTodos, setTodovalueList }) {
  var [getcurrentState, setcurrentState] = useState(false);
  const deleteButton = (e) => {
    e.preventDefault();
    setTodovalueList(currentTodos.filter((item) => item.id !== name.id));
  };
  const Mouseovertodo = (e) => {
    e.preventDefault();
    setcurrentState(getcurrentState = true);
  };
  return (
    <>
      <li className={styles.TodoList}>
        <span
          onClick={Mouseovertodo}
          className={getcurrentState ? styles["strike-class"] : ""}
        >
          {name.itemis}{" "}
        </span>
        <button onClick={deleteButton} className={styles.Deletebutton}>
          &#10006;
        </button>
      </li>
    </>
  );
}
