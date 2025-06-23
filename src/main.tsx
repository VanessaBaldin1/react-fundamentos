// Ajuda detectar uso de recursos obsoleto (APIS, funções, padrões etc)
import { StrictMode } from "react";

// Usado para criar a 'raíz' da aplicação REACT a partir de um elemento HTML
import { createRoot } from "react-dom/client";

//Importa o componente principal da aplicação
// O componente APP é o ponto de entrada da aplicação React
import App from "./App.tsx";

// Seleciona o elemento HTML root, cria a raizda aplicação e renderiza o componente APP
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
