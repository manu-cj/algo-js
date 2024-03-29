const Array = [1, 2, 3, 4, 5];
const Array2 = [100, 101, 102];

function moyenArrayCalc(arr){
    let moyenne = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        moyenne += element / arr.length;
    }
    console.log(moyenne);
}

moyenArrayCalc(Array);
moyenArrayCalc(Array2);