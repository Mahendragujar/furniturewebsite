document.addEventListener('DOMContentLoaded', () => {
    
    const quantityControls = document.querySelectorAll('.quantity-control');
  
    quantityControls.forEach(control => {
      const minusBtn = control.querySelector('.btn-outline-secondary:first-child');
      const plusBtn = control.querySelector('.btn-outline-secondary:last-child');
      const inputField = control.querySelector('input');
  
      
      minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        if (currentValue > 1) {
          inputField.value = currentValue - 1;
        }
        updateTotalPrice();
      });
  
      
      plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        inputField.value = currentValue + 1;
        updateTotalPrice();
      });
    });
  
    
    const removeButtons = document.querySelectorAll('.product-remove');
    
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.remove();
        updateTotalPrice();
      });
    });
  
    
    function updateTotalPrice() {
      const rows = document.querySelectorAll('tbody tr');
      let total = 0;
  
      rows.forEach(row => {
        const price = parseFloat(row.querySelector('.product-price').textContent.replace('$', ''));
        const quantity = parseInt(row.querySelector('.quantity-control input').value);
        total += price * quantity;
      });
  
      
      document.querySelector('.cart-totals .subtotal').textContent = `$${total.toFixed(2)}`;
      document.querySelector('.cart-totals .total').textContent = `$${total.toFixed(2)}`;
    }
  
    
    updateTotalPrice();
  });
  