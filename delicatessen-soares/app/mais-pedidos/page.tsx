import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RankedItem from "@/components/RankedItem";
import CTASection from "@/components/CTASection";
import { MAIS_PEDIDOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mais Pedidos",
  description:
    "Descubra os itens mais pedidos pelos nossos clientes na Delicatensse Soares.",
};

export default function MaisPedidosPage() {
  return (
    <>
      <PageHero
        rotulo="Os favoritos"
        titulo="Mais Pedidos"
        descricao="Um retrato do que nossos clientes mais escolhem, em ordem de preferência — do café da manhã à sobremesa."
      />

      <section className="bg-creme">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          {MAIS_PEDIDOS.map((prato, i) => (
            <RankedItem key={prato.slug} posicao={i + 1} prato={prato} />
          ))}
        </div>
      </section>

      <CTASection
        titulo="Quer experimentar os favoritos da casa?"
        texto="Fale com a gente pelo WhatsApp e monte seu pedido com o que há de mais pedido na Delicatensse Soares."
        mensagemWhatsapp="Olá! Quero pedir os itens Mais Pedidos da Delicatensse Soares."
      />
    </>
  );
}
