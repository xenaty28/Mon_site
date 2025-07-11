function direBonjour() {
  alert("Bonjour et bienvenue sur mon site !");
}

function envoyerFormulaire(event) {
  event.preventDefault();
  alert("Merci pour votre message !");
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function ajouterAuPanier(produit) {
  alert(`${produit} a été ajouté au panier !`);
}

document.getElementById("panierBtn").addEventListener("click", () => {
  alert("Votre panier est vide pour le moment.");
});

function ajouterAuPanier(nom, prix) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push({ nom, prix });
  localStorage.setItem("panier", JSON.stringify(panier));
  alert(`${nom} ajouté au panier.`);
}

document.getElementById("panierBtn")?.addEventListener("click", () => {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  if (panier.length === 0) {
    alert("Votre panier est vide.");
  } else {
    let total = 0;
    let contenu = "Votre panier :\n";
    panier.forEach((item, i) => {
      contenu += `• ${item.nom} - ${item.prix} €\n`;
      total += item.prix;
    });
    contenu += `\nTotal : ${total.toFixed(2)} €\n\nSouhaitez-vous passer commande ?`;
    if (confirm(contenu)) {
      window.location.href = "commande.html";
    }
  }
});

const produits = [
  { nom: "T-shirt Oversize", prix: 29.99, image: "t-shirt.jpg", categorie: "homme" },
  { nom: "Pantalon Cargo", prix: 49.99, image: "pantalon.jpg", categorie: "homme" },
  { nom: "Veste en Jean", prix: 69.99, image: "veste.jpg", categorie: "femme" },
];

function afficherProduits() {
  const container = document.getElementById("listeProduits");
  if (!container) return;
  container.innerHTML = "";
  produits.forEach(prod => {
    const div = document.createElement("div");
    div.className = `produit ${prod.categorie}`;
    div.innerHTML = `
      <a href="produit.html?nom=${encodeURIComponent(prod.nom)}&prix=${prod.prix}&image=${prod.image}">
        <img src="images/${prod.image}" alt="${prod.nom}" />
        <h2>${prod.nom}</h2>
        <p>${prod.prix} €</p>
      </a>
      <button onclick="ajouterAuPanier('${prod.nom}', ${prod.prix})">Ajouter au panier</button>
    `;
    container.appendChild(div);
  });
}

afficherProduits();

function ajouterAuPanier(nom, prix) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push({ nom, prix });
  localStorage.setItem("panier", JSON.stringify(panier));

  if (confirm(`${nom} a été ajouté au panier.\n\nSouhaitez-vous procéder au paiement maintenant ?`)) {
    window.location.href = "commande.html"; // ou vers Stripe si intégré
  } else {
    alert("Pas de souci ! Vous pouvez continuer vos achats.");
  }
}

function envoyerContact(e) {
  e.preventDefault();
  alert("Message envoyé ! Merci pour votre contact 🧘‍♂️");
}
