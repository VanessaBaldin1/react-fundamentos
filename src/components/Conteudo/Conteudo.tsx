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
        <Saudacao />
        <p>Este é um exemplo de aplicação React.</p>

        <Artigo />

        <Artigo />

        <Artigo />
      </section>

      <DicaDodia />

      <AvisoImportante />
    </main>
  );
}
