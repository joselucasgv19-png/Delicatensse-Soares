import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-creme">
      <div className="container-page py-28 text-center flex flex-col items-center gap-6">
        <p className="text-vinho font-semibold">Página não encontrada</p>
        <h1 className="font-display text-4xl md:text-5xl text-texto max-w-lg">
          Parece que essa página saiu do forno em outro endereço
        </h1>
        <p className="text-texto/70 max-w-md">
          Volte para a página inicial e encontre o que você procura na
          Delicatensse Soares.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-brasa text-creme font-semibold px-6 py-3.5 hover:bg-brasa-escura transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
