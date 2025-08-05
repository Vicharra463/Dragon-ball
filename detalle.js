 document.addEventListener("DOMContentLoaded", () => {
      const url = window.location.search;
      const params = new URLSearchParams(url);
      const id = params.get('id');

      console.log(id);

      const content = document.getElementById('detalle');
      const div = document.createElement('div');
      div.innerHTML = `
        <h1>El ID es: ${id}</h1>   
      `;
      content.appendChild(div);
    });