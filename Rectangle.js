class Dustbin{
    constructor(x,y,width,height,){
        var option={
            'isStatic':true,
            'restitution':0.8,
            'density':1.0,
            'friction':2.0,
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("blue");
        var pos =this.body.position;
        rect(pos.x, pos.y, this.width, this.height);
    }
}