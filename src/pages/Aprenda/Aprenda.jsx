import style from "./Aprenda.module.css";
import { ContentCard, MarkdownContent } from "../../components";
import { Link, useParams } from "react-router-dom";

function Video({ url, className }) {
  return (
    <iframe
      className={className}
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
}

export default function Aprenda() {
  const { content } = useParams();

  const contents = {
    afogamento: {
      title:
        "Afogamento: o que é, o que fazer e o que não fazer em caso de emergência",
      description:
        "Afogamento é uma situação de emergência em que uma pessoa tem dificuldade de respirar ou para completamente de respirar após a entrada de água (ou outro líquido) nas vias respiratórias, principalmente nos pulmões. Isso pode ocorrer em piscinas, rios, lagos, mar ou até em banheiras e baldes, especialmente com crianças pequenas.",
      video: ["https://www.youtube.com/embed/CiBaKoPl4IM?si=qOfiQjGcvTDcX5Kn"],
    },
    convulsao: {
      title: "Entendendo a Convulsão: O que Fazer e o que Evitar em uma Crise",
      description:
        "A convulsão ou crise convulsiva é decorrente de uma desordem elétrica involuntária e repentina do cérebro. Caracteriza-se por perda de consciência, acompanhada de contrações musculares que variam de leves a violentas.",
      video: ["https://www.youtube.com/embed/bL9PROpCv9s?si=rb9wGOIj5WRuWJND"],
    },
    desmaio: {
      title:
        "O que fazer ao presenciar um desmaio: Primeiros Socorros essenciais",
      description:
        "O desmaio é um agravo bastante frequente que se caracteriza por um episódio repentino e breve de perda da consciência.",
      video: ["https://www.youtube.com/embed/vz7puletXeg?si=g6OD-rlXNjeFt5HL"],
    },
    engasgo: {
      title: "Engasgo: como agir e fazer a manobra de Heimlich",
      description:
        "Quando uma pessoa engasga, deve-se observar se está respirando e se consegue falar ou tossir, uma vez que o engasgo pode bloquear parcialmente ou totalmente as vias respiratórias, sendo normalmente causado por pedaços de comida ou pequenos objetos.",
      video: [
        "https://www.youtube.com/embed/mKgi3_Q_o-A?si=gPiVEE588GVMJCD8",
        "https://www.youtube.com/embed/UEPGXPDH9MM?si=5UAUPjf1xJ-av8UL",
      ],
    },
    fratura: {
      title: "Fratura: primeiros socorros e como imobilizar o membro afetado",
      description:
        "Fratura é a quebra de um osso, que pode causar dor intensa e incapacidade de mover a parte afetada. É importante imobilizar o membro e buscar ajuda médica.",
      video: [
        "https://www.youtube.com/embed/h7Wh-U7yInA?si=uhzk8oJ2O6mvMt7T",
        "https://www.youtube.com/embed/VWJwSfOxZdE?si=f2QnE0CSPAWExwA1",
      ],
    },
    pcr: {
      title: "Parada Cardiorrespiratória e Ressucitação Cardiopulmonar",
      description:
        "A parada cardiorrespiratória (PCR) constitui a cessação súbita das funções cardíaca e respiratória. Em primeiros socorros, a parada cardiorrespiratória se caracteriza pela irresponsividade associada à ausência de respiração ou à respiração agônica.",
      video: ["https://www.youtube.com/embed/gGE18Z2IaBk?si=nC1pvtqIaBB7pjLv"],
    },
    queimadura: {
      title: "Primeiros socorros em casos de queimaduras",
      description:
        "Queimaduras são definidas como lesões provocadas no corpo humano devido à exposição, por tempo curto ou prolongado, a temperaturas extremas. A gravidade da queimadura depende de fatores como a extensão da área afetada, a profundidade da lesão e o agente causador.",
      video: [
        "https://www.youtube.com/embed/ZtkwWQEiznY?si=wfELrKdgsf4KWQiC",
        "https://www.youtube.com/embed/zXVJRIPupqM?si=feJUB4yKQwitGIj3",
      ],
    },
  };

  const contentCards = Object.keys(contents).map((key) => {
    return (
      <ContentCard
        to={`/aprenda/${key}`}
        key={key}
        title={contents[key].title}
        desc={contents[key].description}
      />
    );
  });

  if (content in contents) {
    window.scrollTo(0, 0);
    return (
      <>
        <Link className={style.return} to={"/aprenda"}>
          <ion-icon name={"arrow-back-circle-outline"}></ion-icon>
          <span>Voltar</span>
        </Link>
        <div className={style.contentContainer}>
          <MarkdownContent filePath={`/content/${content}.md`} />
          <div>
            <hr />
            <h2 className={style.recommendedTitle}>Conteúdo recomendado*:</h2>
            <span className={style.videoDesc}>
              * O material abaixo não pertence, nem foi produzido pelo SALVE.
            </span>
            <div>
              {contents[content].video.map((url, index) => (
                <Video className={style.video} key={index} url={url} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    window.scrollTo(0, 0);
    return (
      <>
        <div className={style.cardsContainer}>{contentCards}</div>
      </>
    );
  }
}
