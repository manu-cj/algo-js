function rand() {
    return Math.floor(Math.random()* (1, 9) + 1);
}


function multiRand(arrayLenght) {
    console.log("Création d'un tableau contenant "+ arrayLenght +" elements");
    if (arrayLenght > 0) {
        let randomArray = [];
        for (let i = 0; i < arrayLenght; i++) {
            randomArray.push(rand()); 
        }
        return randomArray;
    }else {
        console.log("Une erreur c'est produite");
    }
}

console.log(multiRand(rand()));