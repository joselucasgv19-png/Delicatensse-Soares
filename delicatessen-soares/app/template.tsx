export default function Template({ children }: { children: React.ReactNode }) {
  // O template.tsx é remontado pelo Next.js a cada navegação entre rotas,
  // então a animação abaixo roda tanto na primeira abertura da página
  // quanto toda vez que o usuário troca de aba/seção pelo menu.
  return <div className="animate-page-enter">{children}</div>;
}
