function suma(a, b) {
  return a + b;
}

function totalCarrito(carrito) {
  return carrito.reduce((acc, prod) => acc + prod.precio, 0);
}

// Pruebas de suma
console.assert(suma(2, 2) === 4, '2 + 2 debe ser 4');
console.assert(suma(-1, 1) === 0, '-1 + 1 debe ser 0');
console.assert(suma(0, 0) === 0, '0 + 0 debe ser 0');
console.assert(suma(1.5, 2.5) === 4, '1.5 + 2.5 debe ser 4');

// Pruebas de totalCarrito
console.assert(totalCarrito([{precio: 10}, {precio: 5}]) === 15, 'Total debe ser 15');
console.assert(totalCarrito([]) === 0, 'Total de carrito vacío debe ser 0');
console.assert(totalCarrito([{precio: 100}]) === 100, 'Un solo producto debe dar 100');
console.assert(totalCarrito([{precio: 3}, {precio: 7}, {precio: 0}]) === 10, 'Debe sumar 10');
