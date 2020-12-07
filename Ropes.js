class SlingShot{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    var options = {
        stiffness : 0.05,
    lenght: 0.3,
    bodyA:body1,
    bodyB:body2,
    pointB:{y:this.offsetY = offsetY,x:this.offsetX = offsetX}
    }
    this.s = Constraint.create(options);
    World.add(world,this.s);
    }
    display(){
        var pointA = this.s.bodyA.position
        var pointB = this.s.bodyB.position
        strokeWeight (4);
        stroke('lightblue');
        
    }
    }