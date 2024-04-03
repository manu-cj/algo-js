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

actorListe = [];
function randomizeCast(serie) {

    for (let i = 0; i < serie[0].acteurName.length;) {
        if (serie[0].acteurName.length > 0) {
            let randomActor = serie[0].acteurName[Math.floor(Math.random() * serie[0].acteurName.length)]
        if (!actorListe.includes(randomActor)) {
            actorListe.push(randomActor);
            i++
        }
        }
    }

    return actorListe
    
}

console.log(randomizeCast(JSON.parse(createSerie(serie.serieName, serie.production, serie.actor))));



function newSerie() {
    let previousActorList = [];
    askTvSerie();
    randomizeCast(JSON.parse(createSerie(serie.serieName, serie.production, serie.actor)));
    if (actorListe.length > 1) {
        for (let i = 0; i < actorListe.length; i++) {
            const element = actorListe[i];
            if (!actorListe.includes(element)) {
                actorListe.push(randomActor);
                i++
            }
            
        }
    }
    
    previousActorList.push(actorListe);
    return previousActorList
}

newSerie();