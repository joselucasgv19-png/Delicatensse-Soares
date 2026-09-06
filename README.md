# Delicatessen Soares — Landing Page

Landing page moderna e responsiva para a **Delicatessen Soares**, construída com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**.

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

Como não recebemos fotos reais do ambiente e dos pratos, as imagens foram substituídas por **placeholders estilizados** (`components/FotoCena.tsx`), com gradientes nas cores da marca e ícones ilustrativos — para que o layout já fique pronto e você só precise trocar pelas fotos reais.

Para usar fotos reais:
1. Coloque os arquivos em `public/imagens/` (crie a pasta).
2. Troque `<FotoCena ... />` por `<Image src="/imagens/sua-foto.jpg" alt="..." fill className="object-cover" />` (usando `next/image`) nos componentes desejados (`Hero.tsx`, `DishCard.tsx`, `RankedItem.tsx`, páginas de seção, etc.).

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
