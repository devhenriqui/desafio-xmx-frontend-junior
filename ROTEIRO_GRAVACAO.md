# Roteiro & Guia de Gravação de Vídeo (Etapa 3)
**Duração Alvo:** 5 a 12 minutos  
**Formato:** Gravação de tela (com áudio do microfone narrando enquanto mostra o navegador e o código no VS Code)  
**Ferramentas sugeridas:** Loom, OBS Studio, Clipchamp ou gravação nativa do Windows (`Win + G` / Xbox Game Bar).

---

## Estrutura Cronológica Sugerida (Minuto a Minuto)

| Bloco | Tempo Estimado | O que mostrar na tela | O que falar / Narrativa |
| :--- | :--- | :--- | :--- |
| **1. Introdução & Demonstração Visual** | 0:00 - 2:00 | Navegador com a página aberta, redimensionando o DevTools | Apresentar o projeto, mostrar a fidelidade ao design do Figma, demonstrar a responsividade fluida (360px até 1920px) e interações (FAQ abrindo suavemente, carrosséis e botões). |
| **2. Decisões Técnicas de Engenharia** | 2:00 - 5:00 | VS Code aberto em `index.html`, `style.css` e `main.js` | Explicar a arquitetura sem frameworks, o uso de CSS Grid vs Flexbox, variáveis CSS, acessibilidade (ARIA) e a lógica em JavaScript puro para propagação de UTMs. |
| **3. Uso Transparente & Crítico de IA** | 5:00 - 9:00 | VS Code ou Bloco de notas com os prompts e comparações | Responder com honestidade total: onde a IA foi usada, os modelos/ferramentas, exibir prompt real, **o que a IA gerou de errado e foi corrigido/descartado por você**, e como foi o fluxo de trabalho. |
| **4. Estimativa de Tempo & Conclusão** | 9:00 - 11:00 | `README.md` e `DIAGNOSTICO.md` | Detalhar o tempo real gasto em cada etapa (incluindo diagnóstico e travamentos), lições aprendidas e encerramento. |

---

## 🎙️ Roteiro Narrativo Detalhado (Fale com suas próprias palavras)

### Bloco 1: Demonstração da Página e Interatividade (0:00 - 2:00)
* *"Olá pessoal da equipe de tecnologia da XMX CORP! Meu nome é [Seu Nome], e esta é a apresentação do meu Desafio Técnico para a vaga de Front-End Júnior 2."*
* *(Mostre a página no navegador)* *"Aqui está a landing page da Tenurima™ Blood Pressure Support reconstruída com 100% de fidelidade ao Figma e zero frameworks externos — apenas HTML5 semântico, CSS3 moderno e Vanilla JavaScript."*
* *(Abra o DevTools com F12 e redimensione a tela)* *"Quero começar destacando a responsividade. A página foi testada rigorosamente desde 360px (mobile pequeno), passando por 414px, tablets em 768px, laptops em 1024px até monitores widescreen de 1440px e 1920px. Não há scroll horizontal, nenhum container estourado e os elementos se reorganizam de forma harmônica."*
* *(Clique nos itens do FAQ e arraste o carrossel)* *"O acordeão do FAQ funciona perfeitamente com transições suaves e acessibilidade via teclado com WAI-ARIA, os carrosséis possuem navegação touch-friendly com autoplay, e os cards de kits se adaptam responsivamente."*

---

### Bloco 2: Decisões Técnicas & Arquitetura de Código (2:00 - 5:00)
* *(Abra o VS Code no arquivo `index.html`)* *"Na estruturação do HTML, priorizei tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`). Isso melhora o SEO, o ranqueamento orgânico e a acessibilidade para leitores de tela."*
* *(Abra o arquivo `style.css`)* *"No CSS, estruturei um sistema de Design Tokens utilizando CSS Variables no `:root` para gerenciar as cores da marca (gradientes dourados, fundos escuros e sombras). Adotei uma combinação intencional de **CSS Grid** e **Flexbox**:"*
  * *"Utilizei **CSS Grid** nas estruturas bidimensionais e rígidas, como a seção de precificação dos 3 kits (`.kits-grid`) e na listagem de benefícios, garantindo alinhamento de colunas e cartões com alturas equivalentes."*
  * *"Utilizei **Flexbox** para componentes unidimensionais e alinhamentos de fluxo, como o header, badges, listas com ícones de check e cabeçalhos de depoimentos."*
* *(Abra o arquivo `main.js`)* *"No JavaScript, optei por modularizar em funções auto-executáveis com `'use strict'`. Desenvolvi a propagação de parâmetros de URL (UTMs) com tratamento defensivo: o script lê os parâmetros da URL atual e os anexa a todos os links de checkout sem duplicar chaves e sem quebrar caso algum botão não possua `href`."*
* *"A parte mais desafiadora foi garantir que o layout dos 3 cards de kits ficasse perfeitamente alinhado visualmente em telas intermediárias (como tablets de 768px a 1024px), onde o card central ('Best Value') tem maior destaque e dimensões diferentes. Resolvi isso usando uma transição controlada via media query, transformando a visualização em coluna única abaixo de 1024px com ordenação limpa."*

---

### Bloco 3: Onde e Como Usou IA (Uso Crítico e Transparência) (5:00 - 9:00)

> **Observação:** Esta é a parte mais importante para a banca avaliadora. Seja sincero, mostre que você domina o código e que a IA foi uma aceleradora, não uma muleta.

* **1. Ferramentas e Modelos Utilizados:**
  * *"Utilizei assistentes de IA (como Gemini / Claude) para acelerar tarefas repetitivas, como estruturar os textos longos dos 18 itens do FAQ e gerar a base inicial de variáveis CSS."*
* **2. Exemplo de Prompt Real:**
  * *(Mostre na tela ou leia o prompt)*:
    > *"Estruture um array semântico com os 18 itens de perguntas e respostas do FAQ em HTML5 acessível, utilizando a estrutura `<button class='accordion-header' aria-expanded='false'>` e `<div class='accordion-body'>`, garantindo tags semânticas e sem classes de frameworks como Bootstrap ou Tailwind."*
* **3. O que a IA gerou e você DESCARTOU ou CORRIGIU? (Crucial):**
  * *"A IA tentou inicialmente gerar o JavaScript do carrossel usando uma biblioteca pesada ou com animações em jQuery, o que violava as regras do desafio. Descartei imediatamente e implementei a integração limpa com Swiper Vanilla via CDN e CSS nativo."*
  * *"No CSS, a IA frequentemente adicionava classes redundantes ou usava medidas fixas em `px` para margens e larguras em mobile. Eu refinei e substituí tudo por medidas fluidas com `clamp()`, `rem` e `padding` proporcional para evitar quebras em telas pequenas."*
  * *"Na auditoria da Etapa 1, a IA apontava erros genéricos como 'melhorar contraste de cores'. Eu fiz a inspeção manual no DevTools para encontrar as causas raízes reais: a ausência do pacote de 6 frascos prometido no banner superior, o aninhamento inválido de `<button>` dentro de `<a>` nos kits e a omissão do elemento `.swiper-pagination` no DOM."*
* **4. Em algum momento a IA te atrapalhou?**
  * *"Sim, ao tentar gerar o script de unificação de UTMs, a IA sugeriu uma função que limpava os parâmetros anteriores ou travava com URLs relativas (`/linkoffer`). Foi necessário reescrever a lógica usando a API moderna `URL` e `URLSearchParams` com `try/catch` para garantir resiliência total em produção."*

---

### Bloco 4: Estimativa de Tempo Real & Conclusão (9:00 - 11:00)

* **Detalhamento do Tempo Gasto:**
  * **Etapa 1 — Diagnóstico Técnico & Inspeção:** ~1h30 (análise de código, inspeção de console, testes em 360px/768px/1440px e redação do `DIAGNOSTICO.md`).
  * **Etapa 2 — Implementação Front-End (HTML/CSS/JS):** ~3h30 (criação da estrutura semântica, desenvolvimento do CSS com grid/flex e variáveis, scripts interativos, otimização das imagens e ajustes finos de responsividade).
  * **Testes em Múltiplas Resoluções & Acessibilidade:** ~1h00 (validação de foco, navegação por teclado e ausência de scroll horizontal).
  * **Etapa 3 — Documentação e Gravação:** ~1h00 (elaboração do `README.md`, roteiro e gravação do vídeo).
  * **Tempo Total:** ~7 horas distribuídas ao longo dos dias de desafio.
* **Travamento / Dificuldade:**
  * *"Passei cerca de 40 minutos investigando o comportamento de sobreposição e paginação dos carrosséis nas resoluções entre 768px e 1024px, até ajustar a configuração correta de `slidesPerView` e `spaceBetween` no Swiper."*
* **Encerramento:**
  * *"O repositório completo com a história de commits está disponível no GitHub, com o documento `DIAGNOSTICO.md` e o `README.md`. Agradeço a oportunidade e fico à disposição para a próxima etapa. Muito obrigado!"*
