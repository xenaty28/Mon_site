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
