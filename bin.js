class Bin{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.Image=loadImage("dustbingreen.png")
        this.body=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
        
        this.h=height
        this.w=width


        
    }
    display(){
        push()
       
        imageMode(CENTER)
        image(this.Image,this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    }}