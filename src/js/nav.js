// Sélectionne l'élément à afficher
const logo = document.querySelector("#logo");
const bouton_login = document.getElementById('inscription');
const couleur_nav = document.getElementById('couleur_nav');

// Fonction qui vérifie si l'utilisateur a fait défiler 80% de la hauteur de la fenêtre
function afficherElement() {
    logo.style.transition = "opacity 0.5s ease-in-out"; // Ajout transition
    bouton_login.style.transition = "opacity 0.5s ease-in-out"; // Ajout transition
    //récuperer la hauteur de la fenêtre du navigateur
    const hauteurFenetre = window.innerHeight;
    //récuperer la hauteur actuelle du scroll
    const hauteurScroll = window.scrollY;
    //calculent la hauteur d'affichage
    const hauteurAffichage = hauteurFenetre * 0.8;

    if (hauteurScroll > hauteurAffichage) {
        // ajoute les classes
        logo.classList.add("active");
        bouton_login.classList.add("active");
        couleur_nav.classList.add("background_nav");
    } else {
        // supprime les classes
        logo.classList.remove("active");
        bouton_login.classList.remove("active");
        couleur_nav.classList.remove("background_nav"); 
    }
}

// Écoute l'événement de scroll pour appeler la fonction afficherElement()
window.addEventListener("scroll", afficherElement);
