class Ground{
    constructor(x,y,width,height){
        var prop2={
            isStatic:true
            }
    this.body=Bodies.rectangle(x,y,width,height,prop2);
    this.width=width;
    this.height=height;
    World.add(myWorld,this.body);
    }
    display(){
    var pos=this.body.position
    
    
    fill("green");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    
    }
    }