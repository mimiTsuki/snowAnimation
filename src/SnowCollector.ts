import p5 from 'p5';
import { Particle } from './Particle';
import createCircle from './Circle';

type SnowCollector = {
  run: () => void;
};

const createSnowCollector = (p: p5, maxParticle: number): SnowCollector => {
  let particles: Particle[] = new Array<Particle>();

  const addParticle = (): void => {
    const vx = p.random(0, p.windowWidth);
    const position = p.createVector(vx, -10);
    p.random(0, 1000);
    particles.push(createCircle(p, position));
  };

  const run = () => {
    if (particles.length > maxParticle) {
      particles.shift();
    }
    addParticle();
    particles = particles.filter((particle) => !particle.isDead());
    particles.forEach((particle) => particle.run());
  };

  return { run };
};

export default createSnowCollector;
