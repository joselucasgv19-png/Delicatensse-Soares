import type { Depoimento } from "@/lib/data";
import { IconeAspas } from "./Icones";

export default function TestimonialCard({
  depoimento,
  destaque = false,
}: {
  depoimento: Depoimento;
  destaque?: boolean;
}) {
  return (
    <figure
      className={`rounded-2xl p-7 flex flex-col gap-4 ${
        destaque
          ? "bg-vinho text-creme"
          : "bg-white text-texto border border-texto/10"
      }`}
    >
      <IconeAspas className={`w-8 h-6 ${destaque ? "text-manteiga" : "text-brasa"}`} />
      <blockquote className={`text-base leading-relaxed ${destaque ? "text-creme/95" : "text-texto/85"}`}>
        {depoimento.texto}
      </blockquote>
      <figcaption className="mt-auto pt-2">
        <p className="font-semibold">{depoimento.nome}</p>
        {depoimento.cidade && (
          <p className={`text-sm ${destaque ? "text-creme/60" : "text-texto/50"}`}>
            {depoimento.cidade}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
