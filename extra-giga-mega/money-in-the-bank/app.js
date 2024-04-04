let argent = {
    billet : [
        {500: [{valeur: 500, quantity: 1}]}, 
        {200: [{valeur: 200, quantity: 1}]},
        {100: [{valeur: 100, quantity: 1}]},
        {50: [{valeur: 50, quantity: 1}]},
        {20: [{valeur: 20, quantity: 1}]},
        {10: [{valeur: 10, quantity: 1}]},
        {5: [{valeur: 5, quantity: 1}]},
],
    pieces : [
        {2: [{valeur: 2, quantity: 1}]},
        {1: [{valeur: 1, quantity: 1}]},
        {0.50: [{valeur: 0.50, quantity: 1}]},
        {0.20: [{valeur: 0.20, quantity: 1}]},
        {0.10: [{valeur: 0.10, quantity: 1}]},
        {0.05: [{valeur: 0.05, quantity: 1}]},
        {0.02: [{valeur: 0.02, quantity: 1}]},
        {0.01: [{valeur: 0.01, quantity: 1}]},
]
}
    

function test(price, moneyHanded) {
if (isNaN(price) && isNaN(moneyHanded)) {
    console.log('Faut payer avec des chiffres');
}
if (price > moneyHanded) {
    console.log('Dehors Manant, on accepte seulement les gens qui ont de l\'argent !');
} else {
    let caisse = [];
    let rend = moneyHanded - price;
    for (let type in argent) {
        for (let i = 0; i < argent[type].length; i++) {
            for (let valeur in argent[type][i]) {
                if (argent[type][i][valeur][0].quantity > 0 && parseFloat(valeur) <= rend) {
                    while (argent[type][i][valeur][0].quantity > 0 && rend >= parseFloat(valeur)) {
                        rend -= parseFloat(valeur)
                        caisse.push(parseFloat(valeur));
                        argent[type][i][valeur][0].quantity -= 1
                    }
                }
            }
        }
    }
    if (rend > 0) {
        console.log('erreur');
    }else {
        console.log(caisse);
    }
}
}

console.log(test(5, 8));