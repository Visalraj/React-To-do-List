import { useState } from "react";

import TodoHeader from "./TodoHeader";
import Todoform from "./Todoform";
import FooterTodo from "./FooterTodo";

export default function Todo() {
  const [Todovalue, setTodovalue] = useState("");
  const [Todovaluelist, setTodovalueList] = useState([]);
  
  const getcompletedTodo = Todovaluelist.filter((item)=> item.done).length;
  return (
    <>
      <TodoHeader />
      <Todoform Todovalue={Todovalue} setTodovalue={setTodovalue} Todovaluelist={Todovaluelist} setTodovalueList={setTodovalueList}/>
      <FooterTodo count={Todovaluelist.length} completedTodo={getcompletedTodo}/>
    </>
  );
}
