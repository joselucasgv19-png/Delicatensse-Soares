import WhatsAppButton from "./WhatsAppButton";

export default function CTASection({
  titulo,
  texto,
  mensagemWhatsapp,
}: {
  titulo: string;
  texto: string;
  mensagemWhatsapp?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-vinho">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(244,185,66,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(232,99,10,0.35),transparent_55%)]" />
      <div className="container-page relative py-16 md:py-20 text-center flex flex-col items-center gap-6">
        <h2 className="font-display text-3xl md:text-5xl text-creme max-w-2xl">
          {titulo}
        </h2>
        <p className="text-creme/85 max-w-xl text-base md:text-lg leading-relaxed">
          {texto}
        </p>
        <WhatsAppButton mensagem={mensagemWhatsapp} variante="inline" />
      </div>
    </section>
  );
}
