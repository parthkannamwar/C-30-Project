const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var block1,i=600,poly

function setup()
{
    createCanvas(1300, 600)
	engine = Engine.create();
	world = engine.world;
    
    ground=new Ground(width/2,height-50,width*2,20)

    stand1=new Ground(700,400,300,15);

    stand2=new Ground(1100,300,150,15)

    poly=new Polygon(250,250,25);

    sling=new Sling(poly.body,{x:250,y:250})
    

//stage 1
//layer 1
    block1=new Block(i,380,30,40,PI)
    block2=new Block(i+40,380,30,40,PI)
    block3=new Block(i+80,380,30,40,PI)
    block4=new Block(i+120,380,30,40,PI)
    block5=new Block(i+160,380,30,40,PI)
    block6=new Block(i+200,380,30,40,PI)

//layer 2
    block7=new Block(i+25,300,30,40,PI)
    block8=new Block(i+65,300,30,40,PI)
    block9=new Block(i+105,300,30,40,PI)
    block10=new Block(i+145,300,30,40,PI)
    block11=new Block(i+185,300,30,40,PI)

//layer 3
    block12=new Block(i+40,240,30,40,PI)
    block13=new Block(i+80,240,30,40,PI)
    block14=new Block(i+120,240,30,40,PI)
    block15=new Block(i+160,240,30,40,PI)

//layer 4
    block16=new Block(i+60,180,30,40,PI)
    block17=new Block(i+100,180,30,40,PI)
    block18=new Block(i+140,180,30,40,PI)

//layer 5
    block19=new Block(i+80,120,30,40,PI)
    block20=new Block(i+120,120,30,40,PI)

//layer 6
    block21=new Block(i+100,70,30,40,PI)

//stage 2

//layer 1
    block22=new Block(i+450,250,40,40,PI)
    block23=new Block(i+500,250,40,40,PI)
    block24=new Block(i+550,250,40,40,PI)

//layer 2
    block25=new Block(i+475,200,40,40,PI)
    block26=new Block(i+525,200,40,40,PI)

//layer 3
    block27=new Block(i+500,50,40,40,PI)

    Engine.run(engine);
}

function draw()
{
    background(0)

    if(keyDown("space"))
    {
        Body.setPosition(poly.body,{x:250,y:250})
        sling.attach(poly.body)
    }


    
    ground.display();

    stand1.display();
    stand2.display();

   

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();

    block21.display();

    block22.display();
    block23.display();
    block24.display();
  
    block25.display();
    block26.display();

    block27.display(); 
    
    poly.display();


}

function mouseDragged()
{
    Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    sling.fly();
}