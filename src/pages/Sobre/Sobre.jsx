import Style from "./Sobre.module.css";

export default function Sobre() {
  return (
    <main className={Style.sobreContainer}>
      <div className={Style.title}>
        <h1>Sobre o SALVE</h1>
        <p>Conhecimento que salva. Cidadania que transforma.</p>
      </div>
      <p className={Style.paragrafo}>
        O Projeto SALVE (Suporte e Assistência para Lidar com Vítimas em
        Emergências) nasceu como uma iniciativa do Laboratório Juventudes, um
        componente do curso de Aprendizagem do SENAC Crato-CE. Essa metodologia
        nos desafia a aplicar nosso conhecimento para criar soluções de impacto
        social para a nossa comunidade.
      </p>
      <p className={Style.paragrafo}>
        Movidos por esse propósito, nós, alunos da turma 2025.09.75, focamos em
        um conhecimento que pode salvar vidas: os primeiros socorros. Esta
        plataforma é uma das ações desenvolvidas no âmbito do projeto SALVE, o
        qual centraliza materiais de estudo e guias práticos, popularizando o
        acesso a informações vitais para que qualquer pessoa possa agir com mais
        segurança em situações de emergência.
      </p>
      <div className={Style.creditos}>
        <p>
          A solução digital do projeto foi desenvolvida por Sebastião Sousa
          Soares (
          <a
            href="https://github.com/sebastiaosoares"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/sebastiaosoares
          </a>
          ).
        </p>
      </div>
    </main>
  );
}
