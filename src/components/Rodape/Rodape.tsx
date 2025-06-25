import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  backgroundColor: "#222",
  color: "white",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <>
      {/* o Style nesse caso é aplicado somente o estiloRodape já é um objeto */}
      <footer style={estilosRodape}>
        <h2>Pequeno site criado com React</h2>
        {/* CSS IN JS =  o Style o segundo { é um objeto} */}
        <p style={{ color: "red", fontWeight: "bold" }}>
          Desenvolvido por{" "}
          <b>
            <a href="">Vanessa</a>
          </b>
          &copy;2025
        </p>
      </footer>
      <hr />
      <p className="outro-texto">Qualquer coisa</p>
      <hr />
    </>
  );
}
