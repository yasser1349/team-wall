fetch('membres.json')
  .then(response => response.json())
  .then(data => {
    const div = document.getElementById('noms');
    data.forEach(membre => {
      div.innerHTML += `<p>${membre.prenom} ${membre.nom} - ${membre.role}</p>`;
    });
});