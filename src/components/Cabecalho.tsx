//Tudo o que for usado dentro de componentes(imagens, fontes etc, deve ser importado. Desta forma, no momento do build, haverá otimizações para este conteúdo).
import logo from "../assets/logo-react.png";

//para usar a imagem tira as "" do src e coloca {} com a informação logo
export default function Cabecalho() {
  return (
    <header>
      <h1>
        <img src={logo} alt="" /> Olá React! 😊😊😊
      </h1>
      <hr />
      <nav>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Contato</a>
      </nav>
    </header>
  );
}
