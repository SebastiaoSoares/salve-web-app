import { useState, useEffect } from "react";
import Style from "./Salve.module.css";

export default function Salve() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./dados_salve.json")
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar os dados:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className={Style.loading}>Carregando informações...</div>;
  }

  if (!dados) {
    return (
      <div className={Style.error}>
        Não foi possível carregar os dados. Tente novamente mais tarde.
      </div>
    );
  }

  return (
    <div className={Style.container}>
      <header className={Style.header}>
        <h1>Salve: Guia de Saúde e Segurança do Cariri</h1>
        <p>
          Informações sobre saúde, bem-estar e segurança na região do Cariri.
        </p>
      </header>

      <main className={Style.mainContent}>
        <section id="emergencia" className={Style.section}>
          <h2>
            <i className="fas fa-shield-alt"></i> Contatos de Emergência e
            Segurança
          </h2>
          <ul className={Style.contactList}>
            {dados.emergenciaESeguranca.map((item, index) => (
              <li key={index}>
                <strong>{item.nome}</strong>
                <p>
                  {item.descricao}
                  <br />
                  {item.telefone && <strong>Telefone: {item.telefone}</strong>}
                  {item.endereco && (
                    <>
                      <br />
                      <strong>Endereço:</strong> {item.endereco}
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="instituicoes" className={Style.section}>
          <h2>
            <i className="fas fa-hospital"></i> Instituições de Saúde
          </h2>
          <div className={Style.cardContainer}>
            {dados.instituicoes.map((item, index) => (
              <div className={Style.card} key={index}>
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>
                {item.endereco && (
                  <p>
                    <strong>Endereço:</strong> {item.endereco}
                  </p>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Visitar Site
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="institutos" className={Style.section}>
          <h2>
            <i className="fas fa-flask"></i> Institutos e Pesquisa
          </h2>
          <div className={Style.cardContainer}>
            {dados.institutosEPesquisa.map((item, index) => (
              <div className={Style.card} key={index}>
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>
                {item.contato && <p>{item.contato}</p>}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Visitar Site
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="paginas" className={Style.section}>
          <h2>
            <i className="fas fa-link"></i> Páginas e Portais Importantes
          </h2>
          <ul className={Style.linkList}>
            {dados.paginasEPortais.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.nome}
                </a>
                <p>{item.descricao}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className={Style.footer}>
        <p>
          As informações desta página podem sofrer alterações. Sempre confirme
          os dados com as instituições responsáveis.
        </p>
      </footer>
    </div>
  );
}
