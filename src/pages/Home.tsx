import { useEffect } from "react";
import Conteudo from "../components/Conteudo/Conteudo";

export default function Home() {
  useEffect(() => {
    console.log("Componente montado/renderizado!");
  }, []);

  return <Conteudo />;
}
