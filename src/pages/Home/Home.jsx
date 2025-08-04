import Style from './Home.module.css';

export default function Home() {
  return (
    <>
      <main>
        <h1 className={Style.title}>S.A.L.V.E</h1>
        <span className={Style.subtitle}>
          <i>Nosso aplicativo estará totalmente disponível em breve.</i>
        </span>
      </main>
    </>
  );
}
