type SaudacaoProps = {
  nome?: string; //props opcional
  classe: string;
};

export default function Saudacao({
  nome = "Visitante",
  classe,
}: SaudacaoProps) {
  // no onClick somente o nome da função sem ()

  // callback chamada pelo evento
  function exemploEvento() {
    alert("Evento com chamada de callback externa");
  }

  return (
    <p className={`my-2 rounded text-center ${classe}`}>
      Seja bem-vindo(a) <b onClick={exemploEvento}>{nome}</b>
    </p>
  );
}
