class paperBall{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("crumpled paper.jpg");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius);
    }
}