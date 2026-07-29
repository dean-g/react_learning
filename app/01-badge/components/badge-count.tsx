import { BadgeProps } from '@/app/models/badge-interface';
import styles from './badge-count.module.css';

export default function BadgeCount({ count, children }: BadgeProps) {
    return (
        <div className={styles.content}>
            <div className={styles.badge}>

                <span className={styles["badge-count"]}>{count}</span>
                {children}
                
            </div>

        </div>
    )
}