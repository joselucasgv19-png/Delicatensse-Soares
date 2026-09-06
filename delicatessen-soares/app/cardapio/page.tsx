import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MenuTabs from "@/components/MenuTabs";
import CTASection from "@/components/CTASection";
import { CARDAPIO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cardápio",
  description:
    "Confira o cardápio completo da Delicatessen Soares: padaria, frios e queijos, sanduíches, doces e bebidas.",
};

export default function CardapioPage() {
  return (
    <>
      <PageHero
        rotulo="Cardápio completo"
        titulo="Tudo o que você encontra na Delicatessen Soares"
        descricao="Navegue pelas categorias abaixo e descubra opções para cada momento do seu dia."
      />

      <section className="bg-creme">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          <MenuTabs categorias={CARDAPIO} />
          <p className="mt-10 text-sm text-texto/50">
            Cardápio sujeito a alterações e disponibilidade dos ingredientes.
            Consulte valores atualizados diretamente conosco.
          </p>
        </div>
      </section>

      <CTASection
        titulo="Ficou com vontade de algo daqui?"
        texto="Fale com a gente agora pelo WhatsApp e faça já o seu pedido ou reserva."
        mensagemWhatsapp="Olá! Vi o cardápio no site e gostaria de fazer um pedido."
      />
    </>
  );
}
