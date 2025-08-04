import { useNavigate } from "react-router-dom";
import useStorage from "../../hooks/useStorage";
import styles from "./FirstAccess.module.css";
import Logo from "../../components/Logo/Logo.jsx";

export default function FirstAccess() {
  const [nome, setNome] = useStorage("nome", "");
  const [, setVisited] = useStorage("visited", "false");
  const navigate = useNavigate();

  function handleStart() {
    if (!nome.trim()) return;
    setNome(nome.trim());
    setVisited("true");
    navigate(0);
  }

  return (
    <div className={styles.container}>
      <Logo size={100} />
      <h1 className={styles.title}>Bem-vindo(a) ao SALVE</h1>
      <span className={styles.subtitle}>Suporte e Assistência para Lidar com Vítimas em Emergências</span>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className={styles.input}
        autoFocus
      />
      <button
        onClick={handleStart}
        className={styles.button}
        disabled={!nome.trim()}
      >
        Começar
      </button>
    </div>
  );
}
