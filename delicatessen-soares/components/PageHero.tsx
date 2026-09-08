export default function PageHero({
  rotulo,
  titulo,
  descricao,
}: {
  rotulo: string;
  titulo: string;
  descricao?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-carvao textura-carvao veio-madeira">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(232,99,10,0.3),transparent_50%)]" />
      <div className="container-page relative py-14 md:py-20">
        <p className="text-manteiga font-semibold text-sm mb-3">{rotulo}</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-creme max-w-2xl">
          {titulo}
        </h1>
        {descricao && (
          <p className="mt-4 text-creme/75 max-w-xl leading-relaxed">
            {descricao}
          </p>
        )}
      </div>
    </section>
  );
}
