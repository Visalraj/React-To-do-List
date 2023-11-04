import { useState } from "react";

import styles from "./../assets/css/styles.module.css";

export default function TodoList({ name, currentTodos, setTodovalueList }) {

  function deleteButton(id){
    setTodovalueList(currentTodos.filter((todos)=>todos.id !==id))
  }

  function Mouseovertodo(id){
    const doneTodos = currentTodos.map((todos)=> todos.id === id ?{...todos,done:!todos.done}:todos)
    setTodovalueList(doneTodos);
  }

  const getcurrentState = name.done ? styles.strikeClass : "";
  return (
    <>
      <li className={styles.TodoList}>
        <span onClick={()=>Mouseovertodo(name.id)} className={getcurrentState} >
          {name.itemis}
        </span>
        <button onClick={()=>deleteButton(name.id)} className={styles.Deletebutton}>  
          &#10006;
        </button>
      </li>
    </>
  );
}
