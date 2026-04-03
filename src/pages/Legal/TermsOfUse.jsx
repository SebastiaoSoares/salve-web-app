import { MarkdownContent } from "../../components";
import styles from "./Legal.module.css";
import { Link } from "react-router-dom";

export default function TermsOfUse() {
  return (
    <main className={styles.container}>
      <div className={styles.markdown}>
        <Link className={styles.return} to="/">
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
          <span>Voltar</span>
        </Link>
        <MarkdownContent filePath="/docs/terms-of-use.md" />
      </div>
    </main>
  );
}
