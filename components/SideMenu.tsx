import styles from "./SideMenu.module.scss";

export default function SideMenu() {
    return (
        <nav className={styles.sideMenu}>
          <ul className={styles.sideMenuList}>
            <li className={styles.sideMenuItem}>予定表</li>
            <li className={styles.sideMenuItem}>やること</li>
            <li className={styles.sideMenuItem}>おねがい</li>
            <li className={styles.sideMenuItem}>時間割</li>
            <li className={styles.sideMenuItem}>掲示板</li>
            <li className={styles.sideMenuItem}>伝言</li>
          </ul>
        </nav>
    );
}
