"use client";

import { useState } from "react";
import type { CategoriaCardapio } from "@/lib/data";

export default function MenuTabs({ categorias }: { categorias: CategoriaCardapio[] }) {
  const [ativa, setAtiva] = useState(0);
  const categoria = categorias[ativa];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Categorias do cardápio">
        {categorias.map((cat, i) => (
          <button
            key={cat.nome}
            role="tab"
            aria-selected={i === ativa}
            onClick={() => setAtiva(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
              i === ativa
                ? "bg-brasa text-creme border-brasa"
                : "bg-transparent text-texto/70 border-texto/15 hover:border-brasa/50 hover:text-texto"
            }`}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
        {categoria.itens.map((item) => (
          <div
            key={item.nome}
            className="flex items-baseline justify-between gap-3 py-3.5 border-b border-dotted border-texto/20"
          >
            <div>
              <p className="text-texto font-medium">{item.nome}</p>
              {item.descricao && (
                <p className="text-xs text-texto/55 mt-0.5">{item.descricao}</p>
              )}
            </div>
            <span className="text-vinho font-semibold whitespace-nowrap">
              {item.preco}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
