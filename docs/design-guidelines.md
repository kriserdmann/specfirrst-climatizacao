# Diretrizes de Design (Padrão Premium / "Estilo Framer")

## Personalidade visual
O design deve transmitir altíssimo valor, semelhante aos sites criados no Framer ou premiados no Awwwards.
- **Premium e Moderno:** Visual sofisticado, sem parecer um template genérico de Tailwind.
- **Dinâmico:** O site deve parecer "vivo" sem sacrificar a performance.

## Princípios de UI/UX ("Framer Style")
1. **Espaçamento e Respiro (Whitespace):** Use espaçamentos generosos (paddings grandes, gaps amplos). O conteúdo precisa respirar.
2. **Tipografia de Alto Impacto:**
   - Use fontes modernas e sem serifa (ex: *Inter*, *Plus Jakarta Sans*, *Outfit*, *Geist*).
   - Títulos (H1/H2) devem ter peso e tamanho expressivos (tracking levemente negativo para um visual mais elegante).
   - Contraste perfeito entre o título e o texto de apoio (usar tons de cinza como text-muted-foreground para descrições).
3. **Animações e Microinterações:**
   - **É obrigatório** o uso de animações suaves (ex: fade-in-up em seções ao rolar a página).
   - Use *Framer Motion* para animações declarativas, mas com moderação para não destruir a performance (preferir `viewport={{ once: true }}`).
   - Efeitos de hover refinados em botões e cards (ex: leve translate-y, scale ou mudança suave de sombra e borda).
4. **Bento Grids e Cards:** Para exibir funcionalidades ou serviços, prefira layouts de "Bento Box" com bordas sutis (ex: `border-white/10` em dark mode), fundos levemente translúcidos e gradientes radiais muitos suaves.
5. **Glassmorphism e Blurs:** Uso moderado de backdrops desfocados (`backdrop-blur-md`) em headers ou modais, transmitindo profundidade.
6. **Dark Mode / Light Mode:** Escolha uma paleta coesa. Se for Dark Mode, não use preto absoluto (`#000`), mas tons de cinza profundos (ex: `#09090b` ou `#020617`).

## Regra de Ouro da Componentização
A criação de UI deve sempre seguir a regra: **Sempre crie um componente de UI isolado antes de usá-lo na composição de uma página.**
Para atingir o "Estilo Framer", utilize bibliotecas modernas de componentes como **Aceternity UI**, **Magic UI** ou **shadcn/ui**, e adapte o CSS para a marca do cliente.

## O Que Evitar
- **Vibe Coding desleixado:** Empilhar divs com classes Tailwind aleatórias sem criar uma estrutura reutilizável.
- Elementos genéricos de IA (imagens clichês ou ilustrações vetorizadas gratuitas antigas).
- Cores primárias vibrantes berrantes aplicadas em fundos grandes; prefira acentos coloridos em fundos neutros.
- Layouts caóticos sem grid claro; respeite o alinhamento e a arquitetura da informação.
