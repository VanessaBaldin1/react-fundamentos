import estilos from "./Artigo.module.css";

type ArtigoProps = {
  titulo: string;
  texto: string;
  numero: number;
};

// Deixando o conteudo dinâmico as chamadas/aplicações são direto com { }

export default function Artigo({ titulo, texto, numero }: ArtigoProps) {
  return (
    <article className={estilos.artigo}>
      <h3>
        Artigo {numero}: {titulo}
      </h3>
      <p>{texto}</p>
    </article>
  );
}
