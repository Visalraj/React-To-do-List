import styles from './../assets/css/styles.module.css';
export default function FooterTodo({count}){
    return(
        <div className={styles.FooterTodo}>
            <li>Total Todos:{count}</li>
        </div>
    )
}