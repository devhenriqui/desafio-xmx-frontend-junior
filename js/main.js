/**
 * ==============================================================================
 * TENURIMA™ BLOOD PRESSURE SUPPORT - JAVASCRIPT PRINCIPAL (VANILLA JS)
 * Desafio Técnico Front-End Júnior 2 — XMX CORP
 * 
 * Funcionalidades Implementadas:
 * 1. Carrossel Touch de Depoimentos (Swiper Vanilla - Biblioteca Pontual)
 * 2. Acordeão de FAQ 100% Acessível (W3C WAI-ARIA e Navegação por Teclado)
 * 3. Propagação Defensiva de Parâmetros de Campanha (UTMs / Afiliados)
 * 4. Rolagem Suave (Smooth Scroll) para Âncoras Internas
 * ==============================================================================
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. INICIALIZAÇÃO DO CARROSSEL DE DEPOIMENTOS (SWIPER)
     Justificativa técnica para o vídeo (Etapa 3):
     - O Swiper foi adotado como biblioteca pontual focada em aceleração gráfica
       e suporte nativo a gestos de arrasto touch em smartphones/tablets.
     - A inicialização é protegida defensivamente para não disparar erros caso
       o elemento não exista na página (ex: em páginas institucionais).
     ========================================================================== */
  const swiperElement = document.querySelector(".testimonials-swiper");

  if (swiperElement && typeof Swiper !== "undefined") {
    new Swiper(".testimonials-swiper", {
      // Configurações de exibição de slides
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      loop: false,
      rewind: true, // Retorna suavemente ao primeiro slide ao chegar ao fim
      roundLengths: true, // Evita textos borrados em telas com DPI fracionado

      // Autoplay temporizado com pausa ao passar o mouse (UX amigável)
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      // Paginação por marcadores circulares (bullets) clicáveis
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Setas de navegação anterior/próximo com acessibilidade
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // Breakpoints responsivos para adaptação automática de colunas
      breakpoints: {
        // A partir de 768px (Tablets e Desktops), exibe 2 depoimentos lado a lado
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
  }

  /* ==========================================================================
     2. ACORDEÃO DE PERGUNTAS FREQUENTES (FAQ) COM ACESSIBILIDADE WAI-ARIA
     Critérios de Engenharia Atendidos:
     - W3C WAI-ARIA Accordion Pattern (role="button", aria-expanded, aria-controls).
     - Navegação completa por teclado (Tab para focar, Enter ou Espaço para alternar).
     - Comportamento de acordeão exclusivo (ao abrir uma dúvida, fecha as outras).
     - Transição suave de altura via CSS (sem reflows pesados em JavaScript).
     ========================================================================== */
  const accordionHeaders = document.querySelectorAll(".accordion .item .header");

  /**
   * Atualiza as classes visuais e os atributos de acessibilidade do item
   * @param {HTMLElement} item - Elemento contêiner do item (.item)
   * @param {boolean} isOpen - Estado desejado (true = aberto, false = fechado)
   */
  const setAccordionItemState = (item, isOpen) => {
    const header = item.querySelector(".header");
    const body = item.querySelector(".body");

    if (!header || !body) return;

    // Alterna a classe visual de ativação
    item.classList.toggle("active", isOpen);

    // Comunica dinamicamente para leitores de tela o estado de expansão
    header.setAttribute("aria-expanded", String(isOpen));
    body.setAttribute("aria-hidden", String(!isOpen));
  };

  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach((header, index) => {
      const item = header.closest(".item");
      const body = item?.querySelector(".body");

      if (!item || !body) return;

      // Cria identificadores únicos para associar o cabeçalho ao corpo da resposta
      const headerId = `faq-header-${index + 1}`;
      const panelId = `faq-panel-${index + 1}`;

      // Configuração de atributos semânticos para leitores de tela (NVDA, VoiceOver)
      header.id = headerId;
      header.setAttribute("role", "button");
      header.setAttribute("tabindex", "0"); // Permite foco sequencial via tecla Tab
      header.setAttribute("aria-controls", panelId);

      body.id = panelId;
      body.setAttribute("role", "region");
      body.setAttribute("aria-labelledby", headerId);

      // Sincroniza o estado inicial baseado na presença prévia da classe .active
      setAccordionItemState(item, item.classList.contains("active"));

      /**
       * Função de alternância de estado (Toggle)
       */
      const toggleItem = () => {
        const accordion = item.closest(".accordion");
        const isCurrentlyOpen = item.classList.contains("active");

        if (accordion) {
          // Comportamento exclusivo: fecha os outros itens para manter layout limpo
          accordion.querySelectorAll(".item.active").forEach((activeItem) => {
            if (activeItem !== item) {
              setAccordionItemState(activeItem, false);
            }
          });
        }

        // Alterna o estado do item clicado
        setAccordionItemState(item, !isCurrentlyOpen);
      };

      // 1. Ouvinte para cliques com o mouse / toque em telas mobile
      header.addEventListener("click", toggleItem);

      // 2. Ouvinte para suporte à acessibilidade motora via teclado (Enter / Barra de Espaço)
      header.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault(); // Previne a rolagem padrão da barra de espaço
          toggleItem();
        }
      });
    });
  }

  /* ==========================================================================
     3. PROPAGAÇÃO DEFENSIVA DE PARÂMETROS UTM / AFILIADOS PARA CHECKOUT
     Importância no Funil de Vendas:
     - Em campanhas de tráfego pago (Facebook Ads, Google Ads, TikTok Ads),
       os parâmetros de rastreamento (utm_source, utm_campaign, afid) precisam
       ser repassados de forma transparente para o gateway (CartPanda)
       para garantir a atribuição correta das vendas e das comissões.
     - Implementado com programação defensiva para não quebrar a página caso
       a URL possua formato inesperado ou caracteres especiais.
     ========================================================================== */
  const propagateQueryParamsToCheckout = () => {
    try {
      const currentSearchParams = new URLSearchParams(window.location.search);
      // Se não houver parâmetros de query na URL, encerra a execução
      if (!currentSearchParams.toString()) return;

      // Seleciona todos os botões e links que apontam para o gateway de pagamento
      const checkoutLinks = document.querySelectorAll('a[href*="mycartpanda.com"]');

      checkoutLinks.forEach((link) => {
        const rawHref = link.getAttribute("href");
        if (!rawHref) return;

        try {
          // Utiliza a API nativa URL para mesclar parâmetros sem duplicar chaves
          const targetUrl = new URL(rawHref, window.location.origin);
          currentSearchParams.forEach((value, key) => {
            targetUrl.searchParams.set(key, value);
          });
          link.setAttribute("href", targetUrl.toString());
        } catch {
          // Fallback seguro em caso de URLs relativas ou ambientes legados
          const separator = rawHref.includes("?") ? "&" : "?";
          link.setAttribute("href", `${rawHref}${separator}${currentSearchParams.toString()}`);
        }
      });
    } catch {
      // Falha silenciosa para assegurar que nenhum erro seja disparado no console
    }
  };

  propagateQueryParamsToCheckout();

  /* ==========================================================================
     4. ROLAGEM SUAVE (SMOOTH SCROLL) PARA LINKS DE ÂNCORA INTERNA
     Melhora a experiência de navegação ao clicar em links como "#kits" ou "#faq"
     ========================================================================== */
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
})();
