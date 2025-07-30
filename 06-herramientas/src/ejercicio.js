// Asegurate de tener instalada la dependencia:
// npm install dayjs

import dayjs from 'dayjs';

// Usar dayjs para obtener la fecha y hora actual
const now = dayjs();

// Mostrar la fecha formateada en el DOM
document.body.innerHTML = `
  <h1>Fecha y hora actual</h1>
  <p>${now.format('YYYY-MM-DD HH:mm:ss')}</p>
`;
