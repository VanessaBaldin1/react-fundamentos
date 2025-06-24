//Tudo o que for usado dentro de componentes(imagens, fontes etc, deve ser importado. Desta forma, no momento do build, haverá otimizações para este conteúdo).
import logo from "../assets/logo-react.png";
import Menu from "./Menu";

//para usar a imagem tira as "" do src e coloca {} com a informação logo
export default function Cabecalho() {
  return (
    <header>
      <h1>
        <img src={logo} alt="" /> Olá React! 😊😊😊
      </h1>
      <hr />

      <Menu />
    </header>
  );
}
