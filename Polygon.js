class Polygon
{
    constructor(x,y,radius)
    {
        var boptions=
        {
            isStatic:false,
            restitution:1,
            friction:0.1,
            density:10
        }

        this.body=Bodies.circle(x,y,radius,boptions)
        this.radius=radius
        this.image=loadImage("polygon.png")
  

    World.add(engine.world,this.body);
    }

    display()
    {
        
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,65,65)

        pop();
    }
}