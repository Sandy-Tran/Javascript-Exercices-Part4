alert("Bienvenue dans ce jeu de devinette !");

var solution = Math.floor(Math.random() * 100) + 1; // Je génère un nombre aléatoire entre 1 et 100

// console.log("(La solution est " + solution + ")");

for (var i = 0; i <= 5; i++) { // je lance la boucle, où i <= au nombre d'essai voulu
    var essai = Number(prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire."));
    if (essai === solution) {
        alert("Vous avez trouvé, bravo !");
		alert("Vous avez trouvé en " + i + " essai(s)")
        break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
    } else if ( essai < solution){ // comparent la valeur "essai" à la valeur "solution"
            alert(essai + " est trop petit");
    } else {
            alert(essai + " est trop grand");
    }if (i === 5){
        alert("Vous avez perdu ! Le nombre était : " + solution);// si la solution n'est pas trouvée, la console l'affiche en donnant la solution
    }

}
