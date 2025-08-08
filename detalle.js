document.addEventListener("DOMContentLoaded", async () => {
  const url = window.location.search;
  const params = new URLSearchParams(url);
  const id = params.get('id');

  const content = document.getElementById('detalle');
  const div = document.createElement('div');

  content.appendChild(div);
  div.className = 'Contenedor';
  const data = await getCharacter(id); 
  div.innerHTML = `
      <div class="contenedor" id="detalle">
      <img src="${data.image}" />
      <div class="main">
        <h1> ${data.name}</h1>
        <div class="separator"></div>
        <div class="info">
          <div class="info-item">
          <h2 class="item">Raza :</h2> <h2>${data.race}</h2>
          </div>
          <div class="separator"></div>
          <div class="info-item">
          <h2 class="item2"> Base ki: </h2> <h2>${data.ki}</h2>
          </div>
          <div class="separator"></div>
          <div class ="info-item"> 
          <h2 class="item3">Ki maximo:</h2><h2>${data.maxKi}</h2>
          </div>
          <div class="separator"></div>
          <div class="info-item">
          <h2 class="item4">afiliacion:</h2> <h2>${data.affiliation}</h2>
          </div>
          <div class="Biografia">
          <h1>Biografia</h1>
          <p>${data.description}</p>
         </div>
        </div>
      </div>
    </div>
    `;
});

async function getCharacter(id) {
  const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  const json = await res.json();
  return json; 
}



