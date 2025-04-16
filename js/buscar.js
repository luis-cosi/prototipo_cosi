function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        // Verifica que los atributos existan antes de usarlos
        const productName = product.getAttribute('data-name') || '';
        const productCategory = product.getAttribute('data-category') || '';
        const productText = product.textContent || '';
        
        if (productName.toLowerCase().includes(searchTerm) || 
            productCategory.toLowerCase().includes(searchTerm) || 
            productText.toLowerCase().includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'No se encontro ningun producto';
        }
    });
}

// Permitir búsqueda al presionar Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});