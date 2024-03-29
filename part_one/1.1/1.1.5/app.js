
let tentative = 1;


function choice(choiceNumber){
    choiceNumber = parseInt(window.prompt("Choisissez un nombre"));
    if (choiceNumber !== 42) {
        console.log("Quel dommage ! essai encore !");
        tentative++;
        choice();
    }else {
        if (tentative > 1) {
            console.log("Félicitation vous avez trouvé après " + tentative + " essais");
        }else {
            console.log("Félicitation vous avez trouvé après "+ tentative +" essai");
        }
    }
}

choice();