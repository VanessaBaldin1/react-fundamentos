import type { ReactNode } from "react";
import estilos from "./Artigo.module.css";

type ArtigoProps = {
  titulo: string;
  numero: number;
  children: ReactNode;
  data?: Date;
};

// Deixando o conteudo dinâmico as chamadas/aplicações são direto com { }

export default function Artigo({
  titulo,
  numero,
  children,
  data,
}: ArtigoProps) {
  return (
    <article className={estilos.artigo}>
      <h3>
        Artigo {numero}: {titulo}
      </h3>

      {/* RENDERIZAÇÃO CONDICIONAL: só mostra o parágrafo se existir um valor na prop data */}
      {data && ( //o && neste caso vira um IF - RENDERIZAÇÃO CONDICIONAL
        <p>
          Data do registro: <time>{data?.toLocaleDateString()}</time>
        </p>
      )}

      {children}
    </article>
  );
}
