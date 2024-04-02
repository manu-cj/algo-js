const becodeurs = [
    {nom: 'Lyne'},
    {nom: 'Dj3y'},
    {nom: 'Zara'},
    {nom: 'Manu le goat'},
    {nom: 'Adrien'},
    {nom: 'NathAmd'},
    {nom: 'Xeless le goat'},
    {nom: 'Caroline'},
    {nom: 'Arnaud'},
    {nom: 'Stacy'},
    {nom: 'Justine'},
    {nom: 'Angel'},
    {nom: 'Dylan'},
    {nom: 'Adca'},
    {nom: 'isabelle'},
    {nom: 'doblaria'},
    {nom: 'Youri'},
    {nom: 'Giovanni le goat de la finance'},
    {nom: 'Iliess le goat'},
    {nom: 'Justine L'},
    {nom: 'Denis'},
    {nom: 'Mohamed'},
    {nom: 'ludovic'},
    {nom: 'Maryam'},
    {nom: 'Julie'},
    {nom: 'Jordan'},
    {nom: 'Tasha'},
    ];

function rand(max) {
    return Math.floor(Math.random() * max) + 1;
}

function pickLearner(inputAr, n) {
    let randomBecodeurs = [];
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            randomBecodeurs.push(inputAr[rand(inputAr.length)]);
        }
        return randomBecodeurs
    }else {
        return "Une erreur s'est produite : le deuxième paramètre doit être supèrieur à 0";
    }
}

console.log(pickLearner(becodeurs, rand(becodeurs.length)));
