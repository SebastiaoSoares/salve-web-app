import Style from "./Home.module.css";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const { content } = useParams();

  if (content) {
    return (
      <main>
        <h1>{content}</h1>
        <p>Descrição sobre como agir em caso de {content}.</p>
      </main>
    );
  }

  return (
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
            <ion-icon name="book"></ion-icon> Aprenda
          </h2>
          <p>
            Explore nossos conteúdos educativos e aprenda mais sobre primeiros
            socorros.
          </p>
        </Link>
        <Link to={"/salve"} className={Style.link}>
          <h2>
            <ion-icon name="medkit"></ion-icon> Salve
          </h2>
          <p>
            Conheça órgãos e iniciativas da região do Cariri Cearense vinculados
            à saúde.
          </p>
        </Link>
      </div>
      <div>
        <h2>Primeiros Socorros</h2>
        <p className={Style.description}>Agir agora</p>
        <div className={Style.socorroLinks}>
          {Object.entries({
            afogamento: "Afogamento",
            convulsao: "Convulsão",
            desmaio: "Desmaio",
            engasgo: "Engasgo",
            fratura: "Fratura",
            pcr: "Parada Cardiorrespiratória",
            queimadura: "Queimadura",
          }).map(([key, value]) => (
            <Link
              key={key}
              to={`/socorro/${key}`}
              className={Style.socorroLink}
            >
              <h3>{value}</h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
