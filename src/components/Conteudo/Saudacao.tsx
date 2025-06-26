// Declara um tipo que será usado pelas props do Componente
type Props = {
  nome: string;
};

export default function Saudacao(props: Props) {
  return (
    <>
      <h2 className="font-bold text-lg">Fundamentos de React!</h2>
      <p className="my-2">
        Seja bem-vindo(a) <b>{props.nome}</b>
      </p>
    </>
  );
}
