import styled from "styled-components";

const StyledDicaDoDia = styled.section`
  background-color: #e8f5e9;
  border-left: 5px solid darkgreen;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;

  h3 {
    margin-top: 0;
    color: #020241;
  }

  p {
    color: #027c62df;
    font-size: 1.1rem;
  }

  .site-oficial {
    background-color: white;
    text-align: center;
    padding: 0.4rem;

    a {
      text-decoration: none;
      color: darkblue;
      font-weight: bold;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;

export default function DicaDodia() {
  return (
    <StyledDicaDoDia>
      <h3>Dica do Dia</h3>
      <p>
        Você pode combinar diferentes formas de estilização em um projeto React.
        Neste exemplo, estamos usando <b>styled-components</b>, uma famosa
        biblioteca para CSS In JS.
      </p>
      <p className="site-oficial">
        Site Oficial:{" "}
        <a href="https://styled-components.com/" target="_blank">
          Styled Components
        </a>
      </p>
    </StyledDicaDoDia>
  );
}
