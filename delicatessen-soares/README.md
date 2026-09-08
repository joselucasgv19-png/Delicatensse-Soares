# Delicatensse Soares — Landing Page

Landing page moderna e responsiva para a **Delicatensse Soares**, construída com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**.

## Estrutura de seções (uma rota por aba)

| Rota            | Seção                                   |
|-----------------|------------------------------------------|
| `/`             | Home — reúne todas as seções em sequência (banner, apresentação, delícias, mais pedidos, cardápio, depoimentos, localização, CTA) |
| `/sobre`        | História e conceito do restaurante       |
| `/delicias`     | Delícias da Casa (especialidades)        |
| `/mais-pedidos` | Ranking dos itens mais pedidos           |
| `/cardapio`     | Cardápio completo, com abas por categoria|
| `/depoimentos`  | Depoimentos de clientes                  |
| `/localizacao`  | Endereço, horários e mapa                |

O botão flutuante de **WhatsApp** aparece em todas as páginas (`components/WhatsAppButton.tsx`).

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

O projeto já inclui `vercel.json` com a configuração para Next.js.

1. Suba este projeto para um repositório no GitHub/GitLab/Bitbucket.
2. Em [vercel.com](https://vercel.com), clique em **New Project** e importe o repositório.
3. A Vercel detecta automaticamente o framework Next.js — não é preciso alterar nada.
4. Clique em **Deploy**.

Ou, via CLI:

```bash
npm i -g vercel
vercel
```

## O que personalizar antes de publicar

Tudo o que precisa de dado real está centralizado em **`lib/data.ts`**:

- `CONTATO.whatsappNumero` — número de WhatsApp real, no formato `55DDXXXXXXXXX` (sem espaços, traços ou `+`).
- `CONTATO.endereco`, `CONTATO.telefoneExibicao`, `CONTATO.horarios`, `CONTATO.instagram`.
- `DELICIAS_DA_CASA`, `MAIS_PEDIDOS`, `CARDAPIO`, `DEPOIMENTOS` — textos e preços de exemplo, ajuste para o cardápio real.

### Fotos

As fotos reais enviadas já estão em `public/images/` e conectadas em `lib/data.ts` (campo `imagem` de cada prato):

| Arquivo                          | Usado em                                              |
|-----------------------------------|--------------------------------------------------------|
| `restaurante.jpg`                 | Fundo do banner principal (Hero)                        |
| `restaurante-2.jpg`               | Cartão flutuante no Hero + seção de Localização na Home |
| `pao-artesanal.jpg`                | Pão de fermentação natural (Delícias da Casa + Sobre)   |
| `tabua-frios.jpg`                  | Tábua Soares (Delícias da Casa, Mais Pedidos e Home)    |
| `bolo-fuba.jpg`                    | Bolo de fubá caseiro (Delícias da Casa)                 |
| `cafe-pao-de-queijo.jpg`           | Café + pão de queijo (Mais Pedidos)                     |
| `bolo-fatia.jpg`                   | Fatia de bolo do dia (Mais Pedidos)                     |

Itens sem foto (**Sanduíche Soares** e **Sanduíche natural de frango**) continuam usando o placeholder ilustrado (`components/FotoCena.tsx`) — a foto de sanduíche enviada tinha uma marca d'água visível da Adobe Stock, então não pode ser usada no site (imagem de banco de imagens sem licença). Quando tiver uma foto própria ou licenciada, salve-a em `public/images/sanduiche.jpg` e adicione `imagem: "/images/sanduiche.jpg"` nos itens correspondentes em `lib/data.ts`.

As duas fotos do restaurante enviadas para o banner eram o mesmo arquivo duplicado — por isso usei dois recortes diferentes da mesma imagem (um para o fundo do banner, outro para o cartão flutuante). Se tiver uma segunda foto de fato diferente, é só substituir `public/images/restaurante-2.jpg`.

Para adicionar fotos em novos lugares, use o componente `components/FotoReal.tsx` (já pronto com o efeito de hover nas cores da marca) ou `<Image src="/images/sua-foto.jpg" alt="..." fill className="object-cover" />`.

### Animações

- **Abertura do banner:** a foto principal do Hero entra com um efeito 3D da esquerda para a direita (`animate-abrir-3d` em `app/globals.css`), e os textos aparecem em sequência logo em seguida.
- **Transição entre páginas:** `app/template.tsx` é remontado pelo Next.js a cada navegação, então toda vez que o visitante troca de aba pelo menu (ou abre uma página direto), o conteúdo entra com um fade + leve deslocamento (`animate-page-enter`).
- **Hover nas fotos:** ao passar o mouse, as imagens dão um leve zoom e recebem uma sobreposição de cor da marca (vermelho ou laranja) com uma borda amarela sutil — ver `components/FotoReal.tsx`, `DishCard.tsx` e `RankedItem.tsx`.

Todas as animações respeitam a preferência do sistema "reduzir movimento" (`prefers-reduced-motion`), desativando-se automaticamente para quem configurou isso no aparelho.

### Menu mobile

O painel do menu mobile agora usa fundo 100% sólido (sem transparência/blur), evitando que o conteúdo por trás apareça quando a página tem fundo claro.

### Logo e favicon

A logo enviada já está em `public/logo.png`, e o favicon (`public/favicon.ico`) e o ícone para iOS (`public/apple-touch-icon.png`) foram gerados automaticamente a partir dela.

### Cores

Paleta definida em `tailwind.config.ts`:

| Nome        | Uso                          | Cor       |
|-------------|-------------------------------|-----------|
| `carvao`    | Preto quente (fundos escuros) | `#1C1712` |
| `brasa`     | Laranja (ação/destaque)       | `#E8630A` |
| `vinho`     | Vermelho (selos/CTA)          | `#A6272E` |
| `manteiga`  | Amarelo (destaques claros)    | `#F4B942` |
| `creme`     | Branco quente (fundos claros) | `#FAF6EF` |
| `texto`     | Texto principal               | `#1F1A15` |

### Mapa

A página `/localizacao` usa um embed do Google Maps sem necessidade de chave de API, gerado a partir do endereço em `lib/data.ts`. Basta atualizar `CONTATO.endereco` com o endereço real.

## Tecnologias

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Fontes: Fraunces (títulos) e Manrope (texto), via `next/font/google`
