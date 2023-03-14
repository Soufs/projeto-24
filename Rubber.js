class Rubber {
  constructor(x, y, r) {
    //adicione as opções para configurar a Borracha
    var options={
      restitution:0.3,
      friction:5,
      density:1
    }

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options);
    World.add(world, this.body);
  }
  display() {
    var rubberpos = this.body.position;
    push();
    translate(rubberpos.x, rubberpos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("darkblue");

    //Descomente o bloco de código para deixar a borracha em formato circular
    ellipse(0, 0, this.r, this.r);

    pop();
  }
}
