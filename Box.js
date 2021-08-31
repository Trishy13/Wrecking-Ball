class Box{

    constructor(x,y){

       var op = {
           restitution : 0.5,
           friction : 1,
           density : 1

       }

       this.body = Bodies.rectangle(x,y,70,70,op);
       this.w = 70;
       this.h = 70;
       World.add(myWorld, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        stroke(0);
        strokeWeight(3);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();

    }
}