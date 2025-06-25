import estilos from "./Artigo.module.css";

export default function Artigo() {
  return (
    <article className={estilos.artigo}>
      <h3>Artigo 1 de Exemplo</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam
        quo explicabo error dolore iste dignissimos sed modi ipsum quidem
        molestiae consequatur, natus maiores tenetur hic veniam recusandae autem
        magnam.
      </p>
    </article>
  );
}
