# Desafio Técnico Front-End — Tenurima™ (XMX CORP)

Repositório desenvolvido como entrega oficial do **Desafio Técnico para Desenvolvedor Front-End Júnior 2 da XMX CORP**.

O projeto compreende a auditoria técnica e diagnóstico de erros da página legada (Etapa 1), a implementação completa e fiel da landing page da **Tenurima™ Blood Pressure Support** ([officialtenurima.com](https://www.officialtenurima.com/)) sem frameworks (Etapa 2), e a documentação das decisões arquiteturais e roteiro para apresentação (Etapa 3).

**Repositório Oficial:** [devhenriqui/desafio-xmx-frontend-junior](https://github.com/devhenriqui/desafio-xmx-frontend-junior)

---

## 📁 Estrutura do Repositório

```text
├── index.html               # Landing page principal semântica e acessível
├── contact.html             # Página de suporte e contato
├── terms.html               # Termos de uso e condições
├── privacy.html             # Política de privacidade
├── disclaimer.html          # Isenção e avisos de saúde (FDA)
├── reference.html           # Referências científicas dos ingredientes
├── refund.html              # Política de devolução e garantia de 60 dias
├── shipping.html            # Política e prazos de entrega
├── css/
│   ├── style.css            # Design tokens, tipografia Montserrat, Grid, Flexbox e breakpoints
│   └── swiper-bundle.min.css# Estilos do componente de carrossel
├── js/
│   ├── main.js              # JavaScript Vanilla (Acordeão acessível com ARIA, Swiper e teclado)
│   └── swiper-bundle.min.js # Biblioteca Swiper para transição suave de depoimentos
├── images/                  # 49 ativos otimizados (PNG, SVG, Favicon)
├── .gitignore               # Configuração de arquivos ignorados
├── DIAGNOSTICO.md           # Relatório detalhado dos 7 erros principais + Bônus (Etapa 1)
├── ROTEIRO_GRAVACAO.md      # Roteiro narrativo para gravação do vídeo de 5 a 12 min (Etapa 3)
└── README.md                # Documentação técnica do projeto
```

---

## 🚀 Como Rodar o Projeto Localmente

O projeto foi construído **100% com tecnologias nativas da web (HTML5 semântico, CSS3 moderno e Vanilla JavaScript)**, dispensando etapas de compilação pesadas (`npm install`).

### Opção 1: Servidor Local via Python 3 (Recomendado)
Execute no terminal a partir da raiz do projeto:
```bash
python -m http.server 8080
```
Em seguida, abra o navegador em:
👉 **`http://localhost:8080`**

### Opção 2: Abrir diretamente no navegador
Basta dar um duplo clique ou abrir o arquivo `index.html` em qualquer navegador web moderno.

---

## 🌐 Publicação Online (Deploy)

O projeto é estático e pode ser publicado diretamente em:
* **GitHub Pages:** Ative em `Settings > Pages > Branch master / root`.
* **Vercel / Netlify:** Conecte o repositório no GitHub para deploy contínuo imediato.

---

## 🎨 Decisões Técnicas e Casos Omissos

1. **Acessibilidade no Acordeão de FAQ (WAI-ARIA):**
   * Os cabeçalhos do acordeão receberam `role="button"`, `tabindex="0"`, `aria-expanded` dinâmico e suporte aos eventos de teclado `Enter` e barra de `Espaço`.
   * Os corpos das respostas receberam `role="region"` e `aria-labelledby`, garantindo navegação inclusiva para leitores de tela.

2. **Carrossel de Depoimentos Autônomo e Touch-Friendly:**
   * Utilização do Swiper Vanilla com paginação clicável, navegação anterior/próximo e autoplay suave, com suporte a gestos touch em dispositivos móveis.

3. **Responsividade Fluida (360px até 1920px):**
   * Estruturação dos cards de kits, grid de benefícios e ingredientes com flexwrap e media queries fluidas para eliminar qualquer risco de rolagem horizontal indesejada em telas pequenas (360px/414px) ou deformação em monitores ultrawide (1920px).

4. **Preservação e Propagação de Checkout:**
   * Os links de compra direcionam para as opções oficiais de checkout com suporte transparente a parâmetros de afiliados e campanhas de tráfego.

---

## ⏳ O que faria diferente com mais tempo?

1. **Testes Automatizados E2E:** Suite de testes com Playwright para validar a alternância de todos os itens do FAQ e responsividade nos breakpoints 360, 768 e 1440px.
2. **Otimização de Imagens para AVIF/WebP:** Conversão automatizada de imagens PNG pesadas para formatos modernos de última geração, reduzindo o tempo de carregamento da primeira renderização (LCP).
3. **Internacionalização (i18n):** Estrutura desacoplada de dados para fácil tradução e troca dinâmica de idioma.

---

## 📋 Resumo das Entregas

* **Etapa 1 — Diagnóstico:** [DIAGNOSTICO.md](DIAGNOSTICO.md)
* **Etapa 2 — Implementação:** `index.html`, `css/style.css`, `js/main.js`, `images/`
* **Etapa 3 — Vídeo Explicativo:** [ROTEIRO_GRAVACAO.md](ROTEIRO_GRAVACAO.md)
