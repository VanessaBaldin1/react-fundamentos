// Declara um tipo que será usado pelas props do Componente
type SaudacaoProps = {
  nome?: string; //props opcional
  classe: string;
};

export default function Saudacao({
  //Caso nome não seja informado (opcional), visitante será usado
  nome = "Visitante",
  classe,
}: SaudacaoProps) {
  return (
    <p className={`my-2 rounded text-center ${classe}`}>
      Seja bem-vindo(a) <b>{nome}</b>
    </p>
  );
}
