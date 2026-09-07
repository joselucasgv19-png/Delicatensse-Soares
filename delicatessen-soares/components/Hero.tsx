import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-carvao min-h-[88vh] md:min-h-[92vh] flex items-center">
      {/* Foto principal do ambiente, com abertura 3D da esquerda para a direita */}
      <div className="absolute inset-0">
        <Image
          src="/images/restaurante.jpg"
          alt="Ambiente da Delicatessen Soares, com mesas de madeira e iluminação quente"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-abrir-3d"
        />
      </div>

      {/* Camadas de gradiente para legibilidade do texto e clima quente */}
      <div className="absolute inset-0 bg-gradient-to-r from-carvao via-carvao/80 to-carvao/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-carvao via-carvao/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(232,99,10,0.30),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(244,185,66,0.16),transparent_50%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-carvao to-transparent" />

      <div className="container-page relative py-20 md:py-10">
        <div className="max-w-2xl">
          <p className="text-manteiga font-semibold text-sm mb-5 animate-subir-suave">
            Deli, padaria e cafeteria em Caetés/PE
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-creme leading-[1.05] animate-subir-suave-2">
            O sabor que faz você{" "}
            <span className="italic text-brasa">voltar sempre</span>
          </h1>
          <p className="mt-6 text-creme/85 text-lg max-w-xl leading-relaxed animate-subir-suave-3">
            Pães quentinhos, tábuas de frios, sanduíches e doces caseiros em um
            espaço de madeira e luz quente, feito para quem valoriza qualidade
            e um bom momento.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-subir-suave-4">
            <WhatsAppButton
              variante="inline"
              mensagem="Olá! Vim pelo site e gostaria de reservar uma mesa na Delicatessen Soares."
            />
            <Link
              href="/cardapio"
              className="inline-flex items-center justify-center rounded-full border border-creme/30 text-creme font-semibold px-6 py-3.5 hover:bg-white/10 transition-colors"
            >
              Ver cardápio
            </Link>
          </div>

          <dl className="mt-14 md:mt-16 grid grid-cols-3 max-w-lg gap-4 sm:gap-6 border-t border-white/10 pt-7 sm:pt-8 animate-subir-suave-5">
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

      {/* Segunda foto do restaurante, como cartão flutuante (só em telas maiores) */}
      <div className="hidden lg:block absolute bottom-10 right-10 xl:right-16 w-56 h-72 xl:w-64 xl:h-80 animate-abrir-3d-atraso">
        <div className="group relative w-full h-full rounded-2xl overflow-hidden border-4 border-creme/10 shadow-selo">
          <Image
            src="/images/restaurante-2.jpg"
            alt="Cantinho da Delicatessen Soares"
            fill
            sizes="256px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vinho/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-4 ring-inset ring-manteiga/40" />
        </div>
      </div>
    </section>
  );
}
