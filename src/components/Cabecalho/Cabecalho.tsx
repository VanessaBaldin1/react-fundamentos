//Tudo o que for usado dentro de componentes(imagens, fontes etc, deve ser importado. Desta forma, no momento do build, haverá otimizações para este conteúdo).
import logo from "../../assets/logo-react.png";
import Menu from "./Menu/Menu";

// Importando o módulo CSS para o componente Cabecalho (styles é a convensão pode usar qualquer nome)
import estilos from "./Cabecalho.module.css";
import { useState } from "react";

//para usar a imagem tira as "" do src e coloca {} com a informação logo, por que fez a importação
// classeName={ estilos [.topo-site]} - quando usado com - no nome da classe como .topo-site

export default function Cabecalho() {
  // Aqui definimos a chamada de uma função especial do React = ESTUDAR HOOKS

  // useState. Esta e outras funções iniciadas com o prefixo 'use' são conhecidas como React HOOKS

  //no Caso, do useState, usando desestruturação, criamos uma constate que representa o valor do state (titulo) e uma função responsável por atualizar o state (setTitulo)
  const [titulo, setTitulo] = useState("Olá React!");

  const alternarTitulo = () => {
    setTitulo("Experimentando States!");
  };

  return (
    <header className={estilos.topoSite}>
      <h1 onClick={alternarTitulo} className={estilos.titulo}>
        <img className={estilos.logo} src={logo} alt="" /> {titulo} 😊😊😊
      </h1>
      <hr />

      <Menu />
    </header>
  );
}
