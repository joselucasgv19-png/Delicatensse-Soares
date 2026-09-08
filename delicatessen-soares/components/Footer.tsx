import Link from "next/link";
import Image from "next/image";
import { CONTATO, NAV_ITEMS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-carvao text-creme/80 textura-carvao">
      <div className="container-page py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Delicatensse Soares"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-display text-lg text-creme">
              Delicatensse Soares
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Sabor, qualidade e aquele prazer de encontrar tudo o que você
            procura em um só lugar.
          </p>
        </div>

        <div>
          <h3 className="text-creme font-semibold mb-4 text-sm">Navegação</h3>
          <ul className="space-y-2.5 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-manteiga transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-creme font-semibold mb-4 text-sm">Horários</h3>
          <ul className="space-y-2.5 text-sm">
            {CONTATO.horarios.map((h) => (
              <li key={h.dias} className="flex justify-between gap-4">
                <span>{h.dias}</span>
                <span className="text-creme/60">{h.horario}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-creme font-semibold mb-4 text-sm">Contato</h3>
          <ul className="space-y-2.5 text-sm">
            <li>{CONTATO.endereco}</li>
            <li>{CONTATO.telefoneExibicao}</li>
            <li>{CONTATO.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-creme/50">
          <p>
            © {new Date().getFullYear()} Delicatensse Soares. Todos os direitos
            reservados.
          </p>
          <p>Feito com carinho para quem gosta de bons sabores.</p>
        </div>
      </div>
    </footer>
  );
}
