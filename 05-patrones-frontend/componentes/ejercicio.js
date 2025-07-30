// Componente Tarjeta: genera un elemento visual para mostrar información
export function Tarjeta({ titulo, contenido }) {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  div.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;
  return div;
}

// Componente Formulario: crea un formulario reutilizable
export function Formulario({ onSubmit }) {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" placeholder="Título" name="titulo" required />
    <input type="text" placeholder="Contenido" name="contenido" required />
    <button type="submit">Agregar</button>
  `;
  form.onsubmit = e => {
    e.preventDefault();
    const data = {
      titulo: form.titulo.value,
      contenido: form.contenido.value
    };
    onSubmit(data);
    form.reset();
  };
  return form;
}

// Montaje de componentes en la página
const app = document.getElementById('app');

// Función para mostrar tarjeta en el DOM
function mostrarTarjeta(dato) {
  const tarjeta = Tarjeta(dato);
  app.appendChild(tarjeta);
}

// Montar el formulario y pasarle la función mostrarTarjeta como callback
app.appendChild(Formulario({ onSubmit: mostrarTarjeta }));
