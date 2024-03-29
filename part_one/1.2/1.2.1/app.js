let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

function concatArray(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
    }
    console.log(sum);
}

concatArray(array1);
concatArray(array2);