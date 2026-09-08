import { ReactNode } from "react";

const TONS: Record<string, string> = {
  brasa: "from-brasa via-brasa-escura to-vinho-escuro",
  vinho: "from-vinho via-vinho-escuro to-carvao",
  manteiga: "from-manteiga via-brasa to-vinho-escuro",
  carvao: "from-carvao-claro via-carvao to-carvao",
};

export default function FotoCena({
  icone,
  legenda,
  tom = "brasa",
  className = "",
}: {
  icone: ReactNode;
  legenda?: string;
  tom?: keyof typeof TONS;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${TONS[tom]} ${className}`}
    >
      <div className="absolute inset-0 veio-madeira opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
      <div className="relative h-full w-full flex flex-col items-center justify-center gap-3 text-creme/90 p-6">
        <div className="w-14 h-14">{icone}</div>
        {legenda && (
          <span className="text-xs tracking-wide text-creme/70 text-center">
            {legenda}
          </span>
        )}
      </div>
    </div>
  );
}
