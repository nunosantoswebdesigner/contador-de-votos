// Carregador dinâmico de dados estruturados
(function() {
    const structuredDataFiles = [
        'webapp.json',
        'research.json', 
        'parties.json',
        'statistics.json',
        'events.json',
        'dataset.json',
        'faq.json',
        'breadcrumb.json'
    ];

    async function loadStructuredData() {
        try {
            for (const file of structuredDataFiles) {
                const response = await fetch(`./structured-data/${file}`);
                if (response.ok) {
                    const data = await response.json();
                    
                    // Criar elemento script JSON-LD
                    const script = document.createElement('script');
                    script.type = 'application/ld+json';
                    script.textContent = JSON.stringify(data, null, 2);
                    
                    // Adicionar ao head
                    document.head.appendChild(script);
                    
                    console.log(`✓ Dados estruturados carregados: ${file}`);
                } else {
                    console.warn(`⚠ Falha ao carregar ${file}:`, response.status);
                }
            }
        } catch (error) {
            console.error('Erro ao carregar dados estruturados:', error);
        }
    }

    // Carregar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadStructuredData);
    } else {
        loadStructuredData();
    }
})();