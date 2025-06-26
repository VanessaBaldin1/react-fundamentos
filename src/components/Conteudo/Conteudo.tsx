import Artigo from "./Artigo/Artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDodia from "./DicaDoDia/DicaDodia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";

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

        <Artigo titulo="Front-End" numero={1}>
          <p>Front-End é muito bacana, a gente usa HTML com CSS e JavaScript</p>
          <p>Mas também dá dor de cabeça quando usa CSS</p>
        </Artigo>

        <Artigo titulo="Back-End" numero={2}>
          <p>Importante estudar: </p>
          <ul className="*:list-disc *:ml-7">
            <li>PHP</li>
            <li>SQL</li>
            <li>Orientação a Obrjetos</li>
          </ul>

          <p>E muito mais!</p>
        </Artigo>

        <Artigo titulo="Mobile" numero={3}>
          <details>
            <summary> Conheça as tecnologias mais usadas</summary>
            <ol className="*:list-decimal *:m-7">
              <li>JavaScript/TypeScript</li>
              <li>Libs e Frameworks</li>
            </ol>
          </details>
        </Artigo>
      </section>

      <DicaDodia />

      <AvisoImportante />
    </main>
  );
}
