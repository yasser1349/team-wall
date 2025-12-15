fetch('membres.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de chargement du fichier JSON');
    }
    return response.json();
  })
  .then(data => {
    const div = document.getElementById('noms');
    
    // Meilleure pratique : construire le HTML en une seule fois
    const html = data.map(membre => 
      `<p>${membre.prenom} ${membre.nom} - ${membre.role}</p>`
    ).join('');
    
    div.innerHTML = html;
  })
  .catch(error => {
    console.error('Erreur:', error);
    document.getElementById('noms').innerHTML = 
      '<p>Erreur de chargement des membres</p>';
  });