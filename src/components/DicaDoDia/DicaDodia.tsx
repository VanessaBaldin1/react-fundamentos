import styled from "styled-components";

const StyledDicaDoDia = styled.section`
  background-color: #e8f5e9;
  border-left: 5px solid darkgreen;
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
      <p>
        Site Oficial:{" "}
        <a href="https://styled-components.com/" target="_blank">
          Styled Components
        </a>
      </p>
    </StyledDicaDoDia>
  );
}
