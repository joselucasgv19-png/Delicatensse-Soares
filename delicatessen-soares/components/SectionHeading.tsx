export default function SectionHeading({
  rotulo,
  titulo,
  descricao,
  alinhamento = "esquerda",
  tom = "claro",
}: {
  rotulo?: string;
  titulo: string;
  descricao?: string;
  alinhamento?: "esquerda" | "centro";
  tom?: "claro" | "escuro";
}) {
  const corTitulo = tom === "escuro" ? "text-creme" : "text-texto";
  const corDescricao = tom === "escuro" ? "text-creme/75" : "text-texto/70";
  const corRotulo = tom === "escuro" ? "text-manteiga" : "text-vinho";

  return (
    <div
      className={`max-w-2xl ${
        alinhamento === "centro" ? "mx-auto text-center" : ""
      }`}
    >
      {rotulo && (
        <p className={`text-sm font-semibold mb-3 ${corRotulo}`}>{rotulo}</p>
      )}
      <h2 className={`text-3xl md:text-4xl font-display ${corTitulo}`}>
        {titulo}
      </h2>
      {descricao && (
        <p className={`mt-4 text-base leading-relaxed ${corDescricao}`}>
          {descricao}
        </p>
      )}
    </div>
  );
}
