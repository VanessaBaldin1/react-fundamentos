import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDodia from "./DicaDoDia/DicaDodia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import ListaCursos from "./ListaCursos/ListaCursos";
import cursos from "../../data/cursos";
import { useState } from "react";

export default function Conteudo() {
  //Definindo o state para categoria ativa/selecionada, podendo ser null (valor padrão, inicial) ou string (quando uma categoria for selecionada)

  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

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
            <button
              onClick={() => setCategoriaAtiva(categoria)}
              className="rounded py-1 px-2 mr-1 my-1 bg-amber-200 hover:bg-green-300"
            >
              {categoria}
            </button>
          );
        })}

        {/* renderização */}

        {categoriaAtiva && (
          <>
            <button
              onClick={() => setCategoriaAtiva(null)}
              className="px-2 py-1 border rounded bg-red-300"
            >
              Limpar
            </button>
            <p>
              Categoria Selecionada: <b>{categoriaAtiva}</b>
            </p>
          </>
        )}

        <ListaCursos />
      </section>

      <DicaDodia />

      <AvisoImportante />
    </main>
  );
}
