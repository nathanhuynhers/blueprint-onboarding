'use client';

import styles from './styles.module.css';
import '../assets/global.css';
import PostComponent from './PostComponent';

export default function Home() {
  return (
    <main className={styles.main}>
      <PostComponent />
      <hr className={styles.separator} />
    </main>
  );
}
