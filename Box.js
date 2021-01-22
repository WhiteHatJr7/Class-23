class Box{
constructor(x,y,width,height){
    var prop2={
        'restitution':0.8,
        'friction':0.6,
        'density':1
        }
this.body = Bodies.rectangle(x,y,width,height,prop2);
this.width = width;
this.height = height;
World.add(myWorld,this.body);
}
display(){
var pos=this.body.position
var angle=this.body.angle
push();
translate(pos.x,pos.y);
rotate(angle);
fill(255);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}
}