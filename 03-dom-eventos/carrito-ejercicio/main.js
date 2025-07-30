// Referencias a los elementos del DOM
const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
const emptyCartBtn = document.getElementById('empty-cart');
const cartSummary = document.getElementById('cart-summary');

// Estado del carrito (array de productos)
let cart = [];

// Renderiza el carrito en el DOM y muestra el resumen
const renderCart = () => {
  cartList.innerHTML = '';
  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;

    // Botón para eliminar del carrito
    const btn = document.createElement('button');
    btn.textContent = 'Quitar';
    btn.dataset.index = idx;
    li.appendChild(btn);

    cartList.appendChild(li);
  });

  // Calcula y muestra el total y la cantidad de productos
  const total = cart.reduce((sum, prod) => sum + parseFloat(prod.price), 0);
  cartSummary.textContent = `Total: $${total.toFixed(2)} | Productos: ${cart.length}`;
};

// Maneja el evento de agregar productos al carrito usando delegación de eventos
productList.addEventListener('click', e => {
  if (e.target.classList.contains('add')) {
    const li = e.target.closest('li');
    const { id, name, price } = li.dataset;
    cart.push({ id, name, price });
    renderCart();
  }
});

// Maneja el evento de eliminar productos del carrito
cartList.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const index = parseInt(e.target.dataset.index);
    cart.splice(index, 1);
    renderCart();
  }
});

// Maneja el evento de vaciar el carrito
emptyCartBtn.addEventListener('click', () => {
  cart = [];
  renderCart();
});

// Render inicial del carrito
renderCart();
