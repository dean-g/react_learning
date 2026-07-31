import { FriendDetailsProps } from "../../models/friends-details.interface";
import styles from "./friends-details.module.css";

export default function FriendDetails({name, status}: FriendDetailsProps) {
    const friendStatusCssClassName = status === 'online' ? styles.online : styles.offline
    return (
        <div className={styles.friends}>
            <div className={styles.friend}>
                <h2>{name}</h2>
                <div className={`${styles.status} ${friendStatusCssClassName}`}>
                    {status === 'online' ? "Online": "Offline"}
                </div>
            </div>
        </div>
    )
}

