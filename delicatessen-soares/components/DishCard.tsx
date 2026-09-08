import Image from "next/image";
import type { Prato } from "@/lib/data";
import FotoCena from "./FotoCena";
import { IconePao, IconeTabua, IconeSanduiche, IconeBolo, IconeXicara } from "./Icones";

const ICONE_POR_CATEGORIA: Record<string, JSX.Element> = {
  Padaria: <IconePao className="w-full h-full" />,
  "Frios & Queijos": <IconeTabua className="w-full h-full" />,
  Sanduíches: <IconeSanduiche className="w-full h-full" />,
  Doces: <IconeBolo className="w-full h-full" />,
  Bebidas: <IconeXicara className="w-full h-full" />,
};

const TOM_POR_CATEGORIA: Record<string, "brasa" | "vinho" | "manteiga" | "carvao"> = {
  Padaria: "manteiga",
  "Frios & Queijos": "vinho",
  Sanduíches: "brasa",
  Doces: "carvao",
  Bebidas: "vinho",
};

export default function DishCard({ prato }: { prato: Prato }) {
  const icone = ICONE_POR_CATEGORIA[prato.categoria] ?? <IconePao className="w-full h-full" />;
  const tom = TOM_POR_CATEGORIA[prato.categoria] ?? "brasa";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-texto/10 hover:border-brasa/40 hover:shadow-selo transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        {prato.imagem ? (
          <>
            <Image
              src={prato.imagem}
              alt={prato.nome}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vinho/55 via-vinho/0 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-4 ring-inset ring-manteiga/40" />
          </>
        ) : (
          <FotoCena icone={icone} tom={tom} className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110" />
        )}
        {prato.destaque && (
          <span className="absolute top-3 left-3 rounded-full bg-creme text-texto text-xs font-semibold px-3 py-1 shadow-selo">
            {prato.destaque}
          </span>
        )}
        <span className="absolute -bottom-4 right-4 flex items-center justify-center w-16 h-16 rounded-full bg-vinho text-creme text-sm font-semibold shadow-selo rotate-[-6deg] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
          {prato.preco}
        </span>
      </div>
      <div className="p-5 pt-7">
        <p className="text-xs text-vinho font-semibold mb-1">{prato.categoria}</p>
        <h3 className="font-display text-xl text-texto mb-2">{prato.nome}</h3>
        <p className="text-sm text-texto/70 leading-relaxed">{prato.descricao}</p>
      </div>
    </article>
  );
}
