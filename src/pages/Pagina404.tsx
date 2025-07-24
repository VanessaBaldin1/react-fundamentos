import { Link } from "react-router-dom";

export default function Pagina404() {
  return (
    <section>
      <h1>💥 Opa! Você entrou em um universo paralelo...</h1>
      <p>
        A página que você está procurando se perdeu no espaço-tempo da internet.
        Mas não se preocupe até os melhores exploradores se desviam da rota às
        vezes. 🚀
      </p>

      <p>
        Não é o destino, mas a jornada que nos transforma. Desconhecido (ou
        talvez um programador cansado 👨‍💻)
      </p>

      <p>
        <Link to="/">🔁 Voltar ao início</Link>
        🔍 Ou continue sua jornada pelo nosso site e descubra novos mundos!
      </p>
    </section>
  );
}
