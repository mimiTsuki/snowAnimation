import p5 from "p5";
// @ts-ignore
import Imgs from "../assets/*.svg";
import { Particle } from "./SnowCollector";

export class Snow implements Particle {
  private p: p5;
  private velocity: p5.Vector;
  private position: p5.Vector;
  private lifespan: number;
  private image: p5.Image;

  constructor(p: p5, position: p5.Vector) {
    this.p = p;
    this.velocity = p.createVector(p.random(-1, 1), p.random(1.5, 0.5));
    this.position = position.copy();
    this.lifespan = 255;
    this.image = p.loadImage(Imgs["snow"]);
    this.image.resize(100, 100);
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
    this.p.image(this.image, 100, 100);
  };

  isDead = () => this.lifespan < 0 || !this.isInArea();

  private isInArea = () => {
    const inAreaWidth =
      this.position.x > 0 && this.position.x < this.p.windowWidth;
    const inAreaHeight = this.position.y < this.p.windowHeight;
    return inAreaWidth && inAreaHeight;
  };

}
