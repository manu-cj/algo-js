let min = parseInt(window.prompt('entrez un chiffre'));
let minPlus = min + 1;
let max = parseInt(window.prompt('entrez un chiffre supérieur à '+  minPlus));
let current = window.prompt('entrez un chiffre compris entre ' + min + ' et ' + max);

if (isNaN(min) || isNaN(current) || isNaN(max)) {
    console.log('Veuillez entrer des nombres');
}else {
    if (current > min && current < max) {
        console.log('Tu es un génie !!!');
    }
    else if(min > max) {
        console.log("ça t'arrive de comprendre ce que tu lis ?");
    }
        
    
}