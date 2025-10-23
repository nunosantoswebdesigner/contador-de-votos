# 🔧 Configuração para Compartilhamento Social

## ⚠️ **IMPORTANTE: Substitua o domínio**

Para que as imagens apareçam quando compartilhar o link do site, você precisa:

### 1. **Substituir `SEU_DOMINIO.com`**
No arquivo `index.html`, substitua **todas** as ocorrências de `SEU_DOMINIO.com` pelo seu domínio real.

**Exemplo:**
```html
<!-- ANTES -->
<meta property="og:image" content="https://contador-de-votos-foz.vercel.app//imagens/logo.png">

<!-- DEPOIS (substitua por seu domínio real) -->
<meta property="og:image" content="https://contador-de-votos-foz.vercel.app//imagens/logo.png">
```

### 2. **Verificar se a imagem existe**
- A imagem deve estar em: `/imagens/logo.png`
- Tamanho recomendado: 1200x630 pixels
- Formato: PNG ou JPG

### 3. **Testar o compartilhamento**

#### **Facebook Debugger:**
1. Acesse: https://developers.facebook.com/tools/debug/
2. Cole o URL do seu site
3. Clique em "Debug"
4. Se necessário, clique em "Scrape Again"

#### **Twitter Card Validator:**
1. Acesse: https://cards-dev.twitter.com/validator
2. Cole o URL do seu site
3. Clique em "Preview card"

#### **LinkedIn Post Inspector:**
1. Acesse: https://www.linkedin.com/post-inspector/
2. Cole o URL do seu site
3. Clique em "Inspect"

### 4. **Meta Tags implementadas:**

✅ **Open Graph (Facebook, WhatsApp, etc.)**
- `og:image` - URL da imagem
- `og:image:width` - Largura da imagem
- `og:image:height` - Altura da imagem
- `og:title` - Título do site
- `og:description` - Descrição do site

✅ **Twitter Cards**
- `twitter:card` - Tipo de card (large image)
- `twitter:image` - URL da imagem
- `twitter:title` - Título do site
- `twitter:description` - Descrição do site

### 5. **Dicas importantes:**

- **URLs devem ser absolutas** (começar com https://)
- **Imagem deve ser acessível** (não estar protegida por login)
- **Cache:** Redes sociais fazem cache. Use os debuggers para forçar atualização
- **Tamanho da imagem:** Mínimo 300x300, recomendado 1200x630

### 6. **Se ainda não aparecer:**

1. Verifique se o site está online e acessível
2. Teste a URL da imagem diretamente no navegador
3. Use os debuggers das redes sociais
4. Aguarde algumas horas (cache das redes sociais)

---
**Criado por:** Nuno Santos  
**Data:** 23 de Outubro de 2025