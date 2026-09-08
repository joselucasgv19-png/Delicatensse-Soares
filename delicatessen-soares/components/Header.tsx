"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header className="sticky top-0 z-50 bg-carvao text-creme border-b border-white/10">
      <div className="container-page flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Delicatessen Soares"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg leading-none">
            Delicatessen
            <br />
            <span className="text-manteiga">Soares</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const ativo = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  ativo
                    ? "bg-brasa text-creme"
                    : "text-creme/80 hover:text-creme hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/localizacao"
            className="hidden lg:inline-flex items-center rounded-full bg-manteiga text-texto text-sm font-semibold px-4 py-2 hover:bg-white transition-colors"
          >
            Reservar mesa
          </a>
          <button
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            onClick={() => setAberto((v) => !v)}
            className="lg:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full hover:bg-white/10"
          >
            <span
              className={`block h-0.5 w-5 bg-creme transition-transform ${
                aberto ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-creme transition-opacity ${
                aberto ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-creme transition-transform ${
                aberto ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Painel mobile — fundo 100% sólido (sem transparência) para nunca deixar o conteúdo por trás aparecer */}
      <div
        className={`lg:hidden fixed inset-0 top-[76px] bg-carvao overflow-y-auto transition-transform duration-300 ${
          aberto ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 pt-6">
          {NAV_ITEMS.map((item) => {
            const ativo = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3.5 rounded-xl text-base border-b border-white/5 ${
                  ativo ? "text-manteiga font-semibold" : "text-creme/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/localizacao"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-manteiga text-texto text-base font-semibold px-4 py-3.5"
          >
            Reservar mesa
          </Link>
        </nav>
      </div>
    </header>
  );
}
