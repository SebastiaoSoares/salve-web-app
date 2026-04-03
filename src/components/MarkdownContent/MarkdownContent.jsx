import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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
          "**Você está offline.** Este conteúdo ainda não foi salvo no seu dispositivo. Conecte-se à internet para baixá-lo pela primeira vez.",
        );
      });
  }, [filePath]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}
