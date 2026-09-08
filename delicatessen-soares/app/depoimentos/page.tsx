import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { DEPOIMENTOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Veja o que os clientes da Delicatensse Soares têm a dizer sobre nossa qualidade e atendimento.",
};

export default function DepoimentosPage() {
  return (
    <>
      <PageHero
        rotulo="Quem já provou"
        titulo="O que dizem nossos clientes"
        descricao="Histórias reais de quem já faz da Delicatensse Soares parte da rotina."
      />

      <section className="bg-creme">
        <div className="container-page py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {DEPOIMENTOS.map((dep, i) => (
              <TestimonialCard key={dep.nome} depoimento={dep} destaque={i % 3 === 1} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        titulo="Vire a próxima história"
        texto="Venha viver essa experiência e conte pra gente o que você achou. Estamos ansiosos para te receber."
      />
    </>
  );
}
