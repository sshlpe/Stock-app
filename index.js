import list from '/.stock-list.json' assert { type: 'json' };


function getAllTickers() {
  const url = `http://api.marketstack.com/v1/tickers?access_key=${API_KEY}`;
  console.log(url);
  /*
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Aquí manejas los datos recibidos
      // Si hay paginación, podrías necesitar hacer solicitudes adicionales aquí
    })
    .catch(e => {
      console.log(e); // Aquí manejas cualquier error que ocurra durante la solicitud
    });
    */
}

const API_KEY = 'F4420Y2O5O6X9JV5'; // Asegúrate de reemplazar esto con tu clave de API real
const BASE_URL = 'http://api.marketstack.com/v1';
const button = document.getElementById('update');

button.onclick = () => {
	getAllTickers();
}
