import styles from "./01-badge.module.css";
import BadgeCount from "./components/badge-count";


export default function Badge() {


    return (
        <div className={styles.app}>
            <h1 >Badge Example</h1>

            <BadgeCount count={5}>
                <button>Messages</button>
            </BadgeCount>

            <BadgeCount count={5}>
                <p>System Alert</p>
            </BadgeCount>
        </div>
    )

}