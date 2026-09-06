import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-carvao textura-carvao veio-madeira">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(232,99,10,0.35),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(244,185,66,0.18),transparent_50%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-carvao to-transparent" />

      <div className="container-page relative py-20 md:py-28 lg:py-32">
        <p className="text-manteiga font-semibold text-sm mb-5">
          Deli, padaria e cafeteria em Caetés/PE
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-creme max-w-3xl leading-[1.05]">
          O sabor que faz você{" "}
          <span className="italic text-brasa">voltar sempre</span>
        </h1>
        <p className="mt-6 text-creme/80 text-lg max-w-xl leading-relaxed">
          Pães quentinhos, tábuas de frios, sanduíches e doces caseiros em um
          espaço de madeira e luz quente, feito para quem valoriza qualidade
          e um bom momento.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
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

        <dl className="mt-16 grid grid-cols-3 max-w-lg gap-6 border-t border-white/10 pt-8">
          <div>
            <dt className="sr-only">Anos de história</dt>
            <dd className="font-display text-3xl text-manteiga">15+</dd>
            <p className="text-creme/60 text-sm mt-1">anos de história</p>
          </div>
          <div>
            <dt className="sr-only">Produtos artesanais</dt>
            <dd className="font-display text-3xl text-manteiga">40+</dd>
            <p className="text-creme/60 text-sm mt-1">produtos artesanais</p>
          </div>
          <div>
            <dt className="sr-only">Avaliação média dos clientes</dt>
            <dd className="font-display text-3xl text-manteiga">4.9</dd>
            <p className="text-creme/60 text-sm mt-1">avaliação dos clientes</p>
          </div>
        </dl>
      </div>
    </section>
  );
}
