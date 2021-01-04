const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const lat = document.querySelector('[data-lat]').dataset.lat
const lng = document.querySelector('[data-lng]').dataset.lng


const map = L.map('mapid', options).setView([lat, lng], 13);
// criando mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// criando ícone
const icon = L.icon({
  iconUrl: './images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// criando e adicionando marcadores


L.marker([lat, lng], { icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas classes .active
  const buttons = document.querySelectorAll('.images button');
  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  //selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  // atualizar o container de imagem
  imageContainer.src = image.src;

  // adicionar a classe .active para este botão clicado
  button.classList.add('active');
}
