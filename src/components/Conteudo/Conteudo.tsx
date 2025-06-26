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
        <Saudacao nome="Luis Miguel" classe="bg-blue-200" />

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
