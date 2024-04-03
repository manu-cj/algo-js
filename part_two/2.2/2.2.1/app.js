//Créez une classe nommée Circleavec les attributs xPos, yPos et radius. 
//Ajoutez une méthode nommée move(xOffset, yOffset)qui ajustera la position du cercle. 
//Ajoutez un accesseur getter nommé surfacequi renverra la surface du cercle.
//Testez sa méthode et ses accesseurs en modifiant les valeurs et en vérifiant si tout est cohérent.

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    

    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    get surface() {
        return Math.PI * (this.radius *this.radius);
    }
}
let cercle = new Circle(15, 15, 30)

console.log(cercle.surface);