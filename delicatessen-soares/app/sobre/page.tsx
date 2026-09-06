import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BeneficioCard from "@/components/BeneficioCard";
import FotoCena from "@/components/FotoCena";
import CTASection from "@/components/CTASection";
import { IconePao, IconeTabua, IconePin, IconeRelogio } from "@/components/Icones";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história e o conceito da Delicatessen Soares: sabor, qualidade e o prazer de encontrar tudo em um só lugar.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        rotulo="Nossa história"
        titulo="Sabor, qualidade e aquele prazer de encontrar tudo o que você procura em um só lugar"
        descricao="Conheça o conceito por trás da Delicatessen Soares."
      />

      <section className="bg-creme">
        <div className="container-page py-16 md:py-20 grid md:grid-cols-2 gap-14 items-start">
          <div className="space-y-6 text-texto/80 leading-relaxed text-lg">
            <p>
              Na Delicatessen Soares, cada detalhe foi pensado para tornar
              sua experiência mais agradável, desde a escolha dos produtos
              até o momento de levar para casa aquilo que você gosta.
            </p>
            <p>
              Um espaço para quem valoriza qualidade, praticidade e bons
              sabores, seja para o dia a dia, para aquele momento especial ou
              simplesmente para se permitir uma pausa e aproveitar algo que
              realmente vale a pena.
            </p>
            <p>
              Aqui, encontrar o que você procura fica mais fácil, com uma
              experiência acolhedora e um atendimento próximo, pensado para
              receber cada cliente com atenção.
            </p>
          </div>
          <FotoCena
            icone={<IconePao className="w-full h-full" />}
            tom="manteiga"
            legenda="Pão assado todas as manhãs"
            className="h-80 md:h-[26rem] rounded-3xl"
          />
        </div>
      </section>

      <section className="bg-carvao textura-carvao">
        <div className="container-page py-20 md:py-24">
          <SectionHeading
            rotulo="Por que escolher a Delicatessen Soares"
            titulo="Diferenciais que fazem parte do nosso dia a dia"
            tom="escuro"
            alinhamento="centro"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <BeneficioCard
              icone={<IconeTabua className="w-6 h-6" />}
              titulo="Qualidade em cada escolha"
              texto="Produtos selecionados para oferecer uma experiência que combina sabor, praticidade e confiança."
            />
            <BeneficioCard
              icone={<IconeRelogio className="w-6 h-6" />}
              titulo="Variedade para diferentes momentos"
              texto="Uma opção para o café, para a rotina, para receber alguém em casa ou simplesmente para aproveitar seu momento."
            />
            <BeneficioCard
              icone={<IconePin className="w-6 h-6" />}
              titulo="Atendimento próximo"
              texto="Mais do que vender produtos, queremos proporcionar uma experiência agradável desde o primeiro contato."
            />
            <BeneficioCard
              icone={<IconePao className="w-6 h-6" />}
              titulo="Praticidade para o seu dia"
              texto="Tudo em um só lugar para você encontrar o que precisa com mais facilidade e comodidade."
            />
          </div>
        </div>
      </section>

      <section className="bg-creme">
        <div className="container-page py-20 md:py-24 max-w-3xl">
          <SectionHeading
            rotulo="Nossa filosofia"
            titulo="Uma experiência que começa antes da primeira mordida"
            descricao="Uma boa delicatessen não é apenas sobre o que está na prateleira. É sobre a sensação de encontrar algo que desperta vontade, a praticidade de resolver tudo em um só lugar e a satisfação de voltar porque a experiência vale a pena."
          />
          <p className="mt-6 text-texto/75 leading-relaxed text-lg">
            A Delicatessen Soares busca oferecer justamente isso: um lugar
            onde qualidade, sabor e atendimento caminham juntos.
          </p>
        </div>
      </section>

      <CTASection
        titulo="Visite a Delicatessen Soares"
        texto="Venha conhecer, descobrir seus favoritos e aproveitar uma experiência feita para quem gosta de qualidade e bons sabores. Entre em contato, consulte nossa disponibilidade e encontre a melhor opção para o seu momento."
      />
    </>
  );
}
