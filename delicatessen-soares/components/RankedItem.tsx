import Image from "next/image";
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
    <div className="group flex items-center gap-4 sm:gap-6 md:gap-8 py-5 sm:py-6 border-b border-texto/10 last:border-none">
      <span className="font-display text-3xl sm:text-4xl md:text-5xl text-brasa/30 w-9 sm:w-12 shrink-0">
        {String(posicao).padStart(2, "0")}
      </span>

      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0">
        {prato.imagem ? (
          <>
            <Image
              src={prato.imagem}
              alt={prato.nome}
              fill
              sizes="96px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-vinho/0 group-hover:bg-vinho/15 transition-colors duration-500" />
          </>
        ) : (
          <FotoCena
            icone={icone}
            tom={posicao % 2 === 0 ? "vinho" : "brasa"}
            className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-display text-base sm:text-lg md:text-xl text-texto">{prato.nome}</h3>
        <p className="text-xs sm:text-sm text-texto/65 leading-relaxed mt-1 line-clamp-2">
          {prato.descricao}
        </p>
      </div>
      <span className="font-semibold text-sm sm:text-base text-vinho whitespace-nowrap">
        {prato.preco}
      </span>
    </div>
  );
}
