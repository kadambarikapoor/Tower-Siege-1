class Block{
    constructor(x,y,width, height){
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink")
        rect(0, 0, this.width, this.height);
        pop();
    }
}