//Tudo o que for usado dentro de componentes(imagens, fontes etc, deve ser importado. Desta forma, no momento do build, haverá otimizações para este conteúdo).
import logo from "../../assets/logo-react.png";
import Menu from "../Menu/Menu";

// Importando o módulo CSS para o componente Cabecalho (styles é a convensão pode usar qualquer nome)
import estilos from "./Cabecalho.module.css";

//para usar a imagem tira as "" do src e coloca {} com a informação logo, por que fez a importação
// classeName={ estilos [.topo-site]} - quando usado com - no nome da classe como .topo-site
export default function Cabecalho() {
  return (
    <header className={estilos.topoSite}>
      <h1 className={estilos.titulo}>
        <img className={estilos.logo} src={logo} alt="" /> Olá React! 😊😊😊
      </h1>
      <hr />

      <Menu />
    </header>
  );
}
