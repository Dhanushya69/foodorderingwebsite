// cartPage.js

document.addEventListener('DOMContentLoaded', () => {
    // Listen for the 'updateCart' event and update the cart page content
    document.addEventListener('updateCart', (event) => {
        const { cartItems, total } = event.detail;
        updateCartPage(cartItems, total);
    });
  });
  
  function updateCartPage(cartItems, total) {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
  
    // Clear existing items
    cartList.innerHTML = '';
  
    // Display new items
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.foodName} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartList.appendChild(li);
    });
  
    // Update total
    totalSpan.textContent = total.toFixed(2);
  }
  