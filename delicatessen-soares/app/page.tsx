import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import BeneficioCard from "@/components/BeneficioCard";
import DishCard from "@/components/DishCard";
import RankedItem from "@/components/RankedItem";
import MenuTabs from "@/components/MenuTabs";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import FotoReal from "@/components/FotoReal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { IconePin, IconeRelogio, IconeTelefone, IconeTabua } from "@/components/Icones";
import {
  DELICIAS_DA_CASA,
  MAIS_PEDIDOS,
  CARDAPIO,
  DEPOIMENTOS,
  CONTATO,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Apresentação */}
      <section className="bg-creme">
        <div className="container-page py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              rotulo="Nossa essência"
              titulo="Tudo o que você procura, em um só lugar"
              descricao="Na Delicatensse Soares, cada detalhe foi pensado para tornar sua experiência mais agradável — desde a escolha dos produtos até o momento de levar para casa aquilo que você gosta."
            />
            <p className="mt-5 text-texto/70 leading-relaxed max-w-xl">
              Um espaço para quem valoriza qualidade, praticidade e bons
              sabores, seja para o dia a dia, para aquele momento especial ou
              simplesmente para se permitir uma pausa que vale a pena.
            </p>
            <Link
              href="/sobre"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-vinho hover:text-brasa transition-colors"
            >
              Conhecer nossa história
            </Link>
            <FotoReal
              src="/images/restaurante-bar.jpg"
              alt="Clientes reunidos em uma mesa da Delicatensse Soares, em ambiente aconchegante"
              tomHover="brasa"
              className="mt-8 h-56 sm:h-64 rounded-2xl"
            />
          </div>
          <FotoReal
            src="/images/restaurante-2.jpg"
            alt="Ambiente da Delicatensse Soares, com mesas de madeira e iluminação quente"
            tomHover="vinho"
            className="h-80 md:h-96 rounded-3xl"
          />
        </div>
      </section>

      {/* Por que escolher */}
      <section className="bg-carvao textura-carvao">
        <div className="container-page py-20 md:py-24">
          <SectionHeading
            rotulo="Diferenciais"
            titulo="Por que escolher a Delicatensse Soares"
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
              icone={<IconeTelefone className="w-6 h-6" />}
              titulo="Praticidade para o seu dia"
              texto="Tudo em um só lugar para você encontrar o que precisa com mais facilidade e comodidade."
            />
          </div>
        </div>
      </section>

      {/* Delícias da Casa */}
      <section className="bg-creme">
        <div className="container-page py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeading
              rotulo="Especialidades"
              titulo="Delícias da Casa"
              descricao="Os produtos que carregam a nossa assinatura — do pão que sai do forno pela manhã à tábua feita para compartilhar."
            />
            <Link
              href="/delicias"
              className="font-semibold text-vinho hover:text-brasa transition-colors whitespace-nowrap"
            >
              Ver todas as delícias
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELICIAS_DA_CASA.map((prato) => (
              <DishCard key={prato.slug} prato={prato} />
            ))}
          </div>
        </div>
      </section>

      {/* Mais Pedidos */}
      <section className="bg-creme-escuro">
        <div className="container-page py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-4">
            <SectionHeading
              rotulo="Os favoritos"
              titulo="Mais Pedidos"
              descricao="Os itens que nossos clientes mais escolhem, em ordem de preferência."
            />
            <Link
              href="/mais-pedidos"
              className="font-semibold text-vinho hover:text-brasa transition-colors whitespace-nowrap"
            >
              Ver ranking completo
            </Link>
          </div>
          <div className="mt-8">
            {MAIS_PEDIDOS.map((prato, i) => (
              <RankedItem key={prato.slug} posicao={i + 1} prato={prato} />
            ))}
          </div>
        </div>
      </section>

      {/* Cardápio resumido */}
      <section className="bg-creme">
        <div className="container-page py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeading
              rotulo="Cardápio"
              titulo="Um pouco do que você encontra aqui"
              descricao="Da padaria às bebidas, um resumo do nosso cardápio completo."
            />
            <Link
              href="/cardapio"
              className="font-semibold text-vinho hover:text-brasa transition-colors whitespace-nowrap"
            >
              Ver cardápio completo
            </Link>
          </div>
          <MenuTabs categorias={CARDAPIO} />
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-carvao textura-carvao">
        <div className="container-page py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeading
              rotulo="Quem já provou"
              titulo="O que dizem nossos clientes"
              tom="escuro"
            />
            <Link
              href="/depoimentos"
              className="font-semibold text-manteiga hover:text-brasa transition-colors whitespace-nowrap"
            >
              Ver todos os depoimentos
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {DEPOIMENTOS.slice(0, 3).map((dep, i) => (
              <TestimonialCard key={dep.nome} depoimento={dep} destaque={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="bg-creme">
        <div className="container-page py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <FotoReal
            src="/images/restaurante-2.jpg"
            alt="Ambiente interno da Delicatensse Soares"
            tomHover="vinho"
            className="h-80 md:h-96 rounded-3xl order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <SectionHeading
              rotulo="Onde estamos"
              titulo="Venha nos visitar"
              descricao="Um espaço de madeira e luz quente, pronto para receber você."
            />
            <ul className="mt-6 space-y-4 text-texto/80">
              <li className="flex items-start gap-3">
                <IconePin className="w-5 h-5 text-vinho shrink-0 mt-0.5" />
                {CONTATO.endereco}
              </li>
              <li className="flex items-start gap-3">
                <IconeTelefone className="w-5 h-5 text-vinho shrink-0 mt-0.5" />
                {CONTATO.telefoneExibicao}
              </li>
              <li className="flex items-start gap-3">
                <IconeRelogio className="w-5 h-5 text-vinho shrink-0 mt-0.5" />
                Terça a sábado, 07h às 21h
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton variante="inline" />
              <Link
                href="/localizacao"
                className="inline-flex items-center justify-center rounded-full border border-texto/20 text-texto font-semibold px-6 py-3.5 hover:bg-texto/5 transition-colors"
              >
                Ver localização completa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        titulo="Seu próximo momento especial pode começar aqui"
        texto="Para aquele café especial, para compartilhar com a família ou simplesmente para se presentear com algo gostoso, a Delicatensse Soares está pronta para fazer parte dos seus melhores momentos."
      />
    </>
  );
}
