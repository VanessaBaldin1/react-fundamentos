// Declara um tipo que será usado pelas props do Componente
type SaudacaoProps = {
  nome: string;
  classe: string;
};

export default function Saudacao({ nome, classe }: SaudacaoProps) {
  return (
    <p className={`my-2 rounded text-center ${classe}`}>
      Seja bem-vindo(a) <b>{nome}</b>
    </p>
  );
}
