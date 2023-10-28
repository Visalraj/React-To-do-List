import styles from './../assets/css/styles.module.css';
export default function TodoList({name,currentTodos,setTodovalueList}){
    const deleteButton = (e)=>{
        e.preventDefault();
        setTodovalueList(
            currentTodos.filter((item)=>item.id!==name.id)
        )
    }
    return (
        <>
        <li className={styles.TodoList}>{name.itemis} <button onClick={deleteButton} className={styles.Deletebutton}>&#10006;</button></li>
        </>
    )
}