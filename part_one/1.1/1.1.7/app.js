
let sum = 0;


function choiceNumber(n){
    n = parseInt(window.prompt("Choisissez un nombre"));
    for (let i = 0; i < n; i++) {
        n = parseInt(window.prompt("Choisissez encore un nombre"));
        sum += n;
    }
    console.log(sum);
}

choiceNumber();

