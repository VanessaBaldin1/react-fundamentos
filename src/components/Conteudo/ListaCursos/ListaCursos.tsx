import cursos from "../../../data/cursos";
import Artigo from "../Artigo/Artigo";
import estilos from "./ListaCursos.module.css";

export default function ListaCursos() {
  return (
    <div className={estilos.artigos}>
      {cursos.map((curso) => (
        <Artigo dados={curso} key={curso.id} />
      ))}
    </div>
  );
}
