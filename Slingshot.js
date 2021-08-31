class Slingshot{

    constructor(bodyA,pointB){

        var abc = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 300
        }

        this.sling = Constraint.create(abc);
        this.pointB = pointB;
        World.add(myWorld, this.sling);
    }

    display(){

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;

        push();
        stroke(0);
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

    }
}