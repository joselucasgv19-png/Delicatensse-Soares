import { ReactNode } from "react";

export default function BeneficioCard({
  icone,
  titulo,
  texto,
}: {
  icone: ReactNode;
  titulo: string;
  texto: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 hover:border-brasa/50 transition-colors">
      <div className="w-11 h-11 rounded-full bg-brasa/15 text-brasa flex items-center justify-center mb-5">
        {icone}
      </div>
      <h3 className="font-display text-lg text-creme mb-2">{titulo}</h3>
      <p className="text-sm text-creme/65 leading-relaxed">{texto}</p>
    </div>
  );
}
