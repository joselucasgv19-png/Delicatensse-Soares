"use client";

import { useState } from "react";
import type { CategoriaCardapio } from "@/lib/data";

export default function MenuTabs({ categorias }: { categorias: CategoriaCardapio[] }) {
  const [ativa, setAtiva] = useState(0);
  const categoria = categorias[ativa];

  return (
    <div>
      <div className="relative mb-8 sm:mb-10">
        <div
          role="tablist"
          aria-label="Categorias do cardápio"
          className="flex gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1 pb-1 snap-x snap-proximity"
        >
          {categorias.map((cat, i) => (
            <button
              key={cat.nome}
              role="tab"
              aria-selected={i === ativa}
              onClick={() => setAtiva(i)}
              className={`shrink-0 snap-start whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                i === ativa
                  ? "bg-brasa text-creme border-brasa"
                  : "bg-transparent text-texto/70 border-texto/15 hover:border-brasa/50 hover:text-texto"
              }`}
            >
              {cat.nome}
            </button>
          ))}
        </div>
        {/* Indicações visuais de que a lista rola horizontalmente (só aparecem no mobile) */}
        <div className="sm:hidden pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-creme to-transparent" />
      </div>

      <div role="tabpanel" className="grid sm:grid-cols-2 gap-x-10">
        {categoria.itens.map((item) => (
          <div
            key={item.nome}
            className="flex items-start justify-between gap-3 sm:gap-4 py-3.5 border-b border-dotted border-texto/20"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm sm:text-base text-texto font-medium leading-snug">
                {item.nome}
              </p>
              {item.descricao && (
                <p className="text-xs text-texto/55 mt-0.5">{item.descricao}</p>
              )}
            </div>
            <span className="shrink-0 text-sm sm:text-base text-vinho font-semibold whitespace-nowrap pt-0.5">
              {item.preco}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
