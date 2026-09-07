import Image from "next/image";

export default function FotoReal({
  src,
  alt,
  className = "",
  tomHover = "vinho",
  sizes = "(max-width: 768px) 100vw, 50vw",
  prioridade = false,
}: {
  src: string;
  alt: string;
  className?: string;
  tomHover?: "vinho" | "brasa";
  sizes?: string;
  prioridade?: boolean;
}) {
  const gradienteHover =
    tomHover === "brasa"
      ? "from-brasa/55 via-brasa/0"
      : "from-vinho/55 via-vinho/0";

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={prioridade}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradienteHover} to-transparent opacity-50 group-hover:opacity-85 transition-opacity duration-500`}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-4 ring-inset ring-manteiga/40" />
    </div>
  );
}
