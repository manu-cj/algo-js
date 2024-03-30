function minAndMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    }
    console.log("La valeur minimal du tableau est " + min + " Et la valeur maximal est " + max);
}

minAndMax([3,5,2,9,45]);



