fetch("membres.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("noms");

    data.forEach(membre => {
      const div = document.createElement("div");
      div.className = "member";
      div.innerHTML = `
        <strong>${membre.prenom} ${membre.nom}</strong><br>
        <em>${membre.role}</em>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur de chargement JSON :", error);
  });
