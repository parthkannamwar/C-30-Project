class Block
{
    constructor(x,y,width,height,angle)
    {
        var boptions=
        {
            isStatic:false,
            restitution:0.2,
            friction:1.0,
            density:1.0
        }

        this.visibility=225
        this.body=Bodies.rectangle(x,y,width,height,boptions)
        this.width=width;
        this.height=height
        this.angle=angle


        Matter.Body.setAngle(this.body,angle)
  

    World.add(engine.world,this.body);
    }

    display()
    {
        if(this.body.position.y<510)
       {var rand=Math.round(random(1,5))
        switch(rand)
        {
            case 1: fill("yellow")
                    break;
            case 2: fill("cyan")
                    break;
            case 3: fill("lime")
                    break;
            case 4: fill("pink")
                    break;
            case 5: fill("orange")
                    break;
        }
        
        var angle=this.body.angle;
        var position=this.body.position;
        angleMode(RADIANS)
        push();
        translate(position.x,position.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        
        else{
        push();
        
        World.remove(world, this.body);
        this.visibility=this.visibility-5;
        
        fill(this.visibility,this.visibility,0)
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
        }
    }
}