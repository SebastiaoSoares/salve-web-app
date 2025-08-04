import styles from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import useStorage from "../../hooks/useStorage.js";

export default function Header({ className = "" }) {

    const [user] = useStorage("nome");

    return (
    <>
      <header className={`${styles.header} ${className}`}>
        <Logo size={30} />
        <span>{user ? `Olá, ${user}!` : "Olá!"}</span>
      </header>
    </>
  );
}
