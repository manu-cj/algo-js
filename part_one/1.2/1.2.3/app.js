function copyAndPast(arr) {
    let newArray = ['Nouveau tableau',];
    console.log(newArray);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        newArray.push(element);
        console.log(element + " a été copier dans le nouveau tableau");
        console.log(newArray);
    }
    console.log("Résultat final tu tableau : ");
    console.log(newArray);
}

copyAndPast([1,2,3,4,5]);

function copyAndPastWithMethod(arr) {
    let newArray = ['Nouveau tableau avec methode',];
    console.log(newArray);
    let concatArray = newArray.concat(arr)
    console.log("Résultat final tu tableau : ");
    console.log(concatArray);
}

copyAndPastWithMethod(['bison', 'fourmie', 'doggo']);