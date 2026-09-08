import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DishCard from "@/components/DishCard";
import CTASection from "@/components/CTASection";
import { DELICIAS_DA_CASA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Delícias da Casa",
  description:
    "Conheça as especialidades da Delicatessen Soares: pães artesanais, tábuas de frios, sanduíches e doces caseiros.",
};

export default function DeliciasPage() {
  return (
    <>
      <PageHero
        rotulo="Especialidades"
        titulo="Delícias da Casa"
        descricao="Os produtos que carregam a nossa assinatura — cada um pensado para trazer sabor, qualidade e aquele toque especial ao seu dia."
      />

      <section className="bg-creme">
        <div className="container-page py-16 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {DELICIAS_DA_CASA.map((prato) => (
              <DishCard key={prato.slug} prato={prato} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        titulo="Bateu a vontade?"
        texto="Reserve sua mesa ou faça seu pedido agora mesmo pelo WhatsApp e garanta suas delícias favoritas."
        mensagemWhatsapp="Olá! Vi as Delícias da Casa no site e gostaria de fazer um pedido."
      />
    </>
  );
}
