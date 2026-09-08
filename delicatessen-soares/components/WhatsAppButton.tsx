import { linkWhatsapp } from "@/lib/data";

export default function WhatsAppButton({
  mensagem = "Olá! Gostaria de fazer uma reserva na Delicatensse Soares.",
  variante = "flutuante",
}: {
  mensagem?: string;
  variante?: "flutuante" | "inline";
}) {
  const href = linkWhatsapp(mensagem);

  if (variante === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] text-white font-semibold px-6 py-3.5 hover:brightness-95 transition"
      >
        <IconeWhatsApp className="w-5 h-5" />
        Reservar pelo WhatsApp
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar mesa pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-selo hover:scale-105 transition-transform animate-[pulse-suave_2.6s_ease-in-out_infinite]"
    >
      <IconeWhatsApp className="w-7 h-7" />
      <style>{`
        @keyframes pulse-suave {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.45); }
          50% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
        }
      `}</style>
    </a>
  );
}

function IconeWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.05 2c-5.523 0-10 4.477-10 10 0 1.766.462 3.492 1.34 5.012L2 22l5.13-1.345A9.958 9.958 0 0 0 12.05 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.222a8.19 8.19 0 0 1-4.174-1.143l-.3-.178-3.043.798.813-2.967-.196-.305A8.222 8.222 0 1 1 20.272 12.06 8.23 8.23 0 0 1 12.05 20.222z" />
    </svg>
  );
}
