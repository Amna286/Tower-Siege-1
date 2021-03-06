class Block {
    constructor(x, y) {
        var options = {
          isStatic : false,
          density : 0.0005,
          friction : 0.005,
          restitution : 0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}
