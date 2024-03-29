let numberChoice = parseInt(window.prompt('choisissez un nombre entre 1 et 7'));

switch (numberChoice) {
    case 1:
      console.log('Lundi');
      break;
    case 2:
        console.log('Mardi');
        break;
    case 3:
      console.log('Mercredi');
      break;
    case 4:
        console.log('Jeudi');
        break;
    case 5:
        console.log('Vendredi');
        break;
    case 6:
        console.log('Samedi');
        break;
    case 7:
        console.log('Dimanche');
        break;
    default:
      console.log("Ce  nombre ne correspond à aucun jour de la semaine");
  }