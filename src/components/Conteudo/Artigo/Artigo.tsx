import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";

type ArtigoProps = {
  dados: Curso;
};

// Deixando o conteudo dinâmico as chamadas/aplicações são direto com { }

//
export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;
  return (
    <article className={estilos.artigo}>
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
