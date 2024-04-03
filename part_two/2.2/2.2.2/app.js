//Créez un nom de classe Rectangleavec les attributs topLeftXPos, topLeftYPos et . 
//Ajoutez une méthode nommée qui ne renvoie que si le rectangle actuel entre en collision avec 
//.widthlengthcollides(otherRectangle)trueotherRectangle

//Testez la collides(otherRectangle)méthode en utilisant plusieurs cas de test.
class rectangle {
    constructor(topLeftXPos, topLeftYPos, width, lenght) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
    } 
    collision(otherRectangle) {
        if(this.topLeftXPos === otherRectangle.topLeftXPos || this.topLeftYPos === otherRectangle.topLeftYPos) {
            return 'impact';
        }else {
            return "it's fine";
        }
    }
}

rec = new rectangle(10, 10, 100, 40);
rec2 = new rectangle(10,30, 100, 40);
console.log(rec2.collision(rec));