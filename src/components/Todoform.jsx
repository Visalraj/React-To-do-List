import { useState } from "react";
import styles from "./../assets/css/styles.module.css";
import TodoList from "./TodoList";
import FooterTodo from "./FooterTodo";
import shortid from "shortid";

export default function Todoform() {
  const [Todovalue, setTodovalue] = useState("");
  const [Todovaluelist, setTodovalueList] = useState([]);
  const textValue = (e) => {
    e.preventDefault();
    if (e.target.value.length <= 40) {
      setTodovalue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Todovalue != "" && Todovaluelist.length < 4) {
      setTodovalueList([
        ...Todovaluelist,
        { itemis: Todovalue,id:shortid.generate()},
      ]);
      setTodovalue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => textValue(e)}
          placeholder="Add a task..."
          className={styles.Textbox}
          value={Todovalue}
        />
        <button className={styles.Addbutton}>Add</button>
      </form>
      <div className={styles.Todoitems}>
        {Todovaluelist.map((item, index) => (
          <TodoList key={index} name={item} currentTodos={Todovaluelist} setTodovalueList={setTodovalueList}/>
          ))}
      </div>
      <FooterTodo count={Todovaluelist.length} />
    </>
  );
}
