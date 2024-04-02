function calcDistance(pointA, pointB) {
    return Math.sqrt(Math.pow((pointB[0] - pointA[0]), 2) + Math.pow((pointB[1] - pointA[1]), 2));
}

console.log(calcDistance([-2, 2], [2, -2]));



