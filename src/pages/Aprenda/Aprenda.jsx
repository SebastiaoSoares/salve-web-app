import style from "./Aprenda.module.css";
import { ContentCard, MarkdownContent } from "../../components";
import { Link, useParams } from "react-router-dom";
import { contents } from "./contents";
import { CustomComponent } from "./CustomComponent/CustomComponents";

export default function Aprenda() {
  const { content } = useParams();
  const data = contents[content];

  if (data) {
    window.scrollTo(0, 0);

    return (
      <>
        <Link className={style.return} to="/aprenda">
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
          <span>Voltar</span>
        </Link>

        <div className={style.contentContainer}>
          {data.type === "content" ? (
            <>
              <MarkdownContent filePath={`/content/${content}.md`} />
              <hr />
              <div>
                <h2 className={style.recommendedTitle}>
                  Conteúdo recomendado*:
                </h2>
                <span className={style.videoDesc}>
                  * O material abaixo não pertence, nem foi produzido pelo
                  SALVE.
                </span>
                <CustomComponent
                  type={data.type}
                  data={data.customComponent}
                  className={style.video}
                />
              </div>
            </>
          ) : (
            <>
              <CustomComponent
                type={data.type}
                className={style.quizz}
              />
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={style.title}>
        <h1>Nossos conteúdos</h1>
        <span>
          Explore nossos conteúdos educativos e aprenda mais sobre primeiros
          socorros.
        </span>
      </div>
      <div className={style.cardsContainer}>
        {Object.entries(contents).map(([key, item]) => (
          <ContentCard
            to={`/aprenda/${key}`}
            key={key}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>
    </>
  );
}
