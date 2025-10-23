# 📊 Configuração do Google Analytics

## ⚠️ **IMPORTANTE: Substitua o ID de Medição**

Para ativar o Google Analytics no seu site, siga estes passos:

### 1. **Criar Conta no Google Analytics**
1. Acesse: https://analytics.google.com/
2. Clique em "Começar a medir"
3. Configure sua conta e propriedade
4. Adicione um fluxo de dados da web
5. Insira o URL do seu site

### 2. **Obter o ID de Medição**
Após criar a propriedade, você receberá um **ID de Medição** no formato:
```
G-XXXXXXXXXX
```

### 3. **Substituir no Código**
No arquivo `index.html`, substitua **AMBAS** as ocorrências de `G-XXXXXXXXXX` pelo seu ID real:

```html
<!-- ANTES -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- DEPOIS (exemplo com ID real) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF456"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ABC123DEF456');
</script>
```

### 4. **Verificar Funcionamento**
1. Publique o site com as alterações
2. Acesse o site no navegador
3. No Google Analytics, vá em "Relatórios" > "Tempo real"
4. Você deve ver sua visita aparecendo

### 5. **Dados que Serão Coletados**

#### **📈 Automático:**
- **Visualizações de página**
- **Sessões de usuários**
- **Duração da sessão**
- **Taxa de rejeição**
- **Origem do tráfego**
- **Dispositivos utilizados**
- **Localização geográfica**
- **Navegadores utilizados**

#### **🎯 Específico do Seu Site:**
- **Interações com gráfico**
- **Alternância de idioma**
- **Alternância de tema**
- **Clicks nos links das eleições**
- **Downloads de dados**

### 6. **Eventos Personalizados (Opcional)**

Se quiser rastrear ações específicas, pode adicionar eventos customizados:

```javascript
// Exemplo: Rastrear alternância de tema
gtag('event', 'theme_toggle', {
    'event_category': 'UI',
    'event_label': isDark ? 'dark' : 'light'
});

// Exemplo: Rastrear alternância de idioma
gtag('event', 'language_change', {
    'event_category': 'UI',
    'event_label': currentLanguage
});
```

### 7. **GDPR e Privacidade**

#### **Aviso Importante:**
- ✅ Google Analytics está configurado
- ⚠️ **Considere adicionar:** Aviso de cookies/GDPR
- ⚠️ **Considere configurar:** Anonimização de IP (opcional)

#### **Para Anonimizar IP (opcional):**
```javascript
gtag('config', 'G-SEU-ID-AQUI', {
    'anonymize_ip': true
});
```

### 8. **Relatórios Principais**

#### **📊 Dados para Monitorar:**
- **Público-alvo:** Demografias, interesses
- **Aquisição:** Como chegam ao site
- **Comportamento:** Páginas mais visitadas
- **Conversões:** Objetivos personalizados

### 9. **Teste de Funcionamento**

#### **Verificação Rápida:**
1. Abra o site
2. Pressione F12 (DevTools)
3. Vá na aba "Network"
4. Recarregue a página
5. Procure por requisições para "google-analytics.com" ou "googletagmanager.com"

### 10. **Links Úteis**
- **Google Analytics:** https://analytics.google.com/
- **Documentação:** https://developers.google.com/analytics/devguides/collection/gtagjs
- **Centro de Ajuda:** https://support.google.com/analytics

---

## 🚀 **Próximos Passos:**

1. ✅ **Código adicionado** ao index.html
2. 🔄 **Substitua G-XXXXXXXXXX** pelo seu ID real
3. 📤 **Publique** o site
4. 📊 **Verifique** no Google Analytics

---

**Criado por:** Nuno Santos  
**Data:** 23 de Outubro de 2025  
**Versão:** Google Analytics 4 (GA4)