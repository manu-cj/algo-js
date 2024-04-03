class rectangle {
    constructor(topLeftXPos, topLeftYPos, width, lenght) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
    } 
    collision(otherRectangleX, otherRectangleY) {
        if(this.topLeftXPos === otherRectangleX || this.topLeftYPos === otherRectangleY) {
            return 'impact';
        }else {
            return "it's fine";
        }
    }
}
let iteration = 1000;




function generateRectangle() {
    let rectangleCollection = [];
    for (let i = 0; i < 1001; i++) {
        let max = Math.floor(Math.random() * 1000);
        let xPos = Math.floor(Math.random() * max);
        let yPos = Math.floor(Math.random() * max);
        let width = Math.floor(Math.random() * max);
        let lenght = Math.floor(Math.random() * max);
        
        
        rectangleCollection.push(new rectangle(xPos, yPos, width, lenght));
        console.log(rectangleCollection);
    } 

    for (let i = 0; i < rectangleCollection.length; i++) {
        const element = rectangleCollection[i];
        for (let a = 0; a < rectangleCollection.length; a++) {
            const elementA = rectangleCollection[a];
            if (element.collision(elementA.topLeftXPos, elementA.topLeftYPos) === "impact") {
                if (i !== a) {
                    console.log('Le rectangle ' + a + ' a été touché par le rectangle ' + i);
                }
            }
        }
    }
    
}

generateRectangle();