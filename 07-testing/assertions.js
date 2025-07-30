function suma(a, b) {
  return a + b;
}

// Pruebas
console.assert(suma(2, 2) === 4, '2 + 2 debe ser 4');
console.assert(suma(-1, 1) === 0, '-1 + 1 debe ser 0');

// Pruebas adicionales
console.assert(suma(0, 0) === 0, '0 + 0 debe ser 0');
console.assert(suma(5, -3) === 2, '5 + (-3) debe ser 2');
console.assert(suma(-5, -5) === -10, '-5 + (-5) debe ser -10');
console.assert(suma(1.5, 2.5) === 4, '1.5 + 2.5 debe ser 4');
console.assert(suma(1000, 2000) === 3000, '1000 + 2000 debe ser 3000');
