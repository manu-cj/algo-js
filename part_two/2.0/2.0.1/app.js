function calcSurface(longueur, largeur) {
    if (longueur === largeur) {
        alert('la longueur ne peut pas être de égal à la largeur ! Ce n\'est pas un carré');
    }
    else if(isNaN(longueur) || isNaN(largeur)) {
        alert("Veuillez rentrer au moin deux chiffres");
    }
    else {
        let surface = longueur * largeur;
        alert("La surface de votre rectangle est de " , surface, "m2");
    }
}

alert('Nous allons créer un rectangle');
let defineLongueur = parseInt(window.prompt('Entrez la longueur du réctangle'));
let defineLargeur = parseInt(window.prompt('Entrez la largeur du réctangle'));
calcSurface(defineLongueur, defineLargeur);
