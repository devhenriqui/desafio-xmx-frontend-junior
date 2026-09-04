# Tenurima™ Blood Pressure Support — Desafio Técnico Front-End Júnior 2

Implementação profissional, de alta conversão e alta fidelidade da landing page **Tenurima™ Blood Pressure Support**, desenvolvida a partir das especificações do Figma oficial para o Desafio Técnico Front-End Júnior da XMX Corp.

---

## 🎯 Objetivo & Filosofia de Desenvolvimento

* **O Figma é a Fonte de Verdade**: Todo o layout, textos, paleta de cores, preços, selos e ativos foram extraídos e implementados com fidelidade milimétrica ao design original do Figma.
* **Pixel-Perfect & Mobile-First**: Experiência visual calibrada para **1920px (Desktop)**, **768px (Tablet)** e **375px (Mobile — Frame oficial do Figma)**.
* **Arquitetura Leve e Acessível**: Construído com HTML5 semântico, Tailwind CSS customizado com Design Tokens e Vanilla JavaScript ES6 (sem dependências pesadas de frameworks).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico**: Tags estruturais (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) com conformidade W3C WAI-ARIA (`aria-expanded`, `role="region"`).
* **CSS3 Moderno / Tailwind CSS**:
  * Paleta temática Wine/Burgundy (`#2a0308`, `#4a0710`, `#130103`), Vermelho Coral (`#ef4444`, `#dc2626`), Verde de Ação (`#22c55e`) e Amarelo CTA (`#facc15`).
  * Efeitos visuais avançados: Recorte angular inferior com `clip-path`, padrões em pontos (`bg-dot-pattern`), anéis de pulsação concêntricos com efeito radar e fita infinita acelerada por GPU.
* **Vanilla JavaScript ES6**:
  * **Carrossel de Depoimentos**: Navegação por botões (anterior/próximo), suporte a gestos de arrasto por toque em mobile (`touchstart`/`touchend`) e responsividade automática.
  * **Acordeão de FAQ**: Animação fluida de abertura/fechamento, rotação de 180° no chevron e gerenciamento de estado acessível.
  * **Navegação Móvel**: Drawer lateral translúcido com animação `slide-in`, backdrop overlay escuro e suporte à tecla `Escape`.
  * **Header Fixo Inteligente**: Detecção de rolagem com efeito de vidro fosco (`backdrop-blur-md`).

---

## 📂 Estrutura do Repositório

```
desafio-xmx-frontend-junior/
├── index.html                 # Página principal com todas as 11 seções
├── css/
│   ├── styles.css             # Design tokens, keyframes e custom styles
│   ├── style.css              # Estilos base
│   └── contact.css            # Estilos da página de suporte
├── js/
│   └── main.js                # Interações do carrossel, menu e acordeão
├── assets/
│   └── images/                # 19 imagens originais extraídas e limpas do Figma
│       ├── hero_bottles.png
│       ├── about_artwork.png
│       ├── bottle_center.png
│       ├── ingredient_*.png   # 6 ingredientes bioativos
│       ├── testimonial_*.png  # 4 depoimentos reais de clientes
│       ├── pricing_*.png      # 3 pacotes de compra de frascos
│       ├── seal_free_shipping.png
│       ├── guarantee_60_days.png
│       └── supplement_facts.png
├── contact.html               # Página de suporte e contato
├── privacy.html               # Política de privacidade
├── terms.html                 # Termos e condições
├── disclaimer.html            # Aviso legal de saúde
├── shipping.html              # Política de frete e envio
├── refund.html                # Política de reembolso e devolução
└── reference.html             # Referências científicas
```

---

## 🚀 Como Executar Localmente

Como o projeto é construído em padrões web nativos (HTML/CSS/JS), ele roda imediatamente em qualquer ambiente sem necessidade de `npm install`:

### Opção 1: Servidor Python
```powershell
python -m http.server 8080
```
Acesse no navegador: `http://localhost:8080`

### Opção 2: Abrir diretamente no navegador
Basta dar dois cliques no arquivo `index.html` ou abri-lo pelo seu navegador favorito.

---

## 📋 Checklist de Entrega

* [x] **Header & Hero**: Logo, classificação 4.9 estrelas, copy de conversão, CTA em pílula verde, mockup dos frascos e recorte angular.
* [x] **Sobre**: Arte anatômica com composição fotográfica e texto explicativo.
* [x] **Ingredientes**: Grade de 6 cartões com ícones circulares e descrição de benefícios.
* [x] **Por Que Escolher**: Frasco centralizado no pedestal 3D com anéis pulsantes e 6 pílulas de benefícios.
* [x] **Fita Contínua**: Marquee infinito com claims de qualidade (*Gluten-Free*, *Non-GMO*, etc.).
* [x] **Depoimentos**: Carrossel navegável com fotos reais, avaliações de 5 estrelas e selos de compra verificada.
* [x] **Frete Grátis**: Banner chamativo para pedidos de 6 frascos.
* [x] **Tabela de Preços**: 3 pacotes (2, 6 e 3 frascos) com destaque no plano mais vendido, cálculo de economia e botões de compra.
* [x] **Garantia de 60 Dias**: Card com selo e promessa de satisfação 100%.
* [x] **FAQ & Fatos Suplementares**: Acordeão interativo com as 5 principais dúvidas e imagem oficial do rótulo técnico.
* [x] **Rodapé**: Disclaimers regulatórios da FDA, links de navegação e copyright oficial.

---
**Desenvolvido por Dev.henrique**
