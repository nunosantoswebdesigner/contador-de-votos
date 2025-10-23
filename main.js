// Optimize images after page load (BFCache compatible)
function optimizeImages() {
    // Add decoding="async" to all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
        }
    });
    
    // Removed preload links to avoid duplication with HTML prefetch
    // Images are already prefetched in the HTML head section
}

// Use pageshow event instead of load for BFCache compatibility
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Página foi restaurada do BFCache - recriar recursos se necessário
        console.log('Page restored from BFCache - reinitializing...');
        
        // Recriar IntersectionObserver se foi limpo
        if (!window.chartObserver) {
            window.chartObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !window.chartInstance) {
                        criarGrafico();
                        if (window.chartObserver) {
                            window.chartObserver.unobserve(entry.target);
                        }
                    }
                });
            });
            
            const chartElement = document.querySelector("#chart");
            if (chartElement) {
                window.chartObserver.observe(chartElement);
            }
        }
        
        // Recriar o gráfico se necessário
        if (!window.chartInstance && document.querySelector("#chart")) {
            setTimeout(() => {
                if (typeof criarGrafico === 'function') {
                    criarGrafico();
                }
            }, 100);
        }
    } else {
        // Carregamento normal da página
        optimizeImages();
    }
});

// Remove unused CSS classes after load (BFCache compatible)
function cleanupUnusedElements() {
    // Clean up any performance bottlenecks
    const unusedElements = document.querySelectorAll('[style*="display: none"]:not(.pt-flag):not(.moon-icon)');
    unusedElements.forEach(el => {
        if (el.parentNode && !el.id) {
            el.remove();
        }
    });
}

// Use requestIdleCallback for cleanup to not block BFCache
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        setTimeout(cleanupUnusedElements, 2000);
    });
} else {
    setTimeout(cleanupUnusedElements, 3000);
}

// BFCache optimization: Clean up persistent connections and resources
window.addEventListener('pagehide', function(event) {
    // Clean up ApexCharts instance to prevent BFCache blocking
    if (window.chartInstance) {
        try {
            window.chartInstance.destroy();
            window.chartInstance = null;
        } catch (e) {
            console.log('Chart cleanup error:', e);
        }
    }
    
    // Clean up IntersectionObserver
    if (window.chartObserver) {
        try {
            window.chartObserver.disconnect();
            window.chartObserver = null;
        } catch (e) {
            console.log('Observer cleanup error:', e);
        }
    }
    
    // Clear any remaining timers (safe approach)
    try {
        const timerId = setTimeout(() => {}, 0);
        for (let i = timerId; i >= 0; i--) {
            clearTimeout(i);
        }
    } catch (e) {
        // Ignore errors in timer cleanup
    }
});