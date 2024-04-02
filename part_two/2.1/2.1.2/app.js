function askTvSerie(){
    let nom = window.prompt('Quel est ta série préfèré ?');
    let date = window.prompt('Quel est la date de production ?');
    let acteur = window.prompt("Quel est l'acteur principal de la serie ?");

    serie = {serieName : nom,
            production: date,
            actor : acteur.split(",")};
    return JSON.stringify(serie);
}

console.log(askTvSerie());

function createSerie(serie, date, acteur) {

    TvSerie = [{nom: serie, annéeDeProduction: date, acteurName: acteur}];

    return  JSON.stringify(TvSerie);
}

console.log(JSON.parse(createSerie(serie.serieName, serie.production, serie.actor)));


function randomizeCast(serie) {
    actorListe = [];

    for (let i = 0; i < serie[0].acteurName.length; i++) {
        let randomActor = serie[0].acteurName[Math.floor(Math.random() * serie[0].acteurName.length)]
        if (!actorListe.includes(randomActor)) {
            actorListe.push(randomActor);
        }

    }

    return actorListe
    
}

console.log(randomizeCast(JSON.parse(createSerie(serie.serieName, serie.production, serie.actor))));