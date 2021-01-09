class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Image=loadImage("paper.png")
        this.x=x
        this.y=y
        this.r=radius
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)


    }
    display(){
        var paperPosition=this.body.position
        push()
        
        imageMode(CENTER)
        strokeWeight(3)
        fill(255,0,255)
        image(this.Image,paperPosition.x,paperPosition.y,50,50)
        pop()

    }

}