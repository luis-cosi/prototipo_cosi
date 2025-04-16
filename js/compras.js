document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-input');
    const currentPrice = document.querySelector('.current-price');
    const totalPrice = document.querySelector('.total-price');
    
    // Precio numérico (eliminar el $)
    const priceValue = parseFloat(currentPrice.textContent.replace('$', ''));
    
    // Actualizar el precio total
    function updateTotal() {
        const quantity = parseInt(quantityInput.value);
        const total = (priceValue * quantity).toFixed(2);
        totalPrice.textContent = `$${total}`;
    }
    
    // Evento para botón menos
    minusBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value > parseInt(quantityInput.min)) {
            value--;
            quantityInput.value = value;
            updateTotal();
        }
    });
    
    // Evento para botón más
    plusBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value < parseInt(quantityInput.max)) {
            value++;
            quantityInput.value = value;
            updateTotal();
        }
    });
    
    // Evento para cambio manual en el input
    quantityInput.addEventListener('change', function() {
        let value = parseInt(this.value);
        const min = parseInt(this.min);
        const max = parseInt(this.max);
        
        if (value < min) this.value = min;
        if (value > max) this.value = max;
        
        updateTotal();
    });
    
    // Botón añadir al carrito
    document.querySelector('.add-to-cart').addEventListener('click', function() {
        const quantity = quantityInput.value;
        alert(`Se han añadido ${quantity} unidades al carrito. Total: ${totalPrice.textContent}`);
    });
    
    // Inicializar el total
    updateTotal();
});