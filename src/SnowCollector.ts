import p5 from "p5";
import { Circle } from "./Circle";

export type Particle = {
  run: () => void
  isDead: () => boolean
}

export class SnowCollector {
  private particles: Particle[];
  private p: p5;
  private maxParticle: number;

  constructor(p: p5, maxParticle: number) {
    this.p = p;
    this.particles = new Array<Particle>();
    this.maxParticle = maxParticle;
  }

  addParticle = () => {
    const vx = this.p.random(0, this.p.windowWidth);
    const position = this.p.createVector(vx, -10);
    this.p.random(0, 1000)
    this.particles.push(new Circle(this.p, position));
  };

  run = () => {
    if (this.particles.length > this.maxParticle) {
      this.particles.shift()
    }
    this.addParticle();
    this.particles = this.particles.filter((particle) => !particle.isDead());
    this.particles.forEach((particle) => particle.run());
  };
}
