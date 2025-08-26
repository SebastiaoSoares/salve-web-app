import { useState } from "react";
import questions from "./questions.json";
import useStorage from "../../../hooks/useStorage";
import styles from "./Quizz.module.css";

function Question({ data, index, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (alt) => {
    setSelected(alt);
    onAnswer(index, alt === data.response);
  };

  return (
    <div className={styles.questionCard}>
      <h2 className={styles.questionTitle}>
        {index + 1}. {data.question}
      </h2>
      <ul className={styles.alternativesList}>
        {data.alternatives.map((alt, i) => (
          <li key={i}>
            <button
              onClick={() => handleSelect(alt)}
              disabled={selected !== null}
              className={`${styles.alternativeButton} ${
                selected === alt ? styles.selected : ""
              }`}
            >
              {alt}
            </button>
          </li>
        ))}
      </ul>
      {selected && (
        <p
          className={`${styles.feedback} ${
            selected === data.response ? styles.correct : styles.incorrect
          }`}
        >
          <ion-icon
            name={
              selected === data.response ? "checkmark-circle" : "close-circle"
            }
          ></ion-icon>{" "}
          {selected === data.response
            ? "Resposta correta"
            : "Resposta incorreta"}
        </p>
      )}
    </div>
  );
}

export default function Quizz() {
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const [quizResult, setQuizResult] = useStorage("quizResult", null);

  const handleAnswer = (index, isCorrect) => {
    setAnswers((prev) => ({ ...prev, [index]: isCorrect }));
  };

  const handleFinish = () => {
    const totalCorrect = Object.values(answers).filter(Boolean).length;
    const total = questions.length;
    const grade = ((totalCorrect / total) * 10).toFixed(1);

    const status = totalCorrect / total >= 0.8 ? "APROVADO" : "REPROVADO";

    setQuizResult({ totalCorrect, total, grade, status });
    setFinished(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setFinished(false);
    setQuizResult(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz de Primeiros Socorros</h1>
      {questions.map((q, idx) => (
        <Question key={idx} data={q} index={idx} onAnswer={handleAnswer} />
      ))}

      {!finished ? (
        <button onClick={handleFinish} className={styles.finishButton}>
          Finalizar Quiz
        </button>
      ) : (
        <div className={styles.resultBox}>
          <p className={styles.resultText}>
            Você acertou {quizResult?.totalCorrect}/{quizResult?.total}
          </p>
          <p className={styles.resultText}>Nota: {quizResult?.grade}</p>
          <p
            className={`${styles.status} ${
              quizResult?.status === "APROVADO"
                ? styles.approved
                : styles.failed
            }`}
          >
            {quizResult?.status}
          </p>
          <button onClick={handleRetry} className={styles.retryButton}>
            Tentar novamente
          </button>
        </div>
      )}
    </div>
  );
}
