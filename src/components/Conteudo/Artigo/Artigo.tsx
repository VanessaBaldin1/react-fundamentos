import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

// Deixando o conteudo dinâmico as chamadas/aplicações são direto com { }

//
export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;

  const [cor, setCor] = useState("white");

  const trocaCorArticle = () => {
    setCor((cor) => {
      return cor === "white" ? "yellow" : "white";
    });
  };

  return (
    <article
      onClick={trocaCorArticle}
      className={estilos.artigo}
      style={{ backgroundColor: cor }}
    >
      <h3> {titulo}</h3>
      <p>
        <b>
          Categoria: <b>{categoria}</b>
        </b>
      </p>
      <p>
        Preço: <b>{preco}</b>
      </p>
    </article>
  );
}
