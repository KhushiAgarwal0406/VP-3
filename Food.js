class Food{
    constructor (){
        this.foodStock = 0
        this.image = loadImage("Milk.png")
        this.lastFed = 0
    }
    
    getFoodStock(){
        return this.foodStock;
    }
    
    updateFoodStock(foods){
        this.foodStock = foods;
    }
    
    deductFood(){
    
        if(this.foodStock > 0){
        this.foodStock= this.foodStock-1
        }
    }
    
    getFedTime(lastFed){
    
        this.lastFed = lastFed;
    }
    
    bedroom(){
        background(bedroom, 550, 550);
    }
    
    garden(){
        background(garden, 550, 500);
    }

    washroom(){
        background(washroom, 550, 500);
    }
    
    
    display(){
    
        var x = 80, y=100;
    
        imageMode(CENTER)
        image(this.image,720,220,100,100)
       
    
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,100,100)
                x=x+30;
            }
        }
    
    }
    
    
    
    
    
    
    
    
    
    }