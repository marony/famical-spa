import Header from "./Header";
import Head from 'next/head';
import Family from './Family';
import Footer from './Footer';
import styles from './Layout.module.scss';

export default function Layout({
  title,
  family,
  children,
}) {
  return (
    <div className={styles.layout}>
      <Head><title>{title}</title></Head>
      <Header />
      <Family family={family} />
      {children}
      <Footer />
    </div>
  );
}
