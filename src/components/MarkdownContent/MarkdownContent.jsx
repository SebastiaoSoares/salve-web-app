import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownContent({ filePath }) {

  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then(setContent);
  }, [filePath]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}
