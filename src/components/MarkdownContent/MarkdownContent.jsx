import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./MarkdownContent.module.css";

export default function MarkdownContent({ filePath }) {
  const [content, setContent] = useState("Carregando conteúdo...");

  useEffect(() => {
    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar o arquivo");
        return res.text();
      })
      .then(setContent)
      .catch(() => {
        setContent(
          "> **Aviso:** Você está offline e este conteúdo ainda não foi salvo no seu dispositivo. Conecte-se à internet para baixá-lo pela primeira vez.",
        );
      });
  }, [filePath]);

  return (
    <div className={styles.markdownContainer}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
