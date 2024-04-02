function factoriel(n){
    if (n>1) {
        return n * factoriel(n-1);
    }else {
        return n;
    }
}

console.log(factoriel(7));