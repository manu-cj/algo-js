let age = window.prompt();

if (isNaN(age)) {
    console.log("Ce n'est pas un nombre !");
}
if (age === "") {
    console.log("Vous n'avez rien écris");
}

else {
    if (age >= 18) {
        console.log('vous êtes majeur');
    }else {
        console.log('Vous n\'êtes pas majeur');
    }
}



