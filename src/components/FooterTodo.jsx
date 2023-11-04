import styles from './../assets/css/styles.module.css';
export default function FooterTodo({count,completedTodo}){
    return(
        <div className={styles.FooterTodo}>
            <li>Total Todos: {count}</li>
            <li>Completed Todos: {completedTodo}</li>
        </div>
    )
}