import Link from "next/link";
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="/"><img src="/logo.png" /></a>
      家族で共有しよう
    </header>
  );
}
