import { useEffect } from "react";

export default function Contato() {
  useEffect(() => {
    document.title = "Contato | Meu app React";
  });

  return (
    <section>
      <h2>Fale conosco</h2>
      <p>Use o formulário e etc e tal</p>
      <form action="" method="post">
        <p>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" />
        </p>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
