import styles from "./example2.module.css";


export default function example2() {


    return (
        <>
            <div className={styles["todo-list"]}>
                <div className={styles["todo-item completed"]}>
                    <h2>Buy groceries</h2>
                </div>
                <div className={styles["todo-item"]}>
                    <h2>Walk the dog</h2>
                </div>
                <div className={styles["todo-item completed"]}>
                    <h2>Pay bills</h2>
                </div>
            </div>
        </>
    )
}