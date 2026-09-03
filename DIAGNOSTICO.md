# Relatório de Diagnóstico Técnico (Auditoria Front-End)

**Desafio Técnico:** Desenvolvedor Front-End Júnior 2  
**Empresa:** XMX CORP · Setor de Tecnologia  
**Avaliador:** Candidato a Desenvolvedor Front-End Júnior 2  
**Cenários de Teste Avaliados:** 360px (Mobile Pequeno), 768px (Tablet) e 1440px (Desktop)  
**URLs Auditadas:**
* **URL Informada no Prompt de Teste:** `https://www.officialtenurima.com/#kits` (Tenurima™ Blood Pressure Support)
* **URL Constante no Documento PDF Oficial da XMX:** `https://biogutex.com/` (Alpha Rock / Biogutex)

---

## Sumário Executivo

Durante a auditoria minuciosa da página entregue pelo fornecedor externo, foram identificados **erros críticos** de naturezas funcionais, visuais, de performance e de acessibilidade. Em operações de venda direta e funis de produtos físicos (nutracêuticos/suplementos), falhas no botão de compra, divergências de preço, quebras em telas móveis e lentidão de carregamento causam perda direta e imediata de faturamento.

Para assegurar 100% de cobertura técnica — atendendo tanto à URL informada no enunciado prático (`officialtenurima.com`) quanto à URL referenciada no PDF original (`biogutex.com`) —, este documento apresenta o diagnóstico detalhado com a **causa raiz técnica**, código de solução e classificação de gravidade.

---

# PARTE 1 — Diagnóstico da Landing Page Tenurima (`officialtenurima.com/#kits`)

### Erro 1: Inconsistência Crítica na Oferta — Promessa de '6 Frascos' com Pacote Inexistente na Seção de Kits
* **1. O que está errado (Sintoma):** No banner de frete que antecede a grade de produtos, a página exibe: `*97% Of Customers Order 6 Bottles (Our Recommended Option)*` e `Every 6 Bottle Order Gets FREE Shipping Too!`. Contudo, na seção `#kits`, o pacote de 6 frascos não existe (há apenas 1, 3 e 2 frascos). O lead busca a opção de maior desconto e não a encontra.
* **2. Onde está (Localização):** `section.shipping .area-text` vs `section#kits .container ul`.
* **3. Por que acontece (Causa Raiz):** O fornecedor substituiu ou removeu o pacote de 6 frascos, mas não atualizou a comunicação de escassez e frete grátis do banner que antecede os kits.
* **4. Como você corrigiria (Solução Proposta):** Incluir o pacote de 6 potes no `#kits` com checkout correspondente, ou adequar a redação do banner para o pacote de 3 potes (`92% Of Customers Order 3 Bottles`).
* **5. Gravidade:** **Crítico.** Quebra a coerência lógica do funil e gera desconfiança no momento de conversão.

### Erro 2: Violação Semântica W3C e Risco de Falha de Disparo (`<button>` dentro de `<a>`)
* **1. O que está errado (Sintoma):** Nos 3 cards de kits, a tag `<button class="button">` com a imagem "Add To Cart" está aninhada diretamente dentro da âncora `<a href="...">`. Em certos navegadores móveis e leitores de tela, o clique no botão não propaga a navegação para o checkout.
* **2. Onde está (Localização):** `section#kits .kit-option a .footer button.button`.
* **3. Por que acontece (Causa Raiz):** Violação direta do padrão W3C HTML5: elementos interativos não podem conter descendentes interativos (*no interactive content descendants*).
* **4. Como você corrigiria (Solução Proposta):** Substituir a tag `<button>` interna por um elemento visual (`<span class="button-visual">`) mantendo a tag `<a>` como único elemento interativo.
* **5. Gravidade:** **Crítico.** Risco direto de inoperância no principal botão de compra do funil.

### Erro 3: Carrossel de Depoimentos (Swiper) com Paginação Inexistente e Botões Desacoplados
* **1. O que está errado (Sintoma):** O script `js/main.js` define `pagination: { el: ".swiper-pagination" }`, mas os bullets nunca aparecem. As setas laterais estão soltas e flutuam sobre o texto em tablets.
* **2. Onde está (Localização):** `section.testimonials .testimonials-swiper-shell` e `js/main.js`.
* **3. Por que acontece (Causa Raiz):** A tag `<div class="swiper-pagination"></div>` foi omitida no HTML, e os botões prev/next não possuem encapsulamento relativo estável.
* **4. Como você corrigiria (Solução Proposta):** Adicionar a tag de paginação no HTML e reposicionar as setas de navegação de forma responsiva.
* **5. Gravidade:** **Médio.** Prejudica a percepção e navegabilidade da prova social.

### Erro 4: Corrupção Generalizada de Charset UTF-8 (Mojibake)
* **1. O que está errado (Sintoma):** Presença de caracteres anômalos em textos-chave: `Tenurima"`, `with your body ?" not against it`, `?oOrder Now??`, `<div class="stars">~.~.~.~.~.</div>` e `Copyright2026`.
* **2. Onde está (Localização):** Hero, About, Testimonials, FAQ e Footer no HTML.
* **3. Por que acontece (Causa Raiz):** Arquivo gravado com encoding misto (bytes UTF-8 corrompidos ao serem salvos como Windows-1252/ISO-8859-1).
* **4. Como você corrigiria (Solução Proposta):** Normalizar todos os textos com entidades HTML e encoding UTF-8 sem BOM (`™`, `—`, `“ ”`, `★★★★★`, `©`).
* **5. Gravidade:** **Médio / Alto.** Aparência amadora que remete a sites falsos ou abandonados.

### Erro 5: Semântica Visual Conflitante no Kit Básico (Ícones Vermelhos via `.orrivi`)
* **1. O que está errado (Sintoma):** O pacote de 1 frasco lista benefícios afirmativos ("FREE BONUSES", "FREE SHIPPING"), mas cada item recebe um ícone vermelho de alerta (`checkvermelho.svg`), gerando confusão se o benefício está ou não incluso.
* **2. Onde está (Localização):** `section#kits .kit-option.k1 ul li.orrivi` no CSS e HTML.
* **3. Por que acontece (Causa Raiz):** Incoerência entre o copy publicitário e o ícone de status de erro.
* **4. Como você corrigiria (Solução Proposta):** Exibir textos transparentes (`Standard Shipping Only`, `No Bonuses Included`) com ícone neutro cinza.
* **5. Gravidade:** **Médio.** Causa hesitação e atrito cognitivo na decisão de compra.

### Erro 6: Quebra de Alinhamento e Assimetria nos Cards de Kits em Tablets (768px a 900px)
* **1. O que está errado (Sintoma):** Em tablets, os cards quebram com alturas diferentes e botões fora de nível devido a regras pontuais de `grid-row: 1` e `grid-row: 2` sem ordenação para `.k1`.
* **2. Onde está (Localização):** Regras de `@media(max-width: 900px)` em `css/style.css`.
* **3. Por que acontece (Causa Raiz):** Regras responsivas assimétricas sem definição de fluxo completo no CSS Grid.
* **4. Como você corrigiria (Solução Proposta):** Utilizar `grid-template-columns: 1fr` abaixo de 992px com `order: 1, 2, 3` ordenados.
* **5. Gravidade:** **Alto.** Prejudica a navegação em iPads e tablets.

### Erro 7: Ausência Total de Acessibilidade (WAI-ARIA e Teclado) no Acordeão do FAQ
* **1. O que está errado (Sintoma):** O FAQ não recebe foco via tecla `Tab`, não responde a `Enter`/`Espaço` e não transmite estados para leitores de tela.
* **2. Onde está (Localização):** `section.faq .accordion` no HTML e JS.
* **3. Por que acontece (Causa Raiz):** Uso de divs genéricas sem atributos WAI-ARIA (`role="button"`, `aria-expanded`, `aria-controls`).
* **4. Como você corrigiria (Solução Proposta):** Implementar listeners de teclado e manipulação dinâmica de atributos ARIA no `js/main.js`.
* **5. Gravidade:** **Médio / Alto.** Descumpre os critérios WCAG 2.1 AA e exclui usuários com deficiência.

---

# PARTE 2 — Diagnóstico da Landing Page Biogutex (`biogutex.com`)

1. **Botão de Compra dos 6 Frascos Inoperante e Erro no Console (`TypeError: Cannot read properties of null (reading 'split')`):**  
   A tag `<a>` do pacote mais vendido foi escrita sem o atributo `href`. O script de UTM tenta executar `button.getAttribute("href").split("?")`, gerando exceção não tratada que trava o botão de checkout. *(Gravidade: Crítico)*.
2. **Acordeão do FAQ 100% Inativo por Código Comentado:**  
   O bloco JavaScript que escuta os cliques nos itens do FAQ (`document.querySelectorAll(".accordion .item .header").forEach(...)`) foi inteiramente comentado com `//` em produção. *(Gravidade: Crítico)*.
3. **Erro Matemático de Precificação no Pacote de 6 Frascos:**  
   O card anuncia `$49 / bottle`, mas exibe `Total = $150` com `Save $780 TODAY`. Na matemática real, 6 × $49 = **$294** ($1074 - $780 = $294). O valor digitado foi `$150`, criando divergência jurídica grave com o checkout. *(Gravidade: Crítico)*.
4. **Scroll Horizontal Forçado no Mobile (`width: 110%`):**  
   No CSS em `@media(max-width: 900px)`, a regra `.area-kits .container { width: 110%; }` estoura os limites físicos da viewport do celular, fazendo a tela "sambar". *(Gravidade: Alto)*.
5. **Imagem Desproporcional de 22.3 MB (`3.png`):**  
   O arquivo `assets/img/3.png` foi exportado com 10.860 × 9.556 pixels e peso de 22,3 MB sem otimização, destruindo a nota de LCP no mobile. *(Gravidade: Alto)*.
6. **Link Quebrado com Extensão Errada (`contact.hmtl`):**  
   No item 17 do FAQ, o link direciona para `contact.hmtl` (erro tipográfico), gerando erro 404 Not Found. *(Gravidade: Médio)*.
7. **Quebra do Carrossel por Erro de Nomenclatura (`testemonialsSwiper`):**  
   Erro tipográfico na classe do Swiper e configuração de `slidesPerView: 2, slidesPerGroup: 2` sem tratamento para número ímpar de slides. *(Gravidade: Médio)*.

---

## Tabela de Priorização de Correções

| Ordem | Erro Identificado | Gravidade | Justificativa de Impacto no Negócio |
| :---: | :--- | :---: | :--- |
| **1** | Falha em botões de checkout / Links ausentes | **Crítico** | Impossibilita a compra no pacote mais rentável |
| **2** | Inconsistência na oferta e cálculo de preços | **Crítico** | Quebra de confiança, abandono e risco de chargeback |
| **3** | FAQ travado / Ausência de WAI-ARIA | **Crítico/Alto** | Dúvidas de garantia não respondidas |
| **4** | Layout com scroll horizontal no celular | **Alto** | Prejudica mais de 70% do tráfego mobile |
| **5** | Ativo de imagem não otimizado (LCP crítico) | **Alto** | Tempo excessivo de carregamento e aumento de rejeição |
| **6** | Desalinhamento e quebra de carrosséis | **Médio** | Redução do impacto visual da prova social |
| **7** | Links quebrados e marcadores conflitantes | **Médio** | Atrito na experiência do usuário e suporte |
