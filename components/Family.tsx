import React from "react";
import styles from './Family.module.scss';

export default function Family({
    family
}) {
    if (family) {
        let members = [];
        for (const member of family) {
            members.push(
                <li className={styles.familyItem} key={member}>
                    {member}
                </li>)
        }
        return (
            <nav className={styles.family}>
                <ul className={styles.familyList}>
                    {members}
                </ul>
            </nav>
        );
    } else {
        return <React.Fragment />
    }
}
