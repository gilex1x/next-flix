import styles from "../app/page.module.css";
import { useSelector } from "react-redux";
export default function Home() {
  const error = useSelector((state:any)=>state.error)
  return (
    <main className={styles.main}>
      <h1>Esto es un titulo {error}</h1>
    </main>
  );
}
