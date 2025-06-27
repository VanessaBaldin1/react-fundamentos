import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDodia from "./DicaDoDia/DicaDodia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import ListaCursos from "./ListaCursos/ListaCursos";
import cursos from "../../data/cursos";

export default function Conteudo() {
  //Criando o map para categoria e gerar botão
  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Vanessa" classe="bg-emerald-100" />
        <Saudacao classe="bg-blue-200" />

        <p>Este é um exemplo de aplicação React.</p>

        {/* cria botão com o testo dentro de cada categoria */}
        {categorias.map((categoria) => {
          return (
            <button className="rounded py-1 px-2 mr-1 my-1 bg-amber-200 hover:bg-green-300">
              {categoria}
            </button>
          );
        })}

        <ListaCursos />
      </section>

      <DicaDodia />

      <AvisoImportante />
    </main>
  );
}
