import styles from "./page.module.scss";
import Link from "next/link";
import ImageComponent from "./components/ImageComponent/ImageComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageComponent />
      <h1>Hello world</h1>
      <div>
        <Link href={"/about"}>About Page</Link>
      </div>
      <div>
        <Link href={"/users"}>Users Page</Link>
      </div>
    </main>
  );
}
