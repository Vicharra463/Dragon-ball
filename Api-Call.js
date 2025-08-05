let personajes = [];

async function getCharacters() {
  const data = await fetch('https://dragonball-api.com/api/characters?limit=58');
  const response = await data.json();
  return response.items; 
}

async function renderCharacters() {
  personajes = await getCharacters();
  
  const div = document.getElementById('container');
  
  personajes.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.addEventListener('click', () => {
      window.location.href = `detalle.html?id=${encodeURIComponent(p.id)}`;
    });
    
    card.innerHTML = `
      <div class="content">
        <div class="tittle" id="tittle">
          <h2>${p.name}</h2>
        </div>
        <img src="${p.image}">
        <div class="description">
          <h2>Raza</h2>
          <p>${p.race}</p>
          <h2>Ki Base</h2>
          <p>${p.ki}</p>
          <h2>Ki Máximo</h2>
          <p>${p.maxKi}</p>
          <h2>Afiliación</h2>
          <p>${p.affiliation}</p>
          <br>
        </div>
      </div> 
    `;
    div.appendChild(card);
  });
}

renderCharacters();


document.addEventListener("keyup", e => {
  if (e.target.matches('#buscador')) {
    const search = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      const title = card.querySelector('.tittle')?.textContent.toLowerCase() || '';
      title.includes(search)
        ? card.classList.remove('filtro')
        : card.classList.add('filtro');
    });

  
    const visibles = Array.from(cards).filter(card => !card.classList.contains('filtro'));

    const mensaje = document.getElementById('mensaje');
    if (visibles.length === 0) {
      mensaje.style.display = 'block';
    } else {
      mensaje.style.display = 'none';
    }
  }
});

