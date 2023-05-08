import Link from "next/link";
import styles from "./page.module.scss";

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About Page</h1>
      <Link href={"/"}>Back Home</Link>
    </main>
  );
}
