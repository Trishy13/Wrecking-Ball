class Ball{

    constructor(x,y){

        var op = {
            restitution : 0.5,
            friction : 1,
            density : 10
 
        }
 
        this.body = Bodies.rectangle(x,y,55,55,op);
        this.w = 55;
        this.h = 55;
        World.add(myWorld, this.body);
 
     }
 
     display(){
 
         var pos = this.body.position;
         var angle = this.body.angle;
         
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         fill("red");
         stroke(0);
         strokeWeight(3);
         ellipseMode(RADIUS);
         ellipse(0,0,this.w,this.h);
         pop();
 
     }
 }
