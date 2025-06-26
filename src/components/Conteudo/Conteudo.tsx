import Artigo from "./Artigo/Artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDodia from "./DicaDoDia/DicaDodia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import cursos from "../../data/cursos";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use template string */}
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Vanessa" classe="bg-emerald-100" />
        <Saudacao classe="bg-blue-200" />

        <p>Este é um exemplo de aplicação React.</p>
        {/*  Faça a lógica necessária para apresentar o componente Artigo e passar para ele os dados de cada curso proveniente de cursos */}
      </section>

      {/* Usando MAP no Artigo  */}
      <div className={estilos.artigos}>
        {cursos.map((curso) => (
          <Artigo dados={curso} key={curso.id} />
        ))}
      </div>

      <DicaDodia />

      <AvisoImportante />
    </main>
  );
}
