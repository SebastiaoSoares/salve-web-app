import Style from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <div className={Style.titleContainer}>
          <h1 className={Style.title}>Bem-vindo(a) ao</h1>
          <div className={Style.salve}>
            <h1>S.A.L.V.E</h1>
            <h2 className={Style.subtitle}>
              Suporte e Assistência para Lidar com Vítimas em Emergências
            </h2>
          </div>
        </div>
        <div className={Style.links}>
          <Link to={"/aprenda"} className={Style.link}>
            <h2>
              <ion-icon name={"book"}></ion-icon> Aprenda
            </h2>
            <p>
              Explore nossos conteúdos educativos e aprenda mais sobre primeiros
              socorros.
            </p>
          </Link>
          <Link to={"/salve"} className={Style.link}>
            <h2>
              <ion-icon name={"medkit"}></ion-icon> Salve
            </h2>
            <p>
              Conheça órgãos e iniciativas da região do Cariri Cearense
              vinculados à saúde.
            </p>
          </Link>
        </div>
        <span className={Style.description}>
          Nosso aplicativo estará totalmente disponível em breve.
        </span>
      </main>
    </>
  );
}
