export default function Rodape() {
  return (
    <>
      <footer>
        <h2>Pequeno site criado com React</h2>
        {/* CSS IN JS =  o Style o segundo { é um objeto} */}
        <p style={{ color: "red", fontWeight: "bold" }}>
          Desenvolvido por <b>Vanessa</b> &copy;2025{" "}
        </p>
      </footer>
      <hr />
      <p className="outro-texto">Qualquer coisa</p>
      <hr />
    </>
  );
}
