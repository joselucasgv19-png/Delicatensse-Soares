import type { Prato } from "@/lib/data";
import FotoCena from "./FotoCena";
import { IconePao, IconeTabua, IconeSanduiche, IconeBolo, IconeXicara } from "./Icones";

const ICONE_POR_CATEGORIA: Record<string, JSX.Element> = {
  "Café da manhã": <IconeXicara className="w-full h-full" />,
  "Frios & Queijos": <IconeTabua className="w-full h-full" />,
  Sanduíches: <IconeSanduiche className="w-full h-full" />,
  Doces: <IconeBolo className="w-full h-full" />,
};

export default function RankedItem({
  posicao,
  prato,
}: {
  posicao: number;
  prato: Prato;
}) {
  const icone = ICONE_POR_CATEGORIA[prato.categoria] ?? <IconePao className="w-full h-full" />;

  return (
    <div className="flex items-center gap-5 md:gap-8 py-6 border-b border-texto/10 last:border-none">
      <span className="font-display text-4xl md:text-5xl text-brasa/30 w-12 shrink-0">
        {String(posicao).padStart(2, "0")}
      </span>
      <FotoCena
        icone={icone}
        tom={posicao % 2 === 0 ? "vinho" : "brasa"}
        className="w-20 h-20 md:w-24 md:h-24 rounded-xl shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-lg md:text-xl text-texto">{prato.nome}</h3>
        <p className="text-sm text-texto/65 leading-relaxed mt-1 line-clamp-2">
          {prato.descricao}
        </p>
      </div>
      <span className="font-semibold text-vinho whitespace-nowrap">{prato.preco}</span>
    </div>
  );
}
