import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { CONTATO } from "@/lib/data";
import { IconePin, IconeRelogio, IconeTelefone } from "@/components/Icones";

export const metadata: Metadata = {
  title: "Localização",
  description:
    "Encontre a Delicatensse Soares: endereço, horário de funcionamento e como chegar.",
};

export default function LocalizacaoPage() {
  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTATO.endereco
  )}&output=embed`;

  return (
    <>
      <PageHero
        rotulo="Onde estamos"
        titulo="Venha nos visitar"
        descricao="Um espaço de madeira e luz quente, pronto para te receber a qualquer momento da semana."
      />

      <section className="bg-creme">
        <div className="container-page py-16 md:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <div className="rounded-3xl overflow-hidden border border-texto/10 h-80 lg:h-auto min-h-[24rem]">
            <iframe
              title="Mapa da Delicatensse Soares"
              src={mapaSrc}
              className="w-full h-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-2xl text-texto mb-4">Endereço</h2>
              <p className="flex items-start gap-3 text-texto/80 leading-relaxed">
                <IconePin className="w-5 h-5 text-vinho shrink-0 mt-0.5" />
                {CONTATO.endereco}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-texto mb-4">Horário de funcionamento</h2>
              <ul className="space-y-2.5">
                {CONTATO.horarios.map((h) => (
                  <li key={h.dias} className="flex items-center justify-between gap-4 text-texto/80 border-b border-dotted border-texto/15 pb-2.5">
                    <span className="flex items-center gap-3">
                      <IconeRelogio className="w-4 h-4 text-vinho shrink-0" />
                      {h.dias}
                    </span>
                    <span className="font-medium">{h.horario}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-texto mb-4">Contato</h2>
              <p className="flex items-center gap-3 text-texto/80">
                <IconeTelefone className="w-5 h-5 text-vinho shrink-0" />
                {CONTATO.telefoneExibicao}
              </p>
            </div>

            <WhatsAppButton
              variante="inline"
              mensagem="Olá! Gostaria de reservar uma mesa na Delicatensse Soares."
            />
          </div>
        </div>
      </section>

      <CTASection
        titulo="Estamos te esperando"
        texto="Consulte nossa disponibilidade e encontre a melhor opção para o seu momento. Será um prazer receber você."
      />
    </>
  );
}
