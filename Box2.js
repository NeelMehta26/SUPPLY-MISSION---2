class Box2{
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        rectMode(CENTER);
        fill ('brown');
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}