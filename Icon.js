class Icon{
    constructor(flower, circle, shaded){
        this.flower = flower;
        this.circle = circle,
        this.shaded = shaded;
    }

    isShaded(){
        return this.shaded;
    }

    isFlower(){
        return this.flower;
    }

    isCircle(){
        return this.circle
    }

    print(){
        return "Flower: "+ this.isFlower() + 
        " Circle: "+ this.isCircle() +
        " Shaded: "+ this.isShaded();
    }
}
