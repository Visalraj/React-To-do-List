import { useState } from "react";
import styles from "./../assets/css/styles.module.css";
import TodoList from "./TodoList";
import shortid from "shortid";

export default function Todoform({Todovalue,setTodovalue,Todovaluelist,setTodovalueList}) {
  var [displayWarningMessage,setWarningMessage] = useState(false);

  const textValue = (e) => {
    e.preventDefault();
    setWarningMessage((displayWarningMessage = false));
    if (e.target.value.length <= 40) {
      setTodovalue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Todovalue != "" && Todovaluelist.length < 4) {
      if (Todovaluelist.some((item) => item.itemis === Todovalue)) {
        setWarningMessage((displayWarningMessage = true));
        return displayWarningMessage;
      }
      setTodovalueList([
        ...Todovaluelist,
        { itemis: Todovalue, id: shortid.generate(), done: false },
      ]);
      setTodovalue("");
    }
  };

  if(displayWarningMessage){
    setTimeout(function(){
      setWarningMessage(displayWarningMessage = false);
    },4000)
  }
  
  const sortedTodos = Todovaluelist.slice().sort((a,b)=>Number(a.done)-Number(b.done));
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"  onChange={(e) => textValue(e)} placeholder="Add a task..." className={styles.Textbox} value={Todovalue} />
        <button  className={styles.Addbutton}>Add</button>
        <span style={{ display: displayWarningMessage ? "block" : "none" }} className={styles.ErrorText}>
          To-Do already exists.
        </span>
      </form>
      <div className={styles.Todoitems}>
        {sortedTodos.map((item, index) => (
          <TodoList key={index} name={item} currentTodos={Todovaluelist} setTodovalueList={setTodovalueList} />
        ))}
      </div>
    </>
  );
}
