import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pagina404() {
  useEffect(() => {
    document.title = " ERRO 404 | Meu app React";
  });

  return (
    <section>
      <h1>💥 Opa! Você entrou em um universo paralelo...</h1>
      <br />
      <p>
        A página que você está procurando se perdeu no espaço-tempo da internet.
        Mas não se preocupe até os melhores exploradores se desviam da rota às
        vezes. 🚀
      </p>
      <br />
      <p>
        Não é o destino, mas a jornada que nos transforma. Desconhecido (ou
        talvez um programador cansado 👨‍💻)
      </p>

      <br />
      <p>
        <Link to="/">🔁 Voltar ao início</Link>
      </p>
    </section>
  );
}
