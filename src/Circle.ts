import p5 from "p5";
import { Particle } from "./SnowCollector";

export class Circle implements Particle {
  private p: p5;
  private velocity: p5.Vector;
  private position: p5.Vector;
  private lifespan: number;

  constructor(p: p5, position: p5.Vector) {
    this.p = p;
    this.velocity = p.createVector(p.random(-1, 1), p.random(1.5, 0.5));
    this.position = position.copy();
    this.lifespan = 255;
    this.p.stroke(200, 0);
  }

  run = () => {
    this.update();
    this.display();
  };

  private update = () => {
    this.position.add(this.velocity);
    this.lifespan -= 0.4;
  };

  private display = () => {
    this.p.fill(225, 245, 254, this.lifespan);
    this.p.ellipse(this.position.x, this.position.y, 12, 12);
  };

  isDead = () => this.lifespan < 0 || !this.isInArea();

  private isInArea = () => {
    const inAreaWidth =
      this.position.x > 0 && this.position.x < this.p.windowWidth;
    const inAreaHeight = this.position.y < this.p.windowHeight;
    return inAreaWidth && inAreaHeight;
  };
}