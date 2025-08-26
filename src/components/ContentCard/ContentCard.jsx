import { Link } from "react-router-dom";
import styles from "./ContentCard.module.css";

export default function ContentCard({ to, title, desc }) {
  return (
    <Link className={styles.card} to={to}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{desc}</p>
    </Link>
  );
}
