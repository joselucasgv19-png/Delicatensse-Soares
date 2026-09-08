import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-carvao min-h-[88vh] md:min-h-[92vh] flex items-center">
      {/* Foto de fundo do ambiente. Duas versões (mobile/desktop) evitam que a
          imagem fique esticada e borrada em cada tamanho de tela. */}
      <div className="absolute inset-0">
        <Image
          src="/images/restaurante-hero-mobile.jpg"
          alt="Ambiente da Delicatensse Soares, com mesas de madeira e iluminação quente"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src="/images/restaurante-hero-desktop.jpg"
          alt="Ambiente da Delicatensse Soares, com mesas de madeira e iluminação quente"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden md:block"
        />
      </div>

      {/* Camadas de gradiente para legibilidade do texto sobre a foto */}
      <div className="absolute inset-0 bg-gradient-to-r from-carvao via-carvao/80 to-carvao/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-carvao via-carvao/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-carvao to-transparent" />

      <div className="container-page relative py-20 md:py-10">
        <div className="max-w-2xl">
          <p className="text-manteiga font-semibold text-sm mb-5">
            Deli, padaria e cafeteria em Caetés/PE
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-creme leading-[1.05]">
            O sabor que faz você{" "}
            <span className="italic text-brasa">voltar sempre</span>
          </h1>
          <p className="mt-6 text-creme/85 text-lg max-w-xl leading-relaxed">
            Pães quentinhos, tábuas de frios, sanduíches e doces caseiros em um
            espaço de madeira e luz quente, feito para quem valoriza qualidade
            e um bom momento.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <WhatsAppButton
              variante="inline"
              mensagem="Olá! Vim pelo site e gostaria de reservar uma mesa na Delicatensse Soares."
            />
            <Link
              href="/cardapio"
              className="inline-flex items-center justify-center rounded-full border border-creme/30 text-creme font-semibold px-6 py-3.5 hover:bg-white/10 transition-colors"
            >
              Ver cardápio
            </Link>
          </div>

          <dl className="mt-14 md:mt-16 grid grid-cols-3 max-w-lg gap-4 sm:gap-6 border-t border-white/10 pt-7 sm:pt-8">
            <div>
              <dt className="sr-only">Anos de história</dt>
              <dd className="font-display text-2xl sm:text-3xl text-manteiga">15+</dd>
              <p className="text-creme/60 text-xs sm:text-sm mt-1">anos de história</p>
            </div>
            <div>
              <dt className="sr-only">Produtos artesanais</dt>
              <dd className="font-display text-2xl sm:text-3xl text-manteiga">40+</dd>
              <p className="text-creme/60 text-xs sm:text-sm mt-1">produtos artesanais</p>
            </div>
            <div>
              <dt className="sr-only">Avaliação média dos clientes</dt>
              <dd className="font-display text-2xl sm:text-3xl text-manteiga">4.9</dd>
              <p className="text-creme/60 text-xs sm:text-sm mt-1">avaliação dos clientes</p>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
