class Bob{
    constructor(x,y){
       var options = {
           isStatic:true,
           
           friction : 0.5,
           density : 1.2
       } 
       this.body = Bodies.circle(x,y,20,options);
       this.r = 20;
      
       World.add(world,this.body) 
    }
display(){
    var pos = this.body.position;
    fill("purple") 
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r);
}

}