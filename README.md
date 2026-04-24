# KairoLab

Website institucional da **KairoLab**, apresentando os projetos atuais, os membros ativos do ecossistema e a stack principal de cada iniciativa.

## Visão geral

O projeto foi construído em **Next.js 16** com **App Router**, utilizando **TypeScript** e **Tailwind CSS** para criar uma interface moderna, responsiva e fácil de manter.

Atualmente, o site apresenta:

- Projetos atuais com descrição, stack e membros associados
- Página de membros com avatares do GitHub, especialidades e projetos relacionados
- Dados centralizados em `lib/data.ts` para facilitar manutenção
- Assets locais em `public/` com as logos reais dos projetos

## Tecnologias do projeto

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm
- shadcn/ui
- Lucide React

## Estrutura principal

```bash
app/
  page.tsx
  projects/page.tsx
  team/page.tsx
components/
lib/
  data.ts
public/
  kairo.png
  cegal.png
  fynco.png
  less.png
  vavahelper.png
```

## Como rodar localmente

```bash
pnpm install
pnpm dev
```

Acesse:

```bash
http://localhost:3000
```

## Scripts úteis

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Onde alterar projetos e membros

A configuração principal está em:

```bash
lib/data.ts
```

Nesse arquivo você pode alterar:

- membros
- usernames do GitHub
- links sociais
- projetos
- stacks por projeto
- relação entre membros e projetos

## Commit sugerido

```bash
git add .
git commit -m "feat: update projects and team data"
```
