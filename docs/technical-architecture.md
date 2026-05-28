# Arquitetura Técnica

## Princípio central
O site deve ser estático, incrivelmente rápido e ter uma estética premium, seguindo a vertical SpecFirst Sites.

## Next.js
- Usar Next.js com App Router.
- Preferir Server Components para conteúdo SEO-first.
- **Client Components** são esperados e incentivados nas "folhas" da árvore de componentes (para usar `framer-motion`, estados, e microinterações), mantendo o layout principal estático.
- Gerar páginas estaticamente (SSG) sempre que possível.
- Não usar API routes no escopo padrão, exceto quando estritamente necessário (ex: formulário de contato).

## Bibliotecas e UI Permitidas e Incentivadas
Para atingir um nível de design "Framer Style", as seguintes ferramentas são padrão:
- **Tailwind CSS:** Para toda estilização.
- **Framer Motion:** Obrigatório para criar animações de entrada (fade-up) suaves, orquestração de elementos (stagger), e microinterações de alto nível.
- **shadcn/ui (ou Radix Primitives):** Para componentes base acessíveis.
- **Lucide React:** Para iconografia moderna.
- **Aceternity UI / Magic UI:** Permitido o uso de componentes isolados dessas bibliotecas para atingir efeitos premium (ex: Hero backgrounds, border beams, text reveals), desde que não quebrem o SSG ou prejudiquem drasticamente o Core Web Vitals.

## Conteúdo
O conteúdo editável deve ficar localmente em:
- `src/content/` ou `src/data/` (arquivos `.md`, `.mdx`, `.json`, `.ts`).
- Conteúdo não deve vir de CMS dinâmico nem de Banco de Dados.

## Estrutura sugerida do código-fonte (src/)
```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/    (Header, Footer)
│   ├── sections/  (Hero, Features, BentoGrid)
│   ├── ui/        (Botões, Inputs base baseados em shadcn)
│   ├── magic/     (Efeitos complexos tipo Aceternity/Magic UI)
│   └── seo/       (JSON-LD, Meta)
├── data/
├── lib/           (utils como cn() do clsx/tailwind-merge)
└── styles/        (globals.css)
```

## Proibido no escopo padrão
- Banco de dados.
- Autenticação (NextAuth/Clerk).
- CMS Headless ou Dashboards.
