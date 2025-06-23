export default function App() {
  // Comentário de uma linha
  /* sfit+ alt +A */

  //A função só retorna um resultado, por isso precisa ser envolvido no div
  // o pessoal da React criou <> </> mais usada chama de (FRAGMENTO)
  return (
    <>
      <header>
        <h1>Olá React! 😊😊😊</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Contato</a>
        </nav>
      </header>

      {/* Comentários no meio do JSX: é normal ficar {} */}
      {/* Ao usar outros elementos HTML no JSX, é importante envolver tudo em um único <> </> (Fragmento React) */}
      <main>
        <section>
          <h2>Seja bem-vindo(a) aos Fundamentos de React!</h2>
          <p>Este é um exemplo de aplicação React.</p>

          <article>
            <h3>Artigo 1 de Exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              aperiam quo explicabo error dolore iste dignissimos sed modi ipsum
              quidem molestiae consequatur, natus maiores tenetur hic veniam
              recusandae autem magnam.
            </p>
          </article>

          <article>
            <h3>Artigo 2 de Exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              aperiam quo explicabo error dolore iste dignissimos sed modi ipsum
              quidem molestiae consequatur, natus maiores tenetur hic veniam
              recusandae autem magnam.
            </p>
          </article>

          <article>
            <h3>Artigo 3 de Exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              aperiam quo explicabo error dolore iste dignissimos sed modi ipsum
              quidem molestiae consequatur, natus maiores tenetur hic veniam
              recusandae autem magnam.
            </p>
          </article>
        </section>
      </main>

      <footer>
        <h2>Pequeno site criado com React</h2>
        <p>
          Desenvolvido por <b>Vanessa</b> &copy;2025{" "}
        </p>
      </footer>
    </>
  );
}
